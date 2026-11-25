"""Nexa. slide helpers for Operations Academy decks (Slides artifact type, inline-styled sections)."""
import json, re, os
FOOT = "Module"
KICK = "<p style=\"font-family:'Brygada 1918', Georgia, serif;font-style:italic;font-size:40px;color:{c}\">{t}</p>"
SP = '<div style="flex:1"></div>'
FACES = {"gloock":{"family":"Gloock","href":"https://fonts.googleapis.com/css2?family=Gloock&display=swap"},
 "brygada-1918":{"family":"Brygada 1918","href":"https://fonts.googleapis.com/css2?family=Brygada+1918:ital,wght@1,400;1,500&display=swap"},
 "hanken-grotesk":{"family":"Hanken Grotesk","href":"https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap"}}
def setfoot(t):
    global FOOT; FOOT = t
def foot(n, c="#7a5450"):
    return (f'<p style="position:absolute;left:128px;bottom:64px;width:1200px;font-size:24px;color:{c}">{FOOT}</p>\n'
            f'<p style="position:absolute;right:128px;bottom:64px;width:200px;font-size:24px;color:{c};text-align:right">{n}</p>')
def sec(id, bg, body, notes, fc="#7a5450", gap=40, color="#2b1212", n=0):
    s = f"background:{bg};color:{color};font-family:'Hanken Grotesk', Arial, sans-serif;padding:128px 128px 160px;display:flex;flex-direction:column;gap:{gap}px"
    return f'<section id="{id}" data-transition="fade" style="{s}">\n{body}\n{foot(n,fc)}\n<aside>{notes}</aside>\n</section>\n'
def h2(t, size=104, c="#6d0101", w=1600, dot=None, lh="1.0"):
    d = f'<span style="color:{dot}">.</span>' if dot else ''
    return f"<h2 style=\"font-family:'Gloock', Georgia, serif;font-size:{size}px;font-weight:400;line-height:{lh};color:{c};width:{w}px\">{t}{d}</h2>"
def divider(id, ch, title, notes):
    body = KICK.format(c="#6d0101", t=ch)+"\n"+SP+"\n"+h2(title,140,dot="#6d0101",w=1660,lh="0.95")+"\n"+SP
    return sec(id, "#c0d6ff", body, notes, fc="#2b1212", gap=32)
def statement(id, kick, title, notes, size=104, sub=None):
    body = KICK.format(c="#6d0101", t=kick)+"\n"+SP+"\n"+h2(title,size)
    if sub: body += f'\n<p style="font-size:40px;line-height:1.35;color:#2b1212;width:1400px">{sub}</p>'
    return sec(id, "#fcf4f0", body+"\n"+SP, notes)
def oxblood(id, title, notes, size=120, kick=None):
    body = (KICK.format(c="#e8d3d0", t=kick)+"\n" if kick else "")+SP+"\n"+h2(title,size,c="#fcf4f0",dot="#d94c86",lh="0.98")+"\n"+SP
    return sec(id, "#6d0101", body, notes, fc="#e8d3d0", gap=32, color="#fcf4f0")
def rows(items, left=520, lsize=56, rsize=36, pad=22):
    out = ['<div style="display:flex;flex-direction:column">']
    for i,(a,b) in enumerate(items):
        bt = "2px solid #6d0101" if i==0 else "1px solid #eadbd5"; bb = ";border-bottom:1px solid #eadbd5" if i==len(items)-1 else ""
        out.append(f"<div style=\"display:grid;grid-template-columns:{left}px 1fr;align-items:baseline;gap:32px;padding:{pad}px 0;border-top:{bt}{bb}\"><p style=\"font-family:'Gloock', Georgia, serif;font-size:{lsize}px;color:#6d0101\">{a}</p><p style=\"font-size:{rsize}px;line-height:1.3\">{b}</p></div>")
    out.append('</div>'); return "\n".join(out)
