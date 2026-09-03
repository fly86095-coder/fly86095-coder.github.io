
const app=document.getElementById('app');
const bySlug=Object.fromEntries(COUNTRIES.map(c=>[c.slug,c]));
const byMapId=Object.fromEntries(COUNTRIES.map(c=>[String(Number(c.mapId)),c]));
const state={region:'All',query:'',page:1,perPage:12,display:'all'};
const imgCache=new Map();
function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function flag(c){return `https://flagcdn.com/w160/${c.flag}.png`}
function go(h){location.hash=h;scrollTo({top:0,behavior:'smooth'})}
function header(active='Home'){return `<header class="topbar"><nav class="nav"><div class="brand" onclick="go('#home')"><div class="brandmark">◫</div><strong>${SITE.name}</strong></div><div class="links">${['Home','Library','Map','Journey'].map(x=>`<a class="${active===x?'active':''}" href="#${x.toLowerCase()}">${x}</a>`).join('')}</div><input class="nav-search" placeholder="Search countries…" onkeydown="if(event.key==='Enter'){state.query=this.value;state.page=1;go('#library');render()}"/><button class="journey-btn" onclick="go('#journey')">My Journey</button></nav></header>`}
function footer(){return `<footer class="footer">${SITE.name} · ${SITE.version} · ${COUNTRIES.length} countries · A1 + B1 encyclopedia reading</footer>`}
function shell(content,active){app.innerHTML=`<div class="shell">${header(active)}<main class="main">${content}</main>${footer()}</div>`}
async function wikiImage(titles){const key=titles.join('|');if(imgCache.has(key))return imgCache.get(key);for(const title of titles){try{const u=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=700&redirects=1&titles=${encodeURIComponent(title)}`;const j=await fetch(u).then(r=>r.json());const p=Object.values(j.query?.pages||{})[0];if(p?.thumbnail?.source){const v={src:p.thumbnail.source,title};imgCache.set(key,v);return v}}catch(e){}}const v={src:'',title:titles[0]||''};imgCache.set(key,v);return v}
function hydrate(root=document){root.querySelectorAll('[data-wiki]').forEach(async el=>{if(el.dataset.loaded)return;el.dataset.loaded='1';const titles=(el.dataset.wiki||'').split('|').filter(Boolean);const r=await wikiImage(titles);if(r.src)el.src=r.src;const cap=el.closest('figure')?.querySelector('figcaption');if(cap&&r.title)cap.innerHTML=`${esc(cap.dataset.caption||r.title)} · <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/${encodeURIComponent(r.title.replaceAll(' ','_'))}">image source</a>`})}
function card(c){return `<article class="country-card"><div class="card-top"><img loading="lazy" src="${flag(c)}" data-wiki="${esc(c.versions.B1.sections[0].imagePages.join('|'))}" alt="${esc(c.name)}"><img class="flag-small" src="${flag(c)}" alt=""></div><div class="card-body"><div class="eyebrow">Reading #${c.readOrder} · ${esc(c.region)}</div><h3>${esc(c.name)}</h3><p>${esc(c.summary)}</p><div class="level-actions"><button class="levelbtn a1" onclick="go('#country=${c.slug}&level=A1')">Read A1</button><button class="levelbtn b1" onclick="go('#country=${c.slug}&level=B1')">Read B1</button></div></div></article>`}
function stat(n,l){return `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`}
function home(){const latest=[...COUNTRIES].sort((a,b)=>b.readOrder-a.readOrder).slice(0,4);const content=`<section class="hero"><div><div class="eyebrow">Bilingual country encyclopedia</div><h1>Read the World<br>One Country at a Time</h1><p>Every country has two complete reading paths: an easier A1 introduction and a richer B1 cultural profile. English, simplified Chinese, pinyin, visual context, festivals, crafts, architecture, and everyday life stay together in one archive.</p><div class="stats">${stat(COUNTRIES.length,'Countries read')}${stat(COUNTRIES.length*2,'A1 + B1 articles')}${stat(SITE.regions.length,'Main regions')}</div></div><div class="map-card"><svg id="mapSvg"></svg><div class="legend"><div><span class="swatch read"></span>Read</div><div><span class="swatch"></span>Not yet read</div><small>Zoom in to reveal country names</small></div><div class="map-tools"><button onclick="mapZoom(1.45)">+</button><button onclick="mapZoom(.69)">−</button><button onclick="mapReset()">↺</button></div></div></section><section class="section"><div class="section-head"><div><h2>Latest Countries</h2><p>Choose the reading level before you enter.</p></div><button class="outline" onclick="go('#library')">Open full library →</button></div><div class="country-grid">${latest.map(card).join('')}</div></section><section class="section"><div class="section-head"><div><h2>Browse by Region</h2><p>The archive only includes countries you have already read.</p></div></div><div class="region-tabs">${['All',...SITE.regions].map(r=>`<button class="tab" onclick="state.region='${esc(r)}';go('#library');render()">${esc(r)}</button>`).join('')}</div></section>`;shell(content,'Home');hydrate();renderMap()}
function filtered(){let a=[...COUNTRIES];if(state.region!=='All')a=a.filter(c=>c.region===state.region);const q=state.query.trim().toLowerCase();if(q)a=a.filter(c=>JSON.stringify(c).toLowerCase().includes(q));return a}
function library(){const all=filtered();const pages=Math.max(1,Math.ceil(all.length/state.perPage));state.page=Math.min(state.page,pages);const list=all.slice((state.page-1)*state.perPage,state.page*state.perPage);const content=`<section class="page-pad"><div class="eyebrow">Country library</div><h1 class="page-title">Choose a Country, Then a Level</h1><p style="color:var(--muted);max-width:760px;line-height:1.7">A1 gives you a clear foundation. B1 adds deeper history, architecture, living traditions, festivals, crafts, and social context.</p></section><div class="library-wrap"><div class="library-toolbar"><div class="filterbar">${['All',...SITE.regions].map(r=>`<button class="tab ${state.region===r?'active':''}" onclick="state.region='${esc(r)}';state.page=1;library()">${esc(r)}</button>`).join('')}</div><input class="search" placeholder="Search…" value="${esc(state.query)}" oninput="state.query=this.value;state.page=1;library()"></div><div class="country-grid">${list.map(card).join('')}</div><div class="pagination">${Array.from({length:pages},(_,i)=>`<button class="pagebtn ${state.page===i+1?'active':''}" onclick="state.page=${i+1};library();scrollTo({top:180,behavior:'smooth'})">${i+1}</button>`).join('')}</div></div>`;shell(content,'Library');hydrate()}
function pinyinText(zh){try{if(window.pinyinPro?.pinyin)return pinyinPro.pinyin(zh,{toneType:'symbol',type:'array'}).join(' ')}catch(e){}return 'Pinyin library is loading. Refresh once if this line remains.'}
function setDisplay(mode){state.display=mode;document.querySelectorAll('.displaybtn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));document.querySelectorAll('.zhbox').forEach(el=>el.classList.toggle('hidden-lang',mode==='en'));document.querySelectorAll('.pinyin').forEach(el=>el.classList.toggle('hidden-lang',mode!=='all'))}
function country(slug,level='B1'){const c=bySlug[slug];if(!c)return library();level=(level==='A1'?'A1':'B1');const v=c.versions[level];const ordered=[...COUNTRIES].sort((a,b)=>a.readOrder-b.readOrder);const i=ordered.findIndex(x=>x.slug===slug),prev=ordered[i-1],next=ordered[i+1];const secs=v.sections.map((s,idx)=>`<section id="sec${idx}" class="article-section"><div class="section-text"><div class="eyebrow">${String(idx+1).padStart(2,'0')}</div><h2>${esc(s.heading)}</h2><p class="en">${esc(s.en)}</p><div class="zhbox"><p class="zh">${esc(s.zh)}</p><p class="pinyin">${esc(pinyinText(s.zh))}</p></div></div><figure class="article-figure"><img loading="lazy" src="${flag(c)}" data-wiki="${esc(s.imagePages.join('|'))}" alt="${esc(c.name+' '+s.heading)}"><figcaption data-caption="${esc(s.caption||s.heading)}">${esc(s.caption||s.heading)}</figcaption></figure></section>`).join('');const facts=Object.entries(c.facts).map(([k,val])=>`<div class="fact"><small>${esc(k)}</small><b>${esc(val)}</b></div>`).join('');const toc=v.sections.map((s,i)=>`<a href="#" onclick="event.preventDefault();document.getElementById('sec${i}').scrollIntoView({behavior:'smooth',block:'start'})">${i+1}. ${esc(s.heading)}</a>`).join('');const content=`<div class="country-page"><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#library">Library</a> / ${esc(c.name)}</div><div class="country-header"><div><div class="eyebrow">${esc(c.region)} · Reading #${c.readOrder}</div><h1 class="country-title">${esc(v.title)}</h1><p class="country-summary">${esc(v.summary)}</p><div class="version-switch"><button class="levelbtn a1 ${level==='A1'?'active':''}" onclick="go('#country=${c.slug}&level=A1')">A1 Easy Guide</button><button class="levelbtn b1 ${level==='B1'?'active':''}" onclick="go('#country=${c.slug}&level=B1')">B1 Deep Guide</button></div></div><aside class="country-facts"><div class="eyebrow">At a glance</div><div style="display:flex;align-items:center;gap:12px;margin:8px 0 14px"><img src="${flag(c)}" style="width:66px;border-radius:5px"><b style="font-family:Georgia,serif;color:var(--navy);font-size:25px">${esc(c.name)}</b></div><div class="facts-grid">${facts}</div></aside></div><div class="reading-controls"><div><b style="color:var(--navy)">${level} reading · ${v.sections.length} illustrated sections</b></div><div class="display-buttons"><button data-mode="en" class="displaybtn" onclick="setDisplay('en')">English only</button><button data-mode="zh" class="displaybtn" onclick="setDisplay('zh')">English + 简中</button><button data-mode="all" class="displaybtn active" onclick="setDisplay('all')">English + 简中 + Pinyin</button></div></div><div class="reading-layout"><article class="article">${secs}<div class="prevnext"><button class="pn" ${prev?`onclick="go('#country=${prev.slug}&level=${level}')"`:''}><small>← Previous country</small><b>${prev?esc(prev.name):'Start of journey'}</b></button><button class="pn" ${next?`onclick="go('#country=${next.slug}&level=${level}')"`:`onclick="go('#library')"`}><small>Next country →</small><b>${next?esc(next.name):'Choose the next country'}</b></button></div></article><aside class="sidebar"><div class="side-card toc"><h3>Contents</h3>${toc}</div><div class="side-card"><h3>Reading design</h3><p class="source-note">Each section uses a topic-specific reference image. Images are intentionally small so the text remains the main focus. If an image page has no thumbnail, the country flag appears as a fallback.</p></div><div class="side-card"><h3>Level choice</h3><p class="source-note"><b>A1</b>: shorter sentences and essential ideas.<br><b>B1</b>: more historical cause, cultural context, architecture, festivals, craft, and social meaning.</p></div></aside></div></div>`;shell(content,'Library');hydrate();setDisplay('all')}
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

 function labelBoxesOverlap(a,b,pad=5){
   return !(a.x2+pad<b.x1 || a.x1-pad>b.x2 || a.y2+pad<b.y1 || a.y1-pad>b.y2);
 }
 function updateLabels(t){
   if(!readFeatures.length)return;
   const k=t.k;
   const labels=g.selectAll('.map-label');
   if(k<2.15){labels.style('display','none');return}
   const candidates=readFeatures.map(d=>{
     const c=byMapId[String(Number(d.id))];
     const centroid=path.centroid(d);
     const bounds=path.bounds(d);
     const screenX=t.applyX(centroid[0]),screenY=t.applyY(centroid[1]);
     const screenW=(bounds[1][0]-bounds[0][0])*k;
     const screenH=(bounds[1][1]-bounds[0][1])*k;
     const textW=Math.max(44,c.name.length*7.2);
     const priority=screenW*screenH;
     return {d,c,screenX,screenY,screenW,screenH,textW,priority};
   }).filter(x=>{
     const minW=x.textW+10;
     const minH=18;
     if(k<3.2) return x.screenW>Math.max(100,minW*1.65) && x.screenH>32;
     if(k<5.2) return x.screenW>Math.max(70,minW*1.25) && x.screenH>24;
     if(k<8.0) return x.screenW>Math.max(52,minW) && x.screenH>18;
     return x.screenW>Math.max(34,minW*.72) && x.screenH>13;
   }).sort((a,b)=>b.priority-a.priority);

   const accepted=[];
   const visible=new Set();
   for(const x of candidates){
     const box={x1:x.screenX-x.textW/2,y1:x.screenY-8,x2:x.screenX+x.textW/2,y2:x.screenY+8};
     if(!accepted.some(a=>labelBoxesOverlap(box,a))){
       accepted.push(box); visible.add(String(Number(x.d.id)));
     }
   }
   labels
     .style('display',d=>visible.has(String(Number(d.id)))?'block':'none')
     .style('font-size',`${12/k}px`)
     .style('stroke-width',`${3/k}px`);
 }

 const zoom=d3.zoom().scaleExtent([1,18]).on('zoom',e=>{
   g.attr('transform',e.transform);
   updateLabels(e.transform);
 });
 svg.call(zoom).on('dblclick.zoom',null);
 mapState={svg,g,zoom,projection,path};

 fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json()).then(world=>{
   const feats=topojson.feature(world,world.objects.countries).features;
   readFeatures=feats.filter(d=>byMapId[String(Number(d.id))]);
   g.selectAll('path').data(feats).join('path')
     .attr('d',path)
     .attr('class',d=>`country-shape ${byMapId[String(Number(d.id))]?'read':''}`)
     .style('cursor',d=>byMapId[String(Number(d.id))]?'pointer':'grab')
     .on('mouseenter',(e,d)=>{
       const c=byMapId[String(Number(d.id))];
       if(!c)return;
       tooltip.classed('show',true).html(`<b>${esc(c.name)}</b><small>Reading #${c.readOrder} · Click to open B1</small>`);
     })
     .on('mousemove',(e,d)=>{
       const c=byMapId[String(Number(d.id))]; if(!c)return;
       const rect=node.parentNode.getBoundingClientRect();
       const x=Math.min(e.clientX-rect.left+14,rect.width-190);
       const y=Math.max(10,e.clientY-rect.top-12);
       tooltip.style('left',`${x}px`).style('top',`${y}px`);
     })
     .on('mouseleave',()=>tooltip.classed('show',false))
     .on('click',(e,d)=>{
       const c=byMapId[String(Number(d.id))];
       if(c)go(`#country=${c.slug}&level=B1`);
     });

   g.selectAll('text').data(readFeatures).join('text')
     .attr('class','map-label')
     .attr('transform',d=>`translate(${path.centroid(d)})`)
     .attr('text-anchor','middle')
     .attr('dy','.35em')
     .style('display','none')
     .text(d=>byMapId[String(Number(d.id))].name);

   updateLabels(d3.zoomIdentity);
 });
}
function mapZoom(f){if(!mapState.svg)return;mapState.svg.transition().duration(250).call(mapState.zoom.scaleBy,f)}function mapReset(){if(!mapState.svg)return;mapState.svg.transition().duration(350).call(mapState.zoom.transform,d3.zoomIdentity)}
function mapPage(){const content=`<section class="page-pad"><div class="eyebrow">Interactive world map</div><h1 class="page-title">Zoom Your Reading Map</h1><p style="color:var(--muted);max-width:760px;line-height:1.7">Dark countries are already in your archive. Drag the map, use the wheel or buttons to zoom, and once you zoom in far enough the names of your read countries appear. Click a highlighted country to open its B1 guide.</p></section><section class="section"><div class="map-card" style="min-height:650px"><svg id="mapSvg" style="min-height:650px"></svg><div class="legend"><div><span class="swatch read"></span>Read</div><div><span class="swatch"></span>Not yet read</div><small>Labels appear after zooming in</small></div><div class="map-tools"><button onclick="mapZoom(1.45)">+</button><button onclick="mapZoom(.69)">−</button><button onclick="mapReset()">↺</button></div></div></section>`;shell(content,'Map');renderMap()}
function journey(){const list=[...COUNTRIES].sort((a,b)=>a.readOrder-b.readOrder);const content=`<section class="page-pad"><div class="eyebrow">Chronological reading path</div><h1 class="page-title">My Country Journey</h1><p style="color:var(--muted)">Only countries you have already read appear here. New countries can be appended later without changing the old order.</p></section><div class="journey-list">${list.map(c=>`<div class="journey-item" onclick="go('#country=${c.slug}&level=B1')"><span class="n">#${c.readOrder}</span><b>${esc(c.name)}</b><small style="color:var(--muted)">${esc(c.region)}</small></div>`).join('')}</div>`;shell(content,'Journey')}
function render(){const h=location.hash||'#home';if(h.startsWith('#country=')){const p=new URLSearchParams(h.slice(1));return country(p.get('country'),p.get('level')||'B1')}if(h.startsWith('#article=')){const slug=h.split('=')[1];return country(slug,'B1')}if(h==='#library'||h==='#articles')return library();if(h==='#map')return mapPage();if(h==='#journey')return journey();return home()}
window.addEventListener('hashchange',render);window.addEventListener('DOMContentLoaded',render);window.mapZoom=mapZoom;window.mapReset=mapReset;
