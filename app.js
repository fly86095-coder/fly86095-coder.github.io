
const app=document.getElementById('app');
const state={region:'All',query:'',page:1,perPage:12,view:'study'};
const countries=[...window.COUNTRIES].sort((a,b)=>a.readOrder-b.readOrder);
const bySlug=Object.fromEntries(countries.map(c=>[c.slug,c]));
const regionOrder=window.SITE.regions;
const articleRows=countries.flatMap(c=>c.articles.map((a,idx)=>({...a,country:c,partIndex:idx+1,totalParts:c.articles.length})));
const imageCache=new Map();
const flagUrl=c=>`https://flagcdn.com/w160/${c.flag}.png`;
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function parseHash(){
  const raw=(location.hash||'#home').slice(1);
  if(raw.startsWith('article=')){
    const v=raw.slice(8); const [slug,partRaw]=v.split('&part='); return {view:'article',slug,part:Math.max(1,Number(partRaw)||1)};
  }
  if(raw.startsWith('country=')) return {view:'article',slug:raw.slice(8),part:1};
  return {view:raw||'home'};
}
function go(hash){location.hash=hash;window.scrollTo({top:0,behavior:'smooth'});}
function pinyinText(zh){try{return window.pinyinPro?.pinyin(zh,{toneType:'symbol',type:'string'})||''}catch{return ''}}

function header(active='Home'){
return `<header class="topbar"><nav class="nav">
  <div class="brand" onclick="go('#home')"><div class="brandmark">◫</div><strong>${SITE.name}</strong></div>
  <div class="links">${['Home','Regions','Map','Articles','About'].map(x=>`<a class="${active===x?'active':''}" href="#${x.toLowerCase()}">${x}</a>`).join('')}</div>
  <input class="nav-search" placeholder="Search countries or articles…" aria-label="Search" onkeydown="if(event.key==='Enter'){state.query=this.value;state.page=1;go('#articles')}" />
  <button class="journey-btn" onclick="go('#journey')">My Journey</button>
  <button class="mobile-toggle" onclick="go('#articles')" aria-label="Open article library">☰</button>
</nav></header>`}
function footer(){return `<footer class="footer">${SITE.name} · ${countries.length} countries · ${articleRows.length} articles · English + 简体中文 + 拼音</footer>`}
function shell(content,active='Home'){app.innerHTML=`<div class="shell">${header(active)}<main class="main">${content}</main>${footer()}</div>`}

async function wikiImage(pages){
  const key=pages.join('|').toLowerCase(); if(imageCache.has(key))return imageCache.get(key);
  for(const title of pages){
    try{
      const url=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages|info&inprop=url&piprop=thumbnail&pithumbsize=900&redirects=1&titles=${encodeURIComponent(title)}`;
      const r=await fetch(url); if(!r.ok)continue; const j=await r.json(); const p=Object.values(j.query?.pages||{})[0];
      const src=p?.thumbnail?.source; if(src){const out={src,page:p.fullurl||`https://en.wikipedia.org/wiki/${encodeURIComponent(title.replaceAll(' ','_'))}`,title};imageCache.set(key,out);return out}
    }catch(e){}
  }
  imageCache.set(key,null);return null;
}
function hydrateImages(root=document){
  root.querySelectorAll('[data-wiki-pages]').forEach(async img=>{
    if(img.dataset.loaded)return; img.dataset.loaded='1';
    const pages=JSON.parse(img.dataset.wikiPages||'[]'); const result=await wikiImage(pages);
    if(result){img.src=result.src;img.alt=img.dataset.alt||result.title; const fig=img.closest('figure'); const link=fig?.querySelector('.wiki-link'); if(link){link.href=result.page;link.textContent='Image reference: Wikipedia';}}
    else{img.removeAttribute('src');img.alt='Image unavailable';img.classList.add('image-loading')}
  });
}

function articleThumbPages(c,a){return a.sections[0]?.imagePages||[c.name]}
function articleCard(row){const c=row.country;return `<article class="article-card" onclick="go('#article=${c.slug}&part=${row.partIndex}')">
  <div class="thumb"><img loading="lazy" alt="${esc(row.title)}" data-alt="${esc(row.title)}" data-wiki-pages='${esc(JSON.stringify(articleThumbPages(c,row)))}'><img class="flag-corner" src="${flagUrl(c)}" alt="${esc(c.name)} flag"></div>
  <div class="card-body"><span class="tag region">${esc(c.region)}</span> <span class="tag">${esc(row.level)}</span><h3>${esc(c.name)}</h3><div class="article-name">${esc(row.title.replace(`${c.name} – `,''))}</div><div class="meta"><span>${row.totalParts>1?`Part ${row.partIndex}/${row.totalParts}`:'Country article'}</span><span>Reading #${c.readOrder}</span></div></div>
</article>`}
function countryCard(c){return `<article class="country-card" onclick="go('#article=${c.slug}')"><div class="country-top"><img class="flag" src="${flagUrl(c)}" alt="${esc(c.name)} flag"><div><span class="tag">${c.articles.length} article${c.articles.length>1?'s':''}</span><h3>${esc(c.name)}</h3></div></div><p>${esc(c.summary)}</p></article>`}
function stat(num,label,small){return `<div class="stat"><div class="num">${esc(num)}</div><b>${esc(label)}</b><small>${esc(small)}</small></div>`}