def rows3(items, c1=300, c2=620, s1=48, s2=32, s3=30, head=None, pad=24, accent3=False):
    out = ['<div style="display:flex;flex-direction:column">']
    if head:
        out.append(f'<div style="display:grid;grid-template-columns:{c1}px {c2}px 1fr;gap:32px;padding:0 0 12px"><p></p><p style="font-size:24px;color:#7a5450">{head[0]}</p><p style="font-family:\'Brygada 1918\', Georgia, serif;font-style:italic;font-size:28px;color:#6d0101">{head[1]}</p></div>')
    c3 = "#6d0101" if accent3 else "#7a5450"
    for i,(a,b,c) in enumerate(items):
        bt = "2px solid #6d0101" if i==0 else "1px solid #eadbd5"; bb = ";border-bottom:1px solid #eadbd5" if i==len(items)-1 else ""
        out.append(f"<div style=\"display:grid;grid-template-columns:{c1}px {c2}px 1fr;gap:32px;align-items:baseline;padding:{pad}px 0;border-top:{bt}{bb}\"><p style=\"font-family:'Gloock', Georgia, serif;font-size:{s1}px;color:#6d0101\">{a}</p><p style=\"font-size:{s2}px;line-height:1.3\">{b}</p><p style=\"font-size:{s3}px;line-height:1.3;color:{c3}\">{c}</p></div>")
    out.append('</div>'); return "\n".join(out)
def line(t, size=56):
    return f"<p style=\"font-family:'Gloock', Georgia, serif;font-size:{size}px;line-height:1.1;color:#6d0101;padding-top:16px\">{t}<span style=\"color:#d94c86\">.</span></p>"
def small(t):
    return f'<p style="font-size:26px;color:#7a5450">{t}</p>'
def cover(kicker, title, sub, notes, size=150):
    return ('<section id="cover" data-transition="fade" style="background:#6d0101;color:#fcf4f0;font-family:\'Hanken Grotesk\', Arial, sans-serif;padding:128px 128px 160px;display:flex;flex-direction:column;gap:32px">\n'
      +KICK.format(c="#e8d3d0",t=kicker)+'\n'+SP+'\n'
      +f"<h1 style=\"font-family:'Gloock', Georgia, serif;font-size:{size}px;font-weight:400;line-height:0.95;color:#fcf4f0;width:1660px\">{title}<span style=\"color:#d94c86\">.</span></h1>\n"
      +f'<p style="font-size:40px;color:#e8d3d0">{sub}</p>\n'+SP+'\n'
      +'<p style="position:absolute;left:128px;bottom:64px;width:1200px;font-size:24px;color:#e8d3d0">Mila Milićević · NexaStrategic</p>\n'
      +f'<aside>{notes}</aside>\n</section>\n')
def write_deck(root, S, title, sections, now="2026-11-25T12:00:00Z"):
    os.makedirs(f"{root}/project/slides", exist_ok=True)
    order = list(S)
    for i,(k,v) in enumerate(S.items(),1):
        v = re.sub(r'(text-align:right">)\d+(</p>)', rf'\g<1>{i}\2', v)
        assert "—" not in v, k
        a = re.search(r"<aside>(.*?)</aside>", v, re.S).group(1); assert len(a) < 4000, (k, len(a))
        open(f"{root}/project/slides/{k}.html","w").write(v)
    d = {"v":5,"createdOnFiles":{"v":1,"at":now},"lists":"css","format":{"v":1,"shared":["project/deck.css"]},
         "title":title,"order":order,"sections":sections,"cover":order[0],"faces":FACES,
         "designSystems":[{"title":"Nexa.","namespace":"nexa","artifact":"https://claude.ai/artifact/7zGjjYbeCzRvCjYwjs4qmY","version":"1793703809-c57d","copiedAt":now}]}
    json.dump(d, open(f"{root}/project/deck.json","w"), ensure_ascii=False)
    open(f"{root}/project/deck.css","w").write("/* Nexa. slides: each slide sets its own styles inline. */\nbody { font-family: 'Hanken Grotesk', Arial, sans-serif; color: #2b1212; }\n")
    return order
