import sys; sys.path.insert(0,"/home/user/nexastrategic/academy/tools/course-build")
from nexa import *
setfoot("Course 2 · Getting out of the middle of it · Overview")
ROOT="/home/user/nexastrategic/academy/courses/getting-out-of-the-middle/overview/deck"
S={}
S["cover"]=cover("Operations Academy · Course 2","Getting out of the middle of it","Building the team: who to hire, how to hire them, and how to manage through them.",
 "Course 2 follows Operations Fundamentals. Course 1 showed founders what their business is made of. This course is about who does that work, so it stops coming back to the founder.",size=140)
S["why"]=statement("why","Why this course","Every founder in the group is hiring.",
 "Every founder I’ve worked with this autumn has hit the same wall from a different side. One needs an ops manager and isn’t sure what they’d own. One is deciding whether he needs a hire at all. One has hired, and now needs to manage through a manager. The common problem is hiring by title instead of by need, then managing by hope. This course fixes that, in order.",size=120,
 sub="Course 1 showed what the business is made of. This one is about who does it, so it stops coming back to you.")
S["who"]=sec("who","#fcf4f0",KICK.format(c="#6d0101",t="Who it’s for")+"\n"+SP+"\n"+
 rows([("Done course 1","They know the eight parts and have mapped their own."),("1 to about 50 people","Solo founders making a first hire, through to small teams adding managers."),("Hiring soon","Now, or in the next six months.")],left=520,lsize=52,rsize=38)+"\n"+SP,
 "It’s for founders who’ve done course 1, at any size from solo to about fifty people, who are hiring now or in the next six months. Above fifty, the org design questions change, and that’s outside this course.")
S["aim"]=sec("aim","#fcf4f0",KICK.format(c="#6d0101",t="By the end, every founder can")+"\n"+SP+"\n"+
 rows([("1","Name their next hire by the gap, not a title."),("2","Choose the right kind of hire, and know what it costs."),("3","Hire on evidence, not a good chat."),("4","Get a new hire to day 90 with the work off their plate."),("5","Handle the common people problems early and fairly.")],left=100,lsize=56,rsize=40,pad=18)+"\n"+SP,
 "Five outcomes, one per line. Each one is something a founder can do, and each maps to a module, with the last two sharing module three and four.")
S["how"]=sec("how","#fcf4f0",KICK.format(c="#6d0101",t="How it works")+"\n"+SP+"\n"+
 rows([("Four modules","About 12 to 15 minutes each, recorded."),("One worksheet each","Fillable. Each produces one thing they use."),("The ops clinic","Fortnightly, live. Their real hires, worked through."),("An applied test","Kestrel’s Manchester team, then their own next hire.")],left=520,lsize=48,rsize=36)+"\n"+SP,
 "Same shape as course 1, so nobody has to learn a new format. Four short recorded modules, a fillable worksheet for each that produces one thing they use, and an applied test at the end. The difference is the ops clinic: course 2 runs alongside it, so founders bring their real hiring decisions to a live session.")
S["glance"]=sec("glance","#fcf4f0",KICK.format(c="#6d0101",t="The four modules")+"\n"+SP+"\n"+
 rows3([("1 · Who’s next","Map the work by need, find the gap, choose the kind of hire","Hire for the work, not the title"),("2 · Hire well","Scope by outcomes, structured interviews, a paid work task","A good chat is not evidence"),("3 · Start and manage","Before day one, 30-60-90, one-to-ones, probation","A hire is a handover, not a rescue"),("4 · When it goes wrong","Sickness, holiday, leave, underperformance, the setup you need","Know what to do before you need to")],c1=420,c2=700,s1=40,s2=30,s3=30,head=("What it covers","The idea"),accent3=True)+"\n"+SP,
 "The four modules at a glance. Module one is the heart of the course, because it’s the biggest problem in the group: hiring a title before knowing the gap. The other three follow the hire through: choosing well, getting them to day ninety, and handling what goes wrong.")
def mod(id,n,title,idea,leave,changes,notes):
    body=(KICK.format(c="#6d0101",t=f"Module {n} · {title}")+"\n"+h2(idea,96)+"\n"+SP+"\n"
      +f'<p style="font-size:28px;color:#7a5450">You leave with</p>\n'+rows([(str(i),x) for i,x in enumerate(leave,1)],left=80,lsize=44,rsize=34,pad=14)+"\n"
      +line(f"What changes: {changes}",44)+"\n"+SP)
    return sec(id,"#fcf4f0",body,notes,gap=24)
