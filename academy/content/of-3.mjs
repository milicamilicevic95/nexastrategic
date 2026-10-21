// Operations Fundamentals: Module 5 and Module 6. Draft for review.

export const of3 = [
  // ================= MODULE 5 =================
  {
    id: "m5", type: "module", parent: "c-of", order: 5, title: "Documentation and SOPs that people use", status: "Draft",
    links: { pillars: ["p-delivery", "p-ownership"], prereqs: ["m2", "m4"] },
    f: {
      problem: "Founders have been told they need SOPs and an SOP hub, and are being sold tools to make them. They are unsure what an SOP is, where it should live, what to document first, or how a screen-capture guide differs from other documentation. Many have written SOPs that nobody reads, or that describe a process nobody follows.",
      prereqText: "Modules 2 and 4. Documentation depends on knowing how work moves (Module 2) and who owns it (Module 4).",
      outline: `1. **Lesson 5.1: What an SOP is, and what it cannot fix** (about 6 minutes). Definitions: SOP, checklist, guide, policy, template. The difference between capturing current steps and designing a workable process. Problems documentation cannot solve.
2. **Lesson 5.2: When to document, and what kind** (about 6 minutes). Criteria for deciding. Matching the format to the job. Ownership, access and review dates. Keeping documents current.
3. **Lesson 5.3: SOP hubs and documentation tools: judging fit** (about 7 minutes). What an SOP hub is for. Evaluating a hub. Judging documentation tools, including screen-capture guide tools, against the job they need to do.
4. **Exercise 5:** Decide, design and evaluate (about 45 minutes).`,
      example: `**A physiotherapy clinic: four practitioners, two reception staff, owner-practitioner Tom.**

New patients regularly arrive without forms completed, and appointments overrun. Tom asks reception to "write an SOP for new patient bookings".

Reception writes down what they currently do. It is accurate, and it does not help, because:

- **It captures the steps, but the process is the problem.** Forms are sent only when a receptionist remembers. Nothing triggers the send. Writing down "remember to send forms" documents the weakness.
- **Part of the problem is not a process at all.** The booking system allows a new-patient slot to be booked at the same length as a follow-up. That is a configuration decision, and documentation cannot fix it.
- **Some content is clinical or regulated.** How patient information is collected and stored may be subject to data protection and professional requirements. That part needs checking against the relevant guidance or with an adviser, and needs an owner who is accountable for it. It should not be decided by whoever writes the SOP.

What helped: Tom and reception redesigned the flow first (the booking system sends forms automatically at booking, with a reminder 48 hours before; new-patient slots set longer). **Then** they wrote a one-page checklist for the parts that still needed people, named the reception lead as owner, and set a review date three months out.

The tool question came last. A short written checklist in the shared drive was enough. A screen-capture guide was useful for one task only: the booking system's rarely used "transfer patient" screen.`,
      misconceptions: `- **"We need SOPs for everything."** Document what is frequent, risky, error-prone or dependent on one person. Much work needs no document at all.
- **"Writing down what we do is the same as fixing it."** Capturing current steps preserves current problems. Design first, then document.
- **"The tool will make us organised."** A tool stores and presents documents. It does not decide what should be documented, who owns it, or whether people follow it.
- **"An SOP hub is a place."** It is a place plus rules: ownership, access, naming, review dates and a way to find things.
- **"Once written, it's done."** An SOP without an owner and a review date goes out of date, and an out-of-date SOP is worse than none, because people trust it.
- **"A screen recording is an SOP."** A click-by-click guide explains how to use a screen. It usually does not say why, when, who decides, or what good looks like.`,
      time: "Estimate: about 65 minutes (19 minutes of recordings, 45 minutes of exercise)."
    }
  },
  { id: "m5-lo1", type: "outcome", parent: "m5", order: 1, title: "M5.1 Decide whether and how to document", status: "Draft",
    f: { statement: "Decide whether a task needs documentation and what kind (none, checklist, SOP, guide, policy or template), using stated criteria.", evidence: "Exercise 5, part A. Capstone rubric: feasibility; diagnosis (where SOPs feature)." } },
  { id: "m5-lo2", type: "outcome", parent: "m5", order: 2, title: "M5.2 Distinguish capturing steps from designing a process", status: "Draft",
    f: { statement: "Distinguish capturing current steps from designing a workable process, and explain what an SOP cannot fix in a given situation.", evidence: "Exercise 5, part B. Capstone rubric: diagnosis (the case includes SOPs that exist but do not prevent failure)." } },
  { id: "m5-lo3", type: "outcome", parent: "m5", order: 3, title: "M5.3 Evaluate an SOP hub or documentation tool", status: "Draft",
    f: { statement: "Evaluate an SOP hub or documentation tool against the job it needs to do, including ownership, access, review and the effort of keeping it current.", evidence: "Exercise 5, part C; SOP hub and tool evaluation scorecard." } },
  {
    id: "m5-l1", type: "lesson", parent: "m5", order: 1, title: "5.1 What an SOP is, and what it cannot fix", status: "Draft",
    f: {
      summary: "Definitions of SOP, checklist, guide, policy and template; capturing versus designing; problems documentation cannot solve.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "What an SOP is, and what it cannot fix"]

"We need SOPs." I hear it in almost every founder conversation. It's usually right, partly. But before you write one, it helps to know what an SOP is, what kinds of documentation there are, and what no document will ever fix.

[ON SCREEN: SOP definition]

**SOP** stands for standard operating procedure. In plain terms: a written description of how a recurring piece of work should be done, by whom, and to what standard, so that it's done consistently without someone having to ask.

A good SOP usually says:

- what it's for, and when it applies;
- who owns it, and who does the work;
- what's needed to start;
- the steps, including any decisions and who makes them;
- what "done" looks like;
- what to do if something goes wrong, and who to tell.

[ON SCREEN: five kinds of documentation]

But "SOP" gets used for several different things. It's useful to separate them.

A **checklist** is a short list of things to do or confirm. Best for work people already know how to do, where the risk is forgetting a step.

An **SOP** sets out a process, with owners, decisions and standards. Best for recurring work with handoffs or judgement.

A **guide** or how-to shows how to use a tool or carry out a technical task, often step by step with screenshots. Best for something done rarely, or by new people.

A **policy** states a rule or principle and why it exists. "We don't accept payment in cash." "Refunds over two hundred pounds go to the operations lead." Best for decisions and boundaries, not steps.

A **template** is a pre-built starting point. A proposal template. An onboarding email. Best for work where the output has a standard shape.

Many problems that founders try to solve with a long SOP are better solved with a checklist, a policy line or a template.

[ON SCREEN: Capturing vs designing]

Now the most important distinction in this module. **Capturing steps** and **designing a process** are different things.

Capturing means writing down what people currently do. It's useful. It preserves knowledge that's in one person's head.

But if the current way of working has problems, capturing it preserves those problems. If the step is "remember to send the forms", writing that down doesn't make anyone remember.

Designing means asking, before you write: is this the right way to do it? Where does it wait? Who decides? What triggers each step? Can we remove a step, an approval or a handoff? That's what you practised in Modules 2 and 4.

The order matters. Map it. Fix what's obviously broken. Then document the version that works.

[ON SCREEN: what an SOP cannot fix]

And there are problems no document fixes.

- **Unclear ownership.** If nobody owns the outcome, a document won't make anyone responsible.
- **Missing authority.** If the person following the SOP has to wait for approval anyway, the SOP just describes the wait.
- **Not enough capacity.** If there aren't enough hours or people, a better description of the work doesn't create time.
- **A broken tool or set-up.** If the booking system allows the wrong appointment length, that's a configuration problem.
- **A promise that can't be kept.** If sales has promised something delivery can't do, documenting delivery won't help.
- **People choosing not to follow it.** Sometimes for good reasons, because it's wrong or out of date. Ask why before you insist.

[ON SCREEN: clinic example summary]

A physiotherapy clinic asked reception to write an SOP for new-patient bookings, because patients kept arriving without forms. The SOP was accurate, and useless, because the real issue was that nothing triggered the forms to be sent, and the booking system allowed new-patient appointments to be too short. Once they fixed the trigger and the system, a one-page checklist was enough.

In the next lesson: how to decide whether something needs documenting at all, and how to keep documents alive once they exist.`,
      slides: "SOP definition; six SOP contents; five kinds table; capture vs design; cannot-fix list; clinic summary."
    }
  },
  {
    id: "m5-l2", type: "lesson", parent: "m5", order: 2, title: "5.2 When to document, and what kind", status: "Draft",
    f: {
      summary: "Criteria for deciding; matching format to the job; ownership, access and review dates; keeping documents current.",
      minutes: "About 6 minutes",
      script: `[ON SCREEN: "When to document, and what kind"]

Not everything needs documenting. In fact, documenting too much is one of the most common ways small businesses waste time on operations. So here's how to decide.

[ON SCREEN: five criteria]

A task is worth documenting when one or more of these is true:

- **It's frequent.** Done weekly or more, so small improvements add up.
- **It's risky.** Getting it wrong has legal, safety, financial or reputational consequences.
- **It's error-prone.** It keeps going wrong in the same way.
- **It depends on one person.** If they were off for two weeks, it wouldn't happen, or would happen badly.
- **It's done rarely but must be done right.** Year-end tasks, annual renewals, the backup restore you've never tested.

If none of those is true, it may not need a document. A quick conversation, or nothing at all, may be fine.

[ON SCREEN: match format to job]

Then choose the lightest format that does the job.

If people know how to do it but forget steps: a **checklist**.
If it involves handoffs, decisions or standards: an **SOP**.
If it's technical, rare or done by new people: a **guide**, possibly with screenshots.
If it's really a rule about who can decide what: a **policy line**, often in your decision rights table.
If the output always has the same shape: a **template**.

[ON SCREEN: three fields every document needs]

Every document, whatever the format, needs three things beyond its content.

**An owner.** One named person or role responsible for keeping it accurate. Not "the team". The owner doesn't have to write it, but they have to make sure it stays right.

**Access.** Who needs to read it, who can edit it, and can they find it when they need it? A perfect SOP in a folder nobody can find is the same as no SOP. And some documents contain information not everyone should see, such as personal data, pricing or security details. Decide who should have access deliberately.

**A review date.** When will someone check it's still right? For fast-changing work, maybe every three months. For stable work, once a year. Put the date on the document itself.

[ON SCREEN: keeping documents current]

How do documents stay current? Not by heroic annual reviews. By habits:

- When the process changes, the document changes in the same week. Make that part of the change, not an afterthought.
- When someone follows a document and finds it wrong, they tell the owner, and that's welcomed.
- When something goes wrong, check whether the document was wrong, missing or ignored. Each needs a different fix.
- Delete or archive what's no longer used. Out-of-date documents are dangerous because people trust them.

[ON SCREEN: who writes it?]

Who should write it? Usually the person who does the work, with the owner checking it against the standard. Founders often end up writing SOPs at weekends, which is a sign the work hasn't actually been handed over.

And a practical tip: write the first version quickly, have someone else follow it while you watch, and fix whatever they stumble on. That test teaches you more than any amount of editing.

In the next lesson, we'll look at where documentation should live, what an SOP hub is, and how to judge tools for it.`,
      slides: "Five criteria; format matching table; owner/access/review; currency habits; write-test-fix."
    }
  },
  {
    id: "m5-l3", type: "lesson", parent: "m5", order: 3, title: "5.3 SOP hubs and documentation tools: judging fit", status: "Draft",
    f: {
      summary: "What an SOP hub is for, how to evaluate one, and how to judge documentation tools by the job they need to do.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "SOP hubs and documentation tools"]

Two questions come up in almost every cohort: where should our SOPs live, and should we use one of the tools that records your screen and turns it into a guide? This lesson won't recommend a product. Products change, and what suits a ten-person design studio won't suit a care provider. Instead, it'll give you a way to judge.

[ON SCREEN: "An SOP hub is a place plus rules"]

An **SOP hub** is simply the agreed place where your operational documents live. It could be a folder in your shared drive, a page in a wiki or workspace tool, a section of your project management system, or a dedicated documentation product.

The place matters less than the rules around it. A useful hub has:

- **One agreed location**, so people don't have to ask where things are.
- **A simple structure**, usually by area of work or by workflow, that matches how people look for things.
- **Consistent names**, so a search finds the right thing.
- **An owner and a review date on every document.**
- **Access set deliberately**: who can read, who can edit.
- **A way to know what's current**, and old versions archived rather than left lying around.

Without the rules, a hub becomes a graveyard of half-finished documents, and people go back to asking the founder.

[ON SCREEN: evaluating a hub — five questions]

To evaluate your hub, or one you're considering, ask:

- **Can people find what they need in under a minute,** while they're doing the work?
- **Is it where people already work?** A hub in a tool nobody opens won't be used.
- **Does every document show an owner and a review date?**
- **Is access right?** Can new starters and contractors see what they need, and not what they shouldn't?
- **What does it cost to keep current?** In time as well as money.

[ON SCREEN: judge tools by the job]

Now tools. There are many kinds of documentation tool. Rather than compare brands, start with the **job** the documentation needs to do.

[ON SCREEN: job → suitable formats]

If the job is **"remind experienced people of the steps"**, a checklist in whatever tool you already use is often enough.

If the job is **"show a new person how to use a particular screen or system"**, a step-by-step guide with screenshots helps. This is where screen-capture guide tools come in. Tools of this kind, Scribe being a commonly mentioned example, record your clicks and screens as you do a task in a browser or application, and turn them into a step-by-step guide with screenshots that you can then edit. That can save a lot of time for the right job.

If the job is **"agree who does what, who decides, and what good looks like"**, you need a written SOP. A screen capture won't say why a step exists, who owns it, what the standard is, or what to do when something goes wrong. It describes clicks, not judgement.

If the job is **"set a rule"**, that's a policy line, and the tool barely matters.

[ON SCREEN: a caution on screen-capture guides]

Two cautions about screen-capture guides specifically. First, they go out of date whenever the software's screens change, which can be often, so they need an owner and a review date like anything else. Second, they capture whatever's on screen. Check that guides don't expose personal data, client information or passwords before sharing them.

Features and pricing for any specific product change frequently. Check the vendor's current information before you choose, and don't rely on a course recording for it.

[ON SCREEN: tool evaluation questions]

When you evaluate a documentation tool, ask:

- What job do we need it to do, and does it do that job well?
- Will people use it where they already work, or is it one more place to look?
- Can we set owners, review dates and access?
- How easy is it to keep current when things change?
- Can we get our content out if we stop using it?
- What does it cost, in money and in the time to maintain it?
- Does it handle any sensitive information appropriately for our circumstances?

[ON SCREEN: "Decide what and who before which tool"]

The principle for this whole module: decide **what** needs documenting and **who** owns it before you decide **which tool**. A tool can make good documentation easier to keep. It can't decide what good looks like.

The exercise asks you to apply all three lessons to one piece of your own work.`,
      slides: "Hub = place + rules; six rules; five evaluation questions; job→format table; screen-capture cautions; tool questions; principle."
    }
  },
  {
    id: "m5-ex", type: "exercise", parent: "m5", order: 4, title: "Exercise 5: Decide, design and evaluate", status: "Draft",
    links: { outcomes: ["m5-lo1", "m5-lo2", "m5-lo3"] },
    f: {
      instructions: `**Part A: Decide.** List five recurring tasks in your business. Use the **Should this be documented?** guide to decide, for each, whether it needs documentation and in what format. Give a one-line reason.

**Part B: Design before documenting.** Take one task that needs an SOP. Using your workflow map from Exercise 2, or a quick new one, note at least two problems a document would preserve rather than fix, and what you would change first. Then draft the SOP using the template in the guide. Name an owner, the access and a review date.

**Part C: Evaluate.** Use the **SOP hub and tool evaluation** scorecard to assess where your documentation lives now (or a tool you are considering) against the job it needs to do. Write two sentences: keep, change or stop?

If you have no team yet, do Part B for a task you will hand to your first hire or contractor.`,
      output: "A five-row documentation decision table, one SOP draft with owner, access and review date, and a completed scorecard with a keep, change or stop conclusion.",
      time: "About 45 minutes."
    }
  },
  {
    id: "r-docguide", type: "resource", parent: "m5", order: 5, title: "Should this be documented? Decision guide and SOP template", status: "Draft",
    links: { outcomes: ["m5-lo1", "m5-lo2"] },
    f: {
      purpose: "Decide whether a task needs documenting and in what format, then draft it in a form people can use.",
      body: `### Step 1: Does it need documenting?

Document it if **one or more** is true:

- [ ] Frequent (weekly or more)
- [ ] Risky (legal, safety, financial or reputational consequences)
- [ ] Error-prone (keeps going wrong the same way)
- [ ] Depends on one person
- [ ] Rare but must be done right

If none is ticked, it probably does not need a document.

### Step 2: Is the process worth documenting as it is?

- Is there a clear trigger for each step?
- Does it wait for an approval that could be a threshold instead?
- Is anything in it there only because of a one-off past problem?
- Could a step, approval or handoff be removed?
- Is part of the problem a tool, configuration, capacity or ownership issue that a document cannot fix?

Fix what you can **before** writing.

### Step 3: Choose the lightest format

| If the job is… | Use |
|---|---|
| Remind people who know how | Checklist |
| Coordinate handoffs, decisions and standards | SOP |
| Show how to use a screen or do a rare technical task | Guide (screenshots or screen capture) |
| Set a rule or boundary | Policy line |
| Produce an output with a standard shape | Template |

### Step 4: SOP template

- **Title:**
- **Purpose and when it applies:**
- **Owner (keeps it accurate):**  **Who does the work:**
- **Access (who reads, who edits):**
- **Review date:**  **Last reviewed by:**
- **Trigger and what is needed to start:**
- **Steps** (mark decisions and who makes them):
  1.
  2.
  3.
- **What "done" looks like:**
- **If something goes wrong:** what to do and who to tell
- **Related documents:**

### Step 5: Test it

Ask someone who does not usually do the task to follow it while you watch. Fix whatever they stumble on.`,
      how: "Use Steps 1 to 3 to sort tasks quickly. Only use the full template where Step 3 says SOP."
    }
  },
  {
    id: "r-hubtool", type: "resource", parent: "m5", order: 6, title: "SOP hub and tool evaluation", status: "Draft",
    links: { outcomes: ["m5-lo3"] },
    f: {
      purpose: "Decide whether to keep, change or stop using a documentation location or tool, based on the job it needs to do rather than its features.",
      body: `**Location or tool being evaluated:** __________  **Date:** ______

**The main job our documentation needs to do (tick the most important):**
- [ ] Remind experienced people of steps
- [ ] Coordinate handoffs, owners, decisions and standards
- [ ] Teach new people how to use a system or screen
- [ ] Set rules and boundaries
- [ ] Provide standard templates

### Hub rules

| Question | Yes / Partly / No | Notes |
|---|---|---|
| One agreed location everyone knows | | |
| Structure matches how people look for things | | |
| Consistent naming; search finds the right thing | | |
| Every document shows an owner and a review date | | |
| Access is set deliberately (read / edit; staff / contractors) | | |
| Old versions archived; current version obvious | | |
| People can find what they need in under a minute while working | | |

### Tool fit

| Question | Yes / Partly / No | Notes |
|---|---|---|
| Does the main job above well | | |
| Lives where people already work | | |
| Supports owners, review dates and access control | | |
| Easy to keep current when processes or screens change | | |
| Content can be exported if we stop using it | | |
| Handles any sensitive information appropriately for our circumstances | | |
| Cost (money and maintenance time) is proportionate | | |

**Conclusion (keep / change / stop) and why, in two sentences:**

*Vendor features and pricing change. Check current information from the vendor before choosing a tool.*`,
      how: "Complete the hub rules first. A good tool will not rescue a hub with no rules."
    }
  },

  // ================= MODULE 6 =================
  {
    id: "m6", type: "module", parent: "c-of", order: 6, title: "Seeing what is happening, and choosing a first improvement", status: "Draft",
    links: { pillars: ["p-visibility", "p-improvement"], prereqs: ["m3", "m4", "m5"] },
    f: {
      problem: "Founders stay involved because they are the only ones who can tell whether things are on track, and when they decide to improve operations they start several changes at once, choose by gut feel or software demo, and never check whether anything worked.",
      prereqText: "Modules 3, 4 and 5.",
      outline: `1. **Lesson 6.1: Seeing what is happening without checking everything** (about 7 minutes). The minimum visibility set: delivery, money, capacity, obligations. Who needs to see what, how often. Leading and lagging signals. Avoiding dashboards nobody uses.
2. **Lesson 6.2: Choosing a sensible first improvement** (about 7 minutes). Turning diagnosis into candidates. Prioritising by impact, frequency, risk and effort. One owner, one measure, one review date, and a stop rule. What success can and cannot prove.
3. **Exercise 6:** Minimum visibility set and first improvement brief (about 50 minutes).`,
      example: `**A recruitment firm: nine staff, two founders.** (The same business as the Module 3 practice case.)

After diagnosis, the founders have three candidate improvements:

| Candidate | Impact | Frequency | Risk if left | Effort | Notes |
|---|---|---|---|---|---|
| A. New CRM | Unclear | – | Low | High (months) | Solves a problem nobody has yet evidenced |
| B. Invoice placements within 2 days of start, owned by the finance assistant | High (cash arrives 2 to 3 weeks sooner) | Every placement | Medium (cash pressure) | Low | Needs a decision rights change: Sam stops invoicing personally |
| C. Pre-employment paperwork checks owned by a trained consultant, with Sam spot-checking 1 in 5 | High (start dates stop slipping) | Every placement | **High if done badly** | Medium | Involves legal obligations; the requirements and who may check need confirming with a qualified adviser first |

They choose **B first**. It is high-impact, frequent and low-effort, and its risk is low. C matters more in the long run but needs specialist input before anything changes. That work starts in parallel as **preparation**, not as a change. A is parked until there is evidence the current system is the constraint.

**First improvement brief for B:**
- **Owner:** finance assistant. **Sponsor:** Sam.
- **Change:** invoice within two working days of a confirmed start, using the existing template; Sam no longer issues invoices.
- **Measure:** median days from start date to invoice sent. Baseline: 16. Target: 2.
- **Also watch:** invoice errors (should not rise).
- **Review:** after 6 weeks.
- **Stop rule:** if errors rise above 1 in 10 or clients complain, pause and review.

What success will show: invoicing is faster. What it will not show: that the CRM was unnecessary, or that the firm is "fixed".`,
      misconceptions: `- **"We need a dashboard."** You need the few signals that would change a decision, seen by the people who can act. That might be one shared sheet.
- **"More data is safer."** Too much reporting hides the signal and creates work.
- **"Let's fix everything at once."** Several simultaneous changes make it impossible to tell which helped, and overload the people doing the work.
- **"Start with the biggest problem."** Sometimes. Often a smaller, faster change builds confidence and capacity for the big one. The point is to choose deliberately.
- **"It worked, so we're done."** Check whether it held after the attention moved on, and whether it caused a problem somewhere else.`,
      time: "Estimate: about 65 minutes (14 minutes of recordings, 50 minutes of exercise)."
    }
  },
  { id: "m6-lo1", type: "outcome", parent: "m6", order: 1, title: "M6.1 Identify a minimum visibility set", status: "Draft",
    f: { statement: "Identify the minimum information needed to see whether delivery, money, capacity and obligations are on track, and who should see it and how often.", evidence: "Exercise 6, part A. Capstone rubric: identification of missing information; measurement and review." } },
  { id: "m6-lo2", type: "outcome", parent: "m6", order: 2, title: "M6.2 Prioritise a first improvement", status: "Draft",
    f: { statement: "Prioritise a first improvement from several candidates using impact, frequency, risk and effort, and justify the choice.", evidence: "Exercise 6, part B. Capstone rubric: prioritisation; feasibility." } },
  { id: "m6-lo3", type: "outcome", parent: "m6", order: 3, title: "M6.3 Define owner, measure, review and stop rule", status: "Draft",
    f: { statement: "Define an owner, a baseline and measure, a review date and a stop rule for an improvement, and state what success would and would not show.", evidence: "Exercise 6, first improvement brief. Capstone rubric: measurement and review; ownership." } },
  {
    id: "m6-l1", type: "lesson", parent: "m6", order: 1, title: "6.1 Seeing what is happening without checking everything", status: "Draft",
    f: {
      summary: "The minimum visibility set across delivery, money, capacity and obligations; who sees what; leading and lagging signals.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "Seeing what's happening without checking everything"]

In Module 3, one of the five bottlenecks was visibility. The founder is the only person who can tell whether things are all right, so they keep checking, and everyone waits for them to notice. This lesson is about fixing that with as little reporting as possible.

[ON SCREEN: "What would change a decision?"]

Start with one question: **what would I, or the owner, do differently if we knew this?** If the answer is "nothing", you don't need to track it. That one question cuts most dashboards in half.

[ON SCREEN: four areas]

Then think in four areas. For most small businesses, a handful of signals across these is enough.

**Delivery.** Is work on track against what we promised? Useful signals: what's late, what's at risk, what's blocked and waiting for whom. For recurring work, perhaps the time from request to completion.

**Money.** Will we have the cash we need, and are we making money on the work? Useful signals: cash in the bank and expected over the next few weeks; what customers owe us and how overdue; what we owe; margin on recent jobs or clients, even roughly.

**Capacity.** Do we have the people and time for what's coming? Useful signals: who's overloaded; work coming in versus work being finished; known absences.

**Obligations.** Are we meeting what we must? Useful signals: upcoming deadlines and renewals, with an owner for each; anything overdue; where evidence is kept.

[ON SCREEN: Leading and lagging]

Within those, it helps to know the difference between **lagging** and **leading** signals.

A lagging signal tells you what already happened. Customer complaints. Last month's profit. A missed deadline. Useful, but late.

A leading signal warns you before it happens. Work waiting more than two days for approval. Invoices not sent within a week of delivery. A key person with no cover next month. These are the ones that let owners act early, before the founder has to step in.

[ON SCREEN: Who sees what, how often]

Then decide **who sees what, and how often**. The owner of an outcome should see the signals for it, frequently enough to act. The founder might see a short summary weekly. Some things, like cash, may need a weekly look. Others, like obligations, might be a monthly check of what's coming up.

[ON SCREEN: an example]

Here's what a minimum visibility set might look like for a nine-person recruitment firm:

- Placements starting this week, and any with paperwork incomplete. Owner: consultant lead. Daily.
- Days from start date to invoice sent. Owner: finance assistant. Weekly.
- Cash now, and expected over four weeks. Owner: founder. Weekly.
- Overdue invoices over thirty days. Owner: finance assistant. Weekly.
- Obligation deadlines in the next sixty days. Owner: operations lead. Monthly.

Five lines. One shared sheet. The founders stop asking for updates because the updates are already visible.

[ON SCREEN: cautions]

Three cautions.

First, a number is only useful if someone owns it and will act on it.

Second, people will improve the number, sometimes in ways you didn't intend. If you measure only speed, quality may slip. Pair a speed measure with a quality check.

Third, don't build a big reporting system before you know which signals matter. Start with a shared sheet, use it for a month, and keep only what people actually looked at.

[ON SCREEN: link to improvement]

Visibility also does something else: it gives you a baseline. And you need a baseline to know whether an improvement worked. That's the next lesson.`,
      slides: "Decision question; four areas with signals; leading vs lagging; who/how often; recruitment example; cautions."
    }
  },
  {
    id: "m6-l2", type: "lesson", parent: "m6", order: 2, title: "6.2 Choosing a sensible first improvement", status: "Draft",
    f: {
      summary: "Turning diagnosis into candidates; prioritising by impact, frequency, risk and effort; owner, measure, review and stop rule; what success can and cannot prove.",
      minutes: "About 7 minutes",
      script: `[ON SCREEN: "Choosing a sensible first improvement"]

By now you've mapped a workflow, diagnosed your bottlenecks, looked at ownership and decisions, considered documentation and thought about visibility. You probably have a long list of things you'd like to change. This lesson is about choosing one, and being able to tell whether it worked.

[ON SCREEN: "One at a time"]

Why one? Three reasons.

If you change several things at once, you can't tell which helped. The people doing the work have to absorb every change on top of their day jobs. And founders who start five improvements tend to finish none, which pulls them back in as the project manager of everything.

One at a time doesn't mean slowly. A good first improvement might take a few weeks.

[ON SCREEN: candidates from diagnosis]

Start by turning your diagnosis into **candidates**. Each candidate should name the problem it addresses and the bottleneck type. "Introduce a pricing guide for standard quotes, to reduce the decision bottleneck on quotes." Not just "pricing guide".

[ON SCREEN: four criteria]

Then compare candidates on four things.

**Impact.** If it works, how much difference will it make to a customer promise, to cash, or to the founder's time? Be specific.

**Frequency.** How often does the problem occur? A problem that happens every day usually beats one that happens twice a year, unless the rare one is very serious.

**Risk.** What happens if we leave it? And what's the risk of the change itself going wrong? Changes involving legal, safety or regulatory obligations need more care, and sometimes specialist input before anything changes.

**Effort.** How much time, money and disruption? Who has to do the work?

[ON SCREEN: recruitment firm table]

Here's the recruitment firm again. Three candidates. A new CRM: unclear impact, high effort, and nobody can say what problem it solves. Faster invoicing, owned by the finance assistant: high impact on cash, happens on every placement, low effort. Moving pre-employment paperwork checks from the founder to a trained consultant: high impact, but it involves legal obligations, so the requirements and who may carry out the checks need confirming with a qualified adviser first.

They chose faster invoicing first. The paperwork change matters more in the long run, so they started the preparation, getting advice and training, in parallel, but didn't change anything until that was done. The CRM was parked.

That's a defensible choice. Another team might reasonably have prioritised differently. What matters is that the reasoning is explicit.

[ON SCREEN: the brief]

Once you've chosen, write a short brief. Five things:

- **Owner.** One person responsible for making the change happen. Ideally not the founder.
- **The change.** What will be different, in a sentence or two.
- **The measure and baseline.** What number or observation will tell you whether it worked, and what it is now. If you don't have a baseline, spend a week or two getting one.
- **A review date.** When you'll look at the results together.
- **A stop rule.** What would make you pause or reverse it. For example, if errors rise or customers complain.

Add one more line: **what else to watch**, so improving one thing doesn't quietly break another.

[ON SCREEN: what success can and cannot show]

Finally, be honest about what success shows. If invoicing gets faster, that shows invoicing got faster. It doesn't show the business is fixed, or that every other idea on the list was wrong.

And there's an important difference for this course specifically. In the capstone, you'll reason through a hypothetical business. That demonstrates your judgement. It doesn't demonstrate that you've made a change in your own business, or that it worked. Those are different kinds of evidence, and we keep them separate.

[ON SCREEN: close of course]

That's the end of the six modules. You now have a working vocabulary, a way of seeing how work moves, a way of diagnosing why it depends on you, and a way of choosing and testing one improvement. The capstone brings it all together on a business that isn't yours, so you can practise judgement without the pressure of real consequences. Good luck with it.`,
      slides: "One at a time; candidates; four criteria; recruitment table; five-part brief; what success shows; close."
    }
  },
  {
    id: "m6-ex", type: "exercise", parent: "m6", order: 3, title: "Exercise 6: Visibility set and first improvement brief", status: "Draft",
    links: { outcomes: ["m6-lo1", "m6-lo2", "m6-lo3"] },
    f: {
      instructions: `**Part A: Minimum visibility set.** Using the resource, write no more than eight signals across delivery, money, capacity and obligations. For each, name the owner, who sees it and how often, and mark it leading or lagging. Cross out any signal for which you cannot answer "what would we do differently if we knew this?"

**Part B: Prioritise.** From your work in Modules 2 to 5, list three to five candidate improvements. Score them on impact, frequency, risk and effort. Choose one and write two sentences on why.

**Part C: Brief.** Complete the first improvement brief for your chosen candidate: owner, change, measure and baseline, what else to watch, review date and stop rule. Add one line on what success would and would not show.

If you are not applying this to your own business, use the recruitment firm from Module 3 and choose a different first improvement from the one in the worked example.`,
      output: "A visibility set of up to eight signals, a scored list of candidates and a one-page first improvement brief.",
      time: "About 50 minutes."
    }
  },
  {
    id: "r-visset", type: "resource", parent: "m6", order: 4, title: "Minimum visibility set", status: "Draft",
    links: { outcomes: ["m6-lo1"] },
    f: {
      purpose: "Decide the few signals that tell owners and the founder whether things are on track, so the founder can stop checking everything.",
      body: `**Test for every signal:** what would we do differently if we knew this? If nothing, leave it out.

| Area | Signal | Leading or lagging | Owner (acts on it) | Who sees it | How often | Where it lives |
|---|---|---|---|---|---|---|
| Delivery | | | | | | |
| Delivery | | | | | | |
| Money | | | | | | |
| Money | | | | | | |
| Capacity | | | | | | |
| Obligations | | | | | | |

### Prompts by area

- **Delivery:** late, at risk, blocked (waiting for whom); time from request to completion for recurring work.
- **Money:** cash now and expected over four weeks; owed to us and how overdue; what we owe; rough margin on recent work.
- **Capacity:** overload; work in versus work finished; known absences.
- **Obligations:** deadlines and renewals in the next 60 days with owners; anything overdue; where evidence is kept.

*Obligations vary by jurisdiction, sector and structure. This list helps you track what you know about. It does not tell you what applies to you.*

### Checks

- No more than eight signals to start.
- Every signal has an owner who will act.
- Any speed measure is paired with a quality check.
- Review after a month and keep only what people used.`,
      how: "Start in a shared sheet. Do not buy a reporting tool until you know which signals matter."
    }
  },
  {
    id: "r-brief", type: "resource", parent: "m6", order: 5, title: "First improvement brief", status: "Draft",
    links: { outcomes: ["m6-lo2", "m6-lo3"] },
    f: {
      purpose: "Choose one improvement deliberately, give it an owner and a measure, and know when to stop or continue.",
      body: `### 1. Candidates

| Candidate (problem it addresses, bottleneck type) | Impact | Frequency | Risk if left / risk of change | Effort | Specialist input needed first? |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

**Chosen:** __________ **Why, in two sentences:**

**Parked, and why:**

**Preparation to start in parallel (no change yet):**

### 2. Brief

- **Owner (makes it happen):**
- **Sponsor (removes obstacles, if needed):**
- **The change:**
- **Measure:**  **Baseline now:**  **Target:**
- **Also watch (so we don't break something else):**
- **Review date:**
- **Stop rule (what makes us pause or reverse):**
- **Who needs to know:**

### 3. At review

- What happened to the measure?
- What happened to the "also watch" signal?
- Keep, adjust or stop?
- **What this result shows, and what it does not show:**`,
      how: "Write the brief before the change starts. If there is no baseline, spend one or two weeks getting one first."
    }
  }
];
