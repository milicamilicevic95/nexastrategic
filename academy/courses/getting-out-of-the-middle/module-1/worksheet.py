OUT="/home/user/nexastrategic/academy/courses/getting-out-of-the-middle/module-1"
css=open("/home/user/nexastrategic/academy/courses/operations-fundamentals/module-3/module-3-worksheet.html").read().split("<style>")[1].split("</style>")[0]
css+=".map td{height:13mm}.log td{height:9.2mm}.cost td{height:8mm}.cost td.lab{width:62mm}"
def box(t,i="",n=1): return f'<div class="box"><b>{t}</b>'+(f'<i>{i}</i>' if i else '')+'<div class="ln"></div>'*n+'</div>'
foot=lambda n:f'<div class="foot"><span>Course 2 · Getting out of the middle of it · Module 1 · Worksheet</span><span>{n}</span></div>'
PARTS=["Process","People","Commercial","Finance","Legal","Compliance","Governance","Risk"]
maprows="".join(f'<tr><td class="lab">{p}</td><td></td><td></td><td></td><td></td></tr>' for p in PARTS)
logrows="".join('<tr><td></td><td></td><td></td><td></td><td></td></tr>' for _ in range(16))
costrows="".join(f'<tr><td class="lab">{a}</td><td class="lab" style="width:auto;font-weight:400;color:#7a5450">{b}</td><td></td></tr>' for a,b in [("Salary or fee",""),("Employer National Insurance","15% of salary above £5,000"),("Pension, the minimum","3% of salary above £6,240"),("Kit, software, recruitment","Your estimate"),("A year’s cost","Add them up"),("A month’s cost","Divide by 12")])
page=f'''<!doctype html><html lang="en-GB"><head><meta charset="utf-8"><title>Course 2 · Module 1 · Worksheet</title>
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Brygada+1918:ital,wght@1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>{css}</style></head><body>
<div class="page"><p class="k">Course 2 · Getting out of the middle of it · Module 1</p><h1>Who’s your next hire<span class="d">?</span></h1>
<p class="lede"><b>Today, about 30 minutes:</b> step 1. <b>This week:</b> the two-week log. <b>Then:</b> steps 3 and 4. Have your course 1 map beside you.</p>
<div class="steps" style="grid-template-columns:repeat(4,1fr)"><div><b>1</b>Map the work, with one owner on each part.</div><div><b>2</b>Keep a two-week log of what lands on you.</div><div><b>3</b>Name the gap, and choose the kind of hire.</div><div><b>4</b>Cost it, and test it against a slow month.</div></div>
<p class="k" style="margin-top:4pt">Step 1 · map the work, not the people</p><h2>Your team map</h2>
<p>One name per part, not a team. Status: <b>Owned</b> (someone other than you could run it), <b>Only me</b>, <b>Nobody</b>, or <b>Overloaded</b> (owned, but they can’t keep up).</p>
<table class="grid map"><tr><th>Part</th><th>The work in it</th><th>Owner</th><th>Status</th><th>Hours a week, roughly</th></tr>{maprows}</table>
{box("Where the gaps cluster","Look for Only me, Nobody and Overloaded. Describe the work, not a job title.",2)}
{foot(1)}</div>
<div class="page"><p class="k">Step 2 · this week</p><h2>The two-week log</h2>
<p>Every time something lands on you that someone else could do, write it down. Then sort each line into a pile: <b>Role</b> (recurring, core), <b>Specialist</b> (skilled, a few days a month), <b>Software</b> (clear rules, same steps) or <b>Stop</b> (nobody would miss it).</p>
<table class="grid log"><tr><th>The task</th><th>Time it took</th><th>How often</th><th>Skill it needed</th><th>Pile</th></tr>{logrows}</table>
<div class="two">{box("Total hours a fortnight in the Role pile","Well under a full week? Consider part-time, specialist hours or software.",1)}{box("What I’ll stop doing","",1)}</div>
{foot(2)}</div>
<div class="page"><p class="k">Step 3 · the gap and the kind</p><h2>Your next hire</h2>
{box("The gap, in one line","The work it covers and the hours, not a title.",2)}
<p class="k" style="margin-top:4pt">What kind</p>
<div class="circle"><span>Full-time employee</span><span>Part-time employee</span><span>Contractor or freelancer</span><span>Fractional or agency</span><span>Software or a process</span><span>Not yet</span></div>
<div class="two">{box("Why that kind","",2)}{box("If it’s a contractor","Who controls how and when they work? Can they send someone else? Whose kit? If it’s you, you, and yours: they may be an employee.",2)}</div>
<p class="k" style="margin-top:6pt">Step 4 · what it costs, and the slow-month test</p>
<table class="grid cost"><tr><th>Cost</th><th>How to work it out</th><th>Amount</th></tr>{costrows}</table>
<div class="trio" style="margin-top:6pt">{box("Lowest week now","From your 13-week cash view.",1)}{box("Lowest week with the hire","Add the monthly cost to every month.",1)}{box("Can you carry it?","Yes, or what has to change first.",1)}</div>
<p class="small">UK, 2026 to 2027. Employment Allowance can reduce the business’s employer National Insurance bill by up to £10,500, but not if the only employee is a director. Not financial advice: your accountant confirms your numbers. Hiring outside the UK: check with a local adviser.</p>
<div class="close"><b>Is your next hire a gap, or a title?</b><div class="ln"></div></div>
{foot(3)}</div></body></html>'''
open(f"{OUT}/module-1-worksheet.html","w").write(page);print("ok")
