(function(){
 'use strict';

 let stopState=null,stopPulses=null;
 const pulseBursts=new Map();

 function articleMarkup(article){
  if(!article)return '';
  return article.segments.map((segment,segmentIndex)=>{
   if(segment.type==='break')return segment.text.replace(/\n/g,'<br>');
   if(segment.type==='space')return esc(segment.text);
   if(segment.type==='punctuation')return `<span class="lr-punctuation">${esc(segment.text)}</span>`;
   return `<span class="lr-token" data-token-type="${segment.type}">${Array.from(segment.text).map((character,charIndex)=>`<button class="lr-character" type="button" data-pulse-key="${segmentIndex}-${charIndex}" onclick="liveReadingVote(${segmentIndex},${charIndex})" aria-label="Mark ${esc(character)} for pronunciation feedback">${esc(character)}</button>`).join('')}</span>`
  }).join('')
 }
 function collectionMarkup(){
  return LiveReadingCore.collection().map(entry=>{
   const word=Array.from(entry.word).map((character,index)=>{
    const count=entry.counts[String(index)]||0;
    return count?`<span class="lr-collected-hit">${esc(character)}<sup>${count}</sup></span>`:`<span>${esc(character)}</span>`
   }).join('');
   return `<div class="lr-collected-word" data-collection-word="${esc(entry.word)}">${word}</div>`
  }).join('')
 }
 function commentsMarkup(comments){
  return (comments||[]).map(comment=>`<article class="lr-comment"><b>${esc(comment.displayName||'Guest')}</b><p>${esc(comment.message)}</p></article>`).join('')
 }
 function pageContent(state){
  const head=`<section class="page-pad practice-page-head lr-page-head"><div class="eyebrow">Reading</div><h1 class="page-title">Live Reading Feedback</h1><div class="detail-title-zh">即時反饋朗讀</div>${readingTopicNav('live-reading')}</section>`;
  if(state.connectionStatus==='connecting'||!state.authReady)return `${head}<section class="section lr-closed" aria-live="polite"><span></span><h2>Connecting</h2><p>正在連接即時朗讀活動⋯⋯</p></section>`;
  if(state.connectionStatus==='error')return `${head}<section class="section lr-closed lr-connection-error" aria-live="polite"><span></span><h2>Connection unavailable</h2><p>${esc(state.connectionError||'Firebase 連線失敗，請稍後再試。')}</p></section>`;
  if(!state.pageEnabled)return `${head}<section class="section lr-closed" aria-live="polite"><span></span><h2>Session closed</h2><p>即時反饋朗讀目前尚未開啟。</p></section>`;
  const article=state.article;
  return `${head}<section class="section lr-public-shell">
   <section class="lr-panel lr-reader-panel" aria-labelledby="lrReaderTitle"><div class="lr-panel-heading"><span>01</span><div><h2 id="lrReaderTitle">Reader</h2><small>朗讀者</small></div></div><p class="lr-reader-name" aria-live="polite">${esc(state.readerName||'')}</p></section>
   <section class="lr-panel lr-article-panel" aria-labelledby="lrArticleTitle"><div class="lr-panel-heading"><span>02</span><div><h2 id="lrArticleTitle">Article</h2><small>文章內容</small></div></div>${article?.title?`<h3 class="lr-article-title">${esc(article.title)}</h3>`:''}<div class="lr-article-text" lang="${esc(article?.language||'zh-Hant')}" aria-live="polite">${articleMarkup(article)}</div></section>
   <section class="lr-panel lr-collection-panel" aria-labelledby="lrCollectionTitle"><div class="lr-panel-heading"><span>03</span><div><h2 id="lrCollectionTitle">Collected Words</h2><small>發音反饋蒐集區</small></div></div><div class="lr-collection" aria-live="polite">${collectionMarkup()}</div></section>
   <section class="lr-panel lr-suggestions-panel" aria-labelledby="lrSuggestionsTitle"><div class="lr-panel-heading"><span>04</span><div><h2 id="lrSuggestionsTitle">Suggestions</h2><small>建議與留言</small></div></div><div class="lr-comments" aria-live="polite">${commentsMarkup(state.comments)}</div><form class="lr-comment-form" onsubmit="return submitLiveReadingComment(event)"><label><span>Display name</span><input name="displayName" autocomplete="nickname" value="${esc(LiveReadingCore.displayName())}"></label><label class="lr-message-field"><span>Message</span><textarea name="message" rows="2" required></textarea></label><button type="submit">Send <small>送出</small></button></form></section>
  </section>`
 }
 function applyPulseLevel(key,level){
  const element=document.querySelector(`[data-pulse-key="${key}"]`);if(!element)return;
  element.classList.remove('lr-pulse-1','lr-pulse-2','lr-pulse-3');element.classList.add(`lr-pulse-${Math.min(3,level)}`)
 }
 function reapplyPulses(){const time=Date.now();pulseBursts.forEach((burst,key)=>{if(time-burst.startedAt<1000)applyPulseLevel(key,burst.users.size)})}
 function renderLiveReading(state){
  if(location.hash!=='#live-reading')return;
  const oldForm=document.querySelector('.lr-comment-form'),draft=oldForm?{name:oldForm.elements.displayName.value,message:oldForm.elements.message.value,field:document.activeElement?.name||'',start:document.activeElement?.selectionStart,end:document.activeElement?.selectionEnd}:null;
  shell(pageContent(state),'Reading');
  if(draft){const form=document.querySelector('.lr-comment-form');if(form){form.elements.displayName.value=draft.name;form.elements.message.value=draft.message;const field=form.elements[draft.field];if(field){field.focus();if(typeof draft.start==='number')field.setSelectionRange(draft.start,draft.end)}}}
  reapplyPulses()
 }
 function clearSubscriptions(){stopState?.();stopPulses?.();stopState=null;stopPulses=null}
 function liveReadingPage(){
  clearSubscriptions();
  renderLiveReading(LiveReadingCore.getState());
  stopState=LiveReadingCore.subscribe(renderLiveReading);
  stopPulses=LiveReadingCore.onPulse(showPulse)
 }
 function liveReadingVote(segmentIndex,charIndex){LiveReadingCore.vote(segmentIndex,charIndex).catch(error=>console.error('Live reading vote failed:',error))}
 async function submitLiveReadingComment(event){
  event.preventDefault();const form=event.currentTarget,data=new FormData(form);
  const button=form.querySelector('button[type="submit"]');button.disabled=true;
  try{if(await LiveReadingCore.addComment(data.get('displayName'),data.get('message'))){form.elements.message.value='';form.elements.message.focus()}}
  catch(error){console.error('Live reading comment failed:',error);alert(LiveReadingCore.errorMessage(error))}
  finally{button.disabled=false}
  return false
 }
 function showPulse(pulse){
  if(location.hash!=='#live-reading')return;
  const article=LiveReadingCore.getState().article;if(!article||article.id!==pulse.articleId)return;
  const key=`${pulse.segmentIndex}-${pulse.charIndex}`,time=Date.now();let burst=pulseBursts.get(key);
  if(!burst||time-burst.startedAt>=1000){
   if(burst?.timer)clearTimeout(burst.timer);
   burst={startedAt:time,users:new Set(),timer:null};pulseBursts.set(key,burst);
   burst.timer=setTimeout(()=>{pulseBursts.delete(key);document.querySelector(`[data-pulse-key="${key}"]`)?.classList.remove('lr-pulse-1','lr-pulse-2','lr-pulse-3')},1000)
  }
  burst.users.add(pulse.clientId);
  applyPulseLevel(key,burst.users.size)
 }

 window.liveReadingPage=liveReadingPage;
 window.liveReadingVote=liveReadingVote;
 window.submitLiveReadingComment=submitLiveReadingComment;
})();
