# python3 script.py <deck root> <label> '<chapters json>' <out.html> [extra note]
import json,re,html,sys
root,label,chap,out=sys.argv[1],sys.argv[2],json.loads(sys.argv[3]),sys.argv[4];extra=sys.argv[5] if len(sys.argv)>5 else ""
o=json.load(open(f"{root}/project/deck.json"))["order"];blocks=[];total=0
for i,id in enumerate(o,1):
    t=open(f"{root}/project/slides/{id}.html").read();notes=re.search(r"<aside>(.*?)</aside>",t,re.S).group(1).strip()
    body=re.sub(r"<aside>.*?</aside>","",t,flags=re.S);body=re.sub(r"<svg.*?</svg>","",body,flags=re.S)
    hs=[html.unescape(re.sub("<[^>]+>","",h)) for h in re.findall(r"<h[123][^>]*>(.*?)</h[123]>",body,re.S)] or [html.unescape(re.sub("<[^>]+>","",h)) for h in re.findall(r"<p style=\"font-family:'Brygada[^>]*>(.*?)</p>",body,re.S)] or [id]
    s=round(len(re.sub(r"\[.*?\]","",notes).split())/140*60);total+=s
    n=re.sub(r"\[(.*?)\]",r'<span class="cue">▸ \1</span>',notes)
    ch=f'<div class="chap"><span>{chap[id]}</span></div>' if id in chap else ""
    blocks.append(f'{ch}<div class="s"><div class="sn"><b>{i}</b><span>{s//60}:{s%60:02d}</span></div><div><h3>{html.escape(hs[0].replace("?.","?"))}</h3><p>{n}</p></div></div>')
page=f'''<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>{label} · Recording script</title>
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Brygada+1918:ital,wght@1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>@page{{size:A4;margin:16mm 17mm 18mm}}*{{box-sizing:border-box;margin:0}}body{{font-family:'Hanken Grotesk',Arial,sans-serif;color:#2b1212;font-size:13pt;line-height:1.55}}
.k{{font-family:'Brygada 1918',Georgia,serif;font-style:italic;color:#6d0101;font-size:13pt}}h1{{font-family:'Gloock',Georgia,serif;font-weight:400;color:#6d0101;font-size:38pt;line-height:1;margin:4pt 0 10pt}}h1 .d{{color:#d94c86}}
.intro{{background:#fcf4f0;border:1px solid #eadbd5;border-radius:6pt;padding:10pt 12pt;font-size:11pt;margin-bottom:12pt}}.intro b{{color:#6d0101}}
.chap{{margin:16pt 0 4pt;padding:6pt 10pt;background:#c0d6ff;border-radius:4pt;break-after:avoid}}.chap span{{font-family:'Gloock',Georgia,serif;font-size:16pt;color:#6d0101}}
.s{{display:grid;grid-template-columns:16mm 1fr;gap:0 8pt;padding:9pt 0;border-top:1px solid #eadbd5;break-inside:avoid}}.sn b{{display:block;font-family:'Gloock',Georgia,serif;font-size:24pt;color:#6d0101;line-height:1}}.sn span{{font-size:9pt;color:#7a5450}}
h3{{font-family:'Gloock',Georgia,serif;font-weight:400;font-size:15pt;color:#6d0101;margin-bottom:3pt;line-height:1.15}}.cue{{display:inline-block;background:#fcf4f0;border-left:3px solid #6d0101;padding:1pt 6pt;font-size:11pt;color:#6d0101;font-weight:600}}
</style></head><body><p class="k">Operations Academy · {label}</p><h1>Recording script<span class="d">.</span></h1>
<div class="intro"><b>Running time</b> about {round(total/60)} minutes read aloud, a little longer once you pause. <b>▸</b> marks a stage direction. Say it in your own words; the script is there so you never lose the thread. {extra}</div>
{"".join(blocks)}</body></html>'''
open(out,"w").write(page);print("script",total//60,"min")
