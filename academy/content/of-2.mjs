// Operations Fundamentals: Module 3 and Module 4. Draft for review.

export const of2 = [
  // ================= MODULE 3 =================
  {
    id: "m3", type: "module", parent: "c-of", order: 3, title: "Why founders become the bottleneck", status: "Draft",
    links: { pillars: ["p-ownership", "p-delivery", "p-visibility"], prereqs: ["m1", "m2"] },
    f: {
      problem: "Founders know they are overloaded but describe it as one problem (\"everything comes to me\"). Different bottlenecks need different responses. Without separating them, founders reach for the wrong fix: delegation without authority, documentation without ownership, hiring without visibility.",
      prereqText: "Modules 1 and 2. The workflow map from Exercise 2 is used here.",
      outline: `1. **Lesson 3.1: Five ways founders become the bottleneck** (about 7 minutes). Decision, knowledge, quality-check, relationship and visibility bottlenecks. How each one forms, and what each one tends to need.
2. **Lesson 3.2: Asking diagnostic questions** (about 6 minutes). Separating symptoms from causes. Questions that reveal missing information. Why the first answer is rarely the cause.
3. **Exercise 3:** Bottleneck diagnosis (about 35 minutes).`,
      example: `**An electrical contracting firm: 12 staff, founder Marcus.**

Marcus works 65-hour weeks. He says he needs an operations manager. Using the five bottleneck types:

| Type | Evidence | Likely need |
|---|---|---|
| Decision | Every quote over £500 needs Marcus to approve the price. Staff wait 2 to 3 days. | Pricing guide for standard jobs, a threshold, a named second approver. |
| Knowledge | Only Marcus knows the supplier discounts and which wholesaler has stock. | Supplier information written down and owned by someone. |
| Quality check | Marcus reviews every job sheet before invoicing because a certification paperwork error was costly once. | A checklist at the point of work, spot checks instead of checking everything, and a clear owner for compliance paperwork. |
| Relationship | Three large landlord clients only deal with Marcus. | Planned introductions to a named account lead; agreeing with clients who their contact is. |
| Visibility | Marcus knows which jobs are late only by asking on the van radio. | A simple job board showing status, visible to the office. |

Hiring an operations manager might help, but only if that person is given decision rights, the supplier knowledge and the client relationships. Otherwise the new hire becomes another person waiting for Marcus.

The certification paperwork is also an obligation with legal and safety consequences. Changing who checks it is a **governance decision** that Marcus should make deliberately, and the specific requirements should be confirmed with the relevant scheme or a qualified adviser rather than assumed.`,
      misconceptions: `- **"The answer is delegation."** Delegation without decision rights, information or visibility moves the queue rather than removing it.
- **"I'm the bottleneck because I'm a control freak."** Sometimes. More often the business has grown around the founder's knowledge and nobody has redesigned it. Personal habits matter, and David's work addresses them, but structure usually matters at least as much.
- **"A new hire will fix it."** Only if the hire receives the authority, information and relationships that currently sit with the founder.
- **"All bottlenecks are bad."** A founder can rightly be the decision-maker for a few high-stakes decisions. The goal is that they are the bottleneck only where they choose to be.`,
      time: "Estimate: about 50 minutes (13 minutes of recordings, 35 minutes of exercise)."
    }
  },
  { id: "m3-lo1", type: "outcome", parent: "m3", order: 1, title: "M3.1 Diagnose bottleneck types with evidence", status: "Draft",
    f: { statement: "Diagnose which bottleneck types (decision, knowledge, quality check, relationship, visibility) are operating in a scenario, citing evidence for each.", evidence: "Exercise 3. Capstone rubric: diagnosis." } },
  { id: "m3-lo2", type: "outcome", parent: "m3", order: 2, title: "M3.2 Ask diagnostic questions", status: "Draft",
    f: { statement: "Write diagnostic questions that separate a symptom from its likely causes and identify what information is missing before deciding.", evidence: "Exercise 3, question list. Capstone rubric: quality of questions; identification of missing information." } },
  {
    id: "m3-l1", type: "lesson", parent: "m3", order: 1, title: "3.1 Five ways founders become the bottleneck", status: "Draft",
    f: {
      summary: "Decision, knowledge, quality-check, relationship and visibility bottlenecks: how each forms and what each tends to need.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "Five ways founders become the bottleneck"]

"Everything comes to me." It's the most common thing founders say in this programme, and it's true. But it isn't one problem. It's usually several, tangled together, and each needs a different response.

Here are five types. You'll recognise most of them.

[ON SCREEN: 1. Decision bottleneck]

**One: the decision bottleneck.** Work waits because only you can decide. Approve this price. Sign off this hire. Agree this refund. Choose between these two suppliers.

It usually forms for a good reason. Early on, you were the only person with the context. Then the business grew and the decisions kept coming to you, because nobody ever said who else could make them.

What it tends to need: explicit decision rights, thresholds and an escalation route. We'll build those in Module 4.

[ON SCREEN: 2. Knowledge bottleneck]

**Two: the knowledge bottleneck.** Work waits because only you know how, or only you know a fact. Which supplier gives the discount. How the pricing spreadsheet really works. What a particular client is sensitive about.

What it tends to need: the knowledge written down or taught, and someone made responsible for keeping it current. That's where documentation fits, and it's Module 5.

[ON SCREEN: 3. Quality-check bottleneck]

**Three: the quality-check bottleneck.** The work is done by others, but you check it before it goes out. Every proposal. Every job sheet. Every social post.

Often this started after something went wrong. A costly mistake, a complaint, a compliance near-miss. Checking everything felt like the safe response.

What it tends to need: a clear standard, so people know what good looks like; checks built into the work itself, like a checklist; and sampling, where you check some rather than all. Some checks genuinely need to stay, especially where there are legal or safety consequences. The question is which ones, and whether you're the right person to do them.

[ON SCREEN: 4. Relationship bottleneck]

**Four: the relationship bottleneck.** Customers, suppliers or partners will only deal with you. The big client who emails you directly. The supplier who gives you a better price because they know you.

What it tends to need: planned, deliberate introductions. Agreeing with the client who their day-to-day contact is, and what you'll stay involved in. Relationships don't transfer because you've hired someone; they transfer when the client sees someone else being reliable.

[ON SCREEN: 5. Visibility bottleneck]

**Five: the visibility bottleneck.** You're the only one who can tell whether things are all right. So you check. You ask for updates. You look at the bank balance every morning. And because you're checking, people wait for you to notice problems instead of raising them.

What it tends to need: a small amount of shared information that shows status without you asking. That's Module 6.

[ON SCREEN: the electrical contractor table]

Let me show you how this looks in a real situation. An electrical contractor, twelve staff. The founder, Marcus, works sixty-five hours a week and thinks he needs an operations manager.

When we separate the types: he approves every quote over five hundred pounds, which is a decision bottleneck. He's the only one who knows supplier discounts: knowledge. He checks every job sheet before invoicing because of a paperwork error once: quality check. Three big landlord clients only deal with him: relationship. And he finds out which jobs are late by asking on the radio: visibility.

Five different bottlenecks. Five different responses.

[ON SCREEN: "Who receives the authority, information and relationships?"]

Now, would an operations manager help? Possibly. But only if that person receives the decision rights, the supplier knowledge and the client relationships. If they don't, Marcus now has a highly paid person waiting for him too.

[ON SCREEN: "A bottleneck by choice"]

One last point. Not every bottleneck is a problem. A founder can quite properly be the person who approves a major contract, or makes senior hires. The aim isn't for you to decide nothing. It's for you to be the bottleneck only where you've chosen to be, for good reasons, rather than by default.`,
      slides: "Five type cards; contractor table; authority/information/relationships; bottleneck by choice."
    }
  },
  {
    id: "m3-l2", type: "lesson", parent: "m3", order: 2, title: "3.2 Asking diagnostic questions", status: "Draft",
    f: {
      summary: "How to separate symptoms from causes, and how to notice the information you don't yet have.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "Asking diagnostic questions"]

The most expensive operational mistakes I see aren't bad solutions. They're good solutions to the wrong problem. A new project tool when the issue was unclear ownership. A rewritten process when the issue was that one person didn't have the authority to say no.

The way to avoid that is to ask better questions before choosing an answer.

[ON SCREEN: Symptom → possible causes]

Start by separating the **symptom** from its possible **causes**.

A symptom is what you notice. "Projects are late." "Customers complain about response times." "We keep running out of stock."

A cause is why it happens. And any symptom usually has several possible causes.

Take "projects are late". Possible causes include: the deadline was never realistic; the scope grew without anyone agreeing it; work waited for an approval; a supplier was late; the person doing it was also doing three other things; nobody knew it was late until the end.

Each cause needs a completely different response. So your first job is to find out which ones are actually operating.

[ON SCREEN: four kinds of question]

Four kinds of question help.

**Questions about the path.** Where did this piece of work go, step by step? Where did it wait, and for whom? Your workflow map from Module 2 is exactly this.

**Questions about ownership.** Who owned the outcome? Not who did a task, but who was responsible for it being finished. Could they decide what they needed to, or did they have to wait?

**Questions about the promise.** What exactly was promised, by whom, and when? Was it checked against capacity before it was made?

**Questions about evidence.** How do we know? Is this one case or a pattern? What would we expect to see if this cause were true?

[ON SCREEN: "What information is missing?"]

Then ask the question most people skip: **what information is missing?**

Often the honest answer to "why are projects late?" is "we don't actually know". We don't record when work starts. We don't know how long approvals take. We don't know whether the original estimates were ever realistic.

That's not a failure. It's a finding. It tells you that before you change anything, you may need to look, or to start recording one or two things for a few weeks.

[ON SCREEN: "The first answer is rarely the cause"]

A useful habit: when someone gives you the cause, ask "and why did that happen?" once or twice more.

"The project was late because the designer was late." Why? "Because the client sent the content late." Why? "Because nobody told them the date it was needed, and nobody followed up." Now you're looking at a handoff and an ownership gap, not a slow designer.

Be careful with this. It's not about blaming people. If the answer keeps landing on an individual, ask what in the way work is set up made that likely.

[ON SCREEN: good versus weak questions]

Here's the difference between weak and strong diagnostic questions.

Weak: "Why is everyone so slow?" It assumes the cause and puts people on the defensive.

Stronger: "For the last three projects that ran late, where did the time go between the start date and delivery?"

Weak: "Do we need a new system?"

Stronger: "What decision would we make differently if we could see project status every day? Who would see it?"

[ON SCREEN: exercise prompt]

In the exercise, you'll take your own situation, or a provided case if you prefer, and write a diagnosis: which bottleneck types you see, the evidence for each, the questions you'd ask, and the information you're missing. You'll use exactly this approach in the capstone.`,
      slides: "Symptom/causes tree; four question kinds; missing information; why-chain; weak vs strong."
    }
  },
  {
    id: "m3-ex", type: "exercise", parent: "m3", order: 3, title: "Exercise 3: Bottleneck diagnosis", status: "Draft",
    links: { outcomes: ["m3-lo1", "m3-lo2"] },
    f: {
      instructions: `Use the **Bottleneck diagnostic** resource. Work on your own business, or use the practice case below if you prefer not to.

1. For each of the five bottleneck types, note whether you see it, and the evidence. Evidence means something observed or recorded, not a feeling.
2. For the two strongest, write three diagnostic questions each, using the four question kinds from Lesson 3.2.
3. List the information you would need but do not have.
4. Mark any bottleneck that involves a legal, safety, financial or regulatory consequence. For those, note who should make the decision about changing it.

**Practice case (if you are not using your own business).** A two-founder recruitment agency, nine staff. Placements are invoiced by one founder, Sam, who also checks every candidate's pre-employment paperwork before a start date is confirmed, because of a past problem with a client. Candidates often start late. Consultants say clients are "chasing Sam". Invoices go out two to three weeks after placements start. The other founder thinks the answer is a new CRM.`,
      output: "A completed diagnostic table, six diagnostic questions, a list of missing information, and any decisions that need a named decision-maker.",
      time: "About 35 minutes."
    }
  },
  {
    id: "r-diag", type: "resource", parent: "m3", order: 4, title: "Bottleneck diagnostic", status: "Draft",
    links: { outcomes: ["m3-lo1", "m3-lo2"] },
    f: {
      purpose: "Decide which kinds of founder bottleneck are operating, so you can choose a response that fits.",
      body: `| Type | Signals | Do I see it? Evidence | Tends to need |
|---|---|---|---|
| Decision | Work waits for my approval or choice | | Decision rights, thresholds, escalation route (Module 4) |
| Knowledge | Only I know how, or only I know a fact | | Knowledge captured and owned (Module 5) |
| Quality check | Others do it, I check it before it goes | | A stated standard, checks inside the work, sampling |
| Relationship | Customers or suppliers only deal with me | | Planned introductions, agreed contacts |
| Visibility | Only I can tell if things are fine | | Shared status information (Module 6) |

### Diagnostic questions

| Bottleneck | Path question | Ownership question | Promise question | Evidence question |
|---|---|---|---|---|
| | | | | |
| | | | | |

### Information I do not have yet

-
-

### Bottlenecks with legal, safety, financial or regulatory consequences

| Bottleneck | Consequence if a change goes wrong | Who should decide whether to change it | Specialist input needed? |
|---|---|---|---|
| | | | |`,
      how: "Evidence first, then questions, then missing information. Do not write solutions on this sheet."
    }
  },

  // ================= MODULE 4 =================
  {
    id: "m4", type: "module", parent: "c-of", order: 4, title: "Ownership, decisions and when to get advice", status: "Draft",
    links: { pillars: ["p-ownership", "p-direction", "p-visibility"], prereqs: ["m3"] },
    f: {
      problem: "Founders delegate tasks but not outcomes or authority, so decisions drift back to them. They also make, or allow others to make, commitments without checking capacity, margin, cash or legal consequences, and often do not know when a matter needs a qualified adviser.",
      prereqText: "Module 3.",
      outline: `1. **Lesson 4.1: Owners, decision rights and escalation** (about 7 minutes). Owning an outcome versus doing a task. Decide, consult, inform. Escalation that is defined rather than improvised.
2. **Lesson 4.2: Approval thresholds and decision records** (about 6 minutes). Delegated authority in plain terms. Setting thresholds. Which decisions are worth recording, and how lightly.
3. **Lesson 4.3: Commitments, compliance and specialist advice** (about 7 minutes). Checking a commitment before it is made. Obligations need owners and evidence. Recognising when to get qualified advice and what to gather first.
4. **Exercise 4:** The 4-hour response promise (about 45 minutes).`,
      example: `**A B2B software company: 18 staff.**

A salesperson closes a large deal by promising a custom integration "within six weeks". The product team learns about it after signature. They estimate twelve weeks, and the work displaces a scheduled release for existing customers.

Looking at it through this module:

- **Ownership.** Nobody owned "what we can promise about custom work". Sales assumed product would cope. Product assumed sales would ask.
- **Decision rights.** Sales could agree prices within a discount band, but nothing said who could agree delivery commitments or custom scope.
- **Commercial consequences.** The deal is profitable at twelve weeks of work only if the price included it, which it did not. Delaying the release may breach promises to other customers.
- **Specialist input.** The signed agreement may include delivery dates, service credits or termination rights. What they mean is a question for a solicitor, not for the founder reading it at midnight. The founder's job is to recognise that, gather the agreement and the facts, and ask a clear question.

A proportionate fix, which the company chose after the event: a short decision rights table saying sales may agree standard scope and discounts up to 10%; any custom work or delivery date needs written confirmation from the product lead before it is offered; anything over a set contract value or with non-standard terms goes to the founder; and agreements with non-standard liability, service credit or data terms are reviewed by their solicitor before signature.`,
      misconceptions: `- **"Delegating means giving someone the task."** It means giving them the outcome and the authority to make the decisions it needs, within limits.
- **"Approval steps make things safer."** Each approval also adds a queue. Good thresholds protect what matters and let the rest move.
- **"Governance is for big companies."** At its simplest, governance is just knowing who can decide what, and keeping a record of the decisions that matter. Every business has it, deliberately or by accident.
- **"I'll read the contract myself, it's only a few pages."** Reading it is good. Interpreting liability, termination, intellectual property or data terms needs a qualified adviser. The operational skill is knowing when, and arriving with the right information.
- **"If we have a checklist, we're compliant."** A checklist can help you remember. It does not establish that you meet an obligation.`,
      time: "Estimate: about 65 minutes (20 minutes of recordings, 45 minutes of exercise)."
    }
  },
  { id: "m4-lo1", type: "outcome", parent: "m4", order: 1, title: "M4.1 Specify owner, decision rights, threshold and escalation", status: "Draft",
    f: { statement: "For a recurring decision or outcome, specify the owner, their decision rights, an approval threshold and the escalation route.", evidence: "Exercise 4; decision rights table. Capstone rubric: ownership and decision rights." } },
  { id: "m4-lo2", type: "outcome", parent: "m4", order: 2, title: "M4.2 Identify consequences of a commitment", status: "Draft",
    f: { statement: "Before a commitment is made, identify its consequences for scope, capacity, margin, payment and cash, and dependencies on suppliers or other customers.", evidence: "Exercise 4. Capstone rubric: commercial and governance awareness; feasibility." } },
  { id: "m4-lo3", type: "outcome", parent: "m4", order: 3, title: "M4.3 Recognise when specialist advice is needed", status: "Draft",
    f: { statement: "Recognise when a matter needs a qualified adviser, say what kind, and list the information to gather before asking.", evidence: "Exercise 4; specialist advice brief. Capstone rubric: recognition of specialist advice needs." } },
  {
    id: "m4-l1", type: "lesson", parent: "m4", order: 1, title: "4.1 Owners, decision rights and escalation", status: "Draft",
    f: {
      summary: "Owning an outcome versus doing a task; decide, consult and inform; escalation that is defined rather than improvised.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "Owners, decision rights and escalation"]

In Module 3, the most common bottleneck was decisions. Work waiting because only the founder can say yes. In this lesson, we'll look at how to move decisions to the right people without losing your grip on the ones that matter.

[ON SCREEN: Task vs outcome]

Start with a distinction. **Doing a task** and **owning an outcome** are different.

Doing a task: "Send the invoices." Owning an outcome: "Every client is invoiced correctly within three working days of month end, and you tell me if something stops that happening."

When you delegate a task, you still own the outcome. So you still have to check, chase and decide. When you delegate an outcome, the owner is the one who notices problems, makes the decisions within their limits, and comes to you only when they need to.

Most founders think they've delegated when they've only handed over tasks. Then they wonder why everything still comes back to them.

[ON SCREEN: Decision rights — Decide / Consult / Inform]

An owner needs **decision rights**: clarity about which decisions they can make. A simple way to set them is three words.

**Decide**: who makes the call.
**Consult**: who must be asked first, and whose view matters, but who doesn't decide.
**Inform**: who needs to know afterwards.

Take a refund over fifty pounds in our skincare business. Customer service lead decides, up to an agreed amount. Consult: nobody, for standard returns. Inform: the founder sees a weekly list of refunds. That's very different from "everything over fifty pounds waits for Priya".

[ON SCREEN: "One decider"]

One rule that saves a lot of trouble: **one decider per decision**. Many people can be consulted. If two people both think they decide, either nothing happens or two contradictory things happen.

[ON SCREEN: Escalation]

Next, **escalation**. Even with clear decision rights, some things need to move up. The trouble is that in most businesses escalation is improvised. People either escalate everything, to be safe, or nothing, until it's a crisis.

Defined escalation answers three questions:

- **When** does this go up? For example: the cost is over a threshold; a customer is threatening to leave; there's a safety, legal or regulatory concern; the owner and someone else disagree and can't resolve it.
- **To whom?** A named role, not "management".
- **How quickly, and how?** "Same day, by phone" is different from "at the weekly meeting".

[ON SCREEN: "Escalation is not failure"]

Make it clear that escalating within those rules is doing the job well, not admitting failure. If people are criticised for escalating, they stop, and you find out about problems late.

[ON SCREEN: small business example]

This isn't only for larger teams. A sole-founder consultancy with a virtual assistant and three freelancers can say: the assistant decides on diary changes and supplier payments under two hundred pounds; consults me on anything client-facing; tells me weekly what's been paid. A freelancer owns their deliverable to the agreed brief; escalates the same day if the client asks for anything outside it.

That's a decision rights table. It fits on one page, and it removes dozens of small interruptions a week.

[ON SCREEN: "Capability"]

One caution. An owner must be able to do what they own. If someone doesn't have the skill, the information or the time, giving them the title doesn't make them the owner. Part of setting ownership is checking that, and sometimes the honest answer is "not yet". That's fine, as long as you say so and plan for it.

In the next lesson, we'll look at the specific kind of decision right that causes most founder bottlenecks: approvals, and how to set thresholds for them.`,
      slides: "Task vs outcome; decide/consult/inform; one decider; escalation three questions; small business table; capability."
    }
  },
  {
    id: "m4-l2", type: "lesson", parent: "m4", order: 2, title: "4.2 Approval thresholds and decision records", status: "Draft",
    f: {
      summary: "Delegated authority in plain terms; setting thresholds; recording the decisions that matter, lightly.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "Approval thresholds and decision records"]

This lesson is about governance. That word puts people off, so let's define it simply.

[ON SCREEN: "Governance: who can decide what, and how we know what was decided"]

For the purposes of this course, governance means **who can decide what, and how we know what was decided**. Every business has governance. In many small businesses it's accidental: the founder decides everything, and the record is in the founder's head.

There's a formal side too, to do with directors, shareholders and company law. That depends on your company structure and jurisdiction and isn't covered here. What we're covering is the everyday side, which you can design yourself.

[ON SCREEN: Delegated authority]

**Delegated authority** means a person can commit the business to something on its behalf, within limits. Spending money. Agreeing a discount. Signing a supplier order. Agreeing a delivery date. Hiring.

The limits are usually set as **approval thresholds**: below this amount or risk, you can decide; above it, you need approval from a named person.

[ON SCREEN: a simple threshold table]

Here's a simple example for a small business.

Purchases: team leads up to five hundred pounds; operations lead up to two thousand five hundred; founder above that.
Discounts: sales up to ten per cent; founder above that.
Refunds: customer service lead up to two hundred pounds; above that, operations lead.
Delivery commitments outside standard terms: must be confirmed in writing by the delivery lead before they're offered.
Any contract with non-standard terms, or over a set value: founder, after specialist review where needed.

[ON SCREEN: how to set a threshold]

How do you choose the numbers? Three questions:

- **What's the realistic downside if this person gets it wrong?** If the worst case is a small, recoverable loss, the threshold can be generous.
- **How often does this decision come up?** Frequent, low-risk decisions are the ones that clog up a founder. Push those down first.
- **Can we check afterwards instead of before?** For many decisions, a weekly list you glance at is enough. Checking afterwards keeps the work moving.

Start more generous than feels comfortable for low-risk decisions, and review in a month. You'll learn more from a month of real decisions than from a long debate.

[ON SCREEN: "Too many approvals recreate the bottleneck"]

A warning. It's tempting to respond to every mistake with a new approval step. Each one adds a queue. If you end up with five approvals on a routine purchase, you haven't removed the bottleneck. You've moved it and multiplied it.

[ON SCREEN: Decision records]

Now, records. Not every decision needs writing down. But some do: anything that commits significant money, changes a customer promise, changes who owns something, accepts a risk, or might be questioned later.

A **decision record** can be very light. Five lines:

- What was decided.
- Who decided, and who was consulted.
- When.
- Why, in a sentence or two, including what options were rejected.
- When it will be reviewed, if at all.

Keep them in one place everyone who needs them can find. A shared document or a channel is enough.

[ON SCREEN: why it matters]

Why bother? Because six months later, someone will ask "why do we do it this way?" or "who agreed this?" Without a record, the answer is "ask the founder". With one, the business remembers on its own.

And for some decisions, a record may matter for other reasons, for example if a dispute arises or someone needs to show how a decision was made. Whether any particular record is legally required depends on your circumstances, and that's a question for a qualified adviser.

The exercise for this module asks you to build a short decision rights table. Before that, the last lesson covers the decisions that most often go wrong: commitments, obligations and knowing when to get advice.`,
      slides: "Governance definition; delegated authority; threshold table; three questions; warning; five-line decision record."
    }
  },
  {
    id: "m4-l3", type: "lesson", parent: "m4", order: 3, title: "4.3 Commitments, compliance and specialist advice", status: "Draft",
    f: {
      summary: "Checking a commitment before it is made; giving obligations owners and evidence; recognising when to get qualified advice.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "Commitments, compliance and specialist advice"]

Some of the most damaging operational problems are created in a single moment: when someone agrees to something the business can't deliver. This lesson is about recognising those moments, and knowing where operational judgement stops and specialist advice begins.

[ON SCREEN: the software example]

Here's an example. A software company. A salesperson closes a large deal by promising a custom integration within six weeks. The product team hears about it after the contract is signed. Their estimate is twelve weeks, and doing it means delaying a release that other customers were promised.

Nobody did anything dishonest. The salesperson wanted to win. The problem was that nobody owned the question "what can we promise about custom work?", and nothing required anyone to check.

[ON SCREEN: Before you commit]

So before a significant commitment is made, check five things. These come from Module 1.

- **Scope.** What exactly are we agreeing to deliver? What's not included?
- **Capacity.** Who will do it, when, and what will it displace?
- **Margin.** Does the price cover the real cost, including the time it will take?
- **Payment and cash.** When do we pay out, and when are we paid? Are there penalties or service credits if we're late?
- **Dependencies.** What do we rely on, such as a supplier, a subcontractor, a system or the customer themselves, and what happens if they let us down?

And one governance question: **is the person agreeing this allowed to?** That's the decision rights table from the last lesson.

[ON SCREEN: Obligations]

Now, obligations. Some commitments aren't made to customers at all. They come from where you operate, your sector and your structure. Tax and filings. Employment. Health and safety. Data protection. Licences. Insurance. Sector rules.

For this course, the operational skills are:

- **Recognise** that an obligation may exist. If you're not sure, that's a signal to ask.
- **Give it an owner.** One named person responsible for knowing the requirement and making sure it's met.
- **Track deadlines.** A shared calendar or register, not someone's memory.
- **Keep evidence.** Being able to show that something was done, when and by whom.
- **Know when to get advice.** Which brings us to the most important part.

[ON SCREEN: "A checklist is not compliance"]

A checklist can help you remember. It doesn't make you compliant. Whether you meet an obligation depends on the actual requirement, which varies by jurisdiction, sector and circumstance. This course won't tell you what the law requires, and you shouldn't treat anything here as legal advice.

[ON SCREEN: When to get specialist advice]

So when should you get qualified advice? Some signals:

- The decision involves a contract with non-standard terms, especially liability, indemnities, service credits, termination, intellectual property or data.
- It involves employing, dismissing or changing the terms of people.
- It involves a regulated activity, or a sector with its own rules.
- There's a dispute, or one seems likely.
- You'd be relying on your own reading of a law or regulation.
- The cost of getting it wrong is high or hard to undo.

The relevant adviser might be a solicitor, an accountant, an employment specialist, an insurance broker, or a sector body.

[ON SCREEN: what to gather]

The operational skill is arriving with a clear question and the right information. Before you ask, gather:

- What's being decided, by when, and who will decide.
- The documents involved: the draft agreement, the policy, the correspondence.
- The facts: dates, amounts, who said what.
- What you're worried about, in plain words.
- What you'd like to be able to do.

That makes advice faster, cheaper and more useful.

[ON SCREEN: "Operational judgement has limits"]

To close the module: your job as founder isn't to be the lawyer, the accountant and the compliance officer. It's to make sure commitments are checked before they're made, that obligations have owners, and that the business knows when it's out of its depth. Recognising that is itself good judgement.

The exercise gives you a scenario where a founder has already signed something the business can't deliver. You'll work through authority, capacity, commercial consequences and specialist input.`,
      slides: "Software example; five checks + authority; obligations skills; checklist warning; advice signals; what to gather; closing line."
    }
  },
  {
    id: "m4-ex", type: "exercise", parent: "m4", order: 4, title: "Exercise 4: The 4-hour response promise", status: "Draft",
    links: { outcomes: ["m4-lo1", "m4-lo2", "m4-lo3"] },
    f: {
      instructions: `**Scenario.** Harbour Facilities is a commercial cleaning company with about 40 part-time cleaners and three office staff. The founder, Lena, has just signed a two-year agreement with a property management firm covering 12 office buildings. To win it, she agreed to a 4-hour emergency response, 24 hours a day, 7 days a week, for spills, floods and similar incidents. The agreement includes service credits if response times are missed. Payment terms are 60 days. Harbour has no on-call rota. Lena has been answering out-of-hours calls herself. The operations coordinator found out about the 4-hour promise from the client's welcome email.

Using the **Decision rights and thresholds** and **Commitment check and advice brief** resources:

1. **Authority.** Who should have been able to agree a 24/7 response commitment? What approvals should it have needed? Draft three rows of a decision rights table that would have caught this.
2. **Capacity.** What would it take to meet a 4-hour response across 12 sites? What information is missing?
3. **Commercial consequences.** List the effects on margin, cash (60-day terms) and existing clients. Where are the risks of service credits?
4. **Specialist input.** Which questions need a qualified adviser, what kind, and what information would you gather first? Consider the agreement itself and any implications of asking staff to be on call.
5. **Immediate decision.** What should Lena decide this week, and who should be involved?

There is no single right answer. Make your reasoning visible.`,
      output: "Short written answers to the five questions, three rows of a decision rights table and a one-page advice brief.",
      time: "About 45 minutes."
    }
  },
  {
    id: "r-rights", type: "resource", parent: "m4", order: 5, title: "Decision rights and thresholds", status: "Draft",
    links: { outcomes: ["m4-lo1"] },
    f: {
      purpose: "Decide who can make each recurring decision, up to what limit, and when it goes up, so decisions stop defaulting to the founder.",
      body: `### Decision rights table

| Decision | Decides | Consulted first | Informed after | Threshold (decide alone up to) | Escalate when | Escalate to, and how fast | Checked before or after? |
|---|---|---|---|---|---|---|---|
| e.g. Customer refund | CS lead | – | Founder (weekly list) | £200 | Over £200, suspected fraud, legal threat | Ops lead, same day | After |
| | | | | | | | |
| | | | | | | | |

### Setting a threshold: three questions

1. What is the realistic downside if this person gets it wrong? Is it recoverable?
2. How often does this decision come up?
3. Could we check afterwards instead of before?

### Rules of thumb

- One decider per decision.
- Push frequent, low-risk decisions down first.
- Start generous on low-risk decisions and review after a month.
- Every new approval step adds a queue. Remove one for each you add, where you can.
- An owner must be able to do what they own. If not yet, say so and plan for it.

### Decision record (for decisions that matter)

- **Decided:**
- **Decided by / consulted:**
- **Date:**
- **Why, and options rejected:**
- **Review date, if any:**`,
      how: "Start with the five decisions that interrupt you most often. Review the table after a month of real use."
    }
  },
  {
    id: "r-commit", type: "resource", parent: "m4", order: 6, title: "Commitment check and specialist advice brief", status: "Draft",
    links: { outcomes: ["m4-lo2", "m4-lo3"] },
    f: {
      purpose: "Decide whether a commitment should be made as proposed, and if specialist advice is needed, ask for it clearly.",
      body: `### Part A: Before we commit

| Check | Answer | Concern? |
|---|---|---|
| **Scope.** What exactly are we delivering? What is excluded? | | |
| **Capacity.** Who will do it, when, and what does it displace? | | |
| **Margin.** Does the price cover the real cost and time? | | |
| **Payment and cash.** When do we pay out and get paid? Penalties or service credits? | | |
| **Dependencies.** Suppliers, subcontractors, systems, the customer? What if they fail? | | |
| **Authority.** Is the person agreeing this allowed to, under our decision rights? | | |

### Part B: Does this need specialist advice?

Tick any that apply. If you tick one, consider advice before committing.

- [ ] Non-standard contract terms (liability, indemnity, service credits, termination, IP, data)
- [ ] Employing, dismissing or changing people's terms or working patterns
- [ ] A regulated activity or a sector with its own rules
- [ ] A dispute exists or seems likely
- [ ] We would be relying on our own reading of a law or regulation
- [ ] The cost of being wrong is high or hard to undo

**Possible adviser:** solicitor / accountant / employment specialist / insurance broker / sector body / other: ______

### Part C: Advice brief (one page)

1. **The decision, the deadline and who decides:**
2. **Documents attached:**
3. **Key facts (dates, amounts, who said what):**
4. **What we are worried about, in plain words:**
5. **What we would like to be able to do:**
6. **Specific questions for the adviser:**

*This resource helps you recognise issues and prepare. It is not legal advice and does not establish compliance.*`,
      how: "Use Part A for any commitment outside standard terms. Use Parts B and C whenever a box in Part B is ticked."
    }
  }
];
