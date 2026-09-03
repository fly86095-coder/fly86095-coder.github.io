const app = document.getElementById('app');
const state = { region:'All', query:'', page:1, perPage:12 };
const imageCache = new Map();
const bySlug = Object.fromEntries(ARTICLES.map(a=>[a.slug,a]));
const byMapId = Object.fromEntries(ARTICLES.map(a=>[String(Number(a.mapId)),a]));

function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function flagUrl(a){return `https://flagcdn.com/w160/${a.flag}.png`}
function routeHash(){return location.hash || '#home'}
function go(hash){location.hash=hash;window.scrollTo({top:0,behavior:'smooth'})}

function header(active='Home'){
 return `<header class="topbar"><nav class="nav">
  <div class="brand" onclick="go('#home')"><div class="brandmark">◫</div><strong>${SITE.name}</strong></div>
  <div class="links">
   ${['Home','Regions','Map','Articles','About'].map(x=>`<a class="${active===x?'active':''}" href="#${x.toLowerCase()}">${x}</a>`).join('')}
  </div>
  <input class="nav-search" aria-label="Search articles" placeholder="Search countries, regions, articles…" onkeydown="if(event.key==='Enter'){state.query=this.value;state.page=1;go('#articles');render()}" />
  <button class="journey-btn" onclick="go('#journey')">My Journey</button>
  <button class="mobile-toggle" aria-label="Menu" onclick="go('#articles')">☰</button>
 </nav></header>`
}
function footer(){return `<footer class="footer">${SITE.name} · A growing personal English-reading archive · ${ARTICLES.length} countries read</footer>`}
function shell(content,active='Home'){app.innerHTML=`<div class="shell">${header(active)}<main class="main">${content}</main>${footer()}</div>`}

