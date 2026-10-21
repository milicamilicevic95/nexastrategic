// Programme architecture: outcome, pillars and the wider course map.
// Every item here is a draft for review. Nothing in this file is approved.

export const programme = [
  {
    id: "prog", type: "programme", title: "Operations programme for founders (working title)", status: "Draft",
    f: {
      statement: "A business that delivers reliably without the founder having to direct every move.",
      question: "How to not be your own bottleneck?",
      outcomes: `By the end of the full programme, a learner can:

1. Diagnose where and why work depends on them, using evidence rather than impression.
2. Specify who owns an outcome, what that person may decide, and when they must escalate.
3. Judge whether a documentation, process or system change fits their business, and say why.
4. Set up the minimum visibility needed to know whether delivery, money, capacity and obligations are on track, without checking personally.
5. Recognise commercial, governance, compliance and legal issues that need a named decision-maker or a qualified adviser.
6. Choose one improvement at a time, give it an owner and a measure, and review whether it worked.

These outcomes describe what a learner can explain, decide or produce. They do not claim that finishing the programme removes a founder from day-to-day operations. That depends on the learner and their team doing the work afterwards.`,
      architecture: `The programme rests on five conditions. Each was tested with David's question: *if we removed this element, would the overall outcome fail?*

| Pillar | The question it answers | What fails without it |
|---|---|---|
| Direction | What are we trying to deliver, what have we promised, and what does good look like? | People cannot act without asking the founder what matters. |
| Ownership | Who carries each outcome, who may decide what, and when do they escalate? | Every decision drifts back to the founder. |
| Delivery | How does work move from request to completion, and how is it handed over? | Work depends on the founder knowing how it is done and chasing it along. |
| Visibility | How do the right people know whether delivery, money, capacity and obligations are on track? | The founder is the only person who can tell whether things are fine, so they keep checking. |
| Improvement | How are recurring failures noticed, examined and corrected? | The same problems keep returning and pull the founder back in. |

**How they relate.** Direction sets what matters and what has been promised. Ownership decides who carries it. Delivery is how the work actually moves. Visibility shows whether it is happening. Improvement changes what is not working, and sometimes sends a question back to Direction, for example when a promise cannot be kept at the current price or capacity.

**Where the model is imperfect.** The pillars overlap in practice. In a three-person business one person may hold all five. A weakness in one usually shows up as a symptom in another: a missed deadline (Delivery) is often an unclear owner (Ownership) or a promise nobody checked (Direction). The model is a way of asking better questions, not a diagram every business must reproduce.`,
      test: `**Candidates tested and not adopted as pillars**

- **SOPs and documentation.** Remove them and a small business with stable, simple work can still deliver reliably. Documentation is a tool that supports Delivery and Ownership. It is taught in depth because founders ask about it, not because it is a condition in its own right.
- **Systems and software.** Tools. They can make good practice easier or bad practice faster. They do not create ownership or judgement.
- **Governance.** Who may decide what, approval thresholds and decision records run through Ownership. Formal governance (boards, shareholder matters) is a specialist topic in a later course.
- **Compliance.** Obligations need an owner (Ownership) and a way of knowing they are met (Visibility). Treated as a category of work across pillars rather than a separate pillar.
- **Capability (people who can do the work).** Remove it and the outcome does fail, so this is the strongest challenger. It is currently folded into Ownership on the basis that an owner who cannot do the work is not really an owner. **Open decision:** whether Capability should be a sixth pillar, or whether hiring and development belong to a separate people programme.
- **Culture.** It shapes everything, but it is not something this programme can teach or assess through operational exercises. David's work on founder behaviour addresses it directly.

**Label change proposed.** The starting hypothesis used *Control*. This draft proposes *Visibility*. The condition the outcome needs is that the right people can see the state of the business without the founder. "Control" suggests the founder holding on more tightly, which is the opposite of the intent. Acting on what is seen belongs to Ownership and Improvement. This needs agreement with David.`,
      scope: `**What the programme does.** It teaches founders to understand operations, diagnose problems, ask better questions and make sound operational decisions.

**What it does not do.** It does not implement changes for them, and learners and their teams remain responsible for implementation. It is not legal, tax, financial or regulatory advice, and a checklist from this programme does not establish compliance with anything. It does not prescribe departments, systems or documents that every company must have. A two-person service business should not copy a 200-person company's bureaucracy.

**General principles and local requirements.** The programme separates general operating principles, which apply widely, from requirements that depend on jurisdiction, sector, company structure or circumstances. Where a specific legal, regulatory or software claim is made, it is recorded in the Sources register with its source, jurisdiction and review date, or flagged for research or professional review.`,
      sequence: `**Proposed learning sequence** (estimates, not commitments)

1. **Operations Fundamentals** (all pillars). Baseline vocabulary and judgement. Required before every other course. About 4 to 5 hours of study plus a capstone of 3 to 5 hours.
2. **Ownership, Delegation and Decision Rights** (Ownership). Recommended next for most founders, because most bottlenecks start here.
3. Then, depending on where the learner's bottleneck sits:
   - **Workflows, Projects and Documentation** (Delivery), or
   - **Finance Operations and Capacity** (Visibility).
4. **Operating Rhythm: Reporting, Review and Improvement** (Visibility, Improvement). Best after course 2 and at least one of the courses in step 3.
5. **Commercial Operations: From Promise to Payment** (Direction, Delivery, Visibility). Requires Finance Operations.
6. **Governance, Compliance and Legal Awareness** (Ownership, Visibility). Requires Ownership, Delegation and Decision Rights. Best after Commercial Operations.

Learners do not need every course. A founder whose problem is cash timing may go from Fundamentals to Finance Operations and stop there. The fortnightly or monthly masterclasses (frequency to be agreed) apply the courses; they are never required to complete one.`
    }
  },

  // ---- Pillars ----
  {
    id: "p-direction", type: "pillar", parent: "prog", order: 1, title: "Direction", status: "Draft",
    f: {
      definition: "The priorities, promises and standards that tell people what the business is trying to deliver and what good looks like, so they can act without asking.",
      test: "Remove it and people either guess what matters or ask the founder. Customer promises get made that nobody can keep, and quality varies by who did the work. The outcome fails.",
      includes: `- Current priorities, and what is explicitly not a priority
- Customer promises: what is delivered, by when, at what standard
- Quality standards and what "done" means
- Pricing and scope boundaries (introduced here, developed in Commercial Operations)`,
      signals: `- "I'm the only one who knows what we've promised this client."
- Team members ask which of two urgent things to do first.
- Work is redone because the standard was never stated.`,
      limits: "Direction does not need a strategy document. In a small business it can be a short list of priorities and three or four written customer promises. The test is whether people can make a sensible choice without asking.",
      relations: "Direction sets the promises that Delivery has to keep and that Visibility measures. Improvement sometimes shows that a promise needs to change."
    }
  },
  {
    id: "p-ownership", type: "pillar", parent: "prog", order: 2, title: "Ownership", status: "Draft",
    f: {
      definition: "Clear responsibility for outcomes, explicit decision rights, and agreed routes for escalation and accountability.",
      test: "Remove it and every decision without an obvious owner returns to the founder by default. The outcome fails.",
      includes: `- Owners for outcomes, not just tasks
- Decision rights: who decides, who is consulted, who is told
- Delegated authority and approval thresholds (for example, spending, discounts, refunds, hiring)
- Escalation: when and how a decision moves up
- Records of important decisions
- Ownership of compliance obligations
- Capability: an owner must be able to do what they own (see open decision on a possible sixth pillar)`,
      signals: `- "Can you just check this before it goes?"
- Work stops when the founder is on holiday.
- Two people both think the other one is handling it.`,
      limits: "Ownership is not a job title or an organisation chart. A sole trader with one virtual assistant still needs to say what the assistant may decide alone. Too many approval steps recreate the bottleneck in a different place.",
      relations: "Ownership turns Direction into someone's responsibility. Delivery depends on owners being able to decide without waiting. Visibility tells owners and the founder whether things are on track."
    }
  },
  {
    id: "p-delivery", type: "pillar", parent: "prog", order: 3, title: "Delivery", status: "Draft",
    f: {
      definition: "The way work moves from a request to a finished result: workflows, handoffs, queues and the practical execution of recurring work, projects and exceptions.",
      test: "Remove it and work only moves when someone who knows how chases it along, usually the founder. Reliability fails.",
      includes: `- Workflows from trigger to completion
- Handoffs between people, teams, suppliers and systems
- Queues: where work waits and why
- Recurring work, project work and exceptions, each handled differently
- Documentation and SOPs as tools that support delivery
- Supplier dependencies in the delivery chain`,
      signals: `- Jobs sit waiting for the founder's approval or answer.
- The same task is done three different ways.
- Work gets lost between sales and delivery.`,
      limits: "Better delivery does not always mean more process. Sometimes it means removing a step, an approval or a handoff.",
      relations: "Delivery keeps the promises set by Direction, depends on Ownership to move without waiting, and generates the information Visibility reports."
    }
  },
  {
    id: "p-visibility", type: "pillar", parent: "prog", order: 4, title: "Visibility", status: "Draft",
    f: {
      definition: "The minimum information the right people need to know whether delivery, money, capacity, performance and obligations are on track, without the founder checking personally. (Proposed replacement for the working label \"Control\".)",
      test: "Remove it and the founder is the only person who can tell whether the business is all right, so they keep checking and keep being needed. The outcome fails.",
      includes: `- Delivery status: what is late, at risk or blocked
- Money: cash position and timing, margin on work, what is owed and owing
- Capacity: who is overloaded, what is coming
- Performance against the promises in Direction
- Risks and obligations: deadlines, renewals, evidence that obligations are met`,
      signals: `- The founder only feels safe after looking at everything themselves.
- Problems are discovered when a customer complains.
- Nobody can say how much cash will be in the bank next month.`,
      limits: "Visibility is not a dashboard with fifty numbers. Too much reporting creates work and hides the signal. Start with the few things that would change a decision.",
      relations: "Visibility measures whether Delivery is keeping the promises in Direction, tells owners when to escalate, and gives Improvement the evidence it needs."
    }
  },
  {
    id: "p-improvement", type: "pillar", parent: "prog", order: 5, title: "Improvement", status: "Draft",
    f: {
      definition: "A regular habit of reviewing results, examining recurring failures and correcting their causes, one change at a time.",
      test: "Remove it and a business may deliver for a while, but recurring failures accumulate and pull the founder back in. Over time the outcome fails.",
      includes: `- Noticing recurring problems rather than single incidents
- Asking why before deciding what to change
- Prioritising one improvement at a time
- Giving each improvement an owner, a measure and a review date
- Stopping or reversing changes that do not help`,
      signals: `- The same fire is put out every month.
- Several improvement projects are running and none is finished.
- Changes are made and nobody checks whether they worked.`,
      limits: "Improvement is the pillar most easily confused with being busy. A new tool or a rewritten process is not an improvement until it measurably reduces the problem it was meant to fix.",
      relations: "Improvement uses evidence from Visibility to change Delivery, Ownership or, when a promise is wrong, Direction."
    }
  },

  // ---- Wider course map (ideas only) ----
  {
    id: "c-own", type: "course", order: 2, title: "Ownership, Delegation and Decision Rights", status: "Idea",
    links: { pillars: ["p-ownership"], prereqs: ["c-of"] },
    f: {
      purpose: "Help founders move decisions and outcomes to the right people, with clear authority, approval thresholds and escalation, without creating a new layer of bureaucracy.",
      subjects: "Roles and responsibilities; ownership of outcomes; decision rights; delegation; delegated authority and approval thresholds; escalation; decision records; governance basics (who can decide what); ownership of compliance obligations.",
      prereqText: "Operations Fundamentals.",
      time: "Estimate: 3 to 4 hours of study, plus an applied exercise of 2 to 3 hours.",
      notIncluded: "Board and shareholder governance (covered in Governance, Compliance and Legal Awareness). Employment law."
    }
  },
  {
    id: "c-del", type: "course", order: 3, title: "Workflows, Projects and Documentation", status: "Idea",
    links: { pillars: ["p-delivery"], prereqs: ["c-of"] },
    f: {
      purpose: "Help founders design workable processes, run projects without personally chasing them, and keep documentation that people actually use.",
      subjects: "Process mapping and redesign; handoffs and queues; project management fundamentals (scope, plan, owner, cadence); SOPs and documentation in depth; SOP hub design; evaluating documentation and workflow tools; supplier dependencies in delivery.",
      prereqText: "Operations Fundamentals. Ownership, Delegation and Decision Rights is recommended first.",
      time: "Estimate: 4 to 5 hours of study, plus an applied exercise of 2 to 3 hours.",
      notIncluded: "Choosing specific software for the learner. Formal project management certification content."
    }
  },
  {
    id: "c-fin", type: "course", order: 4, title: "Finance Operations and Capacity", status: "Idea",
    links: { pillars: ["p-visibility"], prereqs: ["c-of"] },
    f: {
      purpose: "Give founders operational visibility over money and capacity: cash timing, invoicing, payment terms, margin on work and the people time needed to deliver it.",
      subjects: "Finance operations (invoicing, collections, supplier payments, month-end basics); cash timing and simple forecasting; margin by client or job; capacity planning; working with a bookkeeper or accountant; what to own internally and what to outsource.",
      prereqText: "Operations Fundamentals.",
      time: "Estimate: 3 to 4 hours of study, plus an applied exercise of 2 hours.",
      notIncluded: "Tax advice, accounting standards, statutory accounts. These need a qualified accountant."
    }
  },
  {
    id: "c-rhythm", type: "course", order: 5, title: "Operating Rhythm: Reporting, Review and Improvement", status: "Idea",
    links: { pillars: ["p-visibility", "p-improvement"], prereqs: ["c-of", "c-own"] },
    f: {
      purpose: "Help founders set a light, regular rhythm of meetings, reports and reviews that surfaces problems early and turns recurring failures into improvements.",
      subjects: "Operating cadence (weekly, monthly, quarterly); reporting that changes decisions; performance measures; process review and root-cause analysis; prioritising and running improvements; stopping changes that do not work.",
      prereqText: "Operations Fundamentals and Ownership, Delegation and Decision Rights. At least one of Workflows, Projects and Documentation or Finance Operations and Capacity is recommended.",
      time: "Estimate: 3 to 4 hours of study, plus an applied exercise of 2 to 3 hours.",
      notIncluded: "Business intelligence or analytics tooling."
    }
  },
  {
    id: "c-com", type: "course", order: 6, title: "Commercial Operations: From Promise to Payment", status: "Idea",
    links: { pillars: ["p-direction", "p-delivery", "p-visibility"], prereqs: ["c-of", "c-fin"] },
    f: {
      purpose: "Connect what the business sells and promises to what it can deliver and when it gets paid, so commercial commitments do not create operational failures.",
      subjects: "Revenue operations (lead to contract to delivery to invoice); scope and delivery commitments; pricing and margin; payment terms and cash implications; supplier dependencies; customer promises; reading an agreement for its operational consequences; commercial awareness and when to involve a solicitor.",
      prereqText: "Operations Fundamentals and Finance Operations and Capacity.",
      time: "Estimate: 3 to 4 hours of study, plus an applied exercise of 2 to 3 hours.",
      notIncluded: "Drafting or interpreting contracts. Sales technique."
    }
  },
  {
    id: "c-gov", type: "course", order: 7, title: "Governance, Compliance and Legal Awareness", status: "Idea",
    links: { pillars: ["p-ownership", "p-visibility"], prereqs: ["c-of", "c-own"] },
    f: {
      purpose: "Help founders recognise their obligations, give each one an owner and a deadline, keep appropriate evidence, and know when qualified advice is needed.",
      subjects: "Recognising relevant obligations by jurisdiction, sector and structure; obligations registers and calendars; evidence and records; delegated authority and decision records at company level; board and shareholder basics; escalation to specialists; what information to gather before taking advice.",
      prereqText: "Operations Fundamentals and Ownership, Delegation and Decision Rights. Commercial Operations is recommended first.",
      time: "Estimate: 3 to 4 hours of study, plus an applied exercise of 2 hours.",
      notIncluded: "Legal advice. Any specific legal or regulatory content must be verified against primary sources and reviewed by a qualified professional before teaching. The course assesses recognition and escalation, not recall of legislation."
    }
  }
];
