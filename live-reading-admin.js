(function(){
 'use strict';

 const elements={
  connectionBadge:document.getElementById('connectionBadge'),connectionNote:document.getElementById('connectionNote'),adminControls:document.getElementById('adminControls'),
  adminIdentity:document.getElementById('adminIdentity'),adminUid:document.getElementById('adminUid'),adminSignIn:document.getElementById('adminSignIn'),adminSignOut:document.getElementById('adminSignOut'),copyAdminUid:document.getElementById('copyAdminUid'),adminGlobalStatus:document.getElementById('adminGlobalStatus'),
  pageEnabled:document.getElementById('pageEnabled'),readerName:document.getElementById('readerName'),saveReader:document.getElementById('saveReader'),clearReader:document.getElementById('clearReader'),
  articlePackage:document.getElementById('articlePackage'),validateArticle:document.getElementById('validateArticle'),publishArticle:document.getElementById('publishArticle'),clearArticle:document.getElementById('clearArticle'),articleStatus:document.getElementById('articleStatus'),articlePreview:document.getElementById('articlePreview'),
  adminCollection:document.getElementById('adminCollection'),clearCollection:document.getElementById('clearCollection')
 };
 let validatedArticle=null,currentState=LiveReadingCore.getState();
 function escapeHtml(value=''){return String(value).replace(/[&<>"']/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]))}
 function setStatus(message,type=''){elements.articleStatus.textContent=message;elements.articleStatus.className=`lr-admin-status ${type}`.trim()}
 function setGlobalStatus(message,type=''){elements.adminGlobalStatus.textContent=message;elements.adminGlobalStatus.className=`lr-admin-status ${type}`.trim()}
 function preview(article,text,wordCount){elements.articlePreview.innerHTML=`${article.title?`<h3>${escapeHtml(article.title)}</h3>`:''}<p>${escapeHtml(text)}</p><div class="lr-preview-meta"><span>${escapeHtml(article.language)}</span><span>${wordCount} word units</span><span>${Array.from(text).length} characters</span></div>`}
 function collectionMarkup(){
  const entries=LiveReadingCore.collection();
  if(!entries.length)return '<p class="lr-admin-empty">No collected words</p>';
  return entries.map(entry=>{
   if(entry.wholeWord){
    const count=entry.counts['0']||0;
    return `<div class="lr-admin-collected-row"><div><span class="lr-collected-hit">${escapeHtml(entry.word)}<sup>${count}</sup></span></div><button type="button" data-remove-word="${escapeHtml(entry.word)}">Remove</button></div>`
   }
   const word=Array.from(entry.word).map((character,index)=>{const count=entry.counts[String(index)]||0;return count?`<span class="lr-collected-hit">${escapeHtml(character)}<sup>${count}</sup></span>`:`<span>${escapeHtml(character)}</span>`}).join('');
   return `<div class="lr-admin-collected-row"><div>${word}</div><button type="button" data-remove-word="${escapeHtml(entry.word)}">Remove</button></div>`
  }).join('')
 }
 function lockControls(locked){
  elements.adminControls.classList.toggle('is-locked',locked);elements.adminControls.setAttribute('aria-disabled',String(locked));
  elements.adminControls.querySelectorAll('button,input,textarea').forEach(control=>{control.disabled=locked})
 }
 function render(state){
  currentState=state;
  const signedIn=!!state.user?.uid&&!state.user.isAnonymous;
  elements.adminIdentity.textContent=signedIn?(state.user.email||'Google administrator'):'尚未登入';
  elements.adminUid.textContent=signedIn?`UID: ${state.user.uid}`:'請使用管理員 Google 帳號登入。';
  elements.adminSignIn.hidden=signedIn;elements.adminSignOut.hidden=!signedIn;elements.copyAdminUid.hidden=!signedIn;
  lockControls(!signedIn);
  if(state.connectionStatus==='connected'){
   elements.connectionBadge.textContent='Firebase connected';elements.connectionBadge.classList.remove('error');
   elements.connectionNote.textContent='Firebase Realtime Database 已連線；公開頁面會自動接收即時更新。'
  }else if(state.connectionStatus==='error'){
   elements.connectionBadge.textContent='Permission required';elements.connectionBadge.classList.add('error');
   elements.connectionNote.textContent=state.connectionError||'Firebase 連線失敗。'
  }else{
   elements.connectionBadge.textContent=signedIn?'Authorizing':'Sign-in required';elements.connectionBadge.classList.remove('error');
   elements.connectionNote.textContent=signedIn?'正在驗證資料庫權限。':'請先登入管理員 Google 帳號。'
  }
  elements.pageEnabled.checked=!!state.pageEnabled;
  if(document.activeElement!==elements.readerName)elements.readerName.value=state.readerName||'';
  if(state.article&&!elements.articlePackage.value.trim()){
   const article={schema:state.article.schema,language:state.article.language,title:state.article.title,segments:state.article.segments};
   elements.articlePackage.value=JSON.stringify(article,null,2);const checked=LiveReadingCore.validateArticlePackage(article);
   if(checked.ok){validatedArticle=checked.article;elements.publishArticle.disabled=!signedIn;preview(checked.article,checked.text,checked.wordCount)}
  }
  elements.adminCollection.innerHTML=collectionMarkup();
  if(signedIn){elements.clearCollection.disabled=!LiveReadingCore.collection().length;elements.clearArticle.disabled=!state.article;elements.publishArticle.disabled=!validatedArticle}
 }
 async function runAction(action,successMessage){
  try{await action();if(successMessage)setGlobalStatus(successMessage,'success')}
  catch(error){setGlobalStatus(LiveReadingCore.errorMessage(error),'error')}
 }

 elements.adminSignIn.addEventListener('click',()=>runAction(()=>LiveReadingCore.signInAdmin()));
 elements.adminSignOut.addEventListener('click',()=>runAction(()=>LiveReadingCore.signOutAdmin()));
 elements.copyAdminUid.addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText(currentState.user.uid);setGlobalStatus('管理員 UID 已複製。','success')}
  catch(error){setGlobalStatus(`請手動複製 UID：${currentState.user.uid}`,'error')}
 });
 elements.pageEnabled.addEventListener('change',()=>runAction(()=>LiveReadingCore.setPageEnabled(elements.pageEnabled.checked),'頁面狀態已更新。'));
 elements.saveReader.addEventListener('click',()=>runAction(()=>LiveReadingCore.setReaderName(elements.readerName.value),'朗讀者已更新。'));
 elements.clearReader.addEventListener('click',()=>{elements.readerName.value='';runAction(()=>LiveReadingCore.setReaderName(''),'朗讀者已清空。')});
 elements.validateArticle.addEventListener('click',()=>{
  const checked=LiveReadingCore.validateArticlePackage(elements.articlePackage.value);
  if(!checked.ok){validatedArticle=null;elements.publishArticle.disabled=true;setStatus(checked.error,'error');return}
  validatedArticle=checked.article;elements.publishArticle.disabled=false;preview(checked.article,checked.text,checked.wordCount);setStatus('格式正確，可以發布。','success')
 });
 elements.articlePackage.addEventListener('input',()=>{validatedArticle=null;elements.publishArticle.disabled=true;setStatus('')});
 elements.publishArticle.addEventListener('click',async()=>{
  if(!validatedArticle)return;
  if(currentState.article&&!confirm('發布新文章會清除目前蒐集內容。確定更換嗎？'))return;
  try{await LiveReadingCore.publishArticle(validatedArticle);setStatus('文章已發布，所有參與者將即時更新。','success')}
  catch(error){setStatus(LiveReadingCore.errorMessage(error),'error')}
 });
 elements.clearArticle.addEventListener('click',()=>{if(confirm('確定清除目前文章與全部蒐集內容嗎？'))runAction(async()=>{await LiveReadingCore.clearArticle();validatedArticle=null;elements.publishArticle.disabled=true;elements.articlePackage.value='';elements.articlePreview.innerHTML='<p></p>'},'文章與蒐集內容已清除。')});
 elements.clearCollection.addEventListener('click',()=>{if(confirm('確定清除全部蒐集內容嗎？'))runAction(()=>LiveReadingCore.clearCollection(),'蒐集內容已清除。')});
 elements.adminCollection.addEventListener('click',event=>{const button=event.target.closest('[data-remove-word]');if(button)runAction(()=>LiveReadingCore.removeCollectionWord(button.dataset.removeWord),'指定詞語已移除。')});
 LiveReadingCore.subscribe(render)
})();
