
const app=document.getElementById('app');
const bySlug=Object.fromEntries(COUNTRIES.map(c=>[c.slug,c]));
const byMapIdGroups={};COUNTRIES.forEach(c=>{const id=String(Number(c.mapId));(byMapIdGroups[id]??=[]).push(c)});
document.documentElement.dataset.theme='dark';
localStorage.removeItem('ecra-theme');
const savedWordHelp=localStorage.getItem('ecra-word-help')==='on';
const state={region:'All',query:'',page:1,perPage:12,display:'all',theme:'dark',wordHelp:savedWordHelp,menuOpen:false};
const imgCache=new Map();
const LEARNING_WORD_BANK=[{"word":"heritage","zh":"文化遗产","kk":"/ˈhɛrɪtɪdʒ/","level":3},{"word":"architecture","zh":"建筑","kk":"/ˈɑrkəˌtɛktʃɚ/","level":3},{"word":"infrastructure","zh":"基础设施","kk":"/ˈɪnfrəˌstrʌktʃɚ/","level":3},{"word":"multilingual","zh":"多语言的","kk":"/ˌmʌltɪˈlɪŋgwəl/","level":3},{"word":"bilingual","zh":"双语的","kk":"/baɪˈlɪŋgwəl/","level":2},{"word":"identity","zh":"认同","kk":"/aɪˈdɛntətɪ/","level":3},{"word":"regional","zh":"地区的","kk":"/ˈridʒənəl/","level":2},{"word":"settlement","zh":"聚落","kk":"/ˈsɛtəlmənt/","level":3},{"word":"agriculture","zh":"农业","kk":"/ˈægrɪˌkʌltʃɚ/","level":3},{"word":"manufacturing","zh":"制造业","kk":"/ˌmænjəˈfæktʃərɪŋ/","level":3},{"word":"industrial","zh":"工业的","kk":"/ɪnˈdʌstrɪəl/","level":2},{"word":"industry","zh":"产业","kk":"/ˈɪndəstrɪ/","level":2},{"word":"technology","zh":"科技","kk":"/tɛkˈnɑlədʒɪ/","level":2},{"word":"economy","zh":"经济","kk":"/ɪˈkɑnəmɪ/","level":3},{"word":"constitution","zh":"宪法","kk":"/ˌkɑnstəˈtuʃən/","level":3},{"word":"democracy","zh":"民主制度","kk":"/dɪˈmɑkrəsɪ/","level":3},{"word":"neutrality","zh":"中立","kk":"/nuˈtrælətɪ/","level":3},{"word":"federal","zh":"联邦的","kk":"/ˈfɛdərəl/","level":3},{"word":"government","zh":"政府","kk":"/ˈgʌvɚnmənt/","level":2},{"word":"republic","zh":"共和国","kk":"/rɪˈpʌblɪk/","level":2},{"word":"revolution","zh":"革命","kk":"/ˌrɛvəˈluʃən/","level":3},{"word":"empire","zh":"帝国","kk":"/ˈɛmpaɪr/","level":2},{"word":"kingdom","zh":"王国","kk":"/ˈkɪŋdəm/","level":2},{"word":"royal","zh":"王室的","kk":"/ˈrɔɪəl/","level":2},{"word":"migration","zh":"迁移","kk":"/maɪˈgreʃən/","level":3},{"word":"immigration","zh":"移民","kk":"/ˌɪməˈgreʃən/","level":3},{"word":"environment","zh":"环境","kk":"/ɪnˈvaɪrənmənt/","level":2},{"word":"resource","zh":"资源","kk":"/ˈrisɔrs/","level":2},{"word":"precision","zh":"精密","kk":"/prɪˈsɪʒən/","level":3},{"word":"engineering","zh":"工程","kk":"/ˌɛndʒəˈnɪrɪŋ/","level":3},{"word":"tradition","zh":"传统","kk":"/trəˈdɪʃən/","level":2},{"word":"traditional","zh":"传统的","kk":"/trəˈdɪʃənəl/","level":2},{"word":"culture","zh":"文化","kk":"/ˈkʌltʃɚ/","level":2},{"word":"festival","zh":"节庆","kk":"/ˈfɛstəvəl/","level":2},{"word":"celebration","zh":"庆典","kk":"/ˌsɛləˈbreɪʃən/","level":2},{"word":"ceremony","zh":"仪式","kk":"/ˈsɛrəˌmonɪ/","level":3},{"word":"community","zh":"社区","kk":"/kəˈmjunətɪ/","level":2},{"word":"hospitality","zh":"待客文化","kk":"/ˌhɑspəˈtælətɪ/","level":3},{"word":"custom","zh":"习俗","kk":"/ˈkʌstəm/","level":2},{"word":"ritual","zh":"仪式","kk":"/ˈrɪtʃuəl/","level":3},{"word":"seasonal","zh":"季节性的","kk":"/ˈsizənəl/","level":2},{"word":"symbol","zh":"象征","kk":"/ˈsɪmbəl/","level":2},{"word":"distinctive","zh":"有特色的","kk":"/dɪˈstɪŋktɪv/","level":3},{"word":"influence","zh":"影响","kk":"/ˈɪnfluəns/","level":2},{"word":"preserve","zh":"保存","kk":"/prɪˈzɝv/","level":3},{"word":"protect","zh":"保护","kk":"/prəˈtɛkt/","level":2},{"word":"connect","zh":"连接","kk":"/kəˈnɛkt/","level":1},{"word":"develop","zh":"发展","kk":"/dɪˈvɛləp/","level":2},{"word":"support","zh":"支持","kk":"/səˈpɔrt/","level":1},{"word":"gather","zh":"聚集","kk":"/ˈgæðɚ/","level":2},{"word":"celebrate","zh":"庆祝","kk":"/ˈsɛləˌbret/","level":1},{"word":"decorate","zh":"装饰","kk":"/ˈdɛkəˌret/","level":2},{"word":"share","zh":"分享","kk":"/ʃɛr/","level":1},{"word":"ancient","zh":"古代的","kk":"/ˈenʃənt/","level":2},{"word":"medieval","zh":"中世纪的","kk":"/ˌmɪdɪˈivəl/","level":3},{"word":"historic","zh":"历史悠久的","kk":"/hɪˈstɔrɪk/","level":2},{"word":"history","zh":"历史","kk":"/ˈhɪstərɪ/","level":1},{"word":"modern","zh":"现代的","kk":"/ˈmɑdɚn/","level":1},{"word":"urban","zh":"城市的","kk":"/ˈɝbən/","level":2},{"word":"rural","zh":"乡村的","kk":"/ˈrʊrəl/","level":2},{"word":"public","zh":"公共的","kk":"/ˈpʌblɪk/","level":1},{"word":"social","zh":"社会的","kk":"/ˈsoʃəl/","level":2},{"word":"political","zh":"政治的","kk":"/pəˈlɪtɪkəl/","level":2},{"word":"religious","zh":"宗教的","kk":"/rɪˈlɪdʒəs/","level":2},{"word":"religion","zh":"宗教","kk":"/rɪˈlɪdʒən/","level":2},{"word":"language","zh":"语言","kk":"/ˈlæŋgwɪdʒ/","level":1},{"word":"literature","zh":"文学","kk":"/ˈlɪtərətʃɚ/","level":3},{"word":"poetry","zh":"诗歌","kk":"/ˈpoətrɪ/","level":2},{"word":"performance","zh":"表演","kk":"/pɚˈfɔrməns/","level":2},{"word":"geography","zh":"地理","kk":"/dʒiˈɑgrəfɪ/","level":2},{"word":"landscape","zh":"地景","kk":"/ˈlændskeɪp/","level":2},{"word":"mountain","zh":"山","kk":"/ˈmaʊntən/","level":1},{"word":"valley","zh":"山谷","kk":"/ˈvælɪ/","level":1},{"word":"river","zh":"河流","kk":"/ˈrɪvɚ/","level":1},{"word":"coast","zh":"海岸","kk":"/kost/","level":1},{"word":"coastal","zh":"沿海的","kk":"/ˈkostəl/","level":2},{"word":"island","zh":"岛屿","kk":"/ˈaɪlənd/","level":1},{"word":"forest","zh":"森林","kk":"/ˈfɔrɪst/","level":1},{"word":"desert","zh":"沙漠","kk":"/ˈdɛzɚt/","level":1},{"word":"climate","zh":"气候","kk":"/ˈklaɪmɪt/","level":2},{"word":"plain","zh":"平原","kk":"/plen/","level":2},{"word":"plateau","zh":"高原","kk":"/plæˈto/","level":2},{"word":"wetland","zh":"湿地","kk":"/ˈwɛtlænd/","level":2},{"word":"border","zh":"边境","kk":"/ˈbɔrdɚ/","level":1},{"word":"capital","zh":"首都","kk":"/ˈkæpətəl/","level":1},{"word":"population","zh":"人口","kk":"/ˌpɑpjəˈleʃən/","level":2},{"word":"route","zh":"路线","kk":"/rut/","level":1},{"word":"water","zh":"水","kk":"/ˈwɔtɚ/","level":1},{"word":"canal","zh":"运河","kk":"/kəˈnæl/","level":1},{"word":"dike","zh":"堤坝","kk":"/daɪk/","level":2},{"word":"tunnel","zh":"隧道","kk":"/ˈtʌnəl/","level":1},{"word":"bridge","zh":"桥","kk":"/brɪdʒ/","level":1},{"word":"road","zh":"道路","kk":"/rod/","level":1},{"word":"street","zh":"街道","kk":"/strit/","level":1},{"word":"square","zh":"广场","kk":"/skwɛr/","level":1},{"word":"fortress","zh":"堡垒","kk":"/ˈfɔrtrəs/","level":2},{"word":"castle","zh":"城堡","kk":"/ˈkæsəl/","level":1},{"word":"palace","zh":"宫殿","kk":"/ˈpæləs/","level":2},{"word":"monastery","zh":"修道院","kk":"/ˈmɑnəˌstɛrɪ/","level":3},{"word":"church","zh":"教堂","kk":"/tʃɝtʃ/","level":1},{"word":"temple","zh":"寺庙","kk":"/ˈtɛmpəl/","level":1},{"word":"mosque","zh":"清真寺","kk":"/mɑsk/","level":2},{"word":"building","zh":"建筑物","kk":"/ˈbɪldɪŋ/","level":1},{"word":"stone","zh":"石材","kk":"/ston/","level":1},{"word":"wooden","zh":"木制的","kk":"/ˈwʊdən/","level":1},{"word":"market","zh":"市场","kk":"/ˈmɑrkɪt/","level":1},{"word":"trade","zh":"贸易","kk":"/tred/","level":2},{"word":"craft","zh":"手工艺","kk":"/kræft/","level":2},{"word":"carpet","zh":"地毯","kk":"/ˈkɑrpɪt/","level":1},{"word":"embroidery","zh":"刺绣","kk":"/ɛmˈbrɔɪdərɪ/","level":3},{"word":"weaving","zh":"编织","kk":"/ˈwivɪŋ/","level":2},{"word":"design","zh":"设计","kk":"/dɪˈzaɪn/","level":2},{"word":"pattern","zh":"图案","kk":"/ˈpætɚn/","level":2},{"word":"music","zh":"音乐","kk":"/ˈmjuzɪk/","level":1},{"word":"dance","zh":"舞蹈","kk":"/dæns/","level":1},{"word":"film","zh":"电影","kk":"/fɪlm/","level":1},{"word":"family","zh":"家庭","kk":"/ˈfæməlɪ/","level":1},{"word":"transport","zh":"交通","kk":"/ˈtrænspɔrt/","level":2},{"word":"railway","zh":"铁路","kk":"/ˈrelˌwe/","level":2},{"word":"cycling","zh":"骑自行车","kk":"/ˈsaɪklɪŋ/","level":1},{"word":"farm","zh":"农场","kk":"/fɑrm/","level":1},{"word":"farming","zh":"农业活动","kk":"/ˈfɑrmɪŋ/","level":1},{"word":"harvest","zh":"收成","kk":"/ˈhɑrvɪst/","level":2},{"word":"food","zh":"食物","kk":"/fud/","level":1},{"word":"bread","zh":"面包","kk":"/brɛd/","level":1},{"word":"cheese","zh":"奶酪","kk":"/tʃiz/","level":1},{"word":"coffee","zh":"咖啡","kk":"/ˈkɔfɪ/","level":1},{"word":"tea","zh":"茶","kk":"/ti/","level":1},{"word":"wine","zh":"葡萄酒","kk":"/waɪn/","level":1},{"word":"chocolate","zh":"巧克力","kk":"/ˈtʃɔklɪt/","level":1},{"word":"beer","zh":"啤酒","kk":"/bɪr/","level":1},{"word":"spring","zh":"春天","kk":"/sprɪŋ/","level":1},{"word":"winter","zh":"冬天","kk":"/ˈwɪntɚ/","level":1},{"word":"season","zh":"季节","kk":"/ˈsizən/","level":1},{"word":"official","zh":"官方的","kk":"/əˈfɪʃəl/","level":2},{"word":"visitor","zh":"游客","kk":"/ˈvɪzətɚ/","level":1},{"word":"handmade","zh":"手工制作的","kk":"/ˌhændˈmed/","level":2},{"word":"waffle","zh":"华夫饼","kk":"/ˈwɑfəl/","level":1},{"word":"comic","zh":"漫画","kk":"/ˈkɑmɪk/","level":1},{"word":"football","zh":"足球","kk":"/ˈfʊtˌbɔl/","level":1},{"word":"team","zh":"队伍","kk":"/tim/","level":1},{"word":"favorite","zh":"最喜欢的","kk":"/ˈfevərɪt/","level":1},{"word":"fried","zh":"油炸的","kk":"/fraɪd/","level":1},{"word":"kilt","zh":"苏格兰裙","kk":"/kɪlt/","level":2},{"word":"tartan","zh":"格纹呢料","kk":"/ˈtɑrtən/","level":2},{"word":"bagpipe","zh":"风笛","kk":"/ˈbægˌpaɪp/","level":2},{"word":"whisky","zh":"威士忌","kk":"/ˈwɪskɪ/","level":1},{"word":"rugby","zh":"橄榄球","kk":"/ˈrʌgbɪ/","level":1},{"word":"singing","zh":"歌唱","kk":"/ˈsɪŋɪŋ/","level":1},{"word":"shipbuilding","zh":"造船业","kk":"/ˈʃɪpˌbɪldɪŋ/","level":2},{"word":"breakfast","zh":"早餐","kk":"/ˈbrɛkfəst/","level":1},{"word":"pub","zh":"酒馆","kk":"/pʌb/","level":1},{"word":"hill","zh":"丘陵","kk":"/hɪl/","level":1},{"word":"lake","zh":"湖泊","kk":"/lek/","level":1},{"word":"field","zh":"田野","kk":"/fild/","level":1},{"word":"sign","zh":"标志","kk":"/saɪn/","level":1}];

