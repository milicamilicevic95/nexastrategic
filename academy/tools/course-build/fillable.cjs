// node fillable.cjs <worksheet.html> <base.pdf>  -> renders PDF + base.pdf.json with field rectangles
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://'+process.argv[2],{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
const fields=await p.evaluate(()=>{
  document.querySelectorAll('th').forEach(th=>{if(th.textContent.trim()==='Circle one')th.textContent='Owned / Only me / Unsure'});
  document.querySelectorAll('td.ck').forEach(td=>{td.textContent=''});
  document.querySelectorAll('.circle').forEach(c=>{const d=document.createElement('div');d.className='box';d.innerHTML='<b>My choice</b><div class="ln"></div>';c.after(d)});
  document.querySelectorAll('.box:not(.info)').forEach(bx=>{if(!bx.querySelector('.ln')&&!bx.querySelector('table')){const l=document.createElement('div');l.className='ln';bx.appendChild(l)}});
  const out=[];
  [...document.querySelectorAll('.page')].forEach((pg,pi)=>{const pr=pg.getBoundingClientRect();
    const rel=r=>({x:r.left-pr.left,y:r.top-pr.top,w:r.width,h:r.height});const seen=new Set();
    pg.querySelectorAll('.ln').forEach(l=>{const par=l.parentElement;if(seen.has(par))return;seen.add(par);
      const ls=[...par.children].filter(c=>c.classList.contains('ln'));const r1=ls[0].getBoundingClientRect(),r2=ls[ls.length-1].getBoundingClientRect();
      const top=ls.length>1?r1.top:r1.bottom-Math.max(18,r1.height);
      out.push({page:pi,pw:pr.width,...rel({left:r1.left,top:top,width:r1.width,height:r2.bottom-top}),multi:ls.length>1||(r2.bottom-top)>34,light:!!par.closest('.close')});});
    pg.querySelectorAll('td').forEach(td=>{const tb=td.closest('table');if([...tb.querySelectorAll('th')].some(t=>t.textContent.trim()==='Prompts'))return;
      if(td.textContent.trim()===''&&!td.querySelector('*')){const r=td.getBoundingClientRect();if(r.width<8||r.height<8)return;
        out.push({page:pi,pw:pr.width,...rel({left:r.left+1,top:r.top+1,width:r.width-2,height:r.height-2}),multi:r.height>40});}});});
  return out;});
await p.pdf({path:process.argv[3],preferCSSPageSize:true,printBackground:true});
fs.writeFileSync(process.argv[3]+'.json',JSON.stringify(fields));console.log(fields.length,'fields');await b.close()})();
