// Operations Fundamentals: course record, Module 1 and Module 2. Draft for review.

export const of1 = [
  {
    id: "c-of", type: "course", order: 1, title: "Operations Fundamentals", status: "Draft",
    links: { pillars: ["p-direction", "p-ownership", "p-delivery", "p-visibility", "p-improvement"] },
    f: {
      purpose: `Give founders a shared operational vocabulary and enough judgement to diagnose why work depends on them, ask better questions, and choose a sensible first improvement.

The course answers one question: **how do you remove yourself as the bottleneck in productivity?** It does not answer it for each learner's business. It gives them the concepts and methods to answer it for themselves, and to judge advice and tools they are offered.`,
      audience: "Founders and owner-managers of small and growing businesses, from sole traders with a few contractors to companies of around 50 people, who may have little formal operations knowledge. Intelligent, busy, experienced in their own field. No shared operational vocabulary is assumed.",
      subjects: "What operations is; how work moves; why founders become bottlenecks; ownership, decision rights and escalation; commitments and when to get specialist advice; documentation and SOPs; visibility; choosing and reviewing a first improvement. Governance, compliance and commercial awareness are introduced at a foundational level throughout.",
      prereqText: "None. This course is the prerequisite for the rest of the programme.",
      time: `Estimates only, to be checked in the pilot.

| Part | Estimate |
|---|---|
| Six modules, recordings | about 75 to 90 minutes in total |
| Six modules, exercises and resources | about 3 to 3.5 hours in total |
| Capstone case (OF190) | 3 to 5 hours |
| POSI: Proof of Skill Implementation (OF195) | 6 to 10 hours, over four to eight weeks |
| **Total** | **about 13.5 to 20 hours**, over roughly two to three months |`,
      structure: `**Why six modules, not five.** The brief suggested about five. Topic 4 (foundational practices for ownership, documentation, delivery, visibility and responsible decision-making) is too large for one short module, and SOPs and documentation are the questions founders have already raised. It is split into Module 4 (ownership and responsible decisions) and Module 5 (documentation and SOPs). Visibility moves into Module 6, where it is needed to judge whether a first improvement has worked. Each module stays short enough for one sitting.

| Module | Brief topic |
|---|---|
| 1. What operations is, and why it is commercial | 1 |
| 2. How work moves through a business | 2 |
| 3. Why founders become the bottleneck | 3 |
| 4. Ownership, decisions and when to get advice | 4 (ownership, responsible decisions, governance, commercial and legal awareness) |
| 5. Documentation and SOPs that people use | 4 (documentation, delivery) |
| 6. Seeing what is happening and choosing a first improvement | 4 (visibility) and 5 |`,
      notIncluded: "Detailed finance, project management, governance, compliance and legal content. These have their own courses. Software training. The course mentions tools only to show how to judge whether one fits.",
      completion: `A learner completes the course in three parts, like a university module:

1. **Lectures:** the six recorded modules (OF101 to OF106), each built as a principle, a method and tactics.
2. **Coursework:** the capstone case (OF190), which shows **reasoning about a hypothetical business**.
3. **Practical:** the POSI, Proof of Skill Implementation (OF195), which shows **one real improvement in the learner's own business** where the founder has stepped out.

The capstone and the POSI are kept separate on purpose: one shows judgement, the other shows implementation. Neither proves business results. No certificate or accreditation is attached. Whether the POSI is required for completion is an open decision.

The fortnightly or monthly masterclasses (frequency to be agreed) are optional. Everything needed to complete the course is in the recordings, exercises and resources.`
    }
  },

  // ================= MODULE 1 =================
  {
    id: "m1", type: "module", parent: "c-of", order: 1, title: "What operations is, and why it is commercial", status: "Draft",
    links: { pillars: ["p-direction", "p-visibility"], prereqs: [] },
    f: {
      problem: "Founders hear \"operations\" used to mean anything from admin to logistics to \"everything that isn't sales\". Without a working definition they cannot tell what they are trying to fix, and they treat operations as back-office tidying rather than the way the business keeps its promises and makes money.",
      prereqText: "None.",
      outline: `1. **Lesson 1.1: Operations is how the business keeps its promises** (about 6 minutes). A working definition. The four things operations has to hold together: promises, work, people and money. Why operations looks different in a bakery, a software company and a consultancy, and what stays the same.
2. **Lesson 1.2: Promises, margin and cash** (about 6 minutes). How one customer promise flows through capacity, cost and cash timing. Why operations decisions are commercial decisions. A first look at obligations the business has to meet.
3. **Exercise 1:** Operations scope map for your own business (about 25 minutes).`,
      example: `**A wholesale bakery supplying 30 independent cafés.**

The founder, Ade, promises next-morning delivery for any order placed by 2pm. That one promise sets a lot of operations:

- **Work.** Baking has to start at 3am with yesterday afternoon's order list. A driver route has to be planned by 5am.
- **People.** Two bakers and one driver must be available six days a week. When one is ill, Ade covers.
- **Suppliers.** Flour and butter must be in stock, because there is no time to order for tomorrow.
- **Money.** Cafés pay on 30-day terms. The flour supplier wants payment in 14 days. Growth means paying for more ingredients before the money for the extra bread arrives.
- **Obligations.** Food safety and allergen information have to be right on every product. (The specific requirements depend on jurisdiction and need checking with the relevant authority or an adviser. The course does not state them.)

When Ade says "operations is a mess", she might mean any of these. The useful question is which promise is under strain, and where.`,
      misconceptions: `- **"Operations is admin."** Admin is part of it. Operations is the whole system that turns a promise into a delivered result and the money into the bank.
- **"Operations is something you sort out once you're bigger."** A sole trader has operations. They are just all in one head.
- **"Good operations means more process."** Sometimes it means fewer steps, fewer approvals and fewer tools.
- **"Every business needs the same operations functions."** A 6-person bakery and an 18-person software company need very different things. The questions are the same; the answers are not.`,
      time: "Estimate: about 40 minutes (12 minutes of recordings, 25 minutes of exercise, a few minutes of reading).",
      production: "Keep Module 1 short. Its job is vocabulary and the commercial link, not depth."
    }
  },
  { id: "m1-lo1", type: "outcome", parent: "m1", order: 1, title: "M1.1 Explain what operations covers", status: "Draft",
    f: { statement: "Explain, in their own words, what operations covers in their business, giving one example each of a customer promise, a constraint and a recurring decision.", evidence: "Exercise 1 (scope map). Capstone: diagnosis section draws on the definition." } },
  { id: "m1-lo2", type: "outcome", parent: "m1", order: 2, title: "M1.2 Trace a promise to capacity, margin and cash", status: "Draft",
    f: { statement: "Trace how one customer promise affects delivery capacity, margin and the timing of cash in and out.", evidence: "Exercise 1, final question. Capstone rubric: commercial and governance awareness." } },
  {
    id: "m1-l1", type: "lesson", parent: "m1", order: 1, title: "1.1 Operations is how the business keeps its promises", status: "Draft",
    f: {
      summary: "A working definition of operations, and the four things it holds together: promises, work, people and money.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: title card "Operations is how the business keeps its promises"]

Most founders I work with use the word "operations" without ever having been told what it means. That's not a criticism. It's a word that gets stretched to cover admin, logistics, HR, finance, IT and "anything that isn't sales". When a word means everything, it stops helping you decide anything.

So here's a working definition for this course.

[ON SCREEN: "Operations is how the business keeps its promises, reliably and at a cost it can afford."]

Operations is how the business keeps its promises, reliably, and at a cost it can afford.

Three parts to that.

**Promises.** Every business makes them. "Next-day delivery." "We'll reply within a working day." "Your website will be live by the end of March." Some promises are written in contracts. Many are made on calls, in proposals, on your website or just by habit. Customers remember all of them.

**Reliably.** Not once, when you're watching. Every time, including the weeks you're on holiday, ill or busy with something else. That's the part this programme is really about.

**At a cost it can afford.** A promise you can only keep by working until midnight, or by paying a freelancer more than the customer pays you, isn't really being kept. It's being subsidised.

[ON SCREEN: four boxes — Promises, Work, People, Money]

To keep promises reliably, operations has to hold four things together.

**The promises** themselves: what you've said you'll deliver, by when, and to what standard.

**The work**: the steps that turn a request into a finished result. Who does what, in what order, and what gets handed from one person to another.

**The people**: who does the work, what they're able to do, how much time they have, and who decides when something isn't straightforward. Suppliers and contractors count here too.

**The money**: what the work costs, what you charge, and when cash comes in and goes out.

When founders say "our operations are a mess", one of these four is usually out of line with the others. Promises have grown faster than the people. The work has changed but the price hasn't. The money arrives three months after the cost.

[ON SCREEN: three businesses side by side]

Let me show you how differently this looks across businesses.

A wholesale bakery promises fresh bread by 7am. Its operations are baking schedules, driver routes and flour deliveries.

A software company promises the product will be available and that support will reply within four hours. Its operations are releases, on-call rotas and a support queue.

A two-person consultancy promises a report by the end of the month. Its operations are a calendar, a few freelancers and the founder's evenings.

Different work entirely. But in each case, someone has to know what's been promised, someone has to own getting it done, the work has to move from start to finish, someone needs to know whether it's on track, and something needs to change when it keeps going wrong.

That's the shape of this programme.

[ON SCREEN: "What operations is not"]

Two things operations is not.

It is not just the back office. Promises are made by sales and by founders. If operations isn't connected to what's being sold, it will always be catching up.

And it is not the same as process. Process is one tool. Some operational problems are solved by removing a process, or an approval step, or a tool nobody uses.

[ON SCREEN: exercise prompt]

Before the next lesson, take two minutes and write down three promises your business makes to customers. Not the ones on your website. The ones customers would actually complain about if you broke them. We'll use them in the next lesson.`,
      slides: "Title; definition; four boxes; three businesses comparison; what operations is not; prompt."
    }
  },
  {
    id: "m1-l2", type: "lesson", parent: "m1", order: 2, title: "1.2 Promises, margin and cash", status: "Draft",
    f: {
      summary: "How a single promise flows into capacity, cost and cash timing, and why operational decisions are commercial ones. A first look at obligations.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "Promises, margin and cash"]

In the last lesson you wrote down three promises your business makes. In this one, we'll follow one of them through the business, because that's where operations stops being abstract.

[ON SCREEN: the bakery promise "Orders by 2pm, delivered by 7am next day"]

Back to the bakery. Ade promises cafés that any order placed by 2pm arrives by 7am the next morning.

Follow that promise.

**Capacity.** Baking starts at 3am. That needs two bakers, six days a week. One driver. If a baker is ill, someone covers, and in a small business that someone is usually the founder. So the promise quietly includes "Ade is available to bake at 3am".

**Cost and margin.** A rush order at 1.55pm for 40 extra loaves means overtime, or a second delivery run. If the price is the same as a normal order, the margin on that order might be close to nothing. The promise is being kept, but it's losing money.

**Cash.** Cafés pay on 30-day terms. The flour supplier wants paying in 14. When orders grow, Ade pays for more flour before the money for the extra bread arrives. Growth makes cash tighter, not looser. Plenty of businesses that are profitable on paper run short of cash for exactly this reason.

[ON SCREEN: Promise → capacity → cost → cash]

This is why operational decisions are commercial decisions. When someone agrees a delivery date, a discount, a payment term or a "we'll just add that in", they're making an operational commitment and a financial one at the same time.

You don't need to be an accountant to ask three questions about any promise:

[ON SCREEN: three questions]

- Who has to do what, and do they have the time?
- What does keeping this promise cost us, and does the price cover it?
- When do we pay out, and when do we get paid?

If nobody in the business can answer those for your main promises, that's useful information. It tells you where visibility is missing, which we'll come back to in Module 6.

[ON SCREEN: "Obligations"]

There's one more kind of promise to recognise early. Some promises aren't made to customers. They're obligations the business has because of where it operates, what sector it's in and how it's set up. Filing deadlines, tax returns, insurance renewals, licences, health and safety, data protection, employment terms.

This course will not tell you which of these apply to you. They depend on your jurisdiction, your sector and your company structure, and getting them wrong can be expensive. What we'll teach is how to recognise that an obligation exists, how to give it an owner and a deadline, how to keep evidence, and when to get qualified advice. That starts in Module 4.

[ON SCREEN: summary]

So, to recap the first module. Operations is how the business keeps its promises, reliably, at a cost it can afford. It holds promises, work, people and money together. And every promise has a capacity, a cost and a cash consequence, whether or not anyone has worked them out.

The exercise for this module asks you to map that for your own business. It takes about 25 minutes. You don't need to share it with anyone.`,
      slides: "Promise card; flow diagram; three questions; obligations; recap."
    }
  },
  {
    id: "m1-ex", type: "exercise", parent: "m1", order: 3, title: "Exercise 1: Operations scope map", status: "Draft",
    links: { outcomes: ["m1-lo1", "m1-lo2"] },
    f: {
      instructions: `Use the **Operations scope map** resource. You can do this for your own business or, if you prefer not to, for a business you know well.

1. List the three to five customer promises that matter most. Use the ones customers would complain about if broken, not marketing lines.
2. For each, note the main constraint on keeping it: a person, a skill, a supplier, a piece of equipment, time, or cash.
3. List five decisions that come up at least monthly in delivering those promises. Mark the ones that currently need you.
4. List any obligations you know the business has (filings, renewals, licences, insurance, regulated activities). Do not research them now. Just note what you know and what you are unsure about.
5. Pick one promise and answer: who has to do what, what does it cost us to keep, and when does cash go out and come in?

You do not need to share this.`,
      output: "A one-page scope map, with one promise traced through capacity, cost and cash.",
      time: "About 25 minutes."
    }
  },
  {
    id: "r-scope", type: "resource", parent: "m1", order: 4, title: "Operations scope map", status: "Draft",
    links: { outcomes: ["m1-lo1", "m1-lo2"] },
    f: {
      purpose: "Decide which promises, constraints and recurring decisions your operations actually has to hold together, and where the first strain is.",
      body: `### 1. Promises

| Promise (as a customer would describe it) | Where it was made (contract, proposal, website, habit) | Main constraint on keeping it |
|---|---|---|
| | | |
| | | |
| | | |

### 2. Recurring decisions

| Decision | How often | Who decides now | Needs me? (Y/N) |
|---|---|---|---|
| | | | |
| | | | |

### 3. Obligations I know about

| Obligation | Who owns it now | Next deadline, if known | Unsure? |
|---|---|---|---|
| | | | |

*This list is for recognition only. It is not a compliance check. Which obligations apply depends on jurisdiction, sector and structure; confirm with a qualified adviser.*

### 4. One promise, traced

- **Promise:**
- **Who has to do what, and do they have the time?**
- **What does keeping it cost, and does the price cover it?**
- **When does cash go out, and when does it come in?**
- **Which of these could nobody but me answer?**`,
      how: "Fill it in once, quickly. Return to section 2 in Module 3 and section 3 in Module 4."
    }
  },

  // ================= MODULE 2 =================
  {
    id: "m2", type: "module", parent: "c-of", order: 2, title: "How work moves through a business", status: "Draft",
    links: { pillars: ["p-delivery", "p-ownership"], prereqs: ["m1"] },
    f: {
      problem: "Founders see the results of work (late, early, wrong, fine) but rarely the path work takes. Without seeing triggers, handoffs, queues and decision points, they fix the wrong thing, often by working harder or hiring.",
      prereqText: "Module 1.",
      outline: `1. **Lesson 2.1: Triggers, handoffs and queues** (about 6 minutes). The anatomy of a workflow. Why work spends most of its time waiting. Where founders sit in the flow.
2. **Lesson 2.2: Recurring work, projects and exceptions** (about 5 minutes). Three kinds of work that need different handling. Why treating everything as an exception brings it back to the founder.
3. **Lesson 2.3: Mapping a workflow without a consultant** (about 6 minutes). A practical method using one real piece of work, observed rather than remembered.
4. **Exercise 2:** Map one workflow (about 40 minutes, spread over a week if you are following real work).`,
      example: `**An online skincare brand: three staff, a fulfilment warehouse (3PL) and the founder, Priya.**

Refunds take nine days on average. Customers complain. Priya assumes customer service is slow and considers hiring.

Mapping one refund from start to finish shows:

| Step | Who | Typical wait before the next step |
|---|---|---|
| Customer emails asking to return | Customer | – |
| Customer service replies with returns label | CS | 4 hours |
| Parcel arrives at the 3PL | 3PL | 3 days (post) |
| 3PL logs the return in its system | 3PL | 1 day |
| CS sees the return logged | CS | 1 day (checks the 3PL portal on Mondays and Thursdays) |
| Refund over £50 needs Priya's approval | Priya | **2 to 4 days** |
| CS issues refund | CS | Same day |

The work itself takes perhaps 20 minutes. The rest is waiting. Two waits are inside the business: the twice-weekly portal check and Priya's approval. Hiring would not fix either.

Better questions: why are refunds over £50 approved by the founder? What risk does that control protect against? Could the threshold change, or could a check happen afterwards instead of before? Could the 3PL notify CS rather than CS checking? (These are questions, not answers. Priya may have good reasons, for example a past fraud problem.)`,
      misconceptions: `- **"Slow work means slow people."** Most delay is waiting between steps, not doing the steps.
- **"We need a process map of the whole business."** Map one piece of work that matters. Whole-business maps take weeks and go out of date.
- **"Everything we do is bespoke."** Most businesses that say this have a recurring core with variations. Finding the core is the point.
- **"I'll map it from memory."** Memory describes how work should go. Following real work shows how it does go.`,
      time: "Estimate: about 60 minutes (17 minutes of recordings, 40 minutes of mapping)."
    }
  },
  { id: "m2-lo1", type: "outcome", parent: "m2", order: 1, title: "M2.1 Map a workflow", status: "Draft",
    f: { statement: "Map one workflow from trigger to completion, marking each handoff, queue, decision point and approval.", evidence: "Exercise 2 workflow map. Capstone: diagnosis and missing information." } },
  { id: "m2-lo2", type: "outcome", parent: "m2", order: 2, title: "M2.2 Distinguish recurring work, projects and exceptions", status: "Draft",
    f: { statement: "Distinguish recurring work, project work and exceptions in a given situation, and explain why each needs a different approach.", evidence: "Exercise 2, classification step. Capstone: feasibility of the proposed approach." } },
  { id: "m2-lo3", type: "outcome", parent: "m2", order: 3, title: "M2.3 Locate where work waits", status: "Draft",
    f: { statement: "Identify where work waits, and for whom, using observed evidence rather than impression.", evidence: "Exercise 2, wait times column. Capstone rubric: diagnosis; identification of missing information." } },
  {
    id: "m2-l1", type: "lesson", parent: "m2", order: 1, title: "2.1 Triggers, handoffs and queues", status: "Draft",
    f: {
      summary: "The anatomy of a workflow, and why most delay is waiting rather than working.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "Triggers, handoffs and queues"]

In Module 1 we said operations is how the business keeps its promises. Now we're going to look at how the work behind a promise actually moves. Because if you can't see how work moves, you'll keep fixing the wrong thing.

[ON SCREEN: a simple flow — trigger → steps → result]

Every piece of work has the same basic shape.

There's a **trigger**: something that starts it. An order arrives. A client signs. A form is submitted. The first of the month comes round.

There are **steps**: the things people, or systems, actually do.

And there's a **result**: the thing the customer or the business receives. A delivery, a report, a paid invoice.

Between the steps there are three things worth naming.

[ON SCREEN: handoff icon]

**Handoffs.** Any time work passes from one person to another, or from you to a supplier, or from one system to another, that's a handoff. Handoffs are where work gets lost, misunderstood or forgotten. "I thought you'd sent it." "Nobody told me it had arrived."

[ON SCREEN: queue icon]

**Queues.** Work waiting for someone to pick it up. An inbox, a pile, a task list, a "to approve" folder. Queues are often invisible. Nobody sees a refund sitting in someone's inbox for three days. They only see the customer complaint.

[ON SCREEN: decision diamond]

**Decision points.** Places where someone has to choose. Approve or reject. Standard or custom. Which supplier. And approvals are a special kind of decision point, where the work can't continue until a named person says yes.

[ON SCREEN: the skincare refund table]

Here's what this looks like in practice. An online skincare brand, three staff and a fulfilment warehouse. Refunds were taking nine days. The founder assumed customer service was slow.

When they followed one refund through, the actual work took about twenty minutes. The other eight and a half days were waiting. Waiting for the post, which they can't control. Waiting for customer service to check the warehouse portal, which they only did twice a week. And waiting two to four days for the founder to approve any refund over fifty pounds.

[ON SCREEN: highlight founder approval]

That last one is worth pausing on. The founder had become a queue.

That happens in a lot of businesses, usually for a good reason at the time. There was a fraud problem once. A big refund went out by mistake. So the founder added an approval. Then the business grew, the approvals grew with it, and nobody went back to ask whether the control was still worth the delay.

[ON SCREEN: "Most delay is waiting, not working"]

Here's the general point. In most businesses, most of the time a piece of work spends in the system is waiting, not being worked on. So when work is slow, "work harder" and "hire someone" are often the wrong answers. The better question is: where does it wait, and why?

[ON SCREEN: three questions]

When you look at any piece of work, ask:

- What triggers it, and who knows it has started?
- Where does it change hands, and how does the next person find out?
- Where does it wait, for whom, and for how long?

In lesson 2.3 we'll turn those questions into a simple mapping method. First, though, we need to recognise that not all work is the same kind of work. That's the next lesson.`,
      slides: "Flow shape; handoff, queue, decision icons; refund table; founder as queue; three questions."
    }
  },
  {
    id: "m2-l2", type: "lesson", parent: "m2", order: 2, title: "2.2 Recurring work, projects and exceptions", status: "Draft",
    f: {
      summary: "Three kinds of work that need different handling, and why treating everything as an exception brings it back to the founder.",
      minutes: "About 5 minutes",
      script: `[ON SCREEN: "Recurring work, projects and exceptions"]

Founders often tell me "everything we do is different". Sometimes that's true. More often, there's a recurring core with variations on top, and the variations get so much attention that the core never gets organised.

It helps to sort work into three kinds.

[ON SCREEN: Recurring work]

**Recurring work** happens again and again in broadly the same way. Processing orders. Onboarding a new client. Running payroll. Sending invoices. Booking appointments. The steps are known. The value comes from doing it the same way each time, quickly and correctly.

Recurring work is where documentation, checklists, templates and clear ownership pay back fastest. If you do something forty times a month, a ten-minute improvement saves you most of a day.

[ON SCREEN: Project work]

**Project work** happens once, or rarely, with a defined end. Launching a new product. Moving office. Building a client's website. Implementing a new system. Each project is different, but projects share a shape: a scope, a plan, an owner, a deadline, and regular check-ins.

Project work needs a named owner and a clear scope more than it needs a detailed procedure. A project with no owner becomes the founder's project by default.

[ON SCREEN: Exceptions]

**Exceptions** are the things that don't fit. A customer asks for something you've never done. A supplier fails. A complaint escalates. A one-off discount request.

Exceptions need judgement, and a clear route for who makes it. Exceptions are where founders are often genuinely needed, at least at first.

[ON SCREEN: "When everything is an exception, everything comes to you"]

Here's the trap. If recurring work isn't organised, it starts to look like a series of exceptions. Every new client onboarding feels different because nobody has written down the common parts. Every order with a slight variation goes to the founder. And because exceptions need judgement, and the founder has the judgement, everything comes back to the founder.

So one of the most useful questions you can ask is: which of this is actually recurring? Usually it's more than people think.

[ON SCREEN: electrical contractor example]

An example. An electrical contractor with twelve staff said every quote was bespoke, so the founder priced every one. When they looked at the last three months, about seventy per cent of quotes were for four standard job types: consumer unit replacements, rewires of particular property sizes, EV charger installs and fault-finding call-outs. They were bespoke in detail, but not in structure.

That didn't mean the founder could stop pricing all quotes overnight. It meant they could separate the recurring quotes, which could follow a pricing guide and be prepared by someone else, from the genuinely unusual ones, which still needed the founder's eye.

[ON SCREEN: summary of the three kinds]

So when you map work in the next lesson, label it. Recurring, project or exception. It changes what good looks like. Recurring work wants consistency. Projects want an owner and a plan. Exceptions want a clear route to the right person, and that person shouldn't automatically be you.`,
      slides: "Three cards; trap statement; contractor quote split; summary."
    }
  },
  {
    id: "m2-l3", type: "lesson", parent: "m2", order: 3, title: "2.3 Mapping a workflow without a consultant", status: "Draft",
    f: {
      summary: "A practical, observation-based method for mapping one workflow.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "Mapping a workflow without a consultant"]

You don't need software, sticky notes or a consultant to map a workflow. You need one piece of real work, a table and a bit of patience.

Here's the method.

[ON SCREEN: Step 1 — choose]

**Step one: choose one workflow.** Pick something that matters to a customer promise and happens often enough to observe. Order to delivery. Enquiry to signed client. New starter to fully set up. Month-end to invoices sent. Don't pick the whole business. Pick one path.

[ON SCREEN: Step 2 — follow real work]

**Step two: follow a real example, not your memory of it.** This is the most important step. When you map from memory, you describe how work is supposed to go. When you follow a real order, or a real client, you see how it actually goes. If you can, follow two or three examples, including one that went badly.

You can follow work by watching it, by looking at timestamps on emails and systems, or by asking the people involved to note when they received something and when they passed it on. Ask them. Don't guess what they do.

[ON SCREEN: the template columns]

**Step three: record each step in a table.** For each step write down:

- what happens,
- who does it,
- what they need to start (the input),
- what they produce (the output),
- what it waits for before the next step,
- and roughly how long it waits.

Mark anything that's a decision, and especially any approval. Mark every handoff. Mark anywhere you appear.

[ON SCREEN: Step 4 — label]

**Step four: label the kind of work.** Is this path recurring, a project, or an exception? If it's recurring, where do the exceptions branch off?

[ON SCREEN: Step 5 — look for patterns]

**Step five: look for patterns before solutions.** Where is the longest wait? Where does work change hands without anyone confirming it arrived? Where does it wait for one specific person? How many steps exist only because something went wrong once?

[ON SCREEN: a warning sign]

Two cautions.

First, the people who do the work know things you don't. If your map makes their job look simple and they look surprised, you've missed something. Map with them, not about them.

Second, resist fixing as you map. You'll see things that look obviously wrong. Write them down as questions. "Why does every refund over fifty pounds need approval?" There may be a reason you've forgotten. You'll choose what to change in Module 6, once you've seen the whole picture.

[ON SCREEN: what good output looks like]

What you end up with is a one-page table that shows how one piece of work really moves through your business, where it waits and for whom. That's enough to have a much better conversation than "everything's slow".

The exercise for this module is to do exactly this for one workflow. If you're following real work, spread it over a week. The resource includes the table and the questions to ask at the end.`,
      slides: "Five steps; template columns; cautions; example output."
    }
  },
  {
    id: "m2-ex", type: "exercise", parent: "m2", order: 4, title: "Exercise 2: Map one workflow", status: "Draft",
    links: { outcomes: ["m2-lo1", "m2-lo2", "m2-lo3"] },
    f: {
      instructions: `1. Choose one workflow linked to a promise from Exercise 1.
2. Follow at least one real example from trigger to result. Two or three is better, including one that went badly.
3. Fill in the **Workflow map** table, one row per step.
4. Label the workflow as recurring, project or exception, and note where exceptions branch off.
5. Answer the five pattern questions at the bottom of the resource.
6. Write down, as questions rather than solutions, the three things you most want to understand better.

If you cannot observe real work this week, map from evidence such as email timestamps or system records. Note in the margin anything you are guessing.`,
      output: "A completed workflow map with wait times, labelled handoffs, decisions and approvals, and three open questions.",
      time: "About 40 minutes of work, which may be spread over a week."
    }
  },
  {
    id: "r-wfmap", type: "resource", parent: "m2", order: 5, title: "Workflow map", status: "Draft",
    links: { outcomes: ["m2-lo1", "m2-lo2", "m2-lo3"] },
    f: {
      purpose: "Show how one piece of work really moves, so you can decide where to look first.",
      body: `**Workflow:** ____________  **Trigger:** ____________  **Result:** ____________
**Kind of work:** Recurring / Project / Exception  **Examples followed:** ____

| # | What happens | Who | Input needed | Output | Waits for | Typical wait | Handoff? | Decision or approval? | Involves me? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |
| 3 | | | | | | | | | |

### Pattern questions

1. Where is the longest wait, and who or what is it waiting for?
2. Which handoffs have no confirmation that the work arrived?
3. Which steps wait for one specific person?
4. Which approvals exist, what risk does each protect against, and is that risk still real?
5. How much of the elapsed time is work, and how much is waiting?

### Three things I want to understand better (questions, not solutions)

1.
2.
3.`,
      how: "Use one row per step. If a step is a guess, mark it with a question mark. Keep this; you will use it in Modules 3 and 6."
    }
  }
];
