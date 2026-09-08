
const app=document.getElementById('app');
const bySlug=Object.fromEntries(COUNTRIES.map(c=>[c.slug,c]));
const byMapIdGroups={};COUNTRIES.forEach(c=>{const id=String(Number(c.mapId));(byMapIdGroups[id]??=[]).push(c)});
const savedTheme=localStorage.getItem('ecra-theme');
const initialTheme=savedTheme||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.dataset.theme=initialTheme;
const savedWordHelp=localStorage.getItem('ecra-word-help')==='on';
const state={region:'All',query:'',page:1,perPage:12,display:'all',theme:initialTheme,wordHelp:savedWordHelp};
const imgCache=new Map();
const LEARNING_WORD_BANK=[{"word":"heritage","zh":"文化遗产","kk":"/ˈhɛrɪtɪdʒ/","level":3},{"word":"architecture","zh":"建筑","kk":"/ˈɑrkəˌtɛktʃɚ/","level":3},{"word":"infrastructure","zh":"基础设施","kk":"/ˈɪnfrəˌstrʌktʃɚ/","level":3},{"word":"multilingual","zh":"多语言的","kk":"/ˌmʌltɪˈlɪŋgwəl/","level":3},{"word":"bilingual","zh":"双语的","kk":"/baɪˈlɪŋgwəl/","level":2},{"word":"identity","zh":"认同","kk":"/aɪˈdɛntətɪ/","level":3},{"word":"regional","zh":"地区的","kk":"/ˈridʒənəl/","level":2},{"word":"settlement","zh":"聚落","kk":"/ˈsɛtəlmənt/","level":3},{"word":"agriculture","zh":"农业","kk":"/ˈægrɪˌkʌltʃɚ/","level":3},{"word":"manufacturing","zh":"制造业","kk":"/ˌmænjəˈfæktʃərɪŋ/","level":3},{"word":"industrial","zh":"工业的","kk":"/ɪnˈdʌstrɪəl/","level":2},{"word":"industry","zh":"产业","kk":"/ˈɪndəstrɪ/","level":2},{"word":"technology","zh":"科技","kk":"/tɛkˈnɑlədʒɪ/","level":2},{"word":"economy","zh":"经济","kk":"/ɪˈkɑnəmɪ/","level":3},{"word":"constitution","zh":"宪法","kk":"/ˌkɑnstəˈtuʃən/","level":3},{"word":"democracy","zh":"民主制度","kk":"/dɪˈmɑkrəsɪ/","level":3},{"word":"neutrality","zh":"中立","kk":"/nuˈtrælətɪ/","level":3},{"word":"federal","zh":"联邦的","kk":"/ˈfɛdərəl/","level":3},{"word":"government","zh":"政府","kk":"/ˈgʌvɚnmənt/","level":2},{"word":"republic","zh":"共和国","kk":"/rɪˈpʌblɪk/","level":2},{"word":"revolution","zh":"革命","kk":"/ˌrɛvəˈluʃən/","level":3},{"word":"empire","zh":"帝国","kk":"/ˈɛmpaɪr/","level":2},{"word":"kingdom","zh":"王国","kk":"/ˈkɪŋdəm/","level":2},{"word":"royal","zh":"王室的","kk":"/ˈrɔɪəl/","level":2},{"word":"migration","zh":"迁移","kk":"/maɪˈgreʃən/","level":3},{"word":"immigration","zh":"移民","kk":"/ˌɪməˈgreʃən/","level":3},{"word":"environment","zh":"环境","kk":"/ɪnˈvaɪrənmənt/","level":2},{"word":"resource","zh":"资源","kk":"/ˈrisɔrs/","level":2},{"word":"precision","zh":"精密","kk":"/prɪˈsɪʒən/","level":3},{"word":"engineering","zh":"工程","kk":"/ˌɛndʒəˈnɪrɪŋ/","level":3},{"word":"tradition","zh":"传统","kk":"/trəˈdɪʃən/","level":2},{"word":"traditional","zh":"传统的","kk":"/trəˈdɪʃənəl/","level":2},{"word":"culture","zh":"文化","kk":"/ˈkʌltʃɚ/","level":2},{"word":"festival","zh":"节庆","kk":"/ˈfɛstəvəl/","level":2},{"word":"celebration","zh":"庆典","kk":"/ˌsɛləˈbreɪʃən/","level":2},{"word":"ceremony","zh":"仪式","kk":"/ˈsɛrəˌmonɪ/","level":3},{"word":"community","zh":"社区","kk":"/kəˈmjunətɪ/","level":2},{"word":"hospitality","zh":"待客文化","kk":"/ˌhɑspəˈtælətɪ/","level":3},{"word":"custom","zh":"习俗","kk":"/ˈkʌstəm/","level":2},{"word":"ritual","zh":"仪式","kk":"/ˈrɪtʃuəl/","level":3},{"word":"seasonal","zh":"季节性的","kk":"/ˈsizənəl/","level":2},{"word":"symbol","zh":"象征","kk":"/ˈsɪmbəl/","level":2},{"word":"distinctive","zh":"有特色的","kk":"/dɪˈstɪŋktɪv/","level":3},{"word":"influence","zh":"影响","kk":"/ˈɪnfluəns/","level":2},{"word":"preserve","zh":"保存","kk":"/prɪˈzɝv/","level":3},{"word":"protect","zh":"保护","kk":"/prəˈtɛkt/","level":2},{"word":"connect","zh":"连接","kk":"/kəˈnɛkt/","level":1},{"word":"develop","zh":"发展","kk":"/dɪˈvɛləp/","level":2},{"word":"support","zh":"支持","kk":"/səˈpɔrt/","level":1},{"word":"gather","zh":"聚集","kk":"/ˈgæðɚ/","level":2},{"word":"celebrate","zh":"庆祝","kk":"/ˈsɛləˌbret/","level":1},{"word":"decorate","zh":"装饰","kk":"/ˈdɛkəˌret/","level":2},{"word":"share","zh":"分享","kk":"/ʃɛr/","level":1},{"word":"ancient","zh":"古代的","kk":"/ˈenʃənt/","level":2},{"word":"medieval","zh":"中世纪的","kk":"/ˌmɪdɪˈivəl/","level":3},{"word":"historic","zh":"历史悠久的","kk":"/hɪˈstɔrɪk/","level":2},{"word":"history","zh":"历史","kk":"/ˈhɪstərɪ/","level":1},{"word":"modern","zh":"现代的","kk":"/ˈmɑdɚn/","level":1},{"word":"urban","zh":"城市的","kk":"/ˈɝbən/","level":2},{"word":"rural","zh":"乡村的","kk":"/ˈrʊrəl/","level":2},{"word":"public","zh":"公共的","kk":"/ˈpʌblɪk/","level":1},{"word":"social","zh":"社会的","kk":"/ˈsoʃəl/","level":2},{"word":"political","zh":"政治的","kk":"/pəˈlɪtɪkəl/","level":2},{"word":"religious","zh":"宗教的","kk":"/rɪˈlɪdʒəs/","level":2},{"word":"religion","zh":"宗教","kk":"/rɪˈlɪdʒən/","level":2},{"word":"language","zh":"语言","kk":"/ˈlæŋgwɪdʒ/","level":1},{"word":"literature","zh":"文学","kk":"/ˈlɪtərətʃɚ/","level":3},{"word":"poetry","zh":"诗歌","kk":"/ˈpoətrɪ/","level":2},{"word":"performance","zh":"表演","kk":"/pɚˈfɔrməns/","level":2},{"word":"geography","zh":"地理","kk":"/dʒiˈɑgrəfɪ/","level":2},{"word":"landscape","zh":"地景","kk":"/ˈlændskeɪp/","level":2},{"word":"mountain","zh":"山","kk":"/ˈmaʊntən/","level":1},{"word":"valley","zh":"山谷","kk":"/ˈvælɪ/","level":1},{"word":"river","zh":"河流","kk":"/ˈrɪvɚ/","level":1},{"word":"coast","zh":"海岸","kk":"/kost/","level":1},{"word":"coastal","zh":"沿海的","kk":"/ˈkostəl/","level":2},{"word":"island","zh":"岛屿","kk":"/ˈaɪlənd/","level":1},{"word":"forest","zh":"森林","kk":"/ˈfɔrɪst/","level":1},{"word":"desert","zh":"沙漠","kk":"/ˈdɛzɚt/","level":1},{"word":"climate","zh":"气候","kk":"/ˈklaɪmɪt/","level":2},{"word":"plain","zh":"平原","kk":"/plen/","level":2},{"word":"plateau","zh":"高原","kk":"/plæˈto/","level":2},{"word":"wetland","zh":"湿地","kk":"/ˈwɛtlænd/","level":2},{"word":"border","zh":"边境","kk":"/ˈbɔrdɚ/","level":1},{"word":"capital","zh":"首都","kk":"/ˈkæpətəl/","level":1},{"word":"population","zh":"人口","kk":"/ˌpɑpjəˈleʃən/","level":2},{"word":"route","zh":"路线","kk":"/rut/","level":1},{"word":"water","zh":"水","kk":"/ˈwɔtɚ/","level":1},{"word":"canal","zh":"运河","kk":"/kəˈnæl/","level":1},{"word":"dike","zh":"堤坝","kk":"/daɪk/","level":2},{"word":"tunnel","zh":"隧道","kk":"/ˈtʌnəl/","level":1},{"word":"bridge","zh":"桥","kk":"/brɪdʒ/","level":1},{"word":"road","zh":"道路","kk":"/rod/","level":1},{"word":"street","zh":"街道","kk":"/strit/","level":1},{"word":"square","zh":"广场","kk":"/skwɛr/","level":1},{"word":"fortress","zh":"堡垒","kk":"/ˈfɔrtrəs/","level":2},{"word":"castle","zh":"城堡","kk":"/ˈkæsəl/","level":1},{"word":"palace","zh":"宫殿","kk":"/ˈpæləs/","level":2},{"word":"monastery","zh":"修道院","kk":"/ˈmɑnəˌstɛrɪ/","level":3},{"word":"church","zh":"教堂","kk":"/tʃɝtʃ/","level":1},{"word":"temple","zh":"寺庙","kk":"/ˈtɛmpəl/","level":1},{"word":"mosque","zh":"清真寺","kk":"/mɑsk/","level":2},{"word":"building","zh":"建筑物","kk":"/ˈbɪldɪŋ/","level":1},{"word":"stone","zh":"石材","kk":"/ston/","level":1},{"word":"wooden","zh":"木制的","kk":"/ˈwʊdən/","level":1},{"word":"market","zh":"市场","kk":"/ˈmɑrkɪt/","level":1},{"word":"trade","zh":"贸易","kk":"/tred/","level":2},{"word":"craft","zh":"手工艺","kk":"/kræft/","level":2},{"word":"carpet","zh":"地毯","kk":"/ˈkɑrpɪt/","level":1},{"word":"embroidery","zh":"刺绣","kk":"/ɛmˈbrɔɪdərɪ/","level":3},{"word":"weaving","zh":"编织","kk":"/ˈwivɪŋ/","level":2},{"word":"design","zh":"设计","kk":"/dɪˈzaɪn/","level":2},{"word":"pattern","zh":"图案","kk":"/ˈpætɚn/","level":2},{"word":"music","zh":"音乐","kk":"/ˈmjuzɪk/","level":1},{"word":"dance","zh":"舞蹈","kk":"/dæns/","level":1},{"word":"film","zh":"电影","kk":"/fɪlm/","level":1},{"word":"family","zh":"家庭","kk":"/ˈfæməlɪ/","level":1},{"word":"transport","zh":"交通","kk":"/ˈtrænspɔrt/","level":2},{"word":"railway","zh":"铁路","kk":"/ˈrelˌwe/","level":2},{"word":"cycling","zh":"骑自行车","kk":"/ˈsaɪklɪŋ/","level":1},{"word":"farm","zh":"农场","kk":"/fɑrm/","level":1},{"word":"farming","zh":"农业活动","kk":"/ˈfɑrmɪŋ/","level":1},{"word":"harvest","zh":"收成","kk":"/ˈhɑrvɪst/","level":2},{"word":"food","zh":"食物","kk":"/fud/","level":1},{"word":"bread","zh":"面包","kk":"/brɛd/","level":1},{"word":"cheese","zh":"奶酪","kk":"/tʃiz/","level":1},{"word":"coffee","zh":"咖啡","kk":"/ˈkɔfɪ/","level":1},{"word":"tea","zh":"茶","kk":"/ti/","level":1},{"word":"wine","zh":"葡萄酒","kk":"/waɪn/","level":1},{"word":"chocolate","zh":"巧克力","kk":"/ˈtʃɔklɪt/","level":1},{"word":"beer","zh":"啤酒","kk":"/bɪr/","level":1},{"word":"spring","zh":"春天","kk":"/sprɪŋ/","level":1},{"word":"winter","zh":"冬天","kk":"/ˈwɪntɚ/","level":1},{"word":"season","zh":"季节","kk":"/ˈsizən/","level":1},{"word":"official","zh":"官方的","kk":"/əˈfɪʃəl/","level":2},{"word":"visitor","zh":"游客","kk":"/ˈvɪzətɚ/","level":1},{"word":"handmade","zh":"手工制作的","kk":"/ˌhændˈmed/","level":2},{"word":"waffle","zh":"华夫饼","kk":"/ˈwɑfəl/","level":1},{"word":"comic","zh":"漫画","kk":"/ˈkɑmɪk/","level":1},{"word":"football","zh":"足球","kk":"/ˈfʊtˌbɔl/","level":1},{"word":"team","zh":"队伍","kk":"/tim/","level":1},{"word":"favorite","zh":"最喜欢的","kk":"/ˈfevərɪt/","level":1},{"word":"fried","zh":"油炸的","kk":"/fraɪd/","level":1},{"word":"kilt","zh":"苏格兰裙","kk":"/kɪlt/","level":2},{"word":"tartan","zh":"格纹呢料","kk":"/ˈtɑrtən/","level":2},{"word":"bagpipe","zh":"风笛","kk":"/ˈbægˌpaɪp/","level":2},{"word":"whisky","zh":"威士忌","kk":"/ˈwɪskɪ/","level":1},{"word":"rugby","zh":"橄榄球","kk":"/ˈrʌgbɪ/","level":1},{"word":"singing","zh":"歌唱","kk":"/ˈsɪŋɪŋ/","level":1},{"word":"shipbuilding","zh":"造船业","kk":"/ˈʃɪpˌbɪldɪŋ/","level":2},{"word":"breakfast","zh":"早餐","kk":"/ˈbrɛkfəst/","level":1},{"word":"pub","zh":"酒馆","kk":"/pʌb/","level":1},{"word":"hill","zh":"丘陵","kk":"/hɪl/","level":1},{"word":"lake","zh":"湖泊","kk":"/lek/","level":1},{"word":"field","zh":"田野","kk":"/fild/","level":1},{"word":"sign","zh":"标志","kk":"/saɪn/","level":1}];