function renderHome(){
  const latest=[...countries].sort((a,b)=>b.readOrder-a.readOrder).slice(0,3);
  const latestArticles=latest.flatMap(c=>c.articles.slice(-1).map((a,i)=>({...a,country:c,partIndex:c.articles.length,totalParts:c.articles.length}))).slice(0,3);
  const regionBands=regionOrder.map(r=>{const list=countries.filter(c=>c.region===r);return `<div class="region-band"><div><div class="eyebrow">${list.length} read</div><h2>${r}</h2><p class="subcopy">All highlighted countries are linked to their article pages.</p></div><div class="region-countries">${list.map(c=>`<div class="country-mini" onclick="go('#article=${c.slug}')"><img src="${flagUrl(c)}" alt=""><span>${esc(c.name)}</span></div>`).join('')}</div></div>`}).join('');
  const content=`<section class="hero"><div class="hero-copy"><div class="eyebrow">Personal English reading atlas</div><h1>Track Every<br>Country You’ve Read</h1><div class="gold-rule"></div><p>Country-by-country English reading from west of China toward Europe. Every article includes matching visual references, Simplified Chinese, and automatically generated tone-marked pinyin.</p><div class="stats">${stat(countries.length,'Countries Read','Map and regional progress')}${stat(articleRows.length,'Articles','Some countries have multi-part sets')}${stat(bySlug[SITE.latest].name,'Latest Country','Reading #'+bySlug[SITE.latest].readOrder)}</div></div><div class="map-wrap"><div id="world-map"></div><div class="map-legend"><div class="legend-row"><span class="swatch read"></span>Read</div><div class="legend-row"><span class="swatch"></span>Not yet read</div></div></div></section>
  <section class="section"><div class="section-head"><div><div class="eyebrow">Newest material</div><h2>Latest Articles</h2><p>New countries automatically update this section, the map, counts, regions, search, and journey.</p></div><button class="ghost-btn" onclick="go('#articles')">View all ${articleRows.length} articles →</button></div><div class="latest-grid">${latestArticles.map(articleCard).join('')}</div></section>
  <section class="section"><div class="section-head"><div><div class="eyebrow">Regional archive</div><h2>Countries You Have Read</h2><p>Choose a region or open any country directly.</p></div></div>${regionBands}</section>
  <section class="journey-strip"><div><div class="eyebrow">Reading path</div><h2>From West of China to Europe</h2><p class="subcopy">One connected data system: add the next country once, and every view updates.</p><button class="ghost-btn" onclick="go('#journey')">Open full journey</button></div><div class="timeline">${[['01','South Asia','Nepal'],['02','Central Asia','Steppe & mountains'],['03','Middle East','Persia & Caucasus'],['04','Balkans','Southeast Europe'],['05','Central Europe','Danube & Alps'],['06','Western Europe','France'],['→','Next','Journey continues']].map(x=>`<div class="journey-node"><div class="journey-icon">${x[0]}</div><b>${x[1]}</b><small>${x[2]}</small></div>`).join('')}</div></section>`;
  shell(content,'Home');hydrateImages();renderMap('world-map',false)
}