function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function flag(c){return `https://flagcdn.com/w160/${c.flag}.png`}
function go(h){location.hash=h;scrollTo({top:0,behavior:'smooth'})}
function themeLabel(){return 'Dark'}
function themeIcon(){return '☾'}
function toggleTheme(){document.documentElement.dataset.theme='dark'}
const MAP_NAME_ALIASES={kosovo:['Kosovo']};
const byMapNameGroups={};
COUNTRIES.forEach(c=>{(MAP_NAME_ALIASES[c.slug]||[]).forEach(name=>{(byMapNameGroups[name.toLowerCase()]??=[]).push(c)})});
const SMALL_COUNTRY_MARKERS=[
 {slug:'luxembourg',mapPoint:[6.13,49.82],mapLabelSide:'right'},
 {slug:'belgium',mapPoint:[4.47,50.67],mapLabelSide:'left'},
 {slug:'netherlands',mapPoint:[5.30,52.13],mapLabelSide:'right'},
 {slug:'kosovo',mapPoint:[21.05,42.67],mapLabelSide:'right'},
 {slug:'vatican-city',mapPoint:[12.4534,41.9029],mapLabelSide:'right'},
 {slug:'malta',mapPoint:[14.3754,35.9375],mapLabelSide:'right'},
 {slug:'san-marino',mapPoint:[12.4578,43.9424],mapLabelSide:'right'}
];
const SITE_SECTIONS = [
 {label:'Single Sentence',navLabel:'Single Sentence',zh:'單句練習',hash:'sentences',key:'Sentence'},
 {label:'Conversation',navLabel:'Conversation',zh:'生活對話',hash:'dialogues',key:'Conversation'},
 {label:'Translation',navLabel:'Translation',zh:'翻譯練習',hash:'translations',key:'Translation'},
 {label:'Review',navLabel:'Review',zh:'複習練習',hash:'review-practice',key:'Review'},
 {label:'Reading',navLabel:'Reading',zh:'閱讀專區',hash:'reading',key:'Reading'},
 {label:'Historical Materials',navLabel:'Historical Materials',zh:'歷史教材',hash:'history',key:'History'},
 {label:'Word Zone',navLabel:'Word Zone',zh:'單字專區',hash:'words',key:'Words'},
 {label:'Idioms & Slang',navLabel:'Idioms & Slang',zh:'俚語專區',hash:'idioms',key:'Idioms'}
];
function brandmarkSvg(){return '<img src="favicon.svg" width="34" height="34" alt="" decoding="async">'}
function syncBodyLock(){document.body.classList.toggle('explore-open',!!state.menuOpen)}
function applyExploreState(){
 const menu=document.querySelector('.explore-menu');
 const backdrop=document.querySelector('.explore-backdrop');
 const trigger=document.querySelector('.brand-toggle');
 if(menu){menu.classList.toggle('open',!!state.menuOpen);menu.inert=!state.menuOpen}
 if(backdrop)backdrop.hidden=!state.menuOpen;
 if(trigger){trigger.classList.toggle('open',!!state.menuOpen);trigger.setAttribute('aria-expanded',state.menuOpen?'true':'false')}
 syncBodyLock();
}
function toggleExploreMenu(force){state.menuOpen=typeof force==='boolean'?force:!state.menuOpen;applyExploreState()}
function closeExploreMenu(){toggleExploreMenu(false)}
function openCountryFromMenu(slug){const c=bySlug[slug];if(!c)return;closeExploreMenu();go(`#country=${slug}&level=${preferredLevel(c)}`)}
function jumpRegion(region){state.region=region;state.page=1;closeExploreMenu();if(location.hash==='#library')library();else go('#library')}
function menuSearch(q){state.query=(q||'').trim();state.region='All';state.page=1;closeExploreMenu();if(location.hash==='#library')library();else go('#library')}
function header(active='Home'){
 const desktopLinks=SITE_SECTIONS.map(x=>`<a class="${active===x.key?'active':''}" href="#${x.hash}" ${active===x.key?'aria-current="page"':''} onclick="closeExploreMenu()"><span>${x.navLabel}</span><small>${x.zh}</small></a>`).join('');
 const mobileLinks=[{label:'Home',zh:'首頁',hash:'home',key:'Home'},...SITE_SECTIONS].map(x=>`<a class="drawer-link ${active===x.key?'active':''}" href="#${x.hash}" ${active===x.key?'aria-current="page"':''} onclick="closeExploreMenu()"><span class="mobile-nav-en">${x.label}</span><small class="mobile-nav-zh">${x.zh}</small></a>`).join('');
 return `<header class="topbar"><nav class="nav clean-nav">
  <button class="brand-toggle mobile-menu-btn" type="button" onclick="toggleExploreMenu()" aria-expanded="false" aria-label="Open menu" aria-controls="siteMenu">☰</button>
  <a class="brand" href="#home" onclick="closeExploreMenu()" aria-label="Back to home"><span class="brandmark">${brandmarkSvg()}</span><strong>${SITE.name}</strong></a>
  <div class="links desktop-main-links">${desktopLinks}</div>
 </nav>
 <div class="explore-backdrop" hidden onclick="closeExploreMenu()"></div>
 <aside id="siteMenu" class="explore-menu mobile-drawer" inert><div class="drawer-head"><div><strong>${SITE.name}</strong><small>學習選單</small></div><button onclick="closeExploreMenu()" aria-label="Close menu">×</button></div><div class="drawer-links">${mobileLinks}</div></aside>
 </header>`
}
function articleCount(){return COUNTRIES.reduce((n,c)=>n+Object.keys(c.versions||{}).length,0)}
function availableLevels(c){return ['A1','A2','B1'].filter(l=>c.versions&&c.versions[l])}
function preferredLevel(c){return c?.versions?.B1?'B1':(availableLevels(c).slice(-1)[0]||'A1')}
function levelLabel(l){return l==='A1'?'A1 Easy':l==='A2'?'A2 Standard':'B1 Deep'}
function footer(){return `<footer class="footer"><span>本網站由 <b>Han</b> 製作。內容可自由用於學習與非商業教育用途；未經授權，不得作商業使用。 · ${SITE.version}</span><small class="footer-feedback">有好的建议或发现问题？欢迎来信 <a href="mailto:fly8609507@gmail.com">fly8609507@gmail.com</a></small></footer>`}
function shell(content,active){app.innerHTML=`<div class="shell">${header(active)}<main class="main">${content}</main>${footer()}</div>`}
async function wikiImage(titles){const key=titles.join('|');if(imgCache.has(key))return imgCache.get(key);for(const title of titles){try{const u=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=700&redirects=1&titles=${encodeURIComponent(title)}`;const j=await fetch(u).then(r=>r.json());const p=Object.values(j.query?.pages||{})[0];if(p?.thumbnail?.source){const v={src:p.thumbnail.source,title};imgCache.set(key,v);return v}}catch(e){}}const v={src:'',title:titles[0]||''};imgCache.set(key,v);return v}
function hydrate(root=document){root.querySelectorAll('[data-wiki]').forEach(async el=>{if(el.dataset.loaded)return;el.dataset.loaded='1';const titles=(el.dataset.wiki||'').split('|').filter(Boolean);const r=await wikiImage(titles);if(r.src)el.src=r.src;const cap=el.closest('figure')?.querySelector('figcaption');if(cap&&r.title)cap.innerHTML=`${esc(cap.dataset.caption||r.title)} · <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/${encodeURIComponent(r.title.replaceAll(' ','_'))}">image source</a>`})}
function card(c){
 const levels=availableLevels(c);
 const today=c.publishedOn===todayString();
 return `<article class="country-card compact-practice-card ${today?'today-card':''}">
  <div class="compact-top"><span>Reading #${c.readOrder}</span><span>${esc(c.region)}</span>${today?'<em>TODAY</em>':''}</div>
  <h3>${esc(c.name)}</h3>
  <div class="level-actions">${levels.map(l=>`<button class="levelbtn ${l.toLowerCase()}" onclick="go('#country=${c.slug}&level=${l}')">${l}</button>`).join('')}</div>
 </article>`
}
function stat(n,l){return `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`}
let readingLevelState='All',readingSortState='Newest';
function readingTopicNav(active='country'){
 const items=[
  ['Country & Culture','国家与文化','#reading','country'],
  ['Business & Current Affairs','商业时事','#reading-business','business'],
  ['Encyclopedia Articles','百科文章','#reading-encyclopedia','encyclopedia'],
  ['Live Reading Feedback','即時反饋朗讀','#live-reading','live-reading']
 ];
 return `<div class="reading-topic-tabs">${items.map(([en,zh,route,key])=>`<button class="${active===key?'active':''}" onclick="go('${route}')"><b>${en}</b><span>${zh}</span></button>`).join('')}</div>`
}
function countryReadingNav(active='countries'){
 return `<div class="reading-subtabs"><button class="${active==='countries'?'active':''}" onclick="go('#reading')">Countries</button><button class="${active==='map'?'active':''}" onclick="go('#map')">Map</button><button class="${active==='journey'?'active':''}" onclick="go('#journey')">Journey</button></div>`
}
function sortSelect(current,handler){
 return `<select class="sort-select" onchange="${handler}(this.value)"><option value="Newest" ${current==='Newest'?'selected':''}>Newest</option><option value="Oldest" ${current==='Oldest'?'selected':''}>Oldest</option></select>`
}
function readingPlaceholder(kind){
 const isBusiness=kind==='business';
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Reading</div><h1 class="page-title">Reading</h1>${readingTopicNav(kind)}</section>
 <section class="reading-placeholder"><div class="placeholder-mark">${isBusiness?'B':'E'}</div><h2>${isBusiness?'Business & Current Affairs':'Encyclopedia Articles'}</h2><p>${isBusiness?'商业时事':'百科文章'}</p><span>Coming later</span></section>`;
 shell(content,'Reading')
}
function todayString(){return taipeiDateString()}
function currentMonthString(){return todayString().slice(0,7)}
function latestPracticeBatchDate(){
 const p=practiceCatalog();
 return [...(p.sentencePractice||[]),...(p.dialogues||[]),...(p.translations||[])]
  .map(x=>String(x?.publishedOn||'').trim()).filter(Boolean).sort().slice(-1)[0]||''
}
function isTodayItem(item){const latest=latestPracticeBatchDate();return !!latest&&item?.publishedOn===latest}
function reviewCatalog(){return window.REVIEW_CATALOG||{version:'',themes:[],courses:[],excludeFromCurrentMonth:[]}}
function reviewExcludedIds(){return new Set(reviewCatalog().excludeFromCurrentMonth||[])}
function currentMonthItems(items){
 const month=currentMonthString(),latest=latestPracticeBatchDate(),excluded=reviewExcludedIds();
 return (items||[]).filter(x=>{
  const date=String(x?.publishedOn||'');
  return !!date&&(date.slice(0,7)===month||date===latest)&&!excluded.has(x.id)
 })
}
function currentMonthSentenceItems(){return currentMonthItems(practiceCatalog().sentencePractice||[])}
function currentMonthDialogueItems(){return currentMonthItems(practiceCatalog().dialogues||[])}
function currentMonthTranslationItems(){return currentMonthItems(practiceCatalog().translations||[])}
function currentMonthCode(item,items){
 const same=(items||[]).filter(x=>x.level===item.level);
 const i=same.findIndex(x=>x.id===item.id);
 return `${item.level}-${i>=0?i+1:'?'}`
}
function catchUpTodayItems(items){
 const latest=latestPracticeBatchDate();
 return latest?(items||[]).filter(x=>x?.publishedOn===latest):[]
}
function practiceLibraryTabs(current,handler,sort){
 const tabs=['Today','All','A1','A2','B1'];
 return `<div class="library-control-row"><div class="dialogue-level-tabs monthly-practice-tabs">${tabs.map(l=>`<button class="tab ${current===l?'active':''}" onclick="${handler}('${l}','${sort}')">${l==='Today'?'TODAY':l==='All'?'ALL':l}</button>`).join('')}</div>${sortSelect(sort,handler.replace('Library','Sort'))}</div>`
}
function monthlyLibraryBody(all,level,sort,codeFn,routeKey,cardFn,gridClass){
 const catchUp=catchUpTodayItems(all);
 const catchUpIds=new Set(catchUp.map(x=>x.id));
 if(level==='Today'){
  return catchUp.length?quickPracticeIndex(catchUp,codeFn,routeKey,sort,true):`<div class="monthly-empty"><b>No new practice yet today.</b><span>今天的新教材加入后，会自动显示在这里。</span></div>`
 }
 if(level==='All'){
  const older=all.filter(x=>!catchUpIds.has(x.id));
  return older.length?quickPracticeIndex(older,codeFn,routeKey,sort):`<div class="monthly-empty"><b>No earlier lessons this month yet.</b></div>`
 }
 let list=all.filter(x=>x.level===level);
 if(sort==='Newest')list=[...list].reverse();
 return `<div class="${gridClass} compact-grid">${list.map(cardFn).join('')}</div>`
}
function home(){
 const content=`<section class="minimal-home home-eight">
  <section id="partySlot" class="party-slot" hidden></section>
  <div class="home-practice-grid">${SITE_SECTIONS.map(x=>`<a class="home-practice-card" href="#${x.hash}"><b>${x.label}</b><small>${x.zh}</small></a>`).join('')}</div>
  <section class="home-guide" aria-labelledby="homeGuideTitle"><div class="home-guide-heading"><h2 id="homeGuideTitle">Getting Started</h2><p>使用指南</p></div><div class="home-guide-body"></div></section>
 </section>`;
 shell(content,'Home');hydratePartySlot()
}
const PRONUNCIATION_REVIEW_URL='https://script.google.com/macros/s/AKfycbzGC2SvGeAqysemBAFtiPH6euf0kic1EHqkpOw-hSVFQA_UoHW-2xqsWy7BwceOU2Vt/exec';
function openPronunciationGate(){
 const dialog=document.getElementById('pronunciationGate');
 const input=document.getElementById('pronunciationPassword');
 const error=document.getElementById('pronunciationPasswordError');
 if(!dialog||!input||!error)return;
 input.value='';input.removeAttribute('aria-invalid');error.textContent='';error.classList.remove('show');
 if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
 requestAnimationFrame(()=>input.focus());
}
function closePronunciationGate(){
 const dialog=document.getElementById('pronunciationGate');
 if(!dialog)return;
 if(typeof dialog.close==='function'&&dialog.open)dialog.close();else dialog.removeAttribute('open');
}
function submitPronunciationGate(event){
 event.preventDefault();
 const input=document.getElementById('pronunciationPassword');
 const error=document.getElementById('pronunciationPasswordError');
 if(!input||!error)return false;
 if(input.value!=='1010'){
  input.setAttribute('aria-invalid','true');error.textContent='Password incorrect · 密碼錯誤';error.classList.add('show');input.select();return false;
 }
 window.open(PRONUNCIATION_REVIEW_URL,'_blank','noopener,noreferrer');
 closePronunciationGate();
 return false;
}
function wordZone(){
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Vocabulary</div><h1 class="page-title">Word Zone</h1><div class="detail-title-zh">單字專區</div></section>
 <section class="section word-zone"><div class="word-zone-actions"><a class="zone-action" href="#word-list"><b>Word List</b><small>單字表</small></a><button class="zone-action" type="button" onclick="openPronunciationGate()" aria-haspopup="dialog" aria-controls="pronunciationGate"><b>Pronunciation &amp; Review</b><small>發音與複習系統</small></button><a class="zone-action" href="#chunks"><b>English Chunks</b><small>語塊區</small></a></div></section>
 <dialog id="pronunciationGate" class="access-dialog" aria-labelledby="pronunciationGateTitle"><div class="access-dialog-head"><div><h2 id="pronunciationGateTitle">Pronunciation &amp; Review</h2><p>發音與複習系統</p></div><button class="access-dialog-close" type="button" onclick="closePronunciationGate()" aria-label="Close password window">×</button></div><form class="access-dialog-form" onsubmit="return submitPronunciationGate(event)"><label for="pronunciationPassword"><b>Enter password</b><span>請輸入密碼</span></label><input id="pronunciationPassword" class="access-dialog-input" type="password" inputmode="numeric" maxlength="4" autocomplete="off" aria-describedby="pronunciationPasswordError"><p id="pronunciationPasswordError" class="access-dialog-error" role="alert" aria-live="polite"></p><button class="access-dialog-submit" type="submit">Open system <span>開啟系統</span></button></form></dialog>`;
 shell(content,'Words')
}
let wordListDataPromise=null;
function loadWordListData(){
 if(window.WORD_LIST_DATA)return Promise.resolve(window.WORD_LIST_DATA);
 if(wordListDataPromise)return wordListDataPromise;
 wordListDataPromise=new Promise((resolve,reject)=>{
  const script=document.createElement('script');script.src='word-list-data.js';
  script.onload=()=>{if(window.WORD_LIST_DATA)resolve(window.WORD_LIST_DATA);else{script.remove();wordListDataPromise=null;reject(new Error('Word list unavailable'))}};
  script.onerror=()=>{script.remove();wordListDataPromise=null;reject(new Error('Word list unavailable'))};
  document.head.appendChild(script)
 });
 return wordListDataPromise
}
function wordListPageLink(page,label,current=false){return `<a href="#word-list&page=${page}" ${current?'aria-current="page"':''}>${label}</a>`}
function wordListPagination(page,totalPages){
 const nearby=new Set([1,totalPages]);for(let n=page-2;n<=page+2;n++)if(n>=1&&n<=totalPages)nearby.add(n);
 let previous=0;const links=[...nearby].sort((a,b)=>a-b).map(n=>{const gap=previous&&n>previous+1?'<span class="word-page-gap" aria-hidden="true">…</span>':'';previous=n;return gap+wordListPageLink(n,n,n===page)}).join('');
 return `<nav class="word-pagination" aria-label="Word list pages">${page>1?wordListPageLink(page-1,'← Previous'):'<span class="word-page-disabled">← Previous</span>'}<div class="word-page-numbers">${links}</div>${page<totalPages?wordListPageLink(page+1,'Next →'):'<span class="word-page-disabled">Next →</span>'}</nav>`
}
function wordTableRow(word){
 const detail=(label,zh,text,className)=>text?`<div class="word-detail-line ${className}"><span class="word-field-label">${label}<small>${zh}</small></span><p>${esc(text)}</p></div>`:'';
 return `<tr id="word-${esc(word.id)}"><th scope="row" class="word-name-cell"><span class="word-record-number">${word.number}</span><strong>${esc(word.word)}</strong><span class="word-mobile-kk">${esc(word.kk)}</span><span class="word-part-of-speech">${esc(word.pos)}</span><span class="word-topic">${esc(word.topic)}</span></th><td class="word-kk-cell">${esc(word.kk)}</td><td class="word-meaning-cell">${esc(word.meaning)}</td><td class="word-detail-cell"><p class="word-mobile-meaning">${esc(word.meaning)}</p>${detail('Usage','用法',word.usage,'word-usage')}${detail('Example','例句',word.example,'word-example')}${detail('Forms','其他變化',word.forms,'word-forms')}${detail('Note','註解',word.note,'word-note')}</td></tr>`
}
async function wordList(requestedPage=1){
 const head=`<section class="page-pad practice-page-head word-list-head"><div class="breadcrumbs"><a href="#words">Word Zone</a> / Word List</div><h1 class="page-title">Word List</h1><div class="detail-title-zh">單字表</div></section>`;
 if(!window.WORD_LIST_DATA){
  const route=location.hash;shell(`${head}<section class="section word-list-section"><p role="status">Loading word list…</p></section>`,'Words');
  try{await loadWordListData()}catch(error){if(location.hash===route)shell(`${head}<section class="section word-list-section"><p role="status">Unable to load the word list. · 單字表暫時無法載入。</p><button type="button" class="word-retry" onclick="wordList(${Math.max(1,Number(requestedPage)||1)})">Retry · 重試</button></section>`,'Words');return}
  if(location.hash!==route)return
 }
 const words=window.WORD_LIST_DATA.words||[],perPage=30,totalPages=Math.max(1,Math.ceil(words.length/perPage));
 const page=Math.max(1,Math.min(totalPages,Math.floor(Number(requestedPage)||1))),start=(page-1)*perPage,visible=words.slice(start,start+perPage);
 const content=`${head}<section class="section word-list-section"><div class="word-list-meta"><span><b>${words.length}</b> words <small>單字</small></span><span>${start+1}–${start+visible.length} / ${words.length}</span></div><div class="word-table-wrap"><table class="word-table"><caption class="word-table-caption">Vocabulary · 單字表</caption><colgroup><col class="word-col-name"><col class="word-col-kk"><col class="word-col-meaning"><col class="word-col-detail"></colgroup><thead><tr><th scope="col">Word<small>單字</small></th><th scope="col" class="word-kk-cell">KK<small>KK 音標</small></th><th scope="col" class="word-meaning-cell">Meaning<small>中文意思</small></th><th scope="col">Usage &amp; Example<small class="word-desktop-heading">用法與例句</small><small class="word-mobile-heading">意思與用法</small></th></tr></thead><tbody>${visible.map(wordTableRow).join('')}</tbody></table></div><div class="word-list-bottom"><span>Page ${page} of ${totalPages} · 第 ${page} / ${totalPages} 頁</span>${wordListPagination(page,totalPages)}</div></section>`;
 shell(content,'Words')
}
let chunkCatalog=null,chunkCatalogPromise=null;
const CHUNK_CATEGORY_LABELS={C1:'Core Speaking Patterns',C2:'Expressing Ideas & Opinions',C3:'Experience & Habits',C4:'Interaction & Clarification',C5:'B1 Speaking Extension'};
function loadChunkCatalog(){
 if(chunkCatalog)return Promise.resolve(chunkCatalog);
 if(chunkCatalogPromise)return chunkCatalogPromise;
 chunkCatalogPromise=fetch('chunks_50.json',{cache:'no-cache'}).then(response=>{if(!response.ok)throw new Error('Chunk data unavailable');return response.json()}).then(data=>{
  if(!Array.isArray(data?.categories)||!Array.isArray(data?.items))throw new Error('Invalid chunk data');
  chunkCatalog=data;return data
 }).catch(error=>{chunkCatalogPromise=null;throw error});
 return chunkCatalogPromise
}
function chunkCard(item){
 const note=item.usage_note_zh?`<div class="chunk-usage"><span>Usage · 用法提醒</span><p>${esc(item.usage_note_zh)}</p></div>`:'';
 return `<article class="chunk-card" id="chunk-${esc(item.id)}"><header class="chunk-card-head"><span class="chunk-number">${String(item.number).padStart(2,'0')}</span><span class="chunk-level">${esc(item.level||'')}</span></header><h3>${esc(item.chunk)}</h3><p class="chunk-meaning">${esc(item.meaning_zh)}</p><div class="chunk-example"><span>Example · 例句</span><p class="chunk-example-en">${esc(item.example_en)}</p><p class="chunk-example-zh">${esc(item.example_zh)}</p></div>${note}</article>`
}
async function chunkZone(){
 const head=`<section class="page-pad practice-page-head chunks-head"><div class="breadcrumbs"><a href="#words">Word Zone</a> / English Chunks</div><div class="eyebrow">Vocabulary · A2–B1</div><h1 class="page-title">English Chunks</h1><div class="detail-title-zh">語塊區</div></section>`;
 if(!chunkCatalog){
  const route=location.hash;shell(`${head}<section class="section chunks-section"><p role="status">Loading English chunks…</p></section>`,'Words');
  try{await loadChunkCatalog()}catch(error){if(location.hash===route)shell(`${head}<section class="section chunks-section"><p role="status">Unable to load English chunks. · 語塊資料暫時無法載入。</p><button type="button" class="word-retry" onclick="chunkZone()">Retry · 重試</button></section>`,'Words');return}
  if(location.hash!==route)return
 }
 const categories=chunkCatalog.categories||[],items=chunkCatalog.items||[];
 const categoryNav=categories.map(category=>`<button type="button" onclick="document.getElementById('chunk-category-${esc(category.id)}')?.scrollIntoView({behavior:'smooth',block:'start'})"><b>${esc(CHUNK_CATEGORY_LABELS[category.id]||category.name)}</b><small>${esc(category.name)}</small></button>`).join('');
 const groups=categories.map(category=>{
  const categoryItems=items.filter(item=>item.category_id===category.id);
  return `<section class="chunk-category" id="chunk-category-${esc(category.id)}"><header class="chunk-category-head"><div><span>${esc(category.id)}</span><h2>${esc(CHUNK_CATEGORY_LABELS[category.id]||category.name)}</h2><p>${esc(category.name)}</p></div><b>${categoryItems.length} chunks</b></header><div class="chunk-grid">${categoryItems.map(chunkCard).join('')}</div></section>`
 }).join('');
 const content=`${head}<section class="section chunks-section"><div class="chunks-summary"><span><b>${items.length}</b> chunks <small>語塊</small></span><span>${categories.length} categories · 五大分類</span></div><nav class="chunk-category-nav" aria-label="Chunk categories">${categoryNav}</nav>${groups}</section>`;
 shell(content,'Words')
}
const IDIOM_BATCH_1=[
 {number:1,phrase:'A piece of cake',meaning:'小菜一碟、輕而易舉',example:'The test was a piece of cake.',exampleZh:'考試簡單得不得了。'},
 {number:2,phrase:'Break the ice',meaning:'打破尷尬、活絡氣氛',example:'I asked a funny question to break the ice.',exampleZh:'我問了一個有趣的問題來打破尷尬。',usage:'適合初次見面、語言交換或聚會。'},
 {number:3,phrase:'Hit the road',meaning:'出發、上路',example:"It's getting late. Let's hit the road.",exampleZh:'時間不早了，我們出發吧。',usage:'常用於準備離開某地或開始旅程。'},
 {number:4,phrase:'Give me a hand',meaning:'幫我一下、搭把手',example:'Could you give me a hand with this?',exampleZh:'你可以幫我處理這個嗎？',usage:'give someone a hand，表示幫助某人；也可能表示鼓掌，需依上下文判斷。'},
 {number:5,phrase:'Under the weather',meaning:'身體不太舒服、精神不佳',example:"I'm feeling a little under the weather today.",exampleZh:'我今天感覺有點不舒服。',usage:'通常表示輕微身體不適，不特指某種疾病。'},
 {number:6,phrase:'Call it a day',meaning:'今天就到這裡、收工',example:"We've done enough. Let's call it a day.",exampleZh:'我們做得夠多了，今天就先到這裡吧。',usage:'工作、學習、練習結束時都適用。'},
 {number:7,phrase:'Out of the blue',meaning:'突然地、出乎意料地',example:'She texted me out of the blue.',exampleZh:'她突然傳訊息給我。',usage:'強調事情發生前沒有預兆。'},
 {number:8,phrase:'Spill the beans',meaning:'洩漏秘密、說溜嘴',example:'Come on, spill the beans! What happened?',exampleZh:'快說啦！到底發生什麼事？',usage:'朋友之間打聽秘密或內幕，語氣較口語。'},
 {number:9,phrase:'On the same page',meaning:'有共識、理解一致',example:"I just want to make sure we're on the same page.",exampleZh:'我只是想確認我們的理解一致。',usage:'工作討論、合作、朋友溝通都很實用。'},
 {number:10,phrase:'Hang in there',meaning:'撐住、再堅持一下',example:'I know things are tough right now. Hang in there.',exampleZh:'我知道現在很辛苦，再堅持一下。',usage:'鼓勵正在面對困難的人。'}
];
function idiomCard(item){
 return `<article class="idiom-card"><header class="idiom-card-head"><span class="idiom-number">${String(item.number).padStart(2,'0')}</span><div><h2>${esc(item.phrase)}</h2></div></header><div class="idiom-meaning"><span>中文</span><p>${esc(item.meaning)}</p></div><blockquote class="idiom-example"><span>Example · 例句</span><p class="idiom-example-en">${esc(item.example)}</p><p class="idiom-example-zh">${esc(item.exampleZh)}</p></blockquote>${item.usage?`<div class="idiom-usage"><span>Usage · 用法</span><p>${esc(item.usage)}</p></div>`:''}</article>`
}
function idiomsZone(){
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Everyday English</div><h1 class="page-title">Idioms &amp; Slang</h1><div class="detail-title-zh">俚語專區</div></section><section class="section idiom-library"><div class="idiom-batch-head"><div><span>Batch 01</span><h2>10 Practical English Idioms</h2><p>第一批 · 10 個實用英文俚語與慣用語</p></div><strong>${IDIOM_BATCH_1.length}</strong></div><div class="idiom-grid">${IDIOM_BATCH_1.map(idiomCard).join('')}</div></section>`;
 shell(content,'Idioms')
}
function filtered(){let a=[...COUNTRIES];if(state.region!=='All')a=a.filter(c=>c.region===state.region);const q=state.query.trim().toLowerCase();if(q)a=a.filter(c=>JSON.stringify(c).toLowerCase().includes(q));return a}
function library(level=readingLevelState,sort=readingSortState){
 readingLevelState=level;readingSortState=sort;
 let list=[...COUNTRIES];
 if(state.region!=='All')list=list.filter(c=>c.region===state.region);
 if(level!=='All')list=list.filter(c=>availableLevels(c).includes(level));
 list.sort((a,b)=>sort==='Newest'?b.readOrder-a.readOrder:a.readOrder-b.readOrder);
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Reading</div><h1 class="page-title">Country & Culture</h1>${readingTopicNav('country')}${countryReadingNav('countries')}</section>
 <section class="section compact-library"><div class="library-control-row"><div class="dialogue-level-tabs">${['All','A1','A2','B1'].map(l=>`<button class="tab ${level===l?'active':''}" onclick="library('${l}','${sort}')">${l}</button>`).join('')}</div>${sortSelect(sort,"setReadingSort")}</div>
 <div class="region-tabs compact-regions">${['All',...SITE.regions].map(r=>`<button class="tab ${state.region===r?'active':''}" onclick="state.region='${esc(r)}';library('${level}','${sort}')">${esc(r)}</button>`).join('')}</div>
 <div class="country-grid compact-grid">${list.map(card).join('')}</div></section>`;
 shell(content,'Reading')
}
function setReadingSort(v){readingSortState=v;library(readingLevelState,v)}
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

function articleText(v){return (v.sections||[]).map(s=>`${s.heading} ${s.en}`).join(' ').toLowerCase()}
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
 if(Array.isArray(v.learningWords))return v.learningWords;
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
function wordPron(w){return w.pronunciation||w.kk||''}
function wordPronLabel(w){return w.pronunciationLabel||'KK'}
function vocabCard(words){
 if(!words.length)return '<p class="source-note">No learning words selected for this version.</p>';
 const rows=words.map((w,i)=>`<button class="vocab-row ${i>=7?'vocab-extra':''}" type="button" onclick="showWordPopup(event,${i},'en')"><span class="vocab-en"><b>${esc(w.word)}</b><small>${esc(wordPronLabel(w))} ${esc(wordPron(w))}</small></span><span class="vocab-zh">${esc(w.zh)} <small>${esc(pinyinText(w.zh))}</small></span>${w.note?`<span class="vocab-note">${esc(w.note)}</span>`:''}</button>`).join('');
 return `<div class="vocab-list">${rows}</div>${words.length>7?`<button type="button" class="vocab-more" onclick="toggleVocabList(this)" data-total="${words.length}">Show all ${words.length}</button>`:''}`
}
function toggleVocabList(button){const list=button?.previousElementSibling;if(!list)return;const on=list.classList.toggle('expanded');button.textContent=on?'Show less':`Show all ${button.dataset.total}`}
let activeLearningWords=[];
function showWordPopup(event,index,lang='en'){
 if(event?.currentTarget?.classList.contains('learnable')&&!state.wordHelp)return;
 event?.stopPropagation();const w=activeLearningWords[index];if(!w)return;
 let pop=document.querySelector('.word-popover');if(!pop){pop=document.createElement('div');pop.className='word-popover';document.body.appendChild(pop)}
 const py=pinyinText(w.zh),pron=wordPron(w),pronLabel=wordPronLabel(w),note=w.note?`<div class="word-note">${esc(w.note)}</div>`:'';
 pop.innerHTML=lang==='zh'?`<button class="word-close" onclick="closeWordPopup()">×</button><div class="word-main">${esc(w.zh)}</div><div class="word-sub">${esc(py)}</div><div class="word-meaning"><b>${esc(w.word)}</b><span>${esc(pronLabel)} ${esc(pron)}</span>${note}</div>`:`<button class="word-close" onclick="closeWordPopup()">×</button><div class="word-main">${esc(w.word)}</div><div class="word-sub">${esc(pronLabel)} ${esc(pron)}</div><div class="word-meaning"><b>${esc(w.zh)}</b><span>${esc(py)}</span>${note}</div>`;
 pop.classList.add('show');
 const r=event?.currentTarget?.getBoundingClientRect();
 if(r){const left=Math.min(window.innerWidth-280,Math.max(12,r.left));const top=Math.min(window.innerHeight-180,Math.max(12,r.bottom+8));pop.style.left=`${left}px`;pop.style.top=`${top}px`}
}
function closeWordPopup(){document.querySelector('.word-popover')?.classList.remove('show')}
document.addEventListener('click',e=>{if(!e.target.closest('.word-popover')&&!e.target.closest('.learnable')&&!e.target.closest('.vocab-row'))closeWordPopup()});
window.addEventListener('keydown',e=>{if(e.key==='Escape'){closeWordPopup();closeExploreMenu()}});
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
 const content=`<div class="country-page ${state.wordHelp?'word-help-on':''}"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#library">Library</a> / ${esc(c.name)}</div><div class="country-header"><div><div class="eyebrow">${esc(c.region)} · Reading #${c.readOrder}</div><h1 class="country-title">${esc(v.title)}</h1>${v.titleZh?`<div class="title-zh">${esc(v.titleZh)}</div>`:''}${v.titlePinyin?`<div class="title-pinyin pinyin">${esc(v.titlePinyin)}</div>`:''}<p class="country-summary">${esc(v.summary)}</p><div class="version-switch">${levelButtons}</div></div><aside class="country-facts"><div class="eyebrow">At a glance</div><div style="display:flex;align-items:center;gap:12px;margin:8px 0 14px"><img src="${flag(c)}" style="width:66px;border-radius:5px"><b class="country-fact-name">${esc(c.name)}</b></div><div class="facts-grid">${facts}</div></aside></div><div class="reading-controls"><div class="reading-meta"><b>${level} reading${v.degree?` · ${esc(v.degree)}`:''} · ${v.sections.length} illustrated sections</b></div><div class="reading-tools"><div class="display-buttons"><button data-mode="en" class="displaybtn" onclick="setDisplay('en')">English only</button><button data-mode="zh" class="displaybtn" onclick="setDisplay('zh')">English + 简中</button><button data-mode="all" class="displaybtn active" onclick="setDisplay('all')">English + 简中 + Pinyin</button></div><button type="button" class="wordhelp-btn ${state.wordHelp?'active':''}" onclick="setWordHelp(!state.wordHelp)">${state.wordHelp?'Word Help · On':'Word Help · Off'}</button></div></div><div class="reading-layout"><article class="article">${secs}<div class="prevnext"><button class="pn" ${prev?`onclick="go('#country=${prev.slug}&level=${prevLevel}')"`:''}><small>← Previous country</small><b>${prev?esc(prev.name):'Start of journey'}</b></button><button class="pn" ${next?`onclick="go('#country=${next.slug}&level=${nextLevel}')"`:`onclick="go('#library')"`}><small>Next country →</small><b>${next?esc(next.name):'Choose the next country'}</b></button></div>${copyLinkBar()}</article><aside class="sidebar"><div class="side-card toc"><h3>Contents</h3>${toc}</div><div class="side-card vocab-card"><div class="vocab-card-head"><h3>Learning words</h3><span>${words.length}</span></div><p class="vocab-intro">Useful words taken from this reading.</p>${vocabCard(words)}</div><div class="side-card"><h3>Level choice</h3><p class="source-note">${levels.map(l=>`<b>${l}</b>: ${l==='A1'?'shorter, simpler foundation':l==='A2'?'clear standard reading with more detail':'richer cultural and historical context'}.`).join('<br>')}</p></div></aside></div></div>`;
 shell(content,'Reading');hydrate();setDisplay(state.display);setWordHelp(state.wordHelp)
}

function copyCurrentLink(button){
 const text=location.href;
 const done=()=>{if(!button)return;const old=button.innerHTML;button.innerHTML='Copied · 已复制';button.classList.add('copied');setTimeout(()=>{button.innerHTML=old;button.classList.remove('copied')},1500)};
 if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(text).then(done).catch(()=>fallbackCopy(text,done));else fallbackCopy(text,done)
}
function copyLinkBar(){return `<div class="copy-link-bar"><button class="copy-link-btn" type="button" onclick="copyCurrentLink(this)">Copy link · 复制链接</button></div>`}
function quickPracticeIndex(items,codeFn,routeKey,sort='Newest',highlightAll=false){
 const levels=['A1','A2','B1'];
 const groups=Object.fromEntries(levels.map(level=>[level,items.filter(x=>x.level===level)]));
 const max=Math.max(0,...levels.map(level=>groups[level].length));
 const order=Array.from({length:max},(_,i)=>sort==='Newest'?max-i:i+1);
 const rows=order.map(n=>`<div class="quick-code-row">${levels.map(level=>{
  const item=groups[level][n-1];
  return item?`<button class="quick-code-btn ${highlightAll||isTodayItem(item)?'today-code-btn':''}" type="button" onclick="go('#${routeKey}=${item.id}')">${esc(codeFn(item))}</button>`:`<span class="quick-code-empty" aria-hidden="true"></span>`
 }).join('')}</div>`).join('');
 return `<div class="quick-code-index">${rows}</div>`
}
function dialogueReferenceBank(d){
 const explicit=Array.isArray(d.referenceBank)?d.referenceBank:[];
 const groups=explicit.length?explicit:(d.turns||[]).map((t,index)=>t?.hints?.length?{label:`Line ${index+1}`,items:t.hints}:null).filter(Boolean);
 if(!groups.length)return `<p class="source-note">No reference words are available for this older practice set.</p>`;
 return `<div class="dialogue-reference-grid">${groups.map(g=>`<div class="dialogue-reference-group"><small>${esc(g.label||'Reference')}</small><div class="dialogue-reference-chips">${(g.items||[]).map(x=>`<div class="dialogue-ref-chip"><b>${esc(x.en||x)}</b>${x.zh?`<span>${esc(x.zh)}</span><small class="dialogue-ref-pinyin">${esc(pinyinText(x.zh))}</small>`:''}</div>`).join('')}</div></div>`).join('')}</div>`
}
function translationVocabularyPairs(row){
 const explicit=Array.isArray(row?.toChineseVocab)?row.toChineseVocab.filter(x=>x?.en&&x?.zh):[];
 if(explicit.length)return explicit;
 return String(row?.toEnglishHint||'').split('·').map(x=>x.trim()).map(part=>{
  const m=part.match(/^(.+?[\u3400-\u9fff][^A-Za-z]*?)\s+([A-Za-z].*)$/);
  return m?{zh:m[1].trim(),en:m[2].trim()}:null
 }).filter(Boolean)
}
function translationLineHintRow(item,index,direction){
 const row=(Array.isArray(item?.lineHints)?item.lineHints:[]).find(x=>x.line===index+1);
 if(!row)return '';
 const hint=direction==='toEnglish'?row.toEnglishHint:row.toChineseHint;
 const isVocabulary=item?.hintType==='vocabulary';
 if(isVocabulary&&direction==='toChinese'){
  const pairs=translationVocabularyPairs(row);
  if(pairs.length){
   const content=pairs.map(x=>`<div class="translation-vocab-hint-item"><b>${esc(x.en)}</b><span>${esc(x.zh)}</span><small>${esc(pinyinText(x.zh))}</small></div>`).join('');
   return `<details class="translation-line-hint"><summary>Vocabulary hint · 生字提示</summary><div class="translation-line-hint-body"><div class="translation-vocab-hint-list">${content}</div></div></details>`
  }
 }
 if(!hint)return '';
 const label=isVocabulary?'Vocabulary hint · 生字提示':(direction==='toEnglish'?'Structure hint · 句型提示':'Structure hint');
 return `<details class="translation-line-hint"><summary>${label}</summary><div class="translation-line-hint-body"><div class="translation-structure-hint-text">${esc(hint)}</div></div></details>`
}
function translationHasLineHints(item,direction){
 const key=direction==='toEnglish'?'toEnglishHint':'toChineseHint';
 return (Array.isArray(item?.lineHints)?item.lineHints:[]).some(x=>!!x[key])
}
function translationHintToggleButton(item,direction){
 if(!translationHasLineHints(item,direction))return '';
 const isVocabulary=item?.hintType==='vocabulary';
 const off=isVocabulary?'Vocabulary: Off':'Hints: Off';
 const on=isVocabulary?'Vocabulary: On':'Hints: On';
 return `<button class="translation-hints-toggle" type="button" aria-pressed="false" data-off-label="${off}" data-on-label="${on}" onclick="toggleTranslationHints(this)">${off}</button>`
}
function toggleTranslationHints(button){
 const body=button?.closest('.translation-mode-body');if(!body)return;
 const on=body.classList.toggle('translation-hints-on');
 body.classList.toggle('translation-hints-off',!on);
 button.textContent=on?(button.dataset.onLabel||'Hints: On'):(button.dataset.offLabel||'Hints: Off');
 button.setAttribute('aria-pressed',on?'true':'false')
}
function translationPatternLinks(item){
 return (Array.isArray(item?.patternLinks)?item.patternLinks:[]).filter(link=>{
  const sentence=(practiceCatalog().sentencePractice||[]).find(x=>x.id===link.sentenceId);
  return sentence&&Number.isInteger(link.line)&&link.line>0
 })
}
function translationLinkedSentence(link){
 return (practiceCatalog().sentencePractice||[]).find(x=>x.id===link?.sentenceId)||null
}
function translationPatternRoute(sentence){
 const month=String(sentence?.publishedOn||'').slice(0,7);
 return month===currentMonthString()?`#sentence=${sentence.id}`:`#history-sentence=${sentence.id}`
}
function translationPatternCode(sentence){
 const month=String(sentence?.publishedOn||'').slice(0,7);
 return month===currentMonthString()?sentenceCode(sentence):historyCode(sentence,'sentence')
}
function translationPatternApplication(item,direction){
 const links=translationPatternLinks(item);
 if(!links.length)return '';
 const isToEnglish=direction==='toEnglish';
 const rows=links.map(link=>{
  const sentence=translationLinkedSentence(link);if(!sentence)return '';
  const code=translationPatternCode(sentence);
  const route=translationPatternRoute(sentence);
  return `<div class="translation-linked-pattern-row"><div><span>${esc(code)} · Line ${link.line}</span><b>${esc(sentence.pattern)}</b><em class="translation-linked-pattern-zh">${esc(sentence.zh||'')}</em><small>${isToEnglish?'This sentence uses an existing Single Sentence pattern.':'This English sentence uses an existing Single Sentence pattern.'}</small></div><button type="button" onclick="go('${route}')">Open ${esc(code)} →</button></div>`
 }).join('');
 const label='Sentence Pattern Application · 句型应用';
 return rows?`<details class="translation-details translation-linked-patterns"><summary>${label}</summary><div class="translation-linked-pattern-list">${rows}</div></details>`:''
}
function taipeiDateString(){
 const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Taipei',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
 const get=t=>parts.find(x=>x.type===t)?.value||'';
 return `${get('year')}-${get('month')}-${get('day')}`
}
function parseSimpleCsv(text){
 const lines=String(text||'').trim().split(/\r?\n/).filter(Boolean);
 if(lines.length<2)return [];
 const parseLine=line=>{const out=[];let cur='',quoted=false;for(let i=0;i<line.length;i++){const ch=line[i];if(ch==='"'){if(quoted&&line[i+1]==='"'){cur+='"';i++}else quoted=!quoted}else if(ch===','&&!quoted){out.push(cur.trim());cur=''}else cur+=ch}out.push(cur.trim());return out};
 const headers=parseLine(lines[0]).map(x=>x.toLowerCase().replace(/\s+/g,'_'));
 return lines.slice(1).map(line=>Object.fromEntries(parseLine(line).map((v,i)=>[headers[i]||`c${i}`,v])))
}
async function resolvePartyConfig(){
 const cfg=window.PARTY_CONFIG||{};
 const today=taipeiDateString();
 if(cfg.sheetCsvUrl){
  try{
   const text=await fetch(cfg.sheetCsvUrl,{cache:'no-store'}).then(r=>{if(!r.ok)throw new Error('Party sheet fetch failed');return r.text()});
   const rows=parseSimpleCsv(text);
   const row=rows.find(r=>(r.date||'').trim()===today && !/^(false|0|off|no)$/i.test((r.enabled||'true').trim()));
   if(row)return {date:today,startTime:(row.start_time||row.starttime||row.time||'').trim()}
  }catch(e){console.warn(e)}
 }
 if((cfg.date||'').trim()===today && (cfg.startTime||'').trim())return {date:today,startTime:cfg.startTime.trim()};
 return null
}
let partyTimer=null;
async function hydratePartySlot(){
 const slot=document.getElementById('partySlot');if(!slot)return;
 if(partyTimer){clearInterval(partyTimer);partyTimer=null}
 const cfg=await resolvePartyConfig();if(!cfg?.startTime){slot.hidden=true;return}
 const m=cfg.startTime.match(/^(\d{1,2}):(\d{2})$/);if(!m){slot.hidden=true;return}
 const hh=String(Number(m[1])).padStart(2,'0'),mm=m[2];
 const target=new Date(`${cfg.date}T${hh}:${mm}:00+08:00`);
 if(!Number.isFinite(target.getTime())||Date.now()>=target.getTime()){slot.hidden=true;return}
 slot.hidden=false;
 slot.innerHTML=`<div class="party-banner"><div class="party-copy"><small>TONIGHT</small><b>PARTY Start Time</b><span>Language Party · Taiwan Time</span></div><div class="party-time"><div class="party-start"><small>Starts at</small><b>${hh}:${mm}</b></div><div class="party-countdown-wrap"><small>Countdown</small><div class="party-countdown" id="partyCountdown">--:--:--</div></div></div></div>`;
 const tick=()=>{const diff=target.getTime()-Date.now();if(diff<=0){slot.hidden=true;clearInterval(partyTimer);partyTimer=null;return}const total=Math.floor(diff/1000),h=Math.floor(total/3600),min=Math.floor((total%3600)/60),sec=total%60;const el=document.getElementById('partyCountdown');if(el)el.textContent=`${String(h).padStart(2,'0')}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`};
 tick();partyTimer=setInterval(tick,1000)
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
 let tooltip=host.select('.map-tooltip'); if(tooltip.empty()) tooltip=host.append('div').attr('class','map-tooltip');
 let readFeatures=[];
 const ukChildren=COUNTRIES.filter(c=>String(Number(c.mapId))==='826'&&Array.isArray(c.mapPoint));
 const markerCountries=SMALL_COUNTRY_MARKERS.map(m=>({...(bySlug[m.slug]||{}),...m})).filter(d=>d.slug);
 const idGroupFor=id=>byMapIdGroups[String(Number(id))]||[];
 const nameGroupFor=name=>byMapNameGroups[String(name||'').toLowerCase()]||[];
 const groupFor=d=>{const byId=d?.id!=null?idGroupFor(d.id):[];return byId.length?byId:nameGroupFor(d?.properties?.name)};
 const labelFor=d=>{const a=groupFor(d);if(a.length===1)return a[0].name;if(a.length>1)return 'United Kingdom';return d?.properties?.name||''};
 function labelBoxesOverlap(a,b,pad=5){return !(a.x2+pad<b.x1||a.x1-pad>b.x2||a.y2+pad<b.y1||a.y1-pad>b.y2)}
 function setMarkerScale(sel,k){sel.select('circle').attr('r',Math.max(3.2,6/k)).style('stroke-width',`${Math.max(.9,2/k)}px`);sel.select('text').style('font-size',`${Math.max(8.7,12/k)}px`).style('stroke-width',`${Math.max(1.2,3/k)}px`).attr('x',d=>(d.mapLabelSide==='left'?-10:10)/k).attr('dy',`${4/k}px`)}
 function updateLabels(t){
   if(!readFeatures.length)return;
   const k=t.k;
   const labels=g.selectAll('.map-label');
   if(k<2.15){labels.style('display','none')}else{
     const candidates=readFeatures.map(d=>{
       const name=labelFor(d),centroid=path.centroid(d),bounds=path.bounds(d);
       const screenX=t.applyX(centroid[0]),screenY=t.applyY(centroid[1]);
       const screenW=(bounds[1][0]-bounds[0][0])*k,screenH=(bounds[1][1]-bounds[0][1])*k;
       const textW=Math.max(48,name.length*7.2),priority=screenW*screenH;
       return {d,name,screenX,screenY,screenW,screenH,textW,priority,group:groupFor(d)};
     }).filter(x=>{
       if(x.group.length>1&&k>=3.35)return false;
       const minW=x.textW+10;
       if(k<3.1)return x.screenW>Math.max(92,minW*1.55)&&x.screenH>28;
       if(k<5.0)return x.screenW>Math.max(66,minW*1.16)&&x.screenH>20;
       if(k<8)return x.screenW>Math.max(48,minW*.96)&&x.screenH>16;
       return x.screenW>Math.max(34,minW*.7)&&x.screenH>12;
     }).sort((a,b)=>b.priority-a.priority);
     const accepted=[],visible=new Set();
     for(const x of candidates){const box={x1:x.screenX-x.textW/2,y1:x.screenY-8,x2:x.screenX+x.textW/2,y2:x.screenY+8};if(!accepted.some(a=>labelBoxesOverlap(box,a))){accepted.push(box);visible.add(x.name)}}
     labels.style('display',d=>visible.has(labelFor(d))?'block':'none').style('font-size',`${Math.max(8,12/k)}px`).style('stroke-width',`${Math.max(1.2,3/k)}px`);
   }
   const markers=g.selectAll('.subcountry-marker');
   markers.style('display',k>=3.35?'block':'none');
   setMarkerScale(markers,k);
   const smallMarkers=g.selectAll('.country-marker');
   smallMarkers.style('display',k>=2.55?'block':'none');
   setMarkerScale(smallMarkers,k);
 }
 const zoom=d3.zoom().scaleExtent([1,18]).on('zoom',e=>{g.attr('transform',e.transform);updateLabels(e.transform)});
 svg.call(zoom).on('dblclick.zoom',null);mapState={svg,g,zoom,projection,path};
 function showTip(e,html){tooltip.classed('show',true).html(html);const rect=node.parentNode.getBoundingClientRect();tooltip.style('left',`${Math.min(e.clientX-rect.left+14,rect.width-205)}px`).style('top',`${Math.max(10,e.clientY-rect.top-12)}px`)}
 fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json()).then(world=>{
   const feats=topojson.feature(world,world.objects.countries).features;
   readFeatures=feats.filter(d=>groupFor(d).length);
   const unmatched=COUNTRIES.filter(c=>{if(String(Number(c.mapId))==='826'&&Array.isArray(c.mapPoint))return false;if(MAP_NAME_ALIASES[c.slug]?.length)return false;if(SMALL_COUNTRY_MARKERS.some(m=>m.slug===c.slug))return false;return !readFeatures.some(f=>groupFor(f).some(x=>x.slug===c.slug))});
   if(unmatched.length) console.warn('Map unmatched countries:', unmatched.map(c=>c.slug));
   g.selectAll('path').data(feats).join('path').attr('d',path)
    .attr('class',d=>`country-shape ${groupFor(d).length?'read':''}`)
    .style('cursor',d=>groupFor(d).length?'pointer':'grab')
    .on('mouseenter',(e,d)=>{const a=groupFor(d);if(!a.length)return;showTip(e,a.length===1?`<b>${esc(a[0].name)}</b><small>Reading #${a[0].readOrder} · Click to open</small>`:`<b>United Kingdom</b><small>${a.length} reading entries · Click to zoom in</small>`)})
    .on('mousemove',(e,d)=>{const a=groupFor(d);if(!a.length)return;showTip(e,a.length===1?`<b>${esc(a[0].name)}</b><small>Reading #${a[0].readOrder} · Click to open</small>`:`<b>United Kingdom</b><small>${a.length} reading entries · Click to zoom in</small>`)})
    .on('mouseleave',()=>tooltip.classed('show',false))
    .on('click',(e,d)=>{const a=groupFor(d);if(a.length===1)return go(`#country=${a[0].slug}&level=${preferredLevel(a[0])}`);if(a.length>1){const b=path.bounds(d),cx=(b[0][0]+b[1][0])/2,cy=(b[0][1]+b[1][1])/2;const target=Math.min(10,Math.max(4.8,.72/Math.max((b[1][0]-b[0][0])/w,(b[1][1]-b[0][1])/h)));svg.transition().duration(500).call(zoom.transform,d3.zoomIdentity.translate(w/2,h/2).scale(target).translate(-cx,-cy))}});
   g.selectAll('.map-label').data(readFeatures).join('text').attr('class','map-label').attr('transform',d=>`translate(${path.centroid(d)})`).attr('text-anchor','middle').attr('dy','.35em').style('display','none').text(labelFor);
   const markerData=ukChildren.map(c=>({...c,mapLabelSide:(c.slug==='wales'||c.slug==='northern-ireland')?'left':'right'}));
   const mg=g.selectAll('.subcountry-marker').data(markerData).join('g').attr('class','subcountry-marker').attr('transform',d=>{const p=projection(d.mapPoint);return `translate(${p[0]},${p[1]})`}).style('display','none')
    .on('mouseenter',(e,d)=>showTip(e,`<b>${esc(d.name)}</b><small>Reading #${d.readOrder} · Click to open ${preferredLevel(d)}</small>`)).on('mousemove',(e,d)=>showTip(e,`<b>${esc(d.name)}</b><small>Reading #${d.readOrder} · Click to open ${preferredLevel(d)}</small>`)).on('mouseleave',()=>tooltip.classed('show',false)).on('click',(e,d)=>{e.stopPropagation();go(`#country=${d.slug}&level=${preferredLevel(d)}`)});
   mg.append('circle');mg.append('text').attr('text-anchor',d=>d.mapLabelSide==='left'?'end':'start').text(d=>d.name);
   const fg=g.selectAll('.country-marker').data(markerCountries).join('g').attr('class','country-marker').attr('transform',d=>{const p=projection(d.mapPoint);return `translate(${p[0]},${p[1]})`}).style('display','none')
    .on('mouseenter',(e,d)=>showTip(e,`<b>${esc(d.name)}</b><small>Reading #${d.readOrder} · Click to open ${preferredLevel(d)}</small>`)).on('mousemove',(e,d)=>showTip(e,`<b>${esc(d.name)}</b><small>Reading #${d.readOrder} · Click to open ${preferredLevel(d)}</small>`)).on('mouseleave',()=>tooltip.classed('show',false)).on('click',(e,d)=>{e.stopPropagation();go(`#country=${d.slug}&level=${preferredLevel(d)}`)});
   fg.append('circle');fg.append('text').attr('text-anchor',d=>d.mapLabelSide==='left'?'end':'start').text(d=>d.name);
   updateLabels(d3.zoomIdentity);
 }).catch(err=>console.error('Map load failed',err));
}
function mapZoom(f){if(!mapState.svg)return;mapState.svg.transition().duration(250).call(mapState.zoom.scaleBy,f)}function mapReset(){if(!mapState.svg)return;mapState.svg.transition().duration(350).call(mapState.zoom.transform,d3.zoomIdentity)}
function mapPage(){const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Reading</div><h1 class="page-title">Country & Culture</h1>${readingTopicNav('country')}${countryReadingNav('map')}</section><section class="section"><div class="map-card" style="min-height:650px"><svg id="mapSvg" style="min-height:650px"></svg><div class="legend"><div><span class="swatch read"></span>Read</div><div><span class="swatch"></span>Not yet read</div><small>Markers appear for tiny countries and UK subregions</small></div><div class="map-tools"><button onclick="mapZoom(1.45)">+</button><button onclick="mapZoom(.69)">−</button><button onclick="mapReset()">↺</button></div></div></section>`;shell(content,'Reading');renderMap()}
let dialogueLevelState='Today', dialogueSortState='Newest';
let sentenceLevelState='Today', sentenceSortState='Newest', translationSortState='Newest';
function practiceCatalog(){return window.PRACTICE_CATALOG||{paths:[],dialogues:[],sentencePractice:[]}}
function practicePinyin(zh){return zh?esc(pinyinText(zh)):''}
function practiceZhPair(zh,zhClass='practice-zh',pyClass='practice-pinyin'){
 if(!zh)return '';
 return `<div class="${zhClass}">${esc(zh)}</div><div class="${pyClass}">${practicePinyin(zh)}</div>`
}
function practicePathCards(compact=false){
 const paths=practiceCatalog().paths||[];
 return `<div class="practice-path-grid ${compact?'compact':''}">${paths.map(p=>{
  const active=p.status==='active';
  return `<article class="practice-path-card ${active?'active':'soon'}" ${active?`onclick="go('${p.route}')" role="button" tabindex="0"`:''}><div class="path-top"><span class="path-kicker">${esc(p.kicker)}</span><span class="path-status ${active?'live':''}">${active?'Available':'Coming soon'}</span></div><h3>${esc(p.title)}</h3>${practiceZhPair(p.titleZh||'','path-zh','path-pinyin')}<p>${esc(p.desc)}</p><small>${esc(p.meta||'')}</small>${active?'<div class="path-arrow">Open →</div>':''}</article>`
 }).join('')}</div>`
}
function practiceHub(){
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">English practice</div><h1 class="page-title">Choose What You Want to Practice</h1></section>
 <section class="section practice-section"><div class="section-head"><div><h2>Practice Areas</h2></div></div>${practicePathCards(false)}</section>`;
 shell(content,'Practice')
}
function blankTypeLabel(type){return type==='information'?'Your information':type==='pattern'?'Longer answer':'Word / phrase'}
function dialogueBlankCount(d){return (d.turns||[]).filter(t=>t.blankType).length}
function dialogueCode(d){return currentMonthCode(d,currentMonthDialogueItems())}
function dialogueCard(d){
 const today=isTodayItem(d);
 return `<article class="dialogue-card compact-practice-card ${today?'today-card':''}" onclick="go('#dialogue=${d.id}')" role="button" tabindex="0">
  <div class="compact-top"><span class="level-pill ${d.level.toLowerCase()}">${dialogueCode(d)}</span><span>${esc((d.scene||'').toLowerCase())}</span></div>
  <h3>${esc(d.title)}</h3><div class="compact-zh">${esc(d.titleZh||'')}</div>
 </article>`
}
function dialogueLibrary(level=dialogueLevelState,sort=dialogueSortState){
 dialogueLevelState=level;dialogueSortState=sort;
 const all=currentMonthDialogueItems();
 const body=monthlyLibraryBody(all,level,sort,dialogueCode,'dialogue',dialogueCard,'dialogue-grid');
 const tabs=['Today','All','A1','A2','B1'];
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Conversation · ${esc(currentMonthString())}</div><h1 class="page-title">Daily Conversation</h1></section>
 <section class="section compact-library"><div class="library-control-row"><div class="dialogue-level-tabs monthly-practice-tabs">${tabs.map(l=>`<button class="tab ${level===l?'active':''}" onclick="dialogueLibrary('${l}','${sort}')">${l==='Today'?'TODAY':l==='All'?'ALL':l}</button>`).join('')}</div>${sortSelect(sort,"setDialogueSort")}</div>${body}</section>`;
 shell(content,'Conversation')
}
function setDialogueSort(v){dialogueSortState=v;dialogueLibrary(dialogueLevelState,v)}
function fillDialogueBlank(text,value){
 const blankCount=(text.match(/_____/g)||[]).length;
 const parts=blankCount>1?String(value).split(/\s*[\/／]\s*/):[String(value)];
 return text.includes('_____')?text.replace(/_____/g,()=>parts.shift()||'_____'):text
}
function chooseDialogueOption(button){
 const turn=button.closest('.dialogue-turn');if(!turn)return;
 turn.querySelectorAll('.hint-choice').forEach(b=>b.classList.toggle('selected',b===button));
 const en=fillDialogueBlank(turn.dataset.en||'',button.dataset.en||'');
 const zh=fillDialogueBlank(turn.dataset.zh||'',button.dataset.zh||'');
 const result=turn.querySelector('.choice-result');
 result.hidden=false;
 result.innerHTML=`<b>Say this:</b><span>${esc(en)}</span><small>${esc(zh)}</small><small class="choice-pinyin">${practicePinyin(zh)}</small>`
}
function randomDialogueReply(){
 const options=[...document.querySelectorAll('.hint-choice')];if(!options.length)return;
 const button=options[Math.floor(Math.random()*options.length)];
 const details=button.closest('details');if(details)details.open=true;
 chooseDialogueOption(button);
 button.scrollIntoView({behavior:'smooth',block:'center'})
}
function hintDetails(t){
 if(!t.blankType||!t.hints?.length)return '';
 return `<div class="blank-tools"><span class="blank-type">${blankTypeLabel(t.blankType)}</span><details class="hint-details"><summary>Choose a reply</summary><div class="hint-list">${t.hints.map(h=>`<button class="hint-choice" type="button" data-en="${esc(h.en)}" data-zh="${esc(h.zh)}" onclick="chooseDialogueOption(this)"><b>${esc(h.en)}</b><small class="hint-zh">${esc(h.zh)}</small><small class="hint-pinyin">${practicePinyin(h.zh)}</small></button>`).join('')}</div></details></div>`
}
function dialogueHash(text){return [...text].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,7)}
function dialogueQuiz(d){
 const pairs=[];for(let i=0;i+1<(d.example||[]).length;i+=2)pairs.push({prompt:d.example[i],answer:d.example[i+1]});
 const pool=practiceCatalog().dialogues.flatMap(x=>(x.example||[]).filter((_,i)=>i%2===1));
 return `<div class="quiz-list">${pairs.slice(0,3).map((q,index)=>{
  const distractors=pool.filter(x=>x.en!==q.answer.en).sort((a,b)=>dialogueHash(`${d.id}-${index}-${a.en}`)-dialogueHash(`${d.id}-${index}-${b.en}`)).slice(0,2);
  const choices=[{...q.answer,correct:true},...distractors.map(x=>({...x,correct:false}))].sort((a,b)=>dialogueHash(`${index}-${a.en}-${d.id}`)-dialogueHash(`${index}-${b.en}-${d.id}`));
  return `<article class="quiz-question"><div class="quiz-number">${index+1}</div><div class="quiz-prompt"><b>${esc(q.prompt.en)}</b><span>${esc(q.prompt.zh)}</span><small>${practicePinyin(q.prompt.zh)}</small></div><p>Which reply fits best?</p><div class="quiz-options">${choices.map(x=>`<button type="button" data-correct="${x.correct?'1':'0'}" data-zh="${esc(x.zh)}" onclick="answerDialogueQuiz(this)">${esc(x.en)}</button>`).join('')}</div><div class="quiz-feedback" aria-live="polite"></div></article>`
 }).join('')}</div>`
}
function answerDialogueQuiz(button){
 const question=button.closest('.quiz-question');if(!question)return;
 const feedback=question.querySelector('.quiz-feedback');
 if(button.dataset.correct==='1'){
  question.querySelectorAll('.quiz-options button').forEach(b=>b.classList.toggle('correct',b===button));
  const zh=button.dataset.zh||'';
  feedback.className='quiz-feedback success';
  feedback.innerHTML=`<b>Correct ✓</b><span>${esc(zh)}</span><small>${practicePinyin(zh)}</small>`
 }else{
  button.classList.add('wrong');
  feedback.className='quiz-feedback retry';
  feedback.textContent='Try again — choose the reply that naturally follows the prompt.'
 }
}
function dialogueInlineHint(group){
 const items=group?.items||[];
 if(!items.length)return '';
 return `<details class="dialogue-inline-hint"><summary>Hint · 提示</summary><div class="dialogue-inline-hint-body"><small>${esc(group.label||'Reference')}</small><div class="dialogue-inline-hint-list">${items.map(x=>`<div class="dialogue-inline-hint-item"><b>${esc(x.en||'')}</b><span>${esc(x.zh||'')}</span>${x.zh?`<small class="dialogue-ref-pinyin">${esc(pinyinText(x.zh))}</small>`:''}</div>`).join('')}</div></div></details>`
}
function dialoguePage(id){
 const all=currentMonthDialogueItems();
 const d=all.find(x=>x.id===id);if(!d)return dialogueLibrary();
 const same=all.filter(x=>x.level===d.level),i=same.findIndex(x=>x.id===id),prev=same[i-1],next=same[i+1];
 const refGroups=d.referenceBank||[];
 let blankCursor=0;
 const turns=(d.turns||[]).map(t=>{
  const isBlank=!!t.blankType;
  const group=isBlank?(refGroups[blankCursor++]||null):null;
  const zh=isBlank?(t.practiceZh||t.zh):t.zh;
  return `<div class="dialogue-turn"><div class="speaker speaker-${t.speaker.toLowerCase()}">${esc(t.speaker)}</div><div class="turn-body"><div class="turn-en">${esc(t.en)}</div><div class="turn-zh">${esc(zh)}</div><div class="turn-pinyin">${practicePinyin(zh)}</div>${dialogueInlineHint(group)}</div></div>`
 }).join('');
 const example=(d.example||[]).map(t=>`<div class="example-line"><b>${esc(t.speaker)}:</b><div><span>${esc(t.en)}</span><small class="example-zh">${esc(t.zh)}</small><small class="example-pinyin">${practicePinyin(t.zh)}</small></div></div>`).join('');
 const goalZh=d.goalZh?`<p class="detail-goal-zh">${esc(d.goalZh)}</p>`:'';
 const content=`<section class="dialogue-detail"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#dialogues">Daily Conversation</a> / ${esc(d.title)}</div><div class="dialogue-detail-head"><div><div class="eyebrow">${esc((d.scene||"").toLowerCase())}</div><div class="detail-title-line"><span class="level-pill ${d.level.toLowerCase()}">${dialogueCode(d)}</span><h1>${esc(d.title)}</h1></div><div class="detail-title-zh">${esc(d.titleZh||'')}</div><p>${esc(d.goal)}</p>${goalZh}</div></div>
 <section class="dialogue-stage example-stage"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Part 1 · Complete Example</div><span>${(d.example||[]).length} lines</span></div><div class="complete-example-body">${example}</div></section>
 <section class="dialogue-stage practice-stage"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Part 2 · Practice</div><span>${dialogueBlankCount(d)} blanks</span></div>${turns}</section>
 <section class="dialogue-stage reference-stage"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Part 3 · Reference</div><span>${refGroups.length||''}${refGroups.length?' groups':''}</span></div>${dialogueReferenceBank(d)}</section>
 <div class="prevnext dialogue-prevnext"><button class="pn" ${prev?`onclick="go('#dialogue=${prev.id}')"`:`onclick="go('#dialogues')"`}><small>← ${prev?'Previous':'All conversations'}</small><b>${prev?`${dialogueCode(prev)} · ${esc(prev.title)}`:'Daily Conversation'}</b></button><button class="pn" ${next?`onclick="go('#dialogue=${next.id}')"`:`onclick="go('#dialogues')"`}><small>${next?'Next':'Back to library'} →</small><b>${next?`${dialogueCode(next)} · ${esc(next.title)}`:'Choose another set'}</b></button></div>${copyLinkBar()}</section>`;
 shell(content,'Conversation')
}
function sentenceCode(item){return currentMonthCode(item,currentMonthSentenceItems())}
function sentenceDisplayTitle(item){return String(item?.title||'').toLowerCase()}
function sentenceCard(item){
 const today=isTodayItem(item);
 return `<article class="sentence-card compact-practice-card ${today?'today-card':''}" onclick="go('#sentence=${item.id}')" role="button" tabindex="0">
  <div class="compact-top"><span class="level-pill ${item.level.toLowerCase()}">${sentenceCode(item)}</span><span>${esc((item.scene||"sentence").toLowerCase())}</span></div>
  <h3>${esc(sentenceDisplayTitle(item))}</h3><div class="compact-zh">${esc(item.titleZh||'')}</div>
 </article>`
}
function sentenceDetailBody(item){
 return `<article class="sentence-card sentence-detail-card"><div class="sentence-card-top"><span class="level-pill ${item.level.toLowerCase()}">${sentenceCode(item)}</span><span>${esc(sentenceDisplayTitle(item))}</span></div><div class="sentence-title-zh">${esc(item.titleZh||'')}</div><div class="sentence-pattern">${esc(item.pattern)}</div>${practiceZhPair(item.zh,'sentence-zh','sentence-pinyin')}<details class="sentence-options"><summary>Try different endings</summary><div class="sentence-hints">${(item.hints||[]).map(h=>`<div><b>${esc(h.en)}</b><span>${esc(h.zh)}</span><small>${practicePinyin(h.zh)}</small></div>`).join('')}</div></details><details class="sentence-example"><summary>Show example</summary><div><b>${esc(item.example?.en||'')}</b><span>${esc(item.example?.zh||'')}</span><small>${practicePinyin(item.example?.zh||'')}</small></div></details></article>`
}
function sentencePage(id){
 const all=currentMonthSentenceItems();
 const item=all.find(x=>x.id===id);if(!item)return sentenceLibrary();
 const same=all.filter(x=>x.level===item.level);
 const i=same.findIndex(x=>x.id===id),prev=same[i-1],next=same[i+1];
 const content=`<section class="dialogue-detail"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#sentences">Single Sentence</a> / ${esc(sentenceDisplayTitle(item))}</div>${sentenceDetailBody(item)}<div class="prevnext dialogue-prevnext"><button class="pn" ${prev?`onclick="go('#sentence=${prev.id}')"`:`onclick="go('#sentences')"`}><small>← ${prev?'Previous':'All sentences'}</small><b>${prev?`${sentenceCode(prev)} · ${esc(sentenceDisplayTitle(prev))}`:'Single Sentence'}</b></button><button class="pn" ${next?`onclick="go('#sentence=${next.id}')"`:`onclick="go('#sentences')"`}><small>${next?'Next':'Back to library'} →</small><b>${next?`${sentenceCode(next)} · ${esc(sentenceDisplayTitle(next))}`:'Choose another sentence'}</b></button></div>${copyLinkBar()}</section>`;
 shell(content,'Sentence')
}
function sentenceLibrary(level=sentenceLevelState,sort=sentenceSortState){
 sentenceLevelState=level;sentenceSortState=sort;
 const all=currentMonthSentenceItems();
 const body=monthlyLibraryBody(all,level,sort,sentenceCode,'sentence',sentenceCard,'sentence-grid');
 const tabs=['Today','All','A1','A2','B1'];
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Single Sentence · ${esc(currentMonthString())}</div><h1 class="page-title">Single Sentence Practice</h1></section><section class="section compact-library"><div class="library-control-row"><div class="dialogue-level-tabs monthly-practice-tabs">${tabs.map(l=>`<button class="tab ${level===l?'active':''}" onclick="sentenceLibrary('${l}','${sort}')">${l==='Today'?'TODAY':l==='All'?'ALL':l}</button>`).join('')}</div>${sortSelect(sort,"setSentenceSort")}</div>${body}</section>`;
 shell(content,'Sentence')
}
function setSentenceSort(v){sentenceSortState=v;sentenceLibrary(sentenceLevelState,v)}
let translationLevelState='Today';
function translationItems(){return currentMonthTranslationItems()}
function translationCode(item){return currentMonthCode(item,translationItems())}
function translationCard(item){
 const today=isTodayItem(item);
 return `<article class="translation-card compact-practice-card ${today?'today-card':''}" onclick="go('#translation=${item.id}')" role="button" tabindex="0">
  <div class="compact-top"><span class="level-pill ${item.level.toLowerCase()}">${translationCode(item)}</span><span>${esc((item.topic||'').toLowerCase())}</span></div>
  <h3>${esc(item.title)}</h3><div class="compact-zh">${esc(item.titleZh||'')}</div>
 </article>`
}
function translationLibrary(level=translationLevelState,sort=translationSortState){
 translationLevelState=level;translationSortState=sort;
 const all=translationItems();
 const body=monthlyLibraryBody(all,level,sort,translationCode,'translation',translationCard,'translation-grid');
 const tabs=['Today','All','A1','A2','B1'];
 const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Translation · ${esc(currentMonthString())}</div><h1 class="page-title">Translation Practice</h1></section>
 <section class="section compact-library"><div class="library-control-row"><div class="dialogue-level-tabs monthly-practice-tabs">${tabs.map(l=>`<button class="tab ${level===l?'active':''}" onclick="translationLibrary('${l}','${sort}')">${l==='Today'?'TODAY':l==='All'?'ALL':l}</button>`).join('')}</div>${sortSelect(sort,"setTranslationSort")}</div>${body}</section>`;
 shell(content,'Translation')
}
function setTranslationSort(v){translationSortState=v;translationLibrary(translationLevelState,v)}
function translationReferenceLine(en,index){return `<div class="translation-reference-line"><span class="translation-line-number">${index+1}</span><p>${esc(en)}</p></div>`}
function translationSourceLine(zh,index){return `<div class="translation-source-line"><span class="translation-line-number">${index+1}</span><div><div class="translation-source-zh">${esc(zh)}</div><div class="translation-source-pinyin">${practicePinyin(zh)}</div></div></div>`}
function translationPracticeChineseLine(zh,index,item){return `<div class="translation-source-line translation-practice-line"><span class="translation-line-number">${index+1}</span><div><div class="translation-source-zh">${esc(zh)}</div><div class="translation-source-pinyin">${practicePinyin(zh)}</div>${translationLineHintRow(item,index,'toEnglish')}</div></div>`}
function translationPracticeEnglishLine(en,index,item){return `<div class="translation-reference-line translation-practice-line"><span class="translation-line-number">${index+1}</span><div class="translation-english-line-body"><p>${esc(en)}</p>${translationLineHintRow(item,index,'toChinese')}</div></div>`}
function translationAlternativeBlock(item){
 const rows=(item.alternatives||[]).map(a=>`<div class="translation-alt-row"><div>${practiceZhPair(a.zh,'translation-alt-zh','translation-alt-pinyin')}</div><ul>${(a.en||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');
 return rows?`<details class="translation-details"><summary>Show natural alternatives</summary><div class="translation-alternatives">${rows}</div></details>`:''
}
function translationPhraseBlock(item){
 const rows=(item.keyPhrases||[]).map(p=>`<div class="translation-phrase"><div><b>${esc(p.zh)}</b><small>${practicePinyin(p.zh)}</small></div><span>${esc(p.en)}</span></div>`).join('');
 return rows?`<section class="translation-phrases"><div class="eyebrow">Useful language</div><h2>Useful phrases from this text</h2><div class="translation-phrase-grid">${rows}</div></section>`:''
}
function translationPage(id){
 const all=translationItems();
 const item=all.find(x=>x.id===id);if(!item)return translationLibrary();
 const same=all.filter(x=>x.level===item.level),i=same.findIndex(x=>x.id===id),prev=same[i-1],next=same[i+1];
 const sourcePractice=(item.zhLines||[]).map((zh,index)=>translationPracticeChineseLine(zh,index,item)).join('');
 const englishPractice=(item.enLines||[]).map((en,index)=>translationPracticeEnglishLine(en,index,item)).join('');
 const sourceAnswer=(item.zhLines||[]).map(translationSourceLine).join('');
 const englishAnswer=(item.enLines||[]).map(translationReferenceLine).join('');
 const goalZh=item.goalZh?`<p class="detail-goal-zh">${esc(item.goalZh)}</p>`:'';
 const content=`<section class="translation-detail"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#translations">Translation Practice</a> / ${esc(item.title)}</div>
 <div class="translation-detail-head"><div><div class="eyebrow">${esc((item.topic||"").toLowerCase())}</div><div class="detail-title-line"><span class="level-pill ${item.level.toLowerCase()}">${translationCode(item)}</span><h1>${esc(item.title)}</h1></div><div class="detail-title-zh">${esc(item.titleZh||'')}</div><p>${esc(item.goal)}</p>${goalZh}</div></div>
 <div class="translation-mode-picker">
  <details class="translation-mode"><summary><span><small>Direction 1</small><b>中翻英 · Chinese → English</b></span><em>Open</em></summary><div class="translation-mode-body translation-hints-off"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Source · Chinese</div><div class="translation-count-actions"><span>${(item.zhLines||[]).length} sentences</span>${translationHintToggleButton(item,'toEnglish')}</div></div><div class="translation-source-list">${sourcePractice}</div>${translationPatternApplication(item,'toEnglish')}<details class="translation-details translation-answer"><summary>Show English reference</summary><div class="translation-reference-list">${englishAnswer}</div></details>${translationAlternativeBlock(item)}${translationPhraseBlock(item)}</div></details>
  <details class="translation-mode"><summary><span><small>Direction 2</small><b>英翻中 · English → Chinese</b></span><em>Open</em></summary><div class="translation-mode-body translation-hints-off"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Source · English</div><div class="translation-count-actions"><span>${(item.enLines||[]).length} sentences</span>${translationHintToggleButton(item,'toChinese')}</div></div><div class="translation-reference-list translation-english-source">${englishPractice}</div>${translationPatternApplication(item,'toChinese')}<details class="translation-details translation-answer"><summary>Show Chinese reference</summary><div class="translation-source-list translation-chinese-answer">${sourceAnswer}</div></details></div></details>
 </div>
 <div class="prevnext translation-prevnext"><button class="pn" ${prev?`onclick="go('#translation=${prev.id}')"`:`onclick="go('#translations')"`}><small>← ${prev?'Previous':'All translations'}</small><b>${prev?`${translationCode(prev)} · ${esc(prev.title)}`:'Translation Practice'}</b></button><button class="pn" ${next?`onclick="go('#translation=${next.id}')"`:`onclick="go('#translations')"`}><small>${next?'Next':'Back to library'} →</small><b>${next?`${translationCode(next)} · ${esc(next.title)}`:'Choose another text'}</b></button></div>${copyLinkBar()}
 </section>`;
 shell(content,'Translation')
}
function reviewV2Catalog(){return window.REVIEW_V2_CATALOG||{themes:[],courses:[],history:{}}}
function reviewV2Theme(id){return (reviewV2Catalog().themes||[]).find(x=>x.id===id)||null}
function reviewV2Course(id){return (reviewV2Catalog().courses||[]).find(x=>x.id===id)||null}
function reviewV2CoursesByTheme(themeId){return (reviewV2Catalog().courses||[]).filter(x=>x.theme===themeId)}
function reviewV2Single(id){return (practiceCatalog().sentencePractice||[]).find(x=>x.id===id)||null}
function reviewV2Dialogue(id){return (practiceCatalog().dialogues||[]).find(x=>x.id===id)||null}
function historyItems(type){
 const month=currentMonthString();
 const map={
  sentence:practiceCatalog().sentencePractice||[],
  dialogue:practiceCatalog().dialogues||[],
  translation:practiceCatalog().translations||[]
 };
 return (map[type]||[]).filter(x=>!x.publishedOn||String(x.publishedOn).slice(0,7)<month)
}
function historyCode(item,type){
 const same=historyItems(type).filter(x=>x.level===item.level);
 const i=same.findIndex(x=>x.id===item.id);
 return `${item.level}-${i>=0?i+1:'?'}`
}
function reviewV2Home(){
 const cat=reviewV2Catalog();
 const themeCards=(cat.themes||[]).map(t=>{
  const count=reviewV2CoursesByTheme(t.id).length;
  return `<button class="review-v2-theme-card ${count?'has-courses':'preview-empty'}" type="button" onclick="go('#review-theme=${t.id}')">
   <div><span class="review-v2-theme-mark">${String(count).padStart(2,'0')}</span><small>${count===1?'course':'courses'}</small></div>
   <h2>${esc(t.en)}</h2><p>${esc(t.zh)}</p><span class="review-v2-theme-desc">${esc(t.desc||'')}</span>
  </button>`
 }).join('');
 const content=`<section class="page-pad practice-page-head review-v2-head"><div class="eyebrow">Review</div><h1 class="page-title">Review PRACTICE</h1><div class="detail-title-zh">复习练习</div></section>
 <section class="section review-v2-library">
  <div class="review-v2-theme-grid">${themeCards}</div>
 </section>`;
 shell(content,'Review')
}
function reviewLibrary(){return roleplayReviewHome()}
function reviewV2ThemePage(themeId){
 const theme=reviewV2Theme(themeId);if(!theme)return reviewV2Home();
 const courses=reviewV2CoursesByTheme(themeId);
 const cards=courses.map(c=>`<article class="review-v2-course-card" onclick="go('#review=${c.id}')" role="button" tabindex="0">
  <div class="review-v2-course-num">Course ${c.order}</div>
  <h2>${esc(c.title)}</h2><div class="compact-zh">${esc(c.titleZh||'')}</div>
  <p>${esc(c.summary||'')}</p>
  <div class="review-v2-course-meta"><span>${(c.lines||[]).length} sentences</span><span>${(c.patterns||[]).length} patterns</span></div>
 </article>`).join('');
 const body=courses.length?`<div class="review-v2-course-grid">${cards}</div>`:`<div class="review-v2-empty"><b>Preview not built for this topic yet.</b><span>This theme is reserved for the full rebuild after the V2 layout is approved.</span></div>`;
 const content=`<section class="page-pad practice-page-head"><div class="breadcrumbs"><a href="#review-practice">Review Practice</a> / ${esc(theme.en)}</div><div class="eyebrow">Review Topic</div><h1 class="page-title">${esc(theme.en)}</h1><p>${esc(theme.zh)} · ${esc(theme.desc||'')}</p></section>
 <section class="section review-v2-library">${body}</section>`;
 shell(content,'Review')
}
function reviewV2PatternMap(course){return Object.fromEntries((course.patterns||[]).map(x=>[x.sentenceId,x]))}
function reviewV2PatternCode(sentence){return historyCode(sentence,'sentence')}
function reviewV2Part1(course){
 const patterns=(course.patterns||[]).map(p=>({meta:p,sentence:reviewV2Single(p.sentenceId)})).filter(x=>x.sentence);
 return `<section class="review-v2-stage"><div class="review-v2-stage-head"><span>Part 1</span><div><small>Patterns used in this text</small><h2>Sentence Pattern Review</h2><p>Review these first. The core text below will reuse them naturally.</p></div></div>
 <div class="review-v2-pattern-grid">${patterns.map(({meta,sentence})=>`<article class="review-v2-pattern-card">
  <div class="review-v2-pattern-top"><span class="level-pill ${sentence.level.toLowerCase()}">${reviewV2PatternCode(sentence)}</span><small>${esc(String(sentence.title||'').toLowerCase())}</small></div>
  <div class="review-v2-pattern">${esc(sentence.pattern||'')}</div>
  <div class="review-v2-pattern-zh">${esc(sentence.zh||'')}</div>
  <button type="button" onclick="go('#history-sentence=${sentence.id}')">Open original lesson →</button>
 </article>`).join('')}</div></section>`
}
function toggleReviewV2Hints(button){
 const body=button?.closest('.review-v2-direction-body');if(!body)return;
 const on=body.classList.toggle('hints-on');
 button.textContent=on?'Hints: On':'Hints: Off';
 button.setAttribute('aria-pressed',on?'true':'false')
}
function reviewV2LineHint(course,line,direction){
 const map=reviewV2PatternMap(course);
 const metas=(line.patterns||[]).map(id=>map[id]).filter(Boolean);
 if(!metas.length)return '';
 return `<div class="review-v2-line-hints">${metas.map(meta=>{
  const sentence=reviewV2Single(meta.sentenceId);if(!sentence)return '';
  const hint=direction==='toEnglish'?meta.enHint:meta.zhHint;
  return `<div class="review-v2-hint-row"><div><span>${reviewV2PatternCode(sentence)}</span><b>${esc(hint||'')}</b></div><button type="button" onclick="go('#history-sentence=${sentence.id}')">Original →</button></div>`
 }).join('')}</div>`
}
function reviewV2SourceLines(course,direction){
 return (course.lines||[]).map((line,index)=>{
  const source=direction==='toEnglish'?line.zh:line.en;
  const pinyin=direction==='toEnglish'?`<small class="review-v2-line-pinyin">${practicePinyin(source||'')}</small>`:'';
  return `<div class="review-v2-source-line"><span class="review-v2-line-no">${index+1}</span><div><p>${esc(source||'')}</p>${pinyin}${reviewV2LineHint(course,line,direction)}</div></div>`
 }).join('')
}
function reviewV2AnswerLines(course,direction){
 return (course.lines||[]).map((line,index)=>{
  const answer=direction==='toEnglish'?line.en:line.zh;
  const pinyin=direction==='toChinese'?`<small class="review-v2-line-pinyin">${practicePinyin(answer||'')}</small>`:'';
  return `<div class="review-v2-answer-line"><span>${index+1}</span><div><p>${esc(answer||'')}</p>${pinyin}</div></div>`
 }).join('')
}
function reviewV2Direction(course,direction){
 const toEnglish=direction==='toEnglish';
 const label=toEnglish?'中翻英 · Chinese → English':'英翻中 · English → Chinese';
 const sourceLabel=toEnglish?'Source · Chinese':'Source · English';
 const refLabel=toEnglish?'Show English reference':'Show Chinese reference';
 return `<details class="review-v2-direction"><summary><span><small>${sourceLabel}</small><b>${label}</b></span><em>OPEN</em></summary>
  <div class="review-v2-direction-body">
   <div class="review-v2-direction-tools"><span>${(course.lines||[]).length} sentences</span><button type="button" aria-pressed="false" onclick="toggleReviewV2Hints(this)">Hints: Off</button></div>
   <div class="review-v2-source-list">${reviewV2SourceLines(course,direction)}</div>
   <details class="review-v2-reference"><summary>${refLabel}</summary><div class="review-v2-answer-list">${reviewV2AnswerLines(course,direction)}</div></details>
  </div>
 </details>`
}
function reviewV2Part2(course){
 return `<section class="review-v2-stage review-v2-core"><div class="review-v2-stage-head"><span>Part 2</span><div><small>Core text</small><h2>${esc(course.title)}</h2><p>${esc(course.titleZh||'')} · This text is newly written around natural everyday use.</p></div></div>
 <div class="review-v2-direction-list">${reviewV2Direction(course,'toEnglish')}${reviewV2Direction(course,'toChinese')}</div></section>`
}
function reviewV2Part3(course){
 const rows=(course.patterns||[]).map(meta=>{
  const sentence=reviewV2Single(meta.sentenceId),dialogue=reviewV2Dialogue(meta.conversationId);
  if(!sentence)return '';
  return `<article class="review-v2-explain-card">
   <div class="review-v2-explain-head"><span class="level-pill ${sentence.level.toLowerCase()}">${reviewV2PatternCode(sentence)}</span><h3>${esc(sentence.pattern||'')}</h3></div>
   <div class="review-v2-structure"><small>Structure</small><b>${esc(meta.enHint||'')}</b><span>${esc(meta.zhHint||'')}</span></div>
   <p>${esc(meta.explanation||'')}</p>
   <div class="review-v2-explain-actions"><button type="button" onclick="go('#history-sentence=${sentence.id}')">Original sentence →</button>${dialogue?`<button type="button" onclick="go('#history-dialogue=${dialogue.id}')">Conversation →</button>`:''}</div>
  </article>`
 }).join('');
 return `<section class="review-v2-stage"><div class="review-v2-stage-head"><span>Part 3</span><div><small>Structure notes</small><h2>How the Patterns Work</h2><p>No dropdowns here: this section explains the sentence structures directly.</p></div></div><div class="review-v2-explain-grid">${rows}</div></section>`
}
function reviewV2LegacyPage(id){
 const course=reviewV2Course(id);if(!course)return reviewV2Home();
 const theme=reviewV2Theme(course.theme);
 const same=reviewV2CoursesByTheme(course.theme);
 const i=same.findIndex(x=>x.id===course.id),prev=same[i-1],next=same[i+1];
 const content=`<section class="review-detail review-v2-detail"><div class="breadcrumbs"><a href="#review-practice">Review Practice</a> / <a href="#review-theme=${course.theme}">${esc(theme?.en||'Topic')}</a> / Course ${course.order}</div>
 <div class="review-v2-hero"><div><div class="eyebrow">${esc(theme?.en||'Review')} · Course ${course.order}</div><h1>${esc(course.title)}</h1><div class="detail-title-zh">${esc(course.titleZh||'')}</div><p>${esc(course.summary||'')}</p></div><div class="review-v2-flow"><span>1 Patterns</span><i>→</i><strong>2 Core Text</strong><i>→</i><span>3 Structure Notes</span></div></div>
 ${reviewV2Part1(course)}${reviewV2Part2(course)}${reviewV2Part3(course)}
 <div class="prevnext dialogue-prevnext"><button class="pn" ${prev?`onclick="go('#review=${prev.id}')"`:`onclick="go('#review-theme=${course.theme}')"`}><small>← ${prev?'Previous':'Topic'}</small><b>${prev?`Course ${prev.order}`:esc(theme?.en||'Review')}</b></button><button class="pn" ${next?`onclick="go('#review=${next.id}')"`:`onclick="go('#review-theme=${course.theme}')"`}><small>${next?'Next':'Back to topic'} →</small><b>${next?`Course ${next.order}`:esc(theme?.en||'Review')}</b></button></div>${copyLinkBar()}</section>`;
 shell(content,'Review')
}

/* Role-play Review */
function roleplayReviewCatalog(){return window.REVIEW_ROLEPLAY_CATALOG||{version:'',publishedOn:'',courses:[]}}
function roleplayReviewCourses(){return [...(roleplayReviewCatalog().courses||[])].sort((a,b)=>(b.order||0)-(a.order||0))}
function roleplayReviewCourse(id){return roleplayReviewCourses().find(x=>x.id===id)||null}
function roleplayReviewSentence(id){return (practiceCatalog().sentencePractice||[]).find(x=>x.id===id)||null}
function roleplayReviewPatternCode(sentence){
 const match=String(sentence?.id||'').match(/^s-(a1|a2|b1)-(\d+)$/i);
 return match?`${match[1].toUpperCase()}-${match[2]}`:(sentence?.level||'')
}
function roleplayReviewHome(){
 const courses=roleplayReviewCourses();
 const latest=[...courses].map(x=>String(x.publishedOn||'')).filter(Boolean).sort().slice(-1)[0]||'';
 const cards=courses.map(course=>{
  const today=!!latest&&course.publishedOn===latest;
  return `<article class="review-roleplay-card ${today?'today-card review-roleplay-today':''}" onclick="go('#review=${course.id}')" role="button" tabindex="0">
   <div class="review-roleplay-card-top"><span>REVIEW-${course.order}</span>${today?'<em>TODAY</em>':''}</div>
   <h2>${esc(course.title)}</h2><p>${esc(course.titleZh||'')}</p>
  </article>`
 }).join('');
 const content=`<section class="page-pad practice-page-head review-roleplay-head"><div class="eyebrow">Review</div><h1 class="page-title">Review Practice</h1><div class="detail-title-zh">复习练习</div></section>
 <section class="section review-roleplay-library"><div class="review-roleplay-grid">${cards}</div></section>`;
 shell(content,'Review')
}
function roleplayReviewPart1(course){
 const cards=(course.patterns||[]).map(id=>{
  const sentence=roleplayReviewSentence(id);if(!sentence)return '';
  const code=roleplayReviewPatternCode(sentence),route=translationPatternRoute(sentence);
  return `<article class="review-roleplay-pattern-card">
   <div class="review-roleplay-pattern-meta"><span class="level-pill ${String(sentence.level||'').toLowerCase()}">${esc(code)}</span><small>${esc(String(sentence.title||'').toLowerCase())}</small></div>
   <h3>${esc(sentence.pattern||'')}</h3>
   ${practiceZhPair(sentence.zh||'','review-roleplay-pattern-zh','review-roleplay-pattern-pinyin')}
   <button type="button" onclick="go('${route}')">Open original lesson →</button>
  </article>`
 }).join('');
 return `<section class="review-roleplay-part"><div class="review-roleplay-part-head"><span>PART 1</span><div><h2>Sentence Pattern Review</h2><p>句型复习</p></div></div><div class="review-roleplay-pattern-grid">${cards}</div></section>`
}
function roleplayReviewPart2(course){
 const cards=(course.words||[]).map(word=>`<article class="review-roleplay-word"><b>${esc(word.en||'')}</b><span>${esc(word.zh||'')}</span><small>${practicePinyin(word.zh||'')}</small></article>`).join('');
 return `<section class="review-roleplay-part"><div class="review-roleplay-part-head"><span>PART 2</span><div><h2>Useful Words &amp; Phrases</h2><p>实用词语</p></div></div><div class="review-roleplay-word-grid">${cards}</div></section>`
}
function toggleRoleplayHints(button){
 const section=button.closest('.review-roleplay-part');if(!section)return;
 const on=section.classList.toggle('review-roleplay-hints-on');
 button.classList.toggle('active',on);button.setAttribute('aria-pressed',on?'true':'false');
 button.textContent=on?'Hints: On · 提示词：开':'Hints: Off · 提示词：关'
}
function roleplayReviewPart3(course){
 const roles=(course.roles||[]).map(role=>`<article class="review-roleplay-role"><div><b>${esc(role.name||'')}</b><span>${esc(role.nameZh||'')}</span></div><p>${esc(role.en||'')}</p><p>${esc(role.zh||'')}</p></article>`).join('');
 const lines=(course.lines||[]).map((line,index)=>{
  const hints=(line.hints||[]).map(hint=>`<span><b>${esc(hint.en||'')}</b><em>${esc(hint.zh||'')}</em><small>${practicePinyin(hint.zh||'')}</small></span>`).join('');
  return `<article class="review-roleplay-line"><span class="review-roleplay-speaker">${esc(line.speaker||'')}</span><div><small>${String(index+1).padStart(2,'0')}</small><p class="review-roleplay-en">${esc(line.en||'')}</p>${practiceZhPair(line.zh||'','review-roleplay-zh','review-roleplay-pinyin')}${hints?`<div class="review-roleplay-line-hints">${hints}</div>`:''}</div></article>`
 }).join('');
 return `<section class="review-roleplay-part"><div class="review-roleplay-part-head"><span>PART 3</span><div><h2>Dialogue Practice</h2><p>对话练习</p><button class="review-roleplay-hint-toggle" type="button" aria-pressed="false" onclick="toggleRoleplayHints(this)">Hints: Off · 提示词：关</button></div></div><div class="review-roleplay-role-grid">${roles}</div><div class="review-roleplay-dialogue">${lines}</div></section>`
}
function reviewPage(id){
 const course=roleplayReviewCourse(id);if(!course)return roleplayReviewHome();
 const courses=roleplayReviewCourses(),index=courses.findIndex(x=>x.id===course.id),newer=courses[index-1],older=courses[index+1];
 const content=`<section class="review-detail review-roleplay-detail"><div class="breadcrumbs"><a href="#review-practice">Review</a> / REVIEW-${course.order}</div>
  <div class="review-roleplay-hero"><div class="eyebrow">REVIEW-${course.order} · ${esc(course.level||'A2')}</div><h1>${esc(course.title)}</h1><div class="detail-title-zh">${esc(course.titleZh||'')}</div></div>
  ${roleplayReviewPart1(course)}${roleplayReviewPart2(course)}${roleplayReviewPart3(course)}
  <div class="prevnext dialogue-prevnext"><button class="pn" ${newer?`onclick="go('#review=${newer.id}')"`:`onclick="go('#review-practice')"`}><small>← ${newer?'Newer':'Review'}</small><b>${newer?`REVIEW-${newer.order}`:'All reviews'}</b></button><button class="pn" ${older?`onclick="go('#review=${older.id}')"`:`onclick="go('#review-practice')"`}><small>${older?'Older':'Review'} →</small><b>${older?`REVIEW-${older.order}`:'All reviews'}</b></button></div>${copyLinkBar()}
 </section>`;
 shell(content,'Review')
}

/* Historical Materials */
function historyTypeLabel(type){return type==='sentence'?'Single Sentence':type==='dialogue'?'Daily Conversation':'Translation Practice'}
function historyRoute(type,level){return `#history=${type}&level=${level}`}
function historyCard(item,type){
 const route=type==='sentence'?`#history-sentence=${item.id}`:type==='dialogue'?`#history-dialogue=${item.id}`:`#history-translation=${item.id}`;
 const topic=type==='sentence'?(item.scene||'sentence'):type==='dialogue'?(item.scene||'conversation'):(item.topic||'translation');
 return `<article class="history-card" onclick="go('${route}')" role="button" tabindex="0"><div class="history-card-top"><span class="level-pill ${item.level.toLowerCase()}">${historyCode(item,type)}</span><small>${esc(String(topic).toLowerCase())}</small></div><h3>${esc(type==='sentence'?String(item.title||'').toLowerCase():item.title||'')}</h3><div class="compact-zh">${esc(item.titleZh||'')}</div></article>`
}
function historyLibrary(type='sentence',level='A1'){
 if(!['sentence','dialogue','translation'].includes(type))type='sentence';
 if(!['A1','A2','B1'].includes(level))level='A1';
 const list=historyItems(type).filter(x=>x.level===level);
 const content=`<section class="page-pad practice-page-head"><div class="breadcrumbs"><a href="#home">Home</a> / Historical Materials</div><div class="eyebrow">Archive</div><h1 class="page-title">Historical Materials</h1><div class="detail-title-zh">歷史教材</div></section>
 <section class="section history-library"><div class="history-type-tabs">${[
  ['sentence','Single Sentence','单句练习'],['dialogue','Daily Conversation','生活对话'],['translation','Translation Practice','翻译练习']
 ].map(([key,en,zh])=>`<button class="${type===key?'active':''}" onclick="go('${historyRoute(key,level)}')"><b>${en}</b><small>${zh}</small></button>`).join('')}</div>
 <div class="history-level-row"><div class="dialogue-level-tabs">${['A1','A2','B1'].map(l=>`<button class="tab ${level===l?'active':''}" onclick="go('${historyRoute(type,l)}')">${l}</button>`).join('')}</div><span>${list.length} original lessons</span></div>
 <div class="history-grid">${list.map(x=>historyCard(x,type)).join('')}</div></section>`;
 shell(content,'History')
}
function historySentencePage(id){
 const all=historyItems('sentence'),item=all.find(x=>x.id===id);if(!item)return historyLibrary('sentence','A1');
 const same=all.filter(x=>x.level===item.level),i=same.findIndex(x=>x.id===id),prev=same[i-1],next=same[i+1];
 const body=`<article class="sentence-card sentence-detail-card"><div class="sentence-card-top"><span class="level-pill ${item.level.toLowerCase()}">${historyCode(item,'sentence')}</span><span>${esc(String(item.title||'').toLowerCase())}</span></div><div class="sentence-title-zh">${esc(item.titleZh||'')}</div><div class="sentence-pattern">${esc(item.pattern)}</div>${practiceZhPair(item.zh,'sentence-zh','sentence-pinyin')}<details class="sentence-options"><summary>Try different endings</summary><div class="sentence-hints">${(item.hints||[]).map(h=>`<div><b>${esc(h.en)}</b><span>${esc(h.zh)}</span><small>${practicePinyin(h.zh)}</small></div>`).join('')}</div></details><details class="sentence-example"><summary>Show example</summary><div><b>${esc(item.example?.en||'')}</b><span>${esc(item.example?.zh||'')}</span><small>${practicePinyin(item.example?.zh||'')}</small></div></details></article>`;
 const content=`<section class="dialogue-detail"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="${historyRoute('sentence',item.level)}">Historical Materials</a> / ${historyCode(item,'sentence')}</div>${body}<div class="prevnext dialogue-prevnext"><button class="pn" ${prev?`onclick="go('#history-sentence=${prev.id}')"`:`onclick="go('${historyRoute('sentence',item.level)}')"`}><small>← ${prev?'Previous':'Archive'}</small><b>${prev?`${historyCode(prev,'sentence')} · ${esc(String(prev.title||'').toLowerCase())}`:'Historical Single Sentence'}</b></button><button class="pn" ${next?`onclick="go('#history-sentence=${next.id}')"`:`onclick="go('${historyRoute('sentence',item.level)}')"`}><small>${next?'Next':'Back to archive'} →</small><b>${next?`${historyCode(next,'sentence')} · ${esc(String(next.title||'').toLowerCase())}`:'Historical Single Sentence'}</b></button></div>${copyLinkBar()}</section>`;
 shell(content,'History')
}
function historyDialoguePage(id){
 const all=historyItems('dialogue'),d=all.find(x=>x.id===id);if(!d)return historyLibrary('dialogue','A1');
 const same=all.filter(x=>x.level===d.level),i=same.findIndex(x=>x.id===id),prev=same[i-1],next=same[i+1];
 const refGroups=d.referenceBank||[];let blankCursor=0;
 const turns=(d.turns||[]).map(t=>{const isBlank=!!t.blankType;const group=isBlank?(refGroups[blankCursor++]||null):null;const zh=isBlank?(t.practiceZh||t.zh):t.zh;return `<div class="dialogue-turn"><div class="speaker speaker-${String(t.speaker||'a').toLowerCase()}">${esc(t.speaker||'')}</div><div class="turn-body"><div class="turn-en">${esc(t.en||'')}</div><div class="turn-zh">${esc(zh||'')}</div><div class="turn-pinyin">${practicePinyin(zh||'')}</div>${dialogueInlineHint(group)}</div></div>`}).join('');
 const example=(d.example||[]).map(t=>`<div class="example-line"><b>${esc(t.speaker||'')}:</b><div><span>${esc(t.en||'')}</span><small class="example-zh">${esc(t.zh||'')}</small><small class="example-pinyin">${practicePinyin(t.zh||'')}</small></div></div>`).join('');
 const content=`<section class="dialogue-detail"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="${historyRoute('dialogue',d.level)}">Historical Materials</a> / ${historyCode(d,'dialogue')}</div><div class="dialogue-detail-head"><div><div class="eyebrow">${esc((d.scene||'').toLowerCase())}</div><div class="detail-title-line"><span class="level-pill ${d.level.toLowerCase()}">${historyCode(d,'dialogue')}</span><h1>${esc(d.title)}</h1></div><div class="detail-title-zh">${esc(d.titleZh||'')}</div><p>${esc(d.goal||'')}</p></div></div>
 <section class="dialogue-stage example-stage"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Part 1 · Complete Example</div><span>${(d.example||[]).length} lines</span></div><div class="complete-example-body">${example}</div></section>
 <section class="dialogue-stage practice-stage"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Part 2 · Practice</div><span>${dialogueBlankCount(d)} blanks</span></div>${turns}</section>
 <section class="dialogue-stage reference-stage"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Part 3 · Reference</div></div>${dialogueReferenceBank(d)}</section>
 <div class="prevnext dialogue-prevnext"><button class="pn" ${prev?`onclick="go('#history-dialogue=${prev.id}')"`:`onclick="go('${historyRoute('dialogue',d.level)}')"`}><small>← ${prev?'Previous':'Archive'}</small><b>${prev?`${historyCode(prev,'dialogue')} · ${esc(prev.title)}`:'Historical Conversation'}</b></button><button class="pn" ${next?`onclick="go('#history-dialogue=${next.id}')"`:`onclick="go('${historyRoute('dialogue',d.level)}')"`}><small>${next?'Next':'Back to archive'} →</small><b>${next?`${historyCode(next,'dialogue')} · ${esc(next.title)}`:'Historical Conversation'}</b></button></div>${copyLinkBar()}</section>`;
 shell(content,'History')
}
function historyTranslationPage(id){
 const all=historyItems('translation'),item=all.find(x=>x.id===id);if(!item)return historyLibrary('translation','A1');
 const same=all.filter(x=>x.level===item.level),i=same.findIndex(x=>x.id===id),prev=same[i-1],next=same[i+1];
 const sourcePractice=(item.zhLines||[]).map((zh,index)=>translationPracticeChineseLine(zh,index,item)).join('');
 const englishPractice=(item.enLines||[]).map((en,index)=>translationPracticeEnglishLine(en,index,item)).join('');
 const sourceAnswer=(item.zhLines||[]).map(translationSourceLine).join('');
 const englishAnswer=(item.enLines||[]).map(translationReferenceLine).join('');
 const content=`<section class="translation-detail"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="${historyRoute('translation',item.level)}">Historical Materials</a> / ${historyCode(item,'translation')}</div><div class="translation-detail-head"><div><div class="eyebrow">${esc((item.topic||'').toLowerCase())}</div><div class="detail-title-line"><span class="level-pill ${item.level.toLowerCase()}">${historyCode(item,'translation')}</span><h1>${esc(item.title)}</h1></div><div class="detail-title-zh">${esc(item.titleZh||'')}</div><p>${esc(item.goal||'')}</p></div></div>
 <div class="translation-mode-picker"><details class="translation-mode"><summary><span><small>Direction 1</small><b>中翻英 · Chinese → English</b></span><em>Open</em></summary><div class="translation-mode-body translation-hints-off"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Source · Chinese</div><div class="translation-count-actions"><span>${(item.zhLines||[]).length} sentences</span>${translationHintToggleButton(item,'toEnglish')}</div></div><div class="translation-source-list">${sourcePractice}</div><details class="translation-details translation-answer"><summary>Show English reference</summary><div class="translation-reference-list">${englishAnswer}</div></details></div></details>
 <details class="translation-mode"><summary><span><small>Direction 2</small><b>英翻中 · English → Chinese</b></span><em>Open</em></summary><div class="translation-mode-body translation-hints-off"><div class="dialogue-card-heading simplified-stage-heading"><div class="eyebrow">Source · English</div><div class="translation-count-actions"><span>${(item.enLines||[]).length} sentences</span>${translationHintToggleButton(item,'toChinese')}</div></div><div class="translation-reference-list translation-english-source">${englishPractice}</div><details class="translation-details translation-answer"><summary>Show Chinese reference</summary><div class="translation-source-list translation-chinese-answer">${sourceAnswer}</div></details></div></details></div>
 <div class="prevnext translation-prevnext"><button class="pn" ${prev?`onclick="go('#history-translation=${prev.id}')"`:`onclick="go('${historyRoute('translation',item.level)}')"`}><small>← ${prev?'Previous':'Archive'}</small><b>${prev?`${historyCode(prev,'translation')} · ${esc(prev.title)}`:'Historical Translation'}</b></button><button class="pn" ${next?`onclick="go('#history-translation=${next.id}')"`:`onclick="go('${historyRoute('translation',item.level)}')"`}><small>${next?'Next':'Back to archive'} →</small><b>${next?`${historyCode(next,'translation')} · ${esc(next.title)}`:'Historical Translation'}</b></button></div>${copyLinkBar()}</section>`;
 shell(content,'History')
}
function journey(){const list=[...COUNTRIES].sort((a,b)=>a.readOrder-b.readOrder);const content=`<section class="page-pad practice-page-head"><div class="eyebrow">Reading</div><h1 class="page-title">Country & Culture</h1>${readingTopicNav('country')}${countryReadingNav('journey')}</section><div class="journey-list">${list.map(c=>`<div class="journey-item" onclick="go('#country=${c.slug}&level=${preferredLevel(c)}')"><span class="n">#${c.readOrder}</span><b>${esc(c.name)}</b><small style="color:var(--muted)">${esc(c.region)}</small></div>`).join('')}</div>`;shell(content,'Reading')}
function render(){
 const h=location.hash||'#home';
 if(h.startsWith('#country=')){const p=new URLSearchParams(h.slice(1));return country(p.get('country'),p.get('level')||'B1')}
 if(h.startsWith('#article=')){const slug=h.split('=')[1];return country(slug,'B1')}
 if(h.startsWith('#dialogue=')){const p=new URLSearchParams(h.slice(1));return dialoguePage(p.get('dialogue'))}
 if(h.startsWith('#translation=')){const p=new URLSearchParams(h.slice(1));return translationPage(p.get('translation'))}
 if(h.startsWith('#sentence=')){const p=new URLSearchParams(h.slice(1));return sentencePage(p.get('sentence'))}
 if(h.startsWith('#review-theme='))return reviewLibrary();
 if(h.startsWith('#history-sentence=')){const p=new URLSearchParams(h.slice(1));return historySentencePage(p.get('history-sentence'))}
 if(h.startsWith('#history-dialogue=')){const p=new URLSearchParams(h.slice(1));return historyDialoguePage(p.get('history-dialogue'))}
 if(h.startsWith('#history-translation=')){const p=new URLSearchParams(h.slice(1));return historyTranslationPage(p.get('history-translation'))}
 if(h.startsWith('#history=')){const p=new URLSearchParams(h.slice(1));return historyLibrary(p.get('history')||'sentence',p.get('level')||'A1')}
 if(h.startsWith('#review=')){const p=new URLSearchParams(h.slice(1));return reviewPage(p.get('review'))}
 if(h==='#review-practice')return reviewLibrary();
 if(h==='#reading-business')return readingPlaceholder('business');
 if(h==='#reading-encyclopedia')return readingPlaceholder('encyclopedia');
 if(h==='#live-reading')return liveReadingPage();
 if(h==='#reading'||h==='#library'||h==='#articles')return library();
 if(h==='#translations')return translationLibrary();
 if(h==='#dialogues')return dialogueLibrary();
 if(h==='#screen-lines'||h.startsWith('#screen-line='))return idiomsZone();
 if(h==='#idioms')return idiomsZone();
 if(h==='#words')return wordZone();
 if(h==='#word-list'||h.startsWith('#word-list&')){const p=new URLSearchParams(h.slice(1));return wordList(p.get('page')||1)}
 if(h==='#chunks')return chunkZone();
 if(h==='#history')return historyLibrary('sentence','A1');
 if(h==='#sentences')return sentenceLibrary();
 if(h==='#map')return mapPage();
 if(h==='#journey')return journey();
 if(h==='#practice')return home();
 return home()
}
window.addEventListener('hashchange',render);window.addEventListener('DOMContentLoaded',render);window.mapZoom=mapZoom;window.mapReset=mapReset;window.toggleTheme=toggleTheme;window.setWordHelp=setWordHelp;window.showWordPopup=showWordPopup;window.closeWordPopup=closeWordPopup;window.copyArticle=copyArticle;window.toggleExploreMenu=toggleExploreMenu;window.closeExploreMenu=closeExploreMenu;window.openCountryFromMenu=openCountryFromMenu;window.jumpRegion=jumpRegion;window.menuSearch=menuSearch;

window.addEventListener('keydown',event=>{if(event.key==='Escape'&&state.menuOpen){closeExploreMenu();document.querySelector('.brand-toggle')?.focus()}});
