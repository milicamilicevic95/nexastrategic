// Test double for the claude.ai runtime: a db with the same call shapes the page uses, persisted to localStorage, plus downloads.
(()=>{
  if(localStorage.getItem("__noclaude"))return;
  const KEY="__mockdb";
  let store;try{store=JSON.parse(localStorage.getItem(KEY)||"null")}catch(_){store=null}
  if(!store){store=window.__SEED__?JSON.parse(JSON.stringify(window.__SEED__)):{};localStorage.setItem(KEY,JSON.stringify(store))}
  const persist=()=>localStorage.setItem(KEY,JSON.stringify(store));
  const listeners=new Set();const freeze=o=>Object.freeze(JSON.parse(JSON.stringify(o)));
  const snapOf=path=>{const d=store[path];return {id:path.split("/").pop(),exists:!!d,data:()=>d?freeze(d):undefined,metadata:{fromCache:false,hasPendingWrites:false}}};
  const collDocs=(col,f)=>Object.keys(store).filter(p=>p.split("/").slice(0,-1).join("/")===col).sort().map(snapOf).filter(s=>f.every(([k,op,v])=>op!=="=="||s.data()[k]===v));
  const notify=()=>setTimeout(()=>listeners.forEach(l=>l()),5);
  const seg=p=>{if(/(^|\/)\.\.?($|\/)/.test(p)||!/^[A-Za-z0-9_\-.~:@+\/]+$/.test(p))throw new TypeError("bad path "+p);return p.split("/").length};
  window.__dbWrites=0;
  function query(col,f=[]){return {path:col,where:(k,op,v)=>query(col,f.concat([[k,op,v]])),orderBy:()=>query(col,f),limit:()=>query(col,f),
    get:async()=>{const docs=collDocs(col,f);return {docs,size:docs.length,empty:!docs.length}},
    onSnapshot:(next)=>{const fire=()=>{const docs=collDocs(col,f);next({docs,size:docs.length,empty:!docs.length,docChanges:()=>[],metadata:{fromCache:false,hasPendingWrites:false}})};listeners.add(fire);setTimeout(fire,10);return ()=>listeners.delete(fire)},
    doc:id=>docRef(col+"/"+(id||Math.random().toString(36).slice(2))),add:async d=>{const r=docRef(col+"/"+Math.random().toString(36).slice(2));await r.set(d);return r}}}
  function docRef(path){if(seg(path)%2)throw new TypeError("doc path needs even segments: "+path);return {id:path.split("/").pop(),path,
    get:async()=>snapOf(path),
    set:async d=>{if(!d||typeof d!=="object"||Array.isArray(d))throw {code:"invalid_argument",message:"body"};if(JSON.stringify(d).length>262144)throw {code:"invalid_argument",message:"too big"};store[path]=JSON.parse(JSON.stringify(d));window.__dbWrites++;persist();notify()},
    update:async d=>{store[path]=Object.assign({},store[path],JSON.parse(JSON.stringify(d)));persist();notify()},
    delete:async()=>{delete store[path];persist();notify()},
    onSnapshot:next=>{const fire=()=>next(snapOf(path));listeners.add(fire);setTimeout(fire,10);return ()=>listeners.delete(fire)},
    collection:c=>query(path+"/"+c)}}
  const db=Object.freeze({doc:docRef,collection:c=>{if(seg(c)%2===0)throw new TypeError("collection path needs odd segments");return query(c)}});
  window.__downloads=[];
  const downloads=Object.freeze({save:async({filename,data})=>{const buf=new Uint8Array(await data.arrayBuffer());let s="";for(let i=0;i<buf.length;i+=8192)s+=String.fromCharCode.apply(null,buf.subarray(i,i+8192));window.__downloads.push({filename,size:buf.length,b64:btoa(s)})}});
  window.claude={use:async n=>{await new Promise(r=>setTimeout(r,20));return n==="db"?db:n==="downloads"?downloads:null}};
})();