function filteredRows(){
  let list=[...articleRows]; if(state.region!=='All')list=list.filter(r=>r.country.region===state.region);
  const q=state.query.trim().toLowerCase(); if(q)list=list.filter(r=>[r.country.name,r.country.region,r.title,r.titleZh,r.summary,r.summaryZh,...r.sections.flatMap(s=>[s.heading,s.headingZh,s.en,s.zh])].join(' ').toLowerCase().includes(q));
  return list.sort((a,b)=>b.country.readOrder-a.country.readOrder||b.partIndex-a.partIndex)
}
function renderArticles(){
  const list=filteredRows();const pages=Math.max(1,Math.ceil(list.length/state.perPage));state.page=Math.min(state.page,pages);const shown=list.slice((state.page-1)*state.perPage,state.page*state.perPage);
  const content=`<section class="page-pad"><div class="eyebrow">Article library</div><h1 class="page-title">All Reading Articles</h1><p class="subcopy">This library lists actual article units, not only countries. Germany, Switzerland, and France keep the four-article format used in your earlier reading work.</p></section><div class="filterbar">${['All',...regionOrder].map(r=>`<button class="tab ${state.region===r?'active':''}" onclick="state.region='${r}';state.page=1;renderArticles()">${r}</button>`).join('')}<input class="search" value="${esc(state.query)}" placeholder="Search country, topic, or article…" oninput="state.query=this.value;state.page=1;renderArticles()"></div><div class="library-grid">${shown.length?shown.map(articleCard).join(''):'<div class="empty">No matching articles.</div>'}</div><div class="pagination">${Array.from({length:pages},(_,i)=>i+1).map(p=>`<button class="pagebtn ${p===state.page?'active':''}" onclick="state.page=${p};renderArticles();window.scrollTo({top:150,behavior:'smooth'})">${p}</button>`).join('')}</div>`;
  shell(content,'Articles');hydrateImages();
}

