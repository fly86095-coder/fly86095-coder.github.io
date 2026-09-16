const fs=require('fs'),vm=require('vm');
const ctx={window:{}}; vm.createContext(ctx); vm.runInContext(fs.readFileSync('site/data.js','utf8'),ctx);
const S=ctx.window.SITE,C=ctx.window.COUNTRIES;
const versions=C.reduce((n,c)=>n+Object.keys(c.versions||{}).length,0);
if(S.version!=="0915_1"||C.length!==43||versions!==99) throw new Error(`${S.version} ${C.length} ${versions}`);
const last=C.slice(-3).map(c=>c.slug).join(','); if(last!=="poland,czechia,slovakia") throw new Error(last);
for(const slug of ["poland","czechia","slovakia"]){const c=C.find(x=>x.slug===slug); for(const l of ["A1","A2","B1"]) if(!c.versions[l]) throw new Error(`${slug} missing ${l}`)}
if(!C.find(x=>x.slug==='slovakia').versions.B1.learningWords.some(x=>x.word==='fujara'&&x.pronunciationLabel==='斯洛伐克语发音')) throw new Error('fujara special card missing');
if(!C.find(x=>x.slug==='slovakia').versions.B1.learningWords.some(x=>x.word==='bryndzové halušky'&&x.pronunciationLabel==='斯洛伐克语发音')) throw new Error('food special card missing');
console.log(`OK ${S.version}: ${C.length} countries, ${versions} reading versions, ${last}`);
