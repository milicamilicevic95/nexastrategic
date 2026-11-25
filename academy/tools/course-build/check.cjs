// node check.cjs <deck project dir> [ids...]  -> prints content bottom per slide (should be <= 920)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const dir=process.argv[2];const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
const fonts='<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Brygada+1918:ital,wght@1,400&family=Hanken+Grotesk:wght@400;600&display=swap" rel="stylesheet">';
let ids=process.argv.slice(3);if(!ids.length)ids=JSON.parse(fs.readFileSync(path.join(dir,'deck.json'))).order;
for(const id of ids){const h=fs.readFileSync(path.join(dir,'slides',id+'.html'),'utf8').replace(/<aside>[\s\S]*<\/aside>/,'');
await p.setContent(fonts+'<style>*{margin:0;box-sizing:border-box}section{position:relative;width:1920px;height:1080px}</style>'+h,{waitUntil:'networkidle'});
const r=await p.evaluate(()=>{const s=document.querySelector('section');let m=0;s.querySelectorAll('*').forEach(e=>{if(e.style.position!=='absolute'){const b=e.getBoundingClientRect();m=Math.max(m,b.bottom)}});return Math.round(m)});
if(process.env.SHOT)await p.screenshot({path:path.join(process.env.SHOT,id+'.png')});
console.log(id,r,r>920?'OVER':'ok');}await b.close()})();