function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function flag(c){return `https://flagcdn.com/w160/${c.flag}.png`}
function go(h){location.hash=h;scrollTo({top:0,behavior:'smooth'})}
function themeLabel(){return state.theme==='dark'?'Light':'Dark'}
function themeIcon(){return state.theme==='dark'?'☀':'☾'}
function toggleTheme(){
 state.theme=state.theme==='dark'?'light':'dark';
 document.documentElement.dataset.theme=state.theme;
 localStorage.setItem('ecra-theme',state.theme);
 document.querySelectorAll('.theme-icon').forEach(x=>x.textContent=themeIcon());
 document.querySelectorAll('.theme-label').forEach(x=>x.textContent=themeLabel());
 document.querySelectorAll('.theme-btn').forEach(x=>x.setAttribute('aria-label',`${themeLabel()} mode`));
}
function header(active='Home'){return `<header class="topbar"><nav class="nav"><div class="brand" onclick="go('#home')"><div class="brandmark">◫</div><strong>${SITE.name}</strong></div><div class="links">${['Home','Library','Map','Journey'].map(x=>`<a class="${active===x?'active':''}" href="#${x.toLowerCase()}">${x}</a>`).join('')}</div><div class="nav-actions"><input class="nav-search" placeholder="Search countries…" onkeydown="if(event.key==='Enter'){state.query=this.value;state.page=1;go('#library');render()}"/><button class="theme-btn" type="button" onclick="toggleTheme()" aria-label="${themeLabel()} mode" title="Switch reading theme"><span class="theme-icon">${themeIcon()}</span><span class="theme-label">${themeLabel()}</span></button><button class="journey-btn" onclick="go('#journey')">My Journey</button></div></nav></header>`}
function articleCount(){return COUNTRIES.reduce((n,c)=>n+Object.keys(c.versions||{}).length,0)}
function availableLevels(c){return ['A1','A2','B1'].filter(l=>c.versions&&c.versions[l])}
function preferredLevel(c){return c?.versions?.B1?'B1':(availableLevels(c).slice(-1)[0]||'A1')}
function levelLabel(l){return l==='A1'?'A1 Easy':l==='A2'?'A2 Standard':'B1 Deep'}
function footer(){return `<footer class="footer"><span>本網站由 <b>Han</b> 製作。內容可自由用於學習與非商業教育用途；未經授權，不得作商業使用。 · ${SITE.version}</span></footer>`}
function shell(content,active){app.innerHTML=`<div class="shell">${header(active)}<main class="main">${content}</main>${footer()}</div>`}
async function wikiImage(titles){const key=titles.join('|');if(imgCache.has(key))return imgCache.get(key);for(const title of titles){try{const u=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=700&redirects=1&titles=${encodeURIComponent(title)}`;const j=await fetch(u).then(r=>r.json());const p=Object.values(j.query?.pages||{})[0];if(p?.thumbnail?.source){const v={src:p.thumbnail.source,title};imgCache.set(key,v);return v}}catch(e){}}const v={src:'',title:titles[0]||''};imgCache.set(key,v);return v}
function hydrate(root=document){root.querySelectorAll('[data-wiki]').forEach(async el=>{if(el.dataset.loaded)return;el.dataset.loaded='1';const titles=(el.dataset.wiki||'').split('|').filter(Boolean);const r=await wikiImage(titles);if(r.src)el.src=r.src;const cap=el.closest('figure')?.querySelector('figcaption');if(cap&&r.title)cap.innerHTML=`${esc(cap.dataset.caption||r.title)} · <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/${encodeURIComponent(r.title.replaceAll(' ','_'))}">image source</a>`})}
function card(c){const levels=availableLevels(c);const heroLevel=c.versions.B1?'B1':levels[levels.length-1];const hero=c.versions[heroLevel];return `<article class="country-card"><div class="card-top"><img loading="lazy" src="${flag(c)}" data-wiki="${esc(hero.sections[0].imagePages.join('|'))}" alt="${esc(c.name)}"><img class="flag-small" src="${flag(c)}" alt=""></div><div class="card-body"><div class="eyebrow">Reading #${c.readOrder} · ${esc(c.region)}</div><h3>${esc(c.name)}</h3><p>${esc(c.summary)}</p><div class="level-actions">${levels.map(l=>`<button class="levelbtn ${l.toLowerCase()}" onclick="go('#country=${c.slug}&level=${l}')">${l}</button>`).join('')}</div></div></article>`}
function stat(n,l){return `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`}
function home(){const latest=[...COUNTRIES].sort((a,b)=>b.readOrder-a.readOrder).slice(0,4);const content=`<section class="hero"><div><div class="eyebrow">Bilingual country encyclopedia</div><h1>Read the World<br>One Country at a Time</h1><p>Each country keeps the reading levels you have prepared. New entries can include A1, A2, and B1, with English-only, English + simplified Chinese, or English + simplified Chinese + word-grouped pinyin display.</p><div class="stats">${stat(COUNTRIES.length,'Countries read')}${stat(articleCount(),'Reading versions')}${stat(SITE.regions.length,'Main regions')}</div></div><div class="map-card"><svg id="mapSvg"></svg><div class="legend"><div><span class="swatch read"></span>Read</div><div><span class="swatch"></span>Not yet read</div><small>Zoom in to reveal country names</small></div><div class="map-tools"><button onclick="mapZoom(1.45)">+</button><button onclick="mapZoom(.69)">−</button><button onclick="mapReset()">↺</button></div></div></section><section class="section"><div class="section-head"><div><h2>Latest Countries</h2><p>Choose any available reading level before you enter.</p></div><button class="outline" onclick="go('#library')">Open full library →</button></div><div class="country-grid">${latest.map(card).join('')}</div></section><section class="section"><div class="section-head"><div><h2>Browse by Region</h2><p>The archive only includes countries you have already read.</p></div></div><div class="region-tabs">${['All',...SITE.regions].map(r=>`<button class="tab" onclick="state.region='${esc(r)}';go('#library');render()">${esc(r)}</button>`).join('')}</div></section>`;shell(content,'Home');hydrate();renderMap()}
function filtered(){let a=[...COUNTRIES];if(state.region!=='All')a=a.filter(c=>c.region===state.region);const q=state.query.trim().toLowerCase();if(q)a=a.filter(c=>JSON.stringify(c).toLowerCase().includes(q));return a}
function library(){const all=filtered();const pages=Math.max(1,Math.ceil(all.length/state.perPage));state.page=Math.min(state.page,pages);const list=all.slice((state.page-1)*state.perPage,state.page*state.perPage);const content=`<section class="page-pad"><div class="eyebrow">Country library</div><h1 class="page-title">Choose a Country, Then a Level</h1><p style="color:var(--muted);max-width:760px;line-height:1.7">Choose from the levels available for each reading entry. Recent entries can include A1, A2, and B1.</p></section><div class="library-wrap"><div class="library-toolbar"><div class="filterbar">${['All',...SITE.regions].map(r=>`<button class="tab ${state.region===r?'active':''}" onclick="state.region='${esc(r)}';state.page=1;library()">${esc(r)}</button>`).join('')}</div><input class="search" placeholder="Search…" value="${esc(state.query)}" oninput="state.query=this.value;state.page=1;library()"></div><div class="country-grid">${list.map(card).join('')}</div><div class="pagination">${Array.from({length:pages},(_,i)=>`<button class="pagebtn ${state.page===i+1?'active':''}" onclick="state.page=${i+1};library();scrollTo({top:180,behavior:'smooth'})">${i+1}</button>`).join('')}</div></div>`;shell(content,'Library');hydrate()}
function pinyinText(zh){
 try{
  if(!window.pinyinPro?.pinyin)return 'Pinyin library is loading. Refresh once if this line remains.';
  if(typeof Intl!=='undefined'&&Intl.Segmenter){
   const segs=[...new Intl.Segmenter('zh-CN',{granularity:'word'}).segment(zh)];
   return segs.map(x=>{
    const s=x.segment;
    if(!/[\u3400-\u9fff]/.test(s))return s;
    const py=pinyinPro.pinyin(s,{toneType:'symbol',type:'array'});
    return py.join('');
   }).join(' ')
     .replace(/\s+([，。！？；：、,.!?;:])/g,'$1')
     .replace(/([（“‘《【])\s+/g,'$1')
     .replace(/\s+([）”’》】])/g,'$1')
     .replace(/\s+/g,' ')
     .trim();
  }
  const py=pinyinPro.pinyin(zh,{toneType:'symbol',type:'array'});
  return py.join(' ');
 }catch(e){return 'Pinyin unavailable.'}
}
function setDisplay(mode){state.display=mode;document.querySelectorAll('.displaybtn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));document.querySelectorAll('.zhbox,.title-zh').forEach(el=>el.classList.toggle('hidden-lang',mode==='en'));document.querySelectorAll('.pinyin,.title-pinyin').forEach(el=>el.classList.toggle('hidden-lang',mode!=='all'))}

function articleText(v){return (v.sections||[]).map(s=>s.en).join(' ').toLowerCase()}
function wordForms(word){
 const forms=new Set([word.toLowerCase()]);
 if(!word.includes(' ')){
  if(word.endsWith('y'))forms.add(word.slice(0,-1)+'ies');
  else if(word.endsWith('s'))forms.add(word+'es');
  else forms.add(word+'s');
  if(word.endsWith('e')){forms.add(word+'d');forms.add(word.slice(0,-1)+'ing')}
  else{forms.add(word+'ed');forms.add(word+'ing')}
 }
 return [...forms]
}
function hasLearningWord(text,item){return wordForms(item.word).some(f=>new RegExp(`\\b${f.replace(/[.*+?^${}()|[\\]\\\\]/g,'\\$&')}\\b`,'i').test(text))}
function learningWords(v,level){
 const text=articleText(v),target=level==='B1'?3:level==='A2'?2:1;
 const present=LEARNING_WORD_BANK.filter(x=>hasLearningWord(text,x));
 present.sort((a,b)=>Math.abs(a.level-target)-Math.abs(b.level-target)||b.level-a.level||b.word.length-a.word.length);
 const out=[];for(const x of present){if(!out.some(y=>y.word===x.word||y.zh===x.zh))out.push(x);if(out.length===7)break}
 return out;
}
function regexEscape(s){return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}
function learningMarkup(text,words,lang){
 if(!words.length)return esc(text);
 const entries=words.flatMap((x,i)=>{
   if(lang==='en')return wordForms(x.word).map(form=>({match:form,key:i}));
   return [{match:x.zh,key:i}];
 }).filter(x=>x.match).sort((a,b)=>b.match.length-a.match.length);
 if(!entries.length)return esc(text);
 const pattern=lang==='en'?`\\b(${entries.map(x=>regexEscape(x.match)).join('|')})\\b`:`(${entries.map(x=>regexEscape(x.match)).join('|')})`;
 const re=new RegExp(pattern,lang==='en'?'gi':'g');
 let last=0,out='';
 text.replace(re,(m,...args)=>{
   const offset=args[args.length-2];
   out+=esc(text.slice(last,offset));
   const item=entries.find(x=>lang==='en'?x.match.toLowerCase()===m.toLowerCase():x.match===m);
   const key=item?item.key:0;
   out+=`<button type="button" class="learnable" data-vocab="${key}" data-lang="${lang}" onclick="showWordPopup(event,${key},'${lang}')">${esc(m)}</button>`;
   last=offset+m.length;return m
 });
 out+=esc(text.slice(last));return out;
}
function setWordHelp(on){
 state.wordHelp=!!on;localStorage.setItem('ecra-word-help',state.wordHelp?'on':'off');
 document.querySelectorAll('.country-page').forEach(x=>x.classList.toggle('word-help-on',state.wordHelp));
 document.querySelectorAll('.wordhelp-btn').forEach(b=>{b.classList.toggle('active',state.wordHelp);b.textContent=state.wordHelp?'Word Help · On':'Word Help · Off'});
 if(!state.wordHelp)closeWordPopup();
}
function vocabCard(words){
 if(!words.length)return '<p class="source-note">No learning words available for this article.</p>';
 return `<div class="vocab-list">${words.map((w,i)=>`<button class="vocab-row" type="button" onclick="showWordPopup(event,${i},'en')"><span class="vocab-en"><b>${esc(w.word)}</b><small>${esc(w.kk)}</small></span><span class="vocab-zh">${esc(w.zh)} <small>${esc(pinyinText(w.zh))}</small></span></button>`).join('')}</div>`
}
let activeLearningWords=[];
function showWordPopup(event,index,lang='en'){
 if(event?.currentTarget?.classList.contains('learnable')&&!state.wordHelp)return;
 event?.stopPropagation();const w=activeLearningWords[index];if(!w)return;
 let pop=document.querySelector('.word-popover');if(!pop){pop=document.createElement('div');pop.className='word-popover';document.body.appendChild(pop)}
 const py=pinyinText(w.zh);
 pop.innerHTML=lang==='zh'?`<button class="word-close" onclick="closeWordPopup()">×</button><div class="word-main">${esc(w.zh)}</div><div class="word-sub">${esc(py)}</div><div class="word-meaning"><b>${esc(w.word)}</b> <span>${esc(w.kk)}</span></div>`:`<button class="word-close" onclick="closeWordPopup()">×</button><div class="word-main">${esc(w.word)}</div><div class="word-sub">${esc(w.kk)}</div><div class="word-meaning"><b>${esc(w.zh)}</b> <span>${esc(py)}</span></div>`;
 pop.classList.add('show');
 const r=event?.currentTarget?.getBoundingClientRect();
 if(r){const left=Math.min(window.innerWidth-280,Math.max(12,r.left));const top=Math.min(window.innerHeight-160,Math.max(12,r.bottom+8));pop.style.left=`${left}px`;pop.style.top=`${top}px`}
}
function closeWordPopup(){document.querySelector('.word-popover')?.classList.remove('show')}
document.addEventListener('click',e=>{if(!e.target.closest('.word-popover')&&!e.target.closest('.learnable')&&!e.target.closest('.vocab-row'))closeWordPopup()});
window.addEventListener('keydown',e=>{if(e.key==='Escape')closeWordPopup()});
function copyArticle(slug,level,button){
 const c=bySlug[slug],v=c?.versions?.[level];if(!c||!v)return;
 const u=new URL(location.href);
 u.hash=`country=${encodeURIComponent(slug)}&level=${encodeURIComponent(level)}`;
 const text=u.href;
 const done=()=>{if(button){const old=button.textContent;button.textContent='Copied ✓';button.classList.add('copied');setTimeout(()=>{button.textContent=old;button.classList.remove('copied')},1600)}};
 if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done));else fallbackCopy(text,done);
}
function fallbackCopy(text,done){const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}finally{ta.remove()}}
function country(slug,level='B1'){
 const c=bySlug[slug];if(!c)return library();
 const levels=availableLevels(c);
 if(!levels.includes(level))level=preferredLevel(c);
 const v=c.versions[level];
 const words=learningWords(v,level);activeLearningWords=words;
 const ordered=[...COUNTRIES].sort((a,b)=>a.readOrder-b.readOrder);
 const i=ordered.findIndex(x=>x.slug===slug),prev=ordered[i-1],next=ordered[i+1];
 const secs=v.sections.map((s,idx)=>`<section id="sec${idx}" class="article-section"><div class="section-text"><div class="eyebrow">${String(idx+1).padStart(2,'0')}</div><h2>${esc(s.heading)}</h2><p class="en">${learningMarkup(s.en,words,'en')}</p><div class="zhbox"><p class="zh">${learningMarkup(s.zh,words,'zh')}</p><p class="pinyin">${esc(s.pinyin||pinyinText(s.zh))}</p></div></div><figure class="article-figure"><img loading="lazy" src="${flag(c)}" data-wiki="${esc(s.imagePages.join('|'))}" alt="${esc(c.name+' '+s.heading)}"><figcaption data-caption="${esc(s.caption||s.heading)}">${esc(s.caption||s.heading)}</figcaption></figure></section>`).join('');
 const facts=Object.entries(c.facts).map(([k,val])=>`<div class="fact"><small>${esc(k)}</small><b>${esc(val)}</b></div>`).join('');
 const toc=v.sections.map((s,i)=>`<a href="#" onclick="event.preventDefault();document.getElementById('sec${i}').scrollIntoView({behavior:'smooth',block:'start'})">${i+1}. ${esc(s.heading)}</a>`).join('');
 const levelButtons=levels.map(l=>`<button class="levelbtn ${l.toLowerCase()} ${level===l?'active':''}" onclick="go('#country=${c.slug}&level=${l}')">${levelLabel(l)}</button>`).join('');
 const prevLevel=prev?(prev.versions[level]?level:preferredLevel(prev)):level;
 const nextLevel=next?(next.versions[level]?level:preferredLevel(next)):level;
 const content=`<div class="country-page ${state.wordHelp?'word-help-on':''}"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#library">Library</a> / ${esc(c.name)}</div><div class="country-header"><div><div class="eyebrow">${esc(c.region)} · Reading #${c.readOrder}</div><h1 class="country-title">${esc(v.title)}</h1>${v.titleZh?`<div class="title-zh">${esc(v.titleZh)}</div>`:''}${v.titlePinyin?`<div class="title-pinyin pinyin">${esc(v.titlePinyin)}</div>`:''}<p class="country-summary">${esc(v.summary)}</p><div class="version-switch">${levelButtons}</div></div><aside class="country-facts"><div class="eyebrow">At a glance</div><div style="display:flex;align-items:center;gap:12px;margin:8px 0 14px"><img src="${flag(c)}" style="width:66px;border-radius:5px"><b class="country-fact-name">${esc(c.name)}</b></div><div class="facts-grid">${facts}</div></aside></div><div class="reading-controls"><div class="reading-meta"><b>${level} reading${v.degree?` · ${esc(v.degree)}`:''} · ${v.sections.length} illustrated sections</b></div><div class="reading-tools"><div class="display-buttons"><button data-mode="en" class="displaybtn" onclick="setDisplay('en')">English only</button><button data-mode="zh" class="displaybtn" onclick="setDisplay('zh')">English + 简中</button><button data-mode="all" class="displaybtn active" onclick="setDisplay('all')">English + 简中 + Pinyin</button></div><button type="button" class="wordhelp-btn ${state.wordHelp?'active':''}" onclick="setWordHelp(!state.wordHelp)">${state.wordHelp?'Word Help · On':'Word Help · Off'}</button></div></div><div class="reading-layout"><article class="article">${secs}<div class="article-end-tools"><div><div class="eyebrow">Keep learning</div><h3>Share this reading</h3><p>Copies this article’s direct URL.</p></div><button class="copy-article-btn" type="button" onclick="copyArticle('${c.slug}','${level}',this)">Copy article</button></div><div class="prevnext"><button class="pn" ${prev?`onclick="go('#country=${prev.slug}&level=${prevLevel}')"`:''}><small>← Previous country</small><b>${prev?esc(prev.name):'Start of journey'}</b></button><button class="pn" ${next?`onclick="go('#country=${next.slug}&level=${nextLevel}')"`:`onclick="go('#library')"`}><small>Next country →</small><b>${next?esc(next.name):'Choose the next country'}</b></button></div></article><aside class="sidebar"><div class="side-card toc"><h3>Contents</h3>${toc}</div><div class="side-card vocab-card"><div class="vocab-card-head"><h3>Learning words</h3><span>${words.length}</span></div><p class="vocab-intro">Useful words taken from this reading.</p>${vocabCard(words)}</div><div class="side-card"><h3>Level choice</h3><p class="source-note">${levels.map(l=>`<b>${l}</b>: ${l==='A1'?'shorter, simpler foundation':l==='A2'?'clear standard reading with more detail':'richer cultural and historical context'}.`).join('<br>')}</p></div></aside></div></div>`;
 shell(content,'Library');hydrate();setDisplay(state.display);setWordHelp(state.wordHelp)
}

let mapState={svg:null,g:null,zoom:null};
function renderMap(){
 const svg=d3.select('#mapSvg'); if(svg.empty())return;
 const node=svg.node(),w=node.clientWidth||800,h=node.clientHeight||480;
 svg.attr('viewBox',`0 0 ${w} ${h}`);
 const g=svg.append('g').attr('class','map-world');
 const projection=d3.geoNaturalEarth1().fitExtent([[12,12],[w-12,h-12]],{type:'Sphere'});
 const path=d3.geoPath(projection);
 const host=d3.select(node.parentNode);
 let tooltip=host.select('.map-tooltip');
 if(tooltip.empty()) tooltip=host.append('div').attr('class','map-tooltip');
 let readFeatures=[];
 const ukChildren=COUNTRIES.filter(c=>String(Number(c.mapId))==='826'&&Array.isArray(c.mapPoint));
 const groupFor=d=>byMapIdGroups[String(Number(d.id))]||[];
 const labelFor=d=>{const a=groupFor(d);return a.length===1?a[0].name:(String(Number(d.id))==='826'?'United Kingdom':`${a.length} readings`)};

 function labelBoxesOverlap(a,b,pad=5){return !(a.x2+pad<b.x1||a.x1-pad>b.x2||a.y2+pad<b.y1||a.y1-pad>b.y2)}
 function updateLabels(t){
   if(!readFeatures.length)return;
   const k=t.k;
   const labels=g.selectAll('.map-label');
   if(k<2.15){labels.style('display','none')}else{
     const candidates=readFeatures.map(d=>{
       const name=labelFor(d),centroid=path.centroid(d),bounds=path.bounds(d);
       const screenX=t.applyX(centroid[0]),screenY=t.applyY(centroid[1]);
       const screenW=(bounds[1][0]-bounds[0][0])*k,screenH=(bounds[1][1]-bounds[0][1])*k;
       const textW=Math.max(44,name.length*7.2),priority=screenW*screenH;
       return {d,name,screenX,screenY,screenW,screenH,textW,priority,group:groupFor(d)};
     }).filter(x=>{
       if(x.group.length>1&&k>=4.8)return false;
       const minW=x.textW+10;
       if(k<3.2)return x.screenW>Math.max(100,minW*1.65)&&x.screenH>32;
       if(k<5.2)return x.screenW>Math.max(70,minW*1.25)&&x.screenH>24;
       if(k<8)return x.screenW>Math.max(52,minW)&&x.screenH>18;
       return x.screenW>Math.max(34,minW*.72)&&x.screenH>13;
     }).sort((a,b)=>b.priority-a.priority);
     const accepted=[],visible=new Set();
     for(const x of candidates){const box={x1:x.screenX-x.textW/2,y1:x.screenY-8,x2:x.screenX+x.textW/2,y2:x.screenY+8};if(!accepted.some(a=>labelBoxesOverlap(box,a))){accepted.push(box);visible.add(String(Number(x.d.id)))}}
     labels.style('display',d=>visible.has(String(Number(d.id)))?'block':'none').style('font-size',`${12/k}px`).style('stroke-width',`${3/k}px`);
   }
   const markers=g.selectAll('.subcountry-marker');
   markers.style('display',k>=4.8?'block':'none');
   markers.select('circle').attr('r',6/k).style('stroke-width',`${2/k}px`);
   markers.select('text').style('font-size',`${12/k}px`).style('stroke-width',`${3/k}px`).attr('x',d=>(d.mapLabelSide==='left'?-10:10)/k).attr('dy',`${4/k}px`);
 }
 const zoom=d3.zoom().scaleExtent([1,18]).on('zoom',e=>{g.attr('transform',e.transform);updateLabels(e.transform)});
 svg.call(zoom).on('dblclick.zoom',null);mapState={svg,g,zoom,projection,path};
 function showTip(e,html){tooltip.classed('show',true).html(html);const rect=node.parentNode.getBoundingClientRect();tooltip.style('left',`${Math.min(e.clientX-rect.left+14,rect.width-205)}px`).style('top',`${Math.max(10,e.clientY-rect.top-12)}px`)}
 fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json()).then(world=>{
   const feats=topojson.feature(world,world.objects.countries).features;
   readFeatures=feats.filter(d=>groupFor(d).length);
   g.selectAll('path').data(feats).join('path').attr('d',path)
    .attr('class',d=>`country-shape ${groupFor(d).length?'read':''}`)
    .style('cursor',d=>groupFor(d).length?'pointer':'grab')
    .on('mouseenter',(e,d)=>{const a=groupFor(d);if(!a.length)return;showTip(e,a.length===1?`<b>${esc(a[0].name)}</b><small>Reading #${a[0].readOrder} · Click to open</small>`:`<b>United Kingdom</b><small>${a.length} reading entries · Click to zoom in</small>`)})
    .on('mousemove',(e,d)=>{if(groupFor(d).length)showTip(e,groupFor(d).length===1?`<b>${esc(groupFor(d)[0].name)}</b><small>Reading #${groupFor(d)[0].readOrder} · Click to open</small>`:`<b>United Kingdom</b><small>${groupFor(d).length} reading entries · Click to zoom in</small>`)})
    .on('mouseleave',()=>tooltip.classed('show',false))
    .on('click',(e,d)=>{const a=groupFor(d);if(a.length===1)return go(`#country=${a[0].slug}&level=${preferredLevel(a[0])}`);if(a.length>1){const b=path.bounds(d),cx=(b[0][0]+b[1][0])/2,cy=(b[0][1]+b[1][1])/2;const target=Math.min(10,Math.max(5.6,.72/Math.max((b[1][0]-b[0][0])/w,(b[1][1]-b[0][1])/h)));svg.transition().duration(500).call(zoom.transform,d3.zoomIdentity.translate(w/2,h/2).scale(target).translate(-cx,-cy))}});
   g.selectAll('.map-label').data(readFeatures).join('text').attr('class','map-label').attr('transform',d=>`translate(${path.centroid(d)})`).attr('text-anchor','middle').attr('dy','.35em').style('display','none').text(labelFor);
   const markerData=ukChildren.map(c=>({...c,mapLabelSide:(c.slug==='wales'||c.slug==='northern-ireland')?'left':'right'}));
   const mg=g.selectAll('.subcountry-marker').data(markerData).join('g').attr('class','subcountry-marker').attr('transform',d=>{const p=projection(d.mapPoint);return `translate(${p[0]},${p[1]})`}).style('display','none')
    .on('mouseenter',(e,d)=>showTip(e,`<b>${esc(d.name)}</b><small>Reading #${d.readOrder} · Click to open ${preferredLevel(d)}</small>`)).on('mousemove',(e,d)=>showTip(e,`<b>${esc(d.name)}</b><small>Reading #${d.readOrder} · Click to open ${preferredLevel(d)}</small>`)).on('mouseleave',()=>tooltip.classed('show',false)).on('click',(e,d)=>{e.stopPropagation();go(`#country=${d.slug}&level=${preferredLevel(d)}`)});
   mg.append('circle');mg.append('text').attr('text-anchor',d=>d.mapLabelSide==='left'?'end':'start').text(d=>d.name);
   updateLabels(d3.zoomIdentity);
 });
}
function mapZoom(f){if(!mapState.svg)return;mapState.svg.transition().duration(250).call(mapState.zoom.scaleBy,f)}function mapReset(){if(!mapState.svg)return;mapState.svg.transition().duration(350).call(mapState.zoom.transform,d3.zoomIdentity)}
function mapPage(){const content=`<section class="page-pad"><div class="eyebrow">Interactive world map</div><h1 class="page-title">Zoom Your Reading Map</h1><p style="color:var(--muted);max-width:760px;line-height:1.7">Dark countries are already in your archive. Drag the map, use the wheel or buttons to zoom, and once you zoom in far enough the names of your read countries appear. Click a highlighted country to open its richest available guide.</p></section><section class="section"><div class="map-card" style="min-height:650px"><svg id="mapSvg" style="min-height:650px"></svg><div class="legend"><div><span class="swatch read"></span>Read</div><div><span class="swatch"></span>Not yet read</div><small>Labels appear after zooming in</small></div><div class="map-tools"><button onclick="mapZoom(1.45)">+</button><button onclick="mapZoom(.69)">−</button><button onclick="mapReset()">↺</button></div></div></section>`;shell(content,'Map');renderMap()}
function journey(){const list=[...COUNTRIES].sort((a,b)=>a.readOrder-b.readOrder);const content=`<section class="page-pad"><div class="eyebrow">Chronological reading path</div><h1 class="page-title">My Country Journey</h1><p style="color:var(--muted)">Only countries you have already read appear here. New countries can be appended later without changing the old order.</p></section><div class="journey-list">${list.map(c=>`<div class="journey-item" onclick="go('#country=${c.slug}&level=${preferredLevel(c)}')"><span class="n">#${c.readOrder}</span><b>${esc(c.name)}</b><small style="color:var(--muted)">${esc(c.region)}</small></div>`).join('')}</div>`;shell(content,'Journey')}
function render(){const h=location.hash||'#home';if(h.startsWith('#country=')){const p=new URLSearchParams(h.slice(1));return country(p.get('country'),p.get('level')||'B1')}if(h.startsWith('#article=')){const slug=h.split('=')[1];return country(slug,'B1')}if(h==='#library'||h==='#articles')return library();if(h==='#map')return mapPage();if(h==='#journey')return journey();return home()}
window.addEventListener('hashchange',render);window.addEventListener('DOMContentLoaded',render);window.mapZoom=mapZoom;window.mapReset=mapReset;window.toggleTheme=toggleTheme;window.setWordHelp=setWordHelp;window.showWordPopup=showWordPopup;window.closeWordPopup=closeWordPopup;window.copyArticle=copyArticle;