S["m1"]=mod("m1",1,"Who’s your next hire?","Hire for the work, not the title.",["A one-page team map, by need, with one owner per part.","Your next hire: the gap, the kind and the timing.","What that hire really costs."],"your next hire closes a gap instead of filling a title",
 "Module one. Founders map the work their business needs, using the eight parts from course one, with one owner on each and no titles. A two-week log shows where the gap really is. Then they choose the kind of hire: full-time, part-time, contractor, fractional, or software. They leave with the real cost, including National Insurance and pension, and a slow-month test of whether they can carry it.")
S["m2"]=mod("m2",2,"Hire well","A good chat is not evidence.",["A role scorecard: three outcomes for day 90.","A structured interview plan.","One paid work task, based on a real problem."],"you choose on what they can do, not how the interview felt",
 "Module two. Selection research consistently finds structured interviews and real work tasks predict performance better than an unstructured chat. Founders scope the role by three outcomes for day ninety, then build a short structured interview and one paid task from a real problem. It also covers references, the offer, and where share options fit, at a recognise-and-ask-an-adviser level.")
S["m3"]=mod("m3",3,"Start and manage","A hire is a handover, not a rescue.",["A 30-60-90 day plan for your newest or next hire.","A weekly one-to-one format you’ll use.","A probation review in the diary."],"your new hire takes work off your plate by day 90",
 "Module three. Most of what makes a hire work happens before day one and in the first ninety days. Founders plan the first week, hand over in steps using course one’s method, and check in at thirty, sixty and ninety days. Weekly one-to-ones, early feedback, and what changes when you manage through a manager. Probation matters more from January 2027, when the unfair dismissal qualifying period drops to six months.")
S["m4"]=mod("m4",4,"When it goes wrong","Know what to do before you need to.",["A “what to do when” sheet: sickness, holiday, leave, underperformance.","A people setup checklist, by team size.","Who to call, and what to ask them."],"people problems get handled early and fairly",
 "Module four. These are the things UK employers phone Acas about most: sickness and absence, holiday, parental leave, and dismissal and discipline. Founders learn to recognise each one, take the first fair step, and know who to call. It also covers the setup they need as they grow, such as a written health and safety policy at five employees. Recognition and escalation only: the law stays with an adviser.")
S["test"]=sec("test","#fcf4f0",KICK.format(c="#6d0101",t="The applied test")+"\n"+SP+"\n"+
 rows([("Part A","Kestrel’s Manchester team: map it by need, choose the first two hires and the kind of each, and scope one."),("Part B","Your own next hire: from team map to scorecard, interview plan and work task. A 30-60-90 plan if you hire during the course.")],left=240,lsize=56,rsize=36)+
 "\n"+line("Reviewed by me: Ready, or Not yet with one thing to redo",44)+"\n"+SP,
 "The test follows course one’s model. Part A uses Kestrel, the case they already know, and its Manchester team. Part B is their own next hire. I review each one the same way: Ready, or Not yet with the one thing to redo.")
S["timeline"]=sec("timeline","#fcf4f0",KICK.format(c="#6d0101",t="Proposed timeline")+"\n"+SP+"\n"+
 rows([("January","Course 1 tests reviewed, feedback to each founder."),("1 February","Module 1: Who’s your next hire?"),("15 February","Module 2: Hire well."),("1 March","Module 3: Start and manage."),("15 March","Module 4: When it goes wrong."),("29 March","Applied test. Reviews in April.")],left=400,lsize=44,rsize=34,pad=14)+
 '\n'+small("The ops clinic runs fortnightly throughout.")+'\n'+SP,
 "A proposed timeline. Course two starts once the course one tests are reviewed in January, with a module every fortnight through February and March, the applied test at the end of March and reviews in April. The ops clinic runs alongside the whole way.",)
order=write_deck(ROOT,S,"Course 2 · Getting out of the middle of it",{"s1":{"description":"Why, who, aims and format","start":"cover"},"s2":{"description":"The four modules","start":"glance"},"s3":{"description":"The applied test and timeline","start":"test"}})
print(order)