function modeForSections(){return state.view==='en'?'en':state.view==='zh'?'zh':'study'}
function studySection(s){
  const py=pinyinText(s.zh);return `<section class="study-section" data-mode="${modeForSections()}"><div class="study-copy"><div class="eyebrow">${esc(s.headingZh)}</div><h2>${esc(s.heading)}</h2><div class="en-block">${esc(s.en)}</div><div class="zh-block">${esc(s.zh)}</div><div class="pinyin-block">${esc(py||'拼音载入中…')}</div></div><figure class="section-figure"><img class="section-image" loading="lazy" data-alt="${esc(s.caption)}" data-wiki-pages='${esc(JSON.stringify(s.imagePages))}'><figcaption>${esc(s.caption)} · <a class="wiki-link" target="_blank" rel="noopener">visual reference</a></figcaption></figure></section>`
}
function renderArticle(slug,part=1){
  const c=bySlug[slug];if(!c){go('#articles');return}part=Math.min(Math.max(1,part),c.articles.length);const a=c.articles[part-1];
  const ordered=countries;const idx=ordered.findIndex(x=>x.slug===c.slug);const prev=ordered[idx-1],next=ordered[idx+1];
  const articleNav=c.articles.map((x,i)=>`<button class="part-link ${i===part-1?'active':''}" onclick="go('#article=${c.slug}&part=${i+1}')"><b>${i+1}. ${esc(x.title.replace(`${c.name} – `,''))}</b><small>${esc(x.level)}</small></button>`).join('');
  const facts=Object.entries(c.facts).map(([k,v])=>`<div class="fact-pill"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('');
  const content=`<div class="article-page"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#regions">${esc(c.region)}</a> / ${esc(c.name)} / Article ${part}</div><section class="country-banner"><div class="country-heading"><img class="flag" src="${flagUrl(c)}" alt="${esc(c.name)} flag"><div><div class="eyebrow">Reading #${c.readOrder} · ${esc(c.region)}</div><h1>${esc(c.name)}</h1><p>${esc(c.summary)}</p></div></div><div class="fact-row">${facts}</div></section><div class="article-shell"><aside class="article-nav"><h3>${c.articles.length>1?'Article set':'This country'}</h3>${articleNav}</aside><main class="article-main"><header class="article-header"><span class="tag region">${esc(c.region)}</span> <span class="tag">${esc(a.level)}</span><h1>${esc(a.title)}</h1><div class="article-title-zh">${esc(a.titleZh)}</div><div class="pinyin-block" style="margin-top:-3px;margin-bottom:10px">${esc(pinyinText(a.titleZh))}</div><p>${esc(a.summary)}</p><div class="view-controls"><span class="label">Reading display</span><button class="view-btn ${state.view==='study'?'active':''}" onclick="state.view='study';renderArticle('${c.slug}',${part})">English + 简中 + 拼音</button><button class="view-btn ${state.view==='en'?'active':''}" onclick="state.view='en';renderArticle('${c.slug}',${part})">English only</button><button class="view-btn ${state.view==='zh'?'active':''}" onclick="state.view='zh';renderArticle('${c.slug}',${part})">简中 + 拼音</button></div></header>${a.sections.map(studySection).join('')}<div class="notice">Images are requested by the exact topic of each section (for example: Rhine River, Berlin Wall, Pirot carpet, Dnipro River), not by a generic country search. Images are intentionally kept compact so the text remains the main reading material.</div><div class="article-bottom"><button class="pn" ${prev?`onclick="go('#article=${prev.slug}')"`:''}><small>${prev?'← Previous country':'Start of journey'}</small><b>${prev?esc(prev.name):esc(c.name)}</b></button><button class="pn" onclick="go('${next?`#article=${next.slug}`:'#journey'}')"><small>${next?'Next country →':'Journey continues →'}</small><b>${next?esc(next.name):'Choose the next country'}</b></button></div></main></div></div>`;
  shell(content,'Articles');hydrateImages();
}

function renderRegions(){const content=`<section class="page-pad"><div class="eyebrow">Regions</div><h1 class="page-title">Explore by Region</h1><p class="subcopy">Country counts come from the same data that controls the map and article library.</p></section>${regionOrder.map(r=>{const list=countries.filter(c=>c.region===r);return `<section class="section"><div class="section-head"><div><h2>${r}</h2><p>${list.length} countries read</p></div><button class="ghost-btn" onclick="state.region='${r}';state.page=1;go('#articles')">Open ${r} articles →</button></div><div class="country-grid">${list.map(countryCard).join('')}</div></section>`}).join('')}`;shell(content,'Regions')}
function renderJourney(){const content=`<section class="page-pad"><div class="eyebrow">Chronological reading path</div><h1 class="page-title">My Journey</h1><p class="subcopy">The order below is the actual order stored in the reading database. New countries should always be appended with the next readOrder value.</p></section><div class="country-grid">${countries.map(countryCard).join('')}</div>`;shell(content,'')}
function renderMapPage(){const content=`<section class="page-pad"><div class="eyebrow">Interactive progress map</div><h1 class="page-title">Countries You Have Read</h1><p class="subcopy">Read countries are dark. Click a highlighted country to open its article set.</p></section><div class="map-page"><div id="world-map"></div><div class="map-legend"><div class="legend-row"><span class="swatch read"></span>Read</div><div class="legend-row"><span class="swatch"></span>Not yet read</div></div></div>`;shell(content,'Map');renderMap('world-map',true)}
function renderAbout(){shell(`<section class="page-pad"><div class="eyebrow">About</div><h1 class="page-title">A Living English Reading Archive</h1><p class="subcopy">This site is designed for daily growth. A country record contains its reading order, region, article set, English text, Simplified Chinese translation, and exact image topics. Pinyin is produced directly from the Simplified Chinese text. Because all pages read the same data, adding one new country automatically updates the map, counts, region lists, article library, search, and journey.</p></section><section class="section"><div class="notice">Content rules: keep English around A2 unless a specific article is marked otherwise; use concrete national features instead of empty general statements; avoid unnecessary personal names; avoid describing a country as “small”; name important rivers when useful; and use images that match the exact paragraph topic.</div></section>`,'About')}

async function renderMap(targetId,isPage=false){
  const el=document.getElementById(targetId);if(!el)return;if(!window.d3||!window.topojson){el.innerHTML='<div class="empty">Map library could not load.</div>';return}
  try{
    const world=await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
    const features=topojson.feature(world,world.objects.countries).features;const width=el.clientWidth||800,height=el.clientHeight||520;
    const svg=d3.select(el).append('svg').attr('viewBox',`0 0 ${width} ${height}`).attr('width','100%').attr('height','100%');
    const projection=d3.geoNaturalEarth1().fitExtent([[10,15],[width-10,height-15]],{type:'FeatureCollection',features});const path=d3.geoPath(projection);
    const readIds=new Map(countries.map(c=>[String(Number(c.mapId)),c]));
    const tip=d3.select('body').append('div').attr('class','map-tip');
    svg.selectAll('path').data(features).join('path').attr('d',path).attr('fill',d=>readIds.has(String(Number(d.id)))?'#0d2f52':'#e5e1d8').attr('stroke','#fff').attr('stroke-width',.55).style('cursor',d=>readIds.has(String(Number(d.id)))?'pointer':'default')
      .on('mousemove',(e,d)=>{const c=readIds.get(String(Number(d.id)));tip.style('display','block').style('left',(e.clientX+12)+'px').style('top',(e.clientY+12)+'px').html(c?`<b>${esc(c.name)}</b><br>${c.articles.length} article${c.articles.length>1?'s':''}`:esc(d.properties?.name||''))})
      .on('mouseleave',()=>tip.style('display','none')).on('click',(e,d)=>{const c=readIds.get(String(Number(d.id)));if(c)go('#article='+c.slug)});
  }catch(e){el.innerHTML='<div class="empty">The map could not load. Country lists and articles are still available.</div>'}
}

function render(){const r=parseHash();if(r.view==='home')renderHome();else if(r.view==='articles')renderArticles();else if(r.view==='article')renderArticle(r.slug,r.part);else if(r.view==='regions')renderRegions();else if(r.view==='map')renderMapPage();else if(r.view==='journey')renderJourney();else if(r.view==='about')renderAbout();else renderHome()}
window.addEventListener('hashchange',render);render();
