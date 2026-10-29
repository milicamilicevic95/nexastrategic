// Operations Fundamentals, rebuilt (29 October 2026): operations from zero, taught as one ball with
// eight panels in four pairs. Replaces the earlier six-module course, which moves to course 2
// (see course2.mjs). Draft for review. Nothing here is approved.

const DECK = "https://claude.ai/artifact/VrmENz1TdCKnyEhafLqDeb";

export const courseFundamentals = {
  title: "Operations Fundamentals",
  links: { pillars: [], outcomes: [], prereqs: [] },
  f: {
    purpose: `Teach founders what operations is, from zero, and how its parts connect. By the end they know what each part of operations involves, what "good enough" looks like at their size, and who should own it.

The course answers one question: **what is operations, and who holds it in my business?** It is the first course in the programme. Course 2 (working title: Not your own bottleneck) builds on it.`,
    audience: "Founders and owner-managers of early-stage and growing businesses, from just the founder up to about 50 people, with no operations background. Intelligent, busy, expert in their own field. Nothing is assumed: every term is explained the first time it is used.",
    subjects: `The eight panels of operations, taught in four pairs:

| Pair | Panel | In one line |
|---|---|---|
| **The work** | Process | How the work gets done, step by step, and the tools it runs on |
| | People | Who does the work: hiring, contracts, onboarding, leave, leavers, roles |
| **The money** | Commercial | What you sell, at what price, on what terms |
| | Finance and revenue | Money in and money out, records, tax and cash |
| **The rules** | Legal | What the business has agreed to and stands on: structure, contracts, ownership of work |
| | Compliance | The rules you have to follow, and being able to show you do |
| **Control** | Governance | Who decides, who's accountable, and how you check |
| | Risk | What could go wrong, how likely and how bad, and what you'll do about it |`,
    prereqText: "None. This is the first course in the programme.",
    time: `Estimates only, to be checked in the pilot.

| Module | Estimate |
|---|---|
| OF101 What operations is | about 45 minutes |
| OF102 Process | about 60 minutes |
| OF103 People | about 60 minutes |
| OF104 Money: commercial, finance and revenue | about 60 minutes |
| OF105 Legal and compliance | about 60 minutes |
| OF106 Governance and risk | about 50 minutes |
| OF107 Holding the ball | about 50 minutes |
| **Total** | **about 6.5 to 7 hours**, including exercises, over four to seven weeks |`,
    structure: `**The approach: one ball, eight panels.** Operations is everything that makes the business work, behind what the customer sees. It is not split into legal ops, finance ops, rev ops and people ops. Splitting it divides responsibility, accountability and knowledge: each team sees only its own colour of the ball, and nobody sees the other side or the whole. The beach ball is the central image of the course.

**Four pairs.** Eight panels are a lot for someone starting from zero, so they are taught in four pairs: work, money, rules and control. OF102 to OF106 take one panel or pair each, in that order.

**Turn the ball.** Every module teaches its panels in depth, then closes with a short "turn the ball" segment showing how that panel touches the other seven. The tool founders learn in OF101 (eight questions, one per panel, asked before any decision that matters) is used in every module after it.

**Why seven modules.** OF101 gives the whole picture. OF102 to OF106 go panel by panel, so founders get the concrete detail they need. OF107 puts the ball back together: who owns each panel, who holds the whole, and the rhythm that keeps it working.

**Panels and pillars.** The panels describe what operations is made of (this course). The five pillars (Direction, Ownership, Delivery, Visibility, Improvement) describe the conditions a business needs so the founder stops being the bottleneck (course 2).

**UK first.** Where something differs in the US, the module says so and points to the right kind of adviser. Specific legal, tax and regulatory requirements are checked against official sources before recording. Anything not yet checked is marked *[verify]*.`,
    notIncluded: "Legal, tax, financial or regulatory advice. Software training. The bottleneck diagnostics, decision rights in depth, the capstone case and the POSI, which are in course 2. Specialist depth in any one panel.",
    completion: `Proposed, to be agreed.

1. **Lectures:** the seven recorded modules, each built as a principle, a method and tactics.
2. **Exercises:** one per module, on the learner's own business (or one they know well). Nothing confidential needs to be shared.
3. **Course-end piece (to design):** a complete panel map of their business, and one real decision turned across all eight panels, reviewed by a person. No certificate or accreditation.

The masterclasses are optional. Everything needed to complete the course is in the recordings, exercises and resources.`
  }
};

