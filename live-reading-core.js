(function(){
 'use strict';

 const NAME_KEY='ecra-live-reading-display-name-v1';
 const SEGMENT_TYPES=new Set(['word','character','punctuation','space','break']);
 const subscribers=new Set();
 const pulseSubscribers=new Set();
 const isAdminPage=document.body.classList.contains('lr-admin-body');
 const firebaseVersion='13.0.0';
 const firebaseBase=`https://www.gstatic.com/firebasejs/${firebaseVersion}`;
 const livePath='liveReading';
 let firebase=null,auth=null,database=null,currentUser=null;
 let realtimeStops=[];
 let state=defaultState();

 function clone(value){return JSON.parse(JSON.stringify(value))}
 function now(){return Date.now()}
 function usesWholeWordInteraction(segment){
  return segment?.type==='word'&&!/[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/u.test(segment.text)
 }
 function defaultState(){
  return {
   version:1,pageEnabled:false,readerName:'',article:null,votes:{},comments:[],updatedAt:0,
   connectionStatus:'connecting',connectionError:'',authReady:false,
   user:{uid:'',email:'',isAnonymous:true}
  }
 }
 function notify(){const snapshot=clone(state);subscribers.forEach(callback=>callback(snapshot))}
 function patchState(patch){state={...state,...patch};notify()}
 function notifyPulse(pulse){pulseSubscribers.forEach(callback=>callback(clone(pulse)))}
 function cleanPackageText(input){return String(input||'').trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'')}
 function validateArticlePackage(input){
  let data=input;
  if(typeof input==='string'){
   try{data=JSON.parse(cleanPackageText(input))}catch(error){return {ok:false,error:'JSON 格式無法解析，請確認內容完整。'}}
  }
  if(!data||data.schema!=='live-reading-article-v1')return {ok:false,error:'schema 必須是 live-reading-article-v1。'};
  if(!Array.isArray(data.segments)||!data.segments.length)return {ok:false,error:'segments 必須包含至少一個片段。'};
  const segments=[];
  for(let index=0;index<data.segments.length;index++){
   const segment=data.segments[index];
   if(!segment||typeof segment.text!=='string'||!segment.text.length)return {ok:false,error:`第 ${index+1} 個片段缺少文字。`};
   if(!SEGMENT_TYPES.has(segment.type))return {ok:false,error:`第 ${index+1} 個片段的 type 不支援。`};
   if(segment.type==='break'&&!segment.text.includes('\n'))return {ok:false,error:`第 ${index+1} 個 break 片段必須包含換行。`};
   segments.push({text:segment.text,type:segment.type})
  }
  const article={schema:'live-reading-article-v1',language:String(data.language||'zh-Hant'),title:String(data.title||''),segments};
  return {ok:true,article,text:segments.map(segment=>segment.text).join(''),wordCount:segments.filter(segment=>segment.type==='word'||segment.type==='character').length}
 }

 function publicUser(user){return {uid:user?.uid||'',email:user?.email||'',isAnonymous:user?.isAnonymous!==false}}
 function errorMessage(error){
  const code=String(error?.code||'');
  if(code.includes('popup-blocked'))return '瀏覽器阻擋了登入視窗，請允許彈出式視窗後重試。';
  if(code.includes('unauthorized-domain'))return '目前網域尚未加入 Firebase Authentication 的授權網域。';
  if(code.includes('permission-denied'))return 'Firebase 權限遭拒。請確認管理員 UID 與資料庫安全規則。';
  return error?.message||'Firebase 連線失敗。'
 }
 function stopRealtime(){realtimeStops.forEach(stop=>{try{stop()}catch(error){}});realtimeStops=[]}
 function listenRealtime(){
  stopRealtime();
  if(!database||!currentUser)return;
  const {ref,onValue,onChildAdded,onChildChanged}=firebase.database;
  const listen=(target,handler)=>onValue(ref(database,target),handler,error=>patchState({connectionStatus:'error',connectionError:errorMessage(error)}));
  realtimeStops.push(listen(`${livePath}/config`,snapshot=>{
   const config=snapshot.val()||{};
   patchState({
    pageEnabled:config.pageEnabled===true,
    readerName:typeof config.readerName==='string'?config.readerName:'',
    article:config.article||null,
    updatedAt:Number(config.updatedAt)||0,
    connectionStatus:'connected',connectionError:''
   })
  }));
  realtimeStops.push(listen(`${livePath}/votes`,snapshot=>patchState({votes:snapshot.val()||{}})));
  realtimeStops.push(listen(`${livePath}/comments`,snapshot=>{
   const comments=Object.entries(snapshot.val()||{}).map(([id,value])=>({id,...value})).sort((a,b)=>(a.createdAt||0)-(b.createdAt||0));
   patchState({comments})
  }));
  const pulsesRef=ref(database,`${livePath}/pulses`);
  const receivePulse=snapshot=>{
   const pulse=snapshot.val();
   if(!pulse||now()-Number(pulse.at)>1500)return;
   notifyPulse({...pulse,clientId:snapshot.key})
  };
  realtimeStops.push(onChildAdded(pulsesRef,receivePulse));
  realtimeStops.push(onChildChanged(pulsesRef,receivePulse))
 }
 async function initializeFirebase(){
  try{
   if(!window.FIREBASE_CONFIG)throw new Error('找不到 firebase-config.js。');
   const [appModule,authModule,databaseModule]=window.__LIVE_READING_FIREBASE_MODULES__||await Promise.all([
    import(`${firebaseBase}/firebase-app.js`),import(`${firebaseBase}/firebase-auth.js`),import(`${firebaseBase}/firebase-database.js`)
   ]);
   firebase={app:appModule,auth:authModule,database:databaseModule};
   const app=appModule.initializeApp(window.FIREBASE_CONFIG);
   auth=authModule.getAuth(app);database=databaseModule.getDatabase(app);
   authModule.onAuthStateChanged(auth,async user=>{
    currentUser=user;
    patchState({authReady:true,user:publicUser(user),connectionStatus:user?'connecting':'signed-out',connectionError:''});
    if(user){listenRealtime();return}
    stopRealtime();
    if(!isAdminPage){
     try{await authModule.signInAnonymously(auth)}catch(error){patchState({connectionStatus:'error',connectionError:errorMessage(error)})}
    }
   })
  }catch(error){patchState({authReady:true,connectionStatus:'error',connectionError:errorMessage(error)})}
 }
 async function requireFirebase(){
  await ready;
  if(!firebase||!database)throw new Error(state.connectionError||'Firebase 尚未完成初始化。');
  if(!currentUser)throw new Error('尚未登入 Firebase。')
 }
 async function publishArticle(article){
  const checked=validateArticlePackage(article);if(!checked.ok)throw new Error(checked.error);
  await requireFirebase();
  const published={...checked.article,id:`article-${now()}-${Math.random().toString(36).slice(2,8)}`};
  await firebase.database.update(firebase.database.ref(database,livePath),{'config/article':published,'config/updatedAt':now(),votes:null,pulses:null});
  return published
 }
 async function setPageEnabled(enabled){await requireFirebase();return firebase.database.update(firebase.database.ref(database,`${livePath}/config`),{pageEnabled:!!enabled,updatedAt:now()})}
 async function setReaderName(name){await requireFirebase();return firebase.database.update(firebase.database.ref(database,`${livePath}/config`),{readerName:String(name||'').trim(),updatedAt:now()})}
 async function clearArticle(){await requireFirebase();return firebase.database.update(firebase.database.ref(database,livePath),{'config/article':null,'config/updatedAt':now(),votes:null,pulses:null})}
 async function clearCollection(){await requireFirebase();return firebase.database.remove(firebase.database.ref(database,`${livePath}/votes`))}
 async function removeCollectionWord(word){
  await requireFirebase();
  const article=state.article;if(!article)return;
  const updates={};article.segments.forEach((segment,index)=>{if(segment.text===String(word))updates[`${article.id}/${index}`]=null});
  if(Object.keys(updates).length)return firebase.database.update(firebase.database.ref(database,`${livePath}/votes`),updates)
 }
 async function vote(segmentIndex,charIndex){
  await requireFirebase();
  const article=state.article,segment=article?.segments?.[segmentIndex];
  if(!state.pageEnabled||!segment||!['word','character'].includes(segment.type))return false;
  const targetIndex=usesWholeWordInteraction(segment)?0:charIndex;
  if(Array.from(segment.text)[targetIndex]===undefined)return false;
  const at=now(),uid=currentUser.uid;
  await Promise.all([
   firebase.database.set(firebase.database.ref(database,`${livePath}/votes/${article.id}/${segmentIndex}/${targetIndex}/${uid}`),at),
   firebase.database.set(firebase.database.ref(database,`${livePath}/pulses/${uid}`),{articleId:article.id,segmentIndex,charIndex:targetIndex,at})
  ]);
  return true
 }
 function collection(){
  const article=state.article;if(!article)return [];
  const articleVotes=state.votes?.[article.id]||{},byWord=new Map();
  Object.entries(articleVotes).forEach(([segmentIndex,characterVotes])=>{
   const segment=article.segments[Number(segmentIndex)];
   if(!segment||!['word','character'].includes(segment.type))return;
   const wholeWord=usesWholeWordInteraction(segment);
   let entry=byWord.get(segment.text);
   if(!entry){entry={word:segment.text,type:segment.type,wholeWord,firstAt:Infinity,voters:{}};byWord.set(segment.text,entry)}
   Object.entries(characterVotes||{}).forEach(([charIndex,voters])=>{
    const voteIndex=wholeWord?'0':charIndex;
    entry.voters[voteIndex]??=new Set();
    Object.entries(voters||{}).forEach(([uid,timestamp])=>{entry.voters[voteIndex].add(uid);entry.firstAt=Math.min(entry.firstAt,Number(timestamp)||Infinity)})
   })
  });
  return Array.from(byWord.values()).map(entry=>({word:entry.word,type:entry.type,wholeWord:entry.wholeWord,firstAt:Number.isFinite(entry.firstAt)?entry.firstAt:0,counts:Object.fromEntries(Object.entries(entry.voters).map(([index,voters])=>[index,voters.size]))})).filter(entry=>Object.values(entry.counts).some(Boolean)).sort((a,b)=>a.firstAt-b.firstAt)
 }
 async function addComment(displayName,message){
  const name=String(displayName||'').trim(),text=String(message||'').trim();if(!text)return false;
  try{localStorage.setItem(NAME_KEY,name)}catch(error){}
  await requireFirebase();
  const target=firebase.database.push(firebase.database.ref(database,`${livePath}/comments`));
  await firebase.database.set(target,{displayName:name,message:text,createdAt:now(),uid:currentUser.uid});
  return true
 }
 function displayName(){try{return localStorage.getItem(NAME_KEY)||''}catch(error){return ''}}
 function subscribe(callback){subscribers.add(callback);callback(clone(state));return ()=>subscribers.delete(callback)}
 function onPulse(callback){pulseSubscribers.add(callback);return ()=>pulseSubscribers.delete(callback)}
 async function signInAdmin(){
  await ready;if(!auth)throw new Error(state.connectionError||'Firebase 尚未完成初始化。');
  return firebase.auth.signInWithPopup(auth,new firebase.auth.GoogleAuthProvider())
 }
 async function signOutAdmin(){await ready;if(auth)await firebase.auth.signOut(auth)}

 const ready=initializeFirebase();
 window.LiveReadingCore={
  mode:'firebase',ready,getState:()=>clone(state),subscribe,onPulse,participantId:()=>currentUser?.uid||'',displayName,
  validateArticlePackage,publishArticle,setPageEnabled,setReaderName,clearArticle,clearCollection,removeCollectionWord,
  vote,collection,addComment,signInAdmin,signOutAdmin,errorMessage
 };
})();