async function wikiImage(title){
 const key=title.toLowerCase(); if(imageCache.has(key)) return imageCache.get(key);
 try{
  const url=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=1400&redirects=1&titles=${encodeURIComponent(title)}`;
  const r=await fetch(url); const j=await r.json(); const p=Object.values(j.query?.pages||{})[0];
  const src=p?.thumbnail?.source||''; imageCache.set(key,src); return src;
 }catch(e){imageCache.set(key,'');return ''}
}
function hydrateImages(root=document){
 root.querySelectorAll('[data-wiki]').forEach(async el=>{
  if(el.dataset.loaded) return; el.dataset.loaded='1';
  const candidates=(el.dataset.wiki||'').split('|').filter(Boolean);
  let src=''; for(const c of candidates){src=await wikiImage(c);if(src)break}
  if(src){
   if(el.tagName==='IMG') el.src=src; else el.style.backgroundImage=`url("${src}")`;
  }
 });
}
function articleCard(a){
 return `<article class="article-card" onclick="go('#article=${a.slug}')">
  <div class="thumb"><img loading="lazy" alt="${esc(a.name)}" src="${flagUrl(a)}" data-wiki="${esc(a.imagePages.join('|'))}" /></div>
  <div class="card-body"><span class="tag">${esc(a.region)} · ${a.level}</span><h3>${esc(a.name)}</h3><p>${esc(a.title.replace(`${a.name} — `,''))}</p><div class="meta"><span>Reading #${a.readOrder}</span><span>Country article</span></div></div>
 </article>`
}
function stat(label,num,small){return `<div class="stat"><div class="num">${num}</div><b>${label}</b><small>${small}</small></div>`}

function renderHome(){
 const latest=[...ARTICLES].sort((a,b)=>b.readOrder-a.readOrder).slice(0,3);
 const regionPanels=REGION_ORDER.map(r=>{
  const list=ARTICLES.filter(a=>a.region===r); return `<div class="region-panel"><h3>${r}</h3>${list.slice(0,4).map(a=>`<div class="country-mini" onclick="go('#article=${a.slug}')"><img class="flag" src="${flagUrl(a)}" alt=""><span class="name">${esc(a.name)}</span><span class="tag">${a.level}</span></div>`).join('')}<button class="ghost-btn" style="margin-top:12px" onclick="state.region='${r}';state.page=1;go('#articles')">View all ${list.length}</button><div class="progress"><i></i></div></div>`
 }).join('');
 const content=`<section class="hero">
  <div class="hero-copy"><div class="eyebrow">Your English reading journey</div><h1>Track Every<br>Country You’ve Read</h1><div class="gold-rule"></div><p>A reading atlas of the world. Explore clear English articles about countries—starting west of China and moving across Asia, the Middle East, and Europe.</p><div class="stats">${stat('Countries Read',ARTICLES.length,'Articles completed')}${stat('Main Regions',REGION_ORDER.length,REGION_ORDER.join(' · '))}${stat('Latest Country',bySlug[SITE.latest].name,'Reading #'+bySlug[SITE.latest].readOrder)}</div></div>
  <div class="map-wrap"><div id="world-map"></div><div class="map-legend"><div class="legend-row"><span class="swatch read"></span>Read</div><div class="legend-row"><span class="swatch"></span>Not yet read</div></div></div>
 </section>
 <section class="section"><div class="section-head"><div><h2>Latest Articles</h2><p>New countries automatically appear here as your journey grows.</p></div><button class="ghost-btn" onclick="go('#articles')">View all articles →</button></div><div class="latest-grid">${latest.map(articleCard).join('')}</div></section>
 <section class="section"><div class="section-head"><div><h2>Browse by Region</h2><p>Every country is linked to its article, map status, and reading order.</p></div></div><div class="dashboard"><div><div class="eyebrow">Reading overview</div><h2 style="font-family:Georgia,serif;color:var(--navy);font-size:34px">From the Himalayas to Western Europe</h2><p style="line-height:1.7;color:var(--muted)">The archive is designed as one connected system: add one country to the data, and the homepage count, map highlight, region lists, library, search, and journey order all update together.</p><button class="primary-btn" onclick="go('#journey')">See the journey</button></div><div class="region-columns">${regionPanels}</div></div></section>
 <section class="journey"><div><div class="eyebrow">Our reading journey</div><h2>From West of China to Europe</h2><p style="color:var(--muted);line-height:1.6">A step-by-step archive that grows one country at a time.</p><button class="ghost-btn" onclick="go('#articles')">Open article library</button></div><div class="timeline">${[['⛰','South Asia','We begin in Nepal'],['◈','Central Asia','Across the steppe'],['◉','Middle East','Caucasus and Persia'],['⌂','Europe','Westward across Europe'],['⚑','Continues','More countries ahead']].map(s=>`<div class="step"><div class="step-icon">${s[0]}</div><b>${s[1]}</b><small>${s[2]}</small></div>`).join('')}</div></section>`;
 shell(content,'Home'); hydrateImages(); renderMap('world-map',false);
}

function filteredArticles(){
 let list=[...ARTICLES];
 if(state.region && state.region!=='All') list=list.filter(a=>a.region===state.region);
 const q=state.query.trim().toLowerCase(); if(q) list=list.filter(a=>[a.name,a.region,a.title,a.summary,...a.sections.flat()].join(' ').toLowerCase().includes(q));
 return list.sort((a,b)=>b.readOrder-a.readOrder)
}
function renderArticles(){
 const list=filteredArticles(); const pages=Math.max(1,Math.ceil(list.length/state.perPage)); state.page=Math.min(state.page,pages); const start=(state.page-1)*state.perPage; const shown=list.slice(start,start+state.perPage);
 const counts=Object.fromEntries(REGION_ORDER.map(r=>[r,ARTICLES.filter(a=>a.region===r).length]));
 const content=`<section class="page-pad"><div class="eyebrow">Article Library</div><h1 class="page-title">All Reading Articles</h1><p style="color:var(--muted);max-width:720px;line-height:1.7">Browse every country article. Filter by region, search the archive, and open any country to read the full text with supporting images.</p></section>
 <div class="library-layout"><aside class="side-summary"><h3>Reading Overview</h3><div class="overview-stat"><strong>${ARTICLES.length}</strong>Countries covered</div><div class="overview-stat"><strong>${REGION_ORDER.length}</strong>Main regions</div>${REGION_ORDER.map(r=>`<div class="overview-stat"><b>${r}</b><span style="float:right">${counts[r]}</span><div class="progress"><i></i></div></div>`).join('')}<button class="ghost-btn" style="width:100%;margin-top:14px" onclick="go('#map')">View on map</button></aside>
 <section><div class="filterbar">${['All',...REGION_ORDER].map(r=>`<button class="tab ${state.region===r?'active':''}" onclick="state.region='${r}';state.page=1;renderArticles()">${r}</button>`).join('')}<input class="search" value="${esc(state.query)}" placeholder="Search articles…" oninput="state.query=this.value;state.page=1;renderArticles()"></div><div class="library-grid">${shown.length?shown.map(articleCard).join(''):'<div class="empty">No articles found.</div>'}</div><div class="pagination">${Array.from({length:pages},(_,i)=>i+1).map(p=>`<button class="pagebtn ${p===state.page?'active':''}" onclick="state.page=${p};renderArticles();window.scrollTo({top:250,behavior:'smooth'})">${p}</button>`).join('')}</div></section></div>`;
 shell(content,'Articles'); hydrateImages();
}

function renderArticle(slug){
 const a=bySlug[slug]; if(!a){go('#articles');return}
 const ordered=[...ARTICLES].sort((x,y)=>x.readOrder-y.readOrder); const idx=ordered.findIndex(x=>x.slug===slug), prev=ordered[idx-1], next=ordered[idx+1];
 const sections=a.sections.map((s,i)=>`<section id="s${i}" class="article-section"><h2>${esc(s[0])}</h2><p>${esc(s[1])}</p>${i===0||i===1?`<figure class="article-figure"><img loading="lazy" alt="${esc(a.name)} — ${esc(s[0])}" src="${flagUrl(a)}" data-wiki="${esc((i===0?[a.imagePages[0],a.imagePages[2]]:[a.imagePages[1],a.imagePages[0]]).join('|'))}"><figcaption>${esc(a.name)} · ${esc(s[0])}</figcaption></figure>`:''}</section>`).join('');
 const facts=Object.entries(a.facts).map(([k,v])=>`<div class="fact"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('');
 const prevButton = prev ? `<button class="pn" onclick="go('#article=${prev.slug}')"><small>← Previous country</small><b>${esc(prev.name)}</b></button>` : '<div></div>';
 const nextButton = next ? `<button class="pn" onclick="go('#article=${next.slug}')"><small>Next country →</small><b>${esc(next.name)}</b></button>` : `<button class="pn" onclick="go('#articles')"><small>Journey continues</small><b>Choose the next country</b></button>`;
 const toc = a.sections.map((s,i)=>`<a href="#s${i}" onclick="event.preventDefault();document.getElementById('s${i}').scrollIntoView({behavior:'smooth'})">${i+1}. ${esc(s[0])}</a>`).join('');
 const content=`<div class="article-page"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#articles" onclick="state.region='${a.region}'">${a.region}</a> / ${esc(a.name)}</div><div class="article-hero"><section class="article-intro"><div class="eyebrow">${esc(a.region)}</div><h1 class="article-title">${esc(a.title)}</h1><p>${esc(a.summary)}</p><div class="chips"><span class="chip">${esc(a.region)}</span><span class="chip">Level ${a.level}</span><span class="chip">Reading #${a.readOrder}</span></div><button class="primary-btn" onclick="go('#journey')">View my journey</button></section><div class="hero-photo"><img alt="${esc(a.name)}" src="${flagUrl(a)}" data-wiki="${esc(a.imagePages.join('|'))}"></div></div>
 <div class="article-layout"><article class="article-body">${sections}<div class="prevnext">${prevButton}${nextButton}</div></article><aside class="sidebar"><div class="side-card"><h3>At a Glance</h3><img class="flag" style="width:72px;height:48px;margin-bottom:12px" src="${flagUrl(a)}" alt="${esc(a.name)} flag"><div class="facts">${facts}</div></div><div class="side-card toc"><h3>Table of Contents</h3>${toc}</div><div class="side-card"><h3>Reading note</h3><p style="color:var(--muted);line-height:1.6">Written in clear A2-level English, with short sections and visual context to support reading comprehension.</p></div></aside></div></div>`;
 shell(content,'Articles'); hydrateImages();
}

function renderRegions(){
 const content=`<section class="page-pad"><div class="eyebrow">Regions</div><h1 class="page-title">Explore by Region</h1><p style="color:var(--muted)">See where your reading journey has already traveled.</p></section>${REGION_ORDER.map(r=>{const list=ARTICLES.filter(a=>a.region===r);return `<section class="section"><div class="region-hero"><div><h2 style="font-family:Georgia,serif;color:var(--navy);font-size:36px;margin:0">${r}</h2><p style="color:var(--muted)">${list.length} countries read</p></div><button class="ghost-btn" onclick="state.region='${r}';state.page=1;go('#articles')">Open ${r} library</button></div><div class="latest-grid">${list.slice(0,3).map(articleCard).join('')}</div></section>`}).join('')}`;
 shell(content,'Regions');hydrateImages();
}
function renderMapPage(){
 const content=`<section class="page-pad"><div class="eyebrow">Interactive map</div><h1 class="page-title">Your Reading Map</h1><p style="color:var(--muted)">Dark countries have already been read. Click any highlighted country to open its article.</p></section><div class="map-page"><div id="world-map"></div><div class="map-legend"><div class="legend-row"><span class="swatch read"></span>Read</div><div class="legend-row"><span class="swatch"></span>Not yet read</div></div></div>`;
 shell(content,'Map');renderMap('world-map',true)
}
function renderJourney(){
 const content=`<section class="page-pad"><div class="eyebrow">Reading order</div><h1 class="page-title">My Journey</h1><p style="color:var(--muted);max-width:760px;line-height:1.7">This is the chronological path of your country-reading project. New countries can be added to the end, and every connected view updates from the same data.</p></section><div class="library-grid">${[...ARTICLES].sort((a,b)=>a.readOrder-b.readOrder).map(articleCard).join('')}</div>`;
 shell(content,'');hydrateImages();
}
function renderAbout(){
 const content=`<section class="page-pad"><div class="eyebrow">About the project</div><h1 class="page-title">Read the World in Clear English</h1></section><div class="about"><p>This site is a personal English-reading atlas. Each country has one clear article focused on useful cultural knowledge: geography, traditions, architecture, history, festivals, and daily life.</p><div class="note">The site is data-driven. When a new country article is added, the country count, region collection, map highlight, search results, latest articles, and reading journey can update together.</div><p>The reading style is designed around A2 English: controlled vocabulary, straightforward grammar, short sections, and visual support. The goal is not to collect facts without structure, but to build a memorable journey across connected countries and regions.</p></div>`;
 shell(content,'About')
}

async function renderMap(id,large=false){
 const node=document.getElementById(id); if(!node) return;
 if(!window.d3||!window.topojson){node.innerHTML='<div class="empty">Map is loading…</div>';return}
 try{
  const data=await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
  const features=topojson.feature(data,data.objects.countries).features; const readIds=new Set(ARTICLES.map(a=>Number(a.mapId)));
  const w=node.clientWidth||900,h=node.clientHeight||(large?680:520); const svg=d3.select(node).append('svg').attr('viewBox',`0 0 ${w} ${h}`).attr('width','100%').attr('height','100%');
  const projection=d3.geoNaturalEarth1().fitExtent([[12,12],[w-12,h-12]],{type:'Sphere'}); const path=d3.geoPath(projection);
  svg.append('path').datum({type:'Sphere'}).attr('d',path).attr('fill','#edf7f8');
  svg.selectAll('path.country').data(features).join('path').attr('class','country').attr('d',path).attr('fill',d=>readIds.has(Number(d.id))?'#0f2f52':'#ded8cd').attr('stroke','#fffdf8').attr('stroke-width',.7).style('cursor',d=>readIds.has(Number(d.id))?'pointer':'default').on('click',(e,d)=>{const a=byMapId[String(Number(d.id))];if(a)go('#article='+a.slug)}).append('title').text(d=>byMapId[String(Number(d.id))]?.name||'Not yet read');
 }catch(e){node.innerHTML='<div class="empty">The map could not load. Country articles are still available in the library.</div>'}
}

function render(){
 const h=routeHash();
 if(h.startsWith('#article=')) return renderArticle(h.split('=')[1]);
 if(h==='#articles') return renderArticles();
 if(h==='#regions') return renderRegions();
 if(h==='#map') return renderMapPage();
 if(h==='#journey') return renderJourney();
 if(h==='#about') return renderAbout();
 return renderHome();
}
window.addEventListener('hashchange',render); window.go=go; render();
