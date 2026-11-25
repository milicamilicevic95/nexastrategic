# python3 teleprompter.py <deck root> <label e.g. "Course 2 · Module 1"> '<chapters json>' <out.html>
import json,re,html,sys
root,label,chap,out=sys.argv[1],sys.argv[2],json.loads(sys.argv[3]),sys.argv[4]
o=json.load(open(f"{root}/project/deck.json"))["order"];data=[]
for i,id in enumerate(o,1):
    t=open(f"{root}/project/slides/{id}.html").read()
    notes=html.unescape(re.search(r"<aside>(.*?)</aside>",t,re.S).group(1)).strip()
    body=re.sub(r"<aside>.*?</aside>","",t,flags=re.S);body=re.sub(r"<svg.*?</svg>","",body,flags=re.S)
    hs=[html.unescape(re.sub("<[^>]+>","",h)) for h in re.findall(r"<h[123][^>]*>(.*?)</h[123]>",body,re.S)]
    if not hs: hs=[html.unescape(re.sub("<[^>]+>","",h)) for h in re.findall(r"<p style=\"font-family:'Brygada[^>]*>(.*?)</p>",body,re.S)]
    data.append({"n":i,"title":(hs[0] if hs else id).strip().replace("?.","?"),"chapter":chap.get(id),"text":notes})
tp=open("/home/user/nexastrategic/academy/courses/operations-fundamentals/module-1/module-1-teleprompter.html").read()
js=json.dumps(data,ensure_ascii=False).replace("</","<\\/")
tp=re.sub(r"const SLIDES = \[.*?\];\n",lambda m:"const SLIDES = "+js+";\n",tp,count=1,flags=re.S)
tp=tp.replace("<title>Module 1 Teleprompter</title>",f"<title>{label} Teleprompter</title>").replace("End of module 1. Stop recording.",f"End of {label.lower()}. Stop recording.")
open(out,"w").write(tp)
w=sum(len(re.sub(r"\[.*?\]","",d["text"]).split()) for d in data);print("teleprompter",len(data),"slides",round(w/140,1),"min")