const TURN = `| Panel | Ask |
|---|---|
| Process | What changes in how the work gets done? |
| People | Who does it, and do they have the time and skills? |
| Commercial | Do the price and the terms work for us? |
| Finance and revenue | When does cash go out, and when does it come in? |
| Legal | What are we agreeing to, and who owns what? |
| Compliance | Which rules apply, and could we show we follow them? |
| Governance | Who is allowed to decide this, and who needs to know? |
| Risk | What could go wrong, and could we live with it? |`;

export const ofItems = [
  // ================= OF101 =================
  {
    id: "f1", type: "module", parent: "c-of", order: 1, title: "What operations is", status: "Draft",
    f: {
      code: "OF101",
      problem: "Most founders were never taught what operations is. Everything that keeps the business working arrived in pieces (a contract, an invoice, a hire, a renewal, a decision nobody else could make), so nobody named it, nobody owns it, and it ends up in the founder's head. When businesses do start to name it, they often cut it up into legal ops, finance ops, rev ops and people ops, and each team sees only its own piece. This module teaches operations as one whole, with eight parts that only work together.",
      principle: "Operations is one whole. Every decision touches every panel, so someone has to see the whole ball.",
      method: "Before a decision of any size, turn the ball: look at it from each of the eight panels. Make sure every panel has an owner, and someone holds the whole.",
      tactic: `1. Map the eight panels: who owns each, where it lives, and whether it's owned, only you, or unsure.
2. For any decision that matters, ask the eight "turn the ball" questions before you say yes.
3. Name who, apart from you, sees the whole ball. If nobody does, that's your first gap.

**The eight "turn the ball" questions**

${TURN}`,
      coaching: `- Have you thought about which panel you only ever see from one side?
- Consider who, apart from you, sees the whole ball.
- Have you thought about a recent decision you saw from only one panel?`,
      prereqText: "None.",
      outline: `1. **Lesson 1.1: What operations is** (about 7 minutes). A working definition. The eight panels in four pairs: the work, the money, the rules and control. Two things operations isn't.
2. **Lesson 1.2: One ball** (about 7 minutes). The beach ball. Why cutting operations into ops teams divides responsibility, accountability and knowledge. Who holds the ball in a founder-led business, and how that changes as it grows. Turning a decision: Priya's new client.
3. **Exercise 1: Your ball** (about 30 minutes). Map your eight panels and turn one of your own decisions.`,
      example: `*Fictional. Used in the deck.*

**Priya runs a seven-person design studio.** A large new client offers a year-long project. Seen from the commercial panel, it's the best deal she's had. Turned across the ball:

| Panel | What Priya sees when she turns the ball |
|---|---|
| Commercial | A strong price for a year of work |
| Finance and revenue | Paid on 90-day terms; she pays her team monthly, so cash runs short |
| People | The team is at capacity; she needs a freelancer |
| Process | The client requires its own approval step on every deliverable |
| Legal | The contract assigns all IP to the client, including her studio's templates |
| Compliance | The client will share its customers' personal data; studio files sit on personal drives |
| Governance | She agreed in principle on a call, on her own, with no one else aware |
| Risk | One client would be about half her revenue |

The lesson isn't "say no". It's "say yes knowingly", and negotiate what can be changed: payment terms, the IP clause, where the data is held. *(The legal and data points are illustrations, not advice on what any contract or law requires.)*`,
      misconceptions: `- **"Operations is admin."** Admin is one small part of one panel.
- **"Operations is for when we're bigger."** You've been doing it since your first price, invoice or contract.
- **"Getting specialists means it's handled."** Specialists look after panels. Someone still has to hold the whole ball.
- **"My accountant does all that."** Your accountant looks after part of one panel, doing what you've engaged them to do.`,
      time: "Estimate: about 45 minutes (two lectures of about 7 minutes, a 30-minute exercise).",
      production: `Deck: ${DECK} (23 slides, scripts in the speaker notes).

- The beach ball is the central image of the course. Every later module closes with a short "turn the ball" segment.
- Keep OF101 plain. "Operations is the heart of the business" belongs to the masterclass.
- No specific legal or regulatory requirements are stated, so nothing needs verifying before recording. Priya's contract and data points are framed as illustrations.
- The three-stage pattern is presented as typical, not as research. No statistics.
- **Pilot check.** A week after OF101, ask pilot founders to name the eight panels without looking, and whether they turned the ball on a real decision. If they can't name them, the load is too high; if they didn't use turn the ball, simplify the tool.`
    }
  },
  { id: "f1-lo1", type: "outcome", parent: "f1", order: 1, title: "OF101.1 Name the eight panels in their four pairs", status: "Draft",
    f: { statement: "Name the eight panels of operations in their four pairs, and say in a sentence what each covers.", evidence: "Exercise 1, part A (panel map)." } },
  { id: "f1-lo2", type: "outcome", parent: "f1", order: 2, title: "OF101.2 Trace one decision across all eight panels", status: "Draft",
    f: { statement: "Trace one real decision across all eight panels, and say who in their business sees the whole.", evidence: "Exercise 1, part B (turn the ball)." } },
  {
    id: "f1-l1", type: "lesson", parent: "f1", order: 1, title: "1.1 What operations is", status: "Draft",
    f: {
      summary: "A working definition, and the eight panels of operations in four pairs, in plain language.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "Nobody ever told you what operations is."]

If you've never worked in operations, nobody has ever told you what it is. So let's start there.

[ON SCREEN: definition]

Here's a working definition for this course. Operations is everything that makes the business work, behind what the customer sees.

The customer sees your product, your service, your marketing, your conversations with them. Operations is everything that has to happen behind that for the business to deliver, get paid, stay legal and keep going. If it stops, the customer feels it quickly. An invoice goes out wrong. A deadline is missed. A contract turns out to say something nobody expected.

And you have it already. Even if it's just you. The day you agreed your first price, sent your first invoice, or signed your first contract, you were doing operations.

[ON SCREEN: eight panels in four pairs]

Operations has eight parts. I call them panels, and you'll see why in the next lesson. Eight is a lot to hold, so they come in four pairs.

**The work:** process and people. How the work gets done, and by whom.
**The money:** commercial, and finance and revenue. What you charge, and what comes in and goes out.
**The rules:** legal and compliance. What you've agreed to, and what you have to follow.
**Control:** governance and risk. Who decides, and what could go wrong.

Work, money, rules, control. Learn those four, and the eight panels follow. Let's take each pair in turn.

[ON SCREEN: the work and the money]

**Process.** How the work gets done, step by step, and the tools it runs on.

**People.** Who does the work. Hiring, contracts, getting people started, leave, people leaving, and who does what.

**Commercial.** What you sell, at what price, and on what terms. Proposals, pricing, discounts, payment terms, customer contracts.

**Finance and revenue.** Money in and money out. Invoicing and getting paid. Paying suppliers and staff. Keeping records. Tax. And knowing how much cash you actually have, which isn't the same as profit.

[ON SCREEN: the rules and control]

**Legal.** What the business has agreed to, and what it stands on. How the company is set up. Contracts with customers, suppliers and staff. Who owns the work you create.

**Compliance.** The rules you have to follow, and being able to show that you do. Filings and registrations. Looking after personal data. Health and safety. Insurance. Licences, if your sector needs them. Which rules apply depends on your business and where you operate. We'll cover how to find out later in the course.

The easy way to tell those two apart: legal is what you chose to agree to. Compliance is what applies whether you chose it or not.

**Governance.** Who decides, who's accountable, and how you check. In a small company that might just be you. But someone still has to be clear about which decisions need whom, and who gets told.

**Risk.** What could go wrong, how likely it is, how bad it would be, and what you'll do about it.

[ON SCREEN: two things it isn't]

Two things operations is not.

It's not "just admin". Some of it is admin. But a missed deadline, an unclear contract or a bad payment term can cost real money and real trust.

And it's not something you sort out once you're bigger. The habits you set with three people are the ones you'll have with thirty, unless you change them on purpose.

[ON SCREEN: prompt]

Before the next lesson, take a minute. Think of one decision you made last month. A new client, a hire, a price, a supplier. Hold on to it. We'll turn it around in the next lesson.`,
      slides: "Start here; outcomes; definition; eight panels in four pairs; the work and the money; the rules and control; two things it isn't; prompt."
    }
  },
  {
    id: "f1-l2", type: "lesson", parent: "f1", order: 2, title: "1.2 One ball", status: "Draft",
    f: {
      summary: "Why operations only works as a whole, who holds it in a founder-led business, and how to look at a decision from every side.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: a beach ball]

Think of a beach ball. It's made of coloured panels, stitched together. Hold it still and you only see one or two colours. Whoever is standing on the red side would tell you the ball is red. Whoever is on the other side would say it's blue. Both are right about what they can see, and both are wrong about the ball.

That's operations. Eight panels. One ball.

[ON SCREEN: legal ops, fin ops, rev ops, people ops]

As businesses grow, there's a habit of cutting the ball up. Legal ops. Finance ops. Rev ops. People ops. Each panel gets its own team, its own tools and its own language.

Specialists matter, and a growing business needs them. But when the panels are cut apart, each team only sees its own colour. Nobody sees the other side, and nobody sees the whole.

[ON SCREEN: "Split the ball, and you split responsibility, accountability and knowledge."]

And here's the cost. When you split the ball, you split responsibility, accountability and knowledge with it. The sales team agrees terms the finance team can't fund. The contract says something delivery didn't know about. Everyone did their own job well, and the business still got it wrong.

[ON SCREEN: the principle]

So the principle for this module is: operations is one whole. Every decision touches every panel. Someone has to see the whole ball.

[ON SCREEN: who holds the ball]

In most founder-led businesses, who sees the whole ball? The founder. Not because anyone decided it. Because nobody decided otherwise. It all sits in one head.

[ON SCREEN: three stages]

Here's how that usually changes as a business grows. It's a typical pattern, not a rule.

At the start, it's just you. You hold the whole ball, with an accountant helping on the finance panel.

With the first hires, panels get helpers. A payroll provider. A bookkeeper. Often an office manager or an operations assistant.

As the team grows, panels get owners. Someone leads finance. Someone leads people. And this is exactly where the ball gets cut up, unless someone is given the job of holding the whole of it. That's what a head of operations or a COO is for. Some businesses use a fractional one, who works part-time across several businesses.

[ON SCREEN: "You can hand over the work. The business keeps the responsibility."]

One more thing that catches founders out. You can pay people outside the business to look after a panel: an accountant, a payroll provider, a lawyer. That's often the right call. But they do what you've asked them to do, with what you've told them. The business keeps the responsibility, so you still need to know what they're doing and what they're relying on you for.

[ON SCREEN: Priya]

Let's turn a decision. Priya runs a seven-person design studio. A big new client offers her a year-long project. From the commercial panel, it's a great deal.

[ON SCREEN: turn the ball]

Now turn the ball.

Finance: the client pays in 90 days, but Priya pays her team every month.
People: her team is full, so she needs a freelancer.
Process: the client wants their own approval step on every piece of work.
Legal: their contract says they own everything the studio creates, including Priya's templates.
Compliance: they'll send customer data, and her files sit on personal drives.
Governance: she agreed it on a call, on her own.
Risk: this one client would be half her revenue.

[ON SCREEN: "One panel saw a great deal. The ball shows a cash, capacity and risk problem."]

None of this means Priya should say no. It means she should say yes knowingly, and change what she can: the payment terms, the IP clause, where the data lives. That's what turning the ball is for.

[ON SCREEN: recap]

To recap. Operations is everything that makes the business work behind what the customer sees. It has eight panels in four pairs: the work (process and people), the money (commercial, and finance and revenue), the rules (legal and compliance) and control (governance and risk). It only works as one ball. And the question at every stage is: who sees the whole of it?

The exercise for this module asks you to map your eight panels and turn one of your own decisions. It takes about 30 minutes. You don't need to share it with anyone.`,
      slides: "Beach ball; cut into ops teams; the cost; principle; who holds it; three stages; responsibility; Priya's deal; turn the ball; what it shows; exercise; coaching questions; recap; next."
    }
  },
  {
    id: "f1-ex", type: "exercise", parent: "f1", order: 3, title: "Exercise 1: Your ball", status: "Draft",
    links: { outcomes: ["f1-lo1", "f1-lo2"] },
    f: {
      instructions: `Use the **Panel map** resource. Do it for your own business, or a business you know well if you'd rather not.

**Part A · Panel map (15 minutes)**
1. For each of the eight panels, note the main work you know happens. The template gives prompts for each one; cross out anything that doesn't apply and add what's missing.
2. Note who looks after it now, including people outside the business.
3. Note where it lives: an app, a folder, an inbox, or someone's head.
4. Mark it: **owned** (someone other than you could explain it), **only me**, or **unsure**.
5. Answer: who, apart from you, sees the whole ball?

**Part B · Turn the ball (15 minutes)**
Take the decision you thought of after Lesson 1.1. Ask the eight "turn the ball" questions. Note what you'd do differently, if anything.

You don't need to share this. You'll use it in every module that follows.`,
      output: "A one-page panel map, and one decision turned across all eight panels.",
      time: "About 30 minutes."
    }
  },
  {
    id: "r-panelmap", type: "resource", parent: "f1", order: 4, title: "Panel map", status: "Draft",
    links: { outcomes: ["f1-lo1", "f1-lo2"] },
    f: {
      purpose: "See every panel of your operations on one page: what's in it, who looks after it, and where the gaps are.",
      body: `### 1. What belongs in each panel

Use the prompts to work out what belongs in each panel. Cross out anything that doesn't apply.

| Pair | Panel | Prompts: what this panel includes |
|---|---|---|
| **The work** | Process | How a customer order or project goes from start to finish · the tools you run on · where files live · passwords and access · anything written down about how things are done |
| | People | Hiring paperwork · contracts · getting people started · holidays, sickness and leave · people leaving · who does what |
| **The money** | Commercial | Prices · quotes and proposals · discounts · payment terms · customer contracts · who can agree non-standard terms |
| | Finance and revenue | Sending invoices · chasing payment · paying suppliers · payroll · bookkeeping · setting tax aside · knowing your cash |
| **The rules** | Legal | How the company is set up · contracts with customers, suppliers and staff · who owns the work you create · contract renewals |
| | Compliance | Filings and registrations · personal data · health and safety · insurance · licences · being able to show you follow the rules |
| **Control** | Governance | Who signs contracts · who can approve spending · who decides on hires and prices · who gets told · how often you check how things are going |
| | Risk | What would hurt most if it went wrong · depending on one client, supplier or person · backups · what you'd do if it happened |

### 2. My panels

| Panel | The main work in my business | Who looks after it | Where it lives | Owned / Only me / Unsure |
|---|---|---|---|---|
| Process | | | | |
| People | | | | |
| Commercial | | | | |
| Finance and revenue | | | | |
| Legal | | | | |
| Compliance | | | | |
| Governance | | | | |
| Risk | | | | |

**Apart from me, who sees the whole ball?**

### 3. Turn the ball

**The decision:**

${TURN}

**What I noticed, and what I'd change:**

*This map is for recognition only. It is not a legal or compliance check. Which obligations apply depends on your business, your sector and where you operate; later modules cover how to find out, and when to ask a qualified adviser.*`,
      how: "Fill in part 2 once, quickly. Use part 3 before any decision that matters. Return to the map at the start of each module."
    }
  },

  // ================= OF102 to OF107: outlines =================
  {
    id: "f2", type: "module", parent: "c-of", order: 2, title: "Process", status: "Outline",
    links: { prereqs: ["f1"] },
    f: {
      code: "OF102",
      problem: "Founders know what their business delivers but rarely how it actually gets done, step by step, or where the information it runs on lives. The process sits in people's heads and inboxes, so it changes depending on who does it.",
      prereqText: "OF101.",
      outline: `To draft. Planned topics:

- How work actually gets done: following one customer order or project from start to finish
- Mapping a process simply, and spotting where it waits
- The minimum tool stack, and where files and information live
- Accounts, passwords and access: who can get into what
- Writing down how things are done: when it's worth it, and the lightest format that works
- Turn the ball: how process touches the other seven panels`,
      time: "Estimate: about 60 minutes.",
      production: "Closes with a turn-the-ball segment. Tool names, if used, are examples only and go in the Sources register."
    }
  },
  {
    id: "f3", type: "module", parent: "c-of", order: 3, title: "People", status: "Outline",
    links: { prereqs: ["f1"] },
    f: {
      code: "OF103",
      problem: "The first hire turns the people panel on, usually before the founder knows what it involves. Contracts, pay, onboarding, leave and leavers get handled one at a time, often from borrowed templates.",
      prereqText: "OF101.",
      outline: `To draft. Planned topics:

- What happens when you take someone on: the paperwork and checks *[verify UK requirements]*
- Employees, contractors and freelancers: why the difference matters *[verify]*
- Contracts and paying people
- Getting people started well
- Holidays, sickness and other leave *[verify]*
- When someone leaves
- Who does what: roles before org charts
- Turn the ball`,
      time: "Estimate: about 60 minutes.",
      production: "Specific employment requirements must be checked against official sources before recording. US differences flagged, not taught."
    }
  },
  {
    id: "f4", type: "module", parent: "c-of", order: 4, title: "Money: commercial, finance and revenue", status: "Outline",
    links: { prereqs: ["f1"] },
    f: {
      code: "OF104",
      problem: "Founders set prices and agree terms on one side of the ball and deal with invoices and cash on the other, without seeing that they are the same money. Profitable businesses run short of cash this way.",
      prereqText: "OF101.",
      outline: `To draft. Planned topics:

- Pricing, quotes and payment terms, and who can agree them
- Invoicing and getting paid
- Paying suppliers and staff
- Bookkeeping: what it is and why it matters
- Tax: what to set aside, and what your accountant does and doesn't do *[verify]*
- Profit versus cash: why they are different
- Turn the ball`,
      time: "Estimate: about 60 minutes.",
      production: "Tax and payroll specifics must be checked against official sources before recording. Not financial or tax advice."
    }
  },
  {
    id: "f5", type: "module", parent: "c-of", order: 5, title: "Legal and compliance", status: "Outline",
    links: { prereqs: ["f1"] },
    f: {
      code: "OF105",
      problem: "Founders sign what they're sent and find out what applies to them when something goes wrong. They can't tell what they chose to agree to from what applies whether they chose it or not.",
      prereqText: "OF101.",
      outline: `To draft. Planned topics:

- How the company is set up, and its records
- Contracts: reading one for what it commits you to, and who owns the work
- Filings and registrations *[verify]*
- Personal data basics *[verify]*
- Insurance and licences *[verify]*
- An obligations calendar: every deadline with an owner
- When to get a qualified adviser, and what to bring them
- Turn the ball`,
      time: "Estimate: about 60 minutes.",
      production: "Recognition level only. Every specific requirement is checked against official sources and logged in the Sources register before recording. Not legal advice."
    }
  },
  {
    id: "f6", type: "module", parent: "c-of", order: 6, title: "Governance and risk", status: "Outline",
    links: { prereqs: ["f1"] },
    f: {
      code: "OF106",
      problem: "In a small business governance sounds like a board's job and risk sounds like a big company's worry, so neither gets done. Decisions get made by whoever is in the room, and risks are discovered when they happen.",
      prereqText: "OF101.",
      outline: `To draft. Planned topics:

- Governance in a small company: who decides what, who's accountable, who gets told
- Simple decision rights and spending limits
- Light reporting: knowing how things are going without checking everything
- A basic risk register: what could go wrong, how likely, how bad, what you'll do
- Depending on one client, supplier or person
- Turn the ball`,
      time: "Estimate: about 50 minutes.",
      production: "Decision rights in depth sit in course 2. Keep this foundational."
    }
  },
  {
    id: "f7", type: "module", parent: "c-of", order: 7, title: "Holding the ball", status: "Outline",
    links: { prereqs: ["f1", "f2", "f3", "f4", "f5", "f6"] },
    f: {
      code: "OF107",
      problem: "Once founders can see every panel, the question is who holds them, and who holds the whole. Without an answer, the ball either stays in the founder's head or gets cut up as the team grows.",
      prereqText: "OF101 to OF106.",
      outline: `To draft. Planned topics:

- Putting the ball back together: your panel map, revisited
- An owner for every panel, and someone who holds the whole
- A weekly and monthly operating rhythm
- What to hand over first
- When to hire, outsource, or bring in a head of operations or COO
- Bridge to course 2: not being your own bottleneck`,
      time: "Estimate: about 50 minutes.",
      production: "Natural home for the course-end piece (full panel map plus one decision turned). Bridges into course 2."
    }
  }
];
