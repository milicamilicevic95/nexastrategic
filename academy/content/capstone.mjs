// Operations Fundamentals capstone case and rubric v1. Draft for review.
// The business, people and figures are fictional. No real company information is used.

export const capstone = [
  {
    id: "a-cap", type: "assessment", parent: "c-of", order: 7, title: "Capstone: Kestrel Signs keeps missing deadlines", status: "Draft",
    links: { outcomes: ["m1-lo1", "m1-lo2", "m2-lo1", "m2-lo2", "m2-lo3", "m3-lo1", "m3-lo2", "m4-lo1", "m4-lo2", "m4-lo3", "m5-lo1", "m5-lo2", "m6-lo1", "m6-lo2", "m6-lo3"] },
    f: {
      scenario: `Kestrel Signs is a print and signage company. It designs, prints and installs signs, window graphics and display boards for shops, offices and events.

Six weeks ago its founder, Rachel Okafor, signed a two-year framework agreement with Brightway, a regional retail chain with 22 stores. Brightway is now Kestrel's largest customer. Under the agreement, Kestrel will produce and install promotional signage across Brightway stores roughly every three weeks, plus urgent replacement jobs.

Since the agreement started, Kestrel has missed delivery dates on 9 of 14 Brightway jobs, and on several jobs for other customers. Brightway's operations manager has emailed Rachel twice. The second email mentions "the service credit provisions".

Kestrel has a set of SOPs, written two years ago by an operations manager who has since left. Rachel tells you: "We have SOPs. People just don't follow them. Maybe we need a proper project management system."

Rachel has asked you, as an operations adviser, to help her understand what is going on and what to do first.`,
      context: `**People (12):**
- Rachel Okafor, founder and managing director. Sole director. Handles sales, approves all quotes, signs off every artwork proof before it goes to a customer, and manages the relationships with the three largest customers, including Brightway.
- Two designers.
- One account coordinator, Tom, who enters orders and books jobs. He started four months ago.
- Three production staff running one large-format printer and a cutting table.
- Two installers, employed. On busy weeks Kestrel also uses a self-employed installer, Dev.
- One finance and office administrator, part time (three days a week).
- One apprentice.

**How a job moves (as Rachel describes it):** quote, then order, then artwork, then proof sent to the customer, then customer approval, then print, then finishing, then install, then invoice.

**Tools:** a quoting spreadsheet, a shared email inbox, a whiteboard in the production area, a shared drive containing the SOPs, and accounting software used by the finance administrator.`,
      facts: `- The Brightway agreement promises **5 working days** from "order" to installation for standard jobs, and **48 hours** for urgent replacements.
- It includes service credits for late delivery. Rachel says she "skimmed that part".
- Brightway pays on **60-day** terms. Kestrel's other customers mostly pay on 30 days. Kestrel pays its main materials supplier on 30 days.
- Rachel estimates Kestrel's typical turnaround before Brightway was **7 to 9 working days**. She agreed to 5 because Brightway's previous supplier offered it.
- There is **one** large-format printer. It broke down for two days last month.
- Artwork proofs wait for Rachel's sign-off before they go to the customer. Tom says they "usually sit for a day or two" when she is out selling.
- Brightway's store managers sometimes change artwork after approval by contacting the designers directly.
- Dev, the self-employed installer, did 40% of Brightway installs last month. Rachel is not sure whether Kestrel holds a current copy of his insurance certificate.
- Installers sometimes work at height (fascia signs, high-level window graphics).
- The SOPs cover quoting, artwork, print and install. None mentions Brightway, proofs for framework customers, urgent jobs or who may change a job after approval.
- The finance administrator says Brightway invoices go out "when the job is closed on the whiteboard", which is sometimes two weeks after install.
- Rachel worked 60-hour weeks last month.`,
      missing: `**Assessor reference. Not shown to learners.** The case deliberately omits the information below. Learners are told only that some information they would want is missing. Credit learners who identify these or other reasonable gaps, explain why each matters, and say how they would obtain it. Do not penalise a learner for missing one item if their overall identification of gaps is sound.

- Where the time actually goes on a late job (no timestamps are kept).
- Whether "5 working days from order" starts at order or at artwork approval. The agreement wording has not been checked.
- The exact service credit terms, and whether any are already payable.
- The margin on Brightway work compared with other customers.
- How many hours the printer and installers are actually available each week, against demand.
- Whether the SOPs are followed, partly followed or ignored, and why.
- Who, besides Rachel, is allowed to approve a proof, change a job or agree a delivery date.
- What Brightway's operations manager actually considers most important.
- Dev's employment status, insurance and any training or certification relevant to the work, and what Kestrel's own insurance requires.`,
      instructions: `You are advising Rachel. Prepare a response that explains how you would approach this situation. You are **not** expected to solve everything, or to recommend a particular tool or system.

Some information you would want is not in the case. That is deliberate. Do not invent it. Part of the task is noticing what is missing, why it matters and how you would find it out.

Your response must cover:

1. **Diagnosis.** What you think is going on, and why. Use the concepts from the course (how work moves, types of bottleneck, ownership, documentation, visibility). Distinguish what the facts show from what you suspect.
2. **Questions and missing information.** The questions you would ask, of whom, and the information you would gather before deciding anything. Explain why each matters.
3. **Priorities.** What you would do first, in the next two weeks, and what you would deliberately leave until later. Explain your reasoning.
4. **Ownership and decision rights.** Who should own what, which decisions should move away from Rachel, and what should stay with her.
5. **Commercial, governance and specialist matters.** The commercial and contractual issues, the decisions Rachel should make deliberately, and where qualified advice is needed. Say what kind of adviser and what information you would gather for them.
6. **Measurement and review.** How you and Rachel would judge whether your first intervention helped, including a baseline, a measure, a review date and what would make you change course.

There is more than one defensible answer. You will be assessed on the quality of your reasoning, not on matching a model answer. Do not recommend specific software products. If you think a tool would help, explain the job it needs to do.

Do not use confidential information from your own or any real business. If you draw on experience, describe it in general terms.`,
      format: `Choose **one** of:

- **Written plan:** 1,500 to 2,500 words, with headings matching the six sections.
- **Slides:** 8 to 12 slides, with speaker notes giving the reasoning behind each slide.
- **Recorded presentation:** 10 to 15 minutes, with your slides or notes attached. Share as a link to a hosted video. Do not upload video files to the dashboard.

All three are assessed against the same rubric. Choose the format that lets you show your reasoning most clearly.`,
      effort: "Estimate: 3 to 5 hours, including re-reading the case and checking your plan against the rubric. This is an estimate to be tested in the pilot.",
      guidance: `**What you are assessing.** Applied judgement about a hypothetical business: diagnosis, questions, recognition of missing information, prioritisation, ownership, feasibility, commercial and governance awareness, recognition of specialist advice needs, and measurement. You are not assessing writing style, presentation polish or knowledge of any tool.

**Multiple defensible answers.** Learners may reasonably start in different places: with the proof sign-off queue, with clarifying the contract's start point and service credits, with getting basic timing data, or with an urgent conversation with Brightway. Credit any starting point that is justified by the facts and the learner's stated reasoning. Do not reward agreement with your own preferred approach.

**What strong responses tend to do** (examples, not a checklist):
- Notice that the SOPs exist but cannot fix a promise that may exceed capacity, a proof queue at the founder, missing decision rights on job changes, or a single printer.
- Separate facts from assumptions, and propose ways to get missing data, such as following the next few jobs and noting where they wait.
- Recognise the decision, quality-check, relationship and visibility bottlenecks around Rachel.
- Recognise that the 5-day promise was made without a capacity check, and that 60-day terms on the largest customer plus delayed invoicing affect cash.
- Flag the agreement (start point, service credits) for review by a solicitor, and Dev's status, insurance and work at height for appropriate specialist input, without stating what the law requires.
- Treat "a proper project management system" as a hypothesis to test, not a starting point.
- Give the first change an owner other than Rachel where sensible, a baseline, a measure, a review date and a stop rule.

**Common weaknesses:**
- Jumping straight to a tool or a rewrite of all SOPs.
- Confident claims about legal requirements. Recognising a likely issue is good; asserting the law is not what is assessed and should not be rewarded.
- Treating Rachel's view ("people don't follow the SOPs") as established fact.
- Ten simultaneous priorities.
- Ownership assigned to "the team".
- Measures with no baseline or review.

**Coverage.** The capstone assesses outcomes M1.1 to M6.3 except M5.3 (evaluating a hub or tool), which is assessed through Exercise 5. A learner who proposes a tool should justify it by the job it needs to do; credit that under Feasibility.

**Time.** Allow about 45 to 60 minutes for a first assessment and 20 to 30 minutes for a resubmission (estimates).

**Hypothetical reasoning, not implementation.** A "Meets the standard" result shows reasoning about a fictional case. Record it that way. It is not evidence that the learner has changed their own business.

**AI-assisted feedback.** Not used in this MVP. If introduced later, it must be optional, clearly labelled, and unable to set a result without assessor approval.`,
      prompts: `Use two or three of these per criterion, adapted to the submission.

- "Your diagnosis of ___ is well supported by ___. What evidence would tell you whether ___ is also contributing?"
- "You've assumed ___. How would you check that before acting on it?"
- "Which of your questions would you ask first, and of whom?"
- "What would happen to your plan if the agreement turned out to start the 5 days at artwork approval?"
- "You've given ___ to Rachel. What would need to be true for someone else to own it?"
- "How would you know in four weeks whether this had helped? What is the baseline?"
- "What would make you stop or reverse this change?"
- "Which part of this needs a qualified adviser, and what would you take to them?"
- "You've proposed ___ changes at once. Which one would you start with if you could only do one, and why?"`,
      resubmission: `1. If any criterion is "Not yet evident", or the standard is not met, the assessor records criterion-level feedback, sets the status to **Revision requested**, and gives the learner two or three specific prompts.
2. The learner may resubmit once within four weeks (estimate; to be agreed). They revise only what they need to, and add a short note (up to 200 words) explaining what they changed and why.
3. The resubmission is recorded as a new attempt linked to the first. The first attempt, its feedback and the rubric version used are kept unchanged.
4. The assessor reviews against the **same rubric version** used for the first attempt unless the learner and assessor agree otherwise, and records that choice.
5. A second "Not yet" leads to a conversation, not a third automatic attempt. The programme owner decides the next step.`,
      evidenceNote: "This assessment shows applied reasoning about a hypothetical business. It does not show that the learner has implemented changes in their own business or that any change worked. No certificate or accreditation is attached to completion."
    }
  }
];

const L = ["Not yet evident", "Developing", "Secure", "Strong"];

export const rubricV1 = {
  id: "a-cap--v1", assessment: "a-cap", version: 1,
  note: "First draft rubric for review and calibration in the pilot.",
  levels: L,
  standard: "**Meets the standard** when Diagnosis, Prioritisation, Ownership and decision rights, and Recognition of specialist advice needs are each at least Secure, and no criterion is Not yet evident. Otherwise the result is **Not yet** and a revision is requested.",
  criteria: [
    { id: "diag", name: "Diagnosis", critical: true, outcomes: ["m1-lo1", "m2-lo1", "m2-lo3", "m3-lo1", "m5-lo2"],
      desc: ["Restates symptoms or Rachel's view as the cause. No use of course concepts.", "Identifies some causes using course concepts, but mixes facts and assumptions or misses a major factor (for example, the promise made without a capacity check, or the proof queue).", "Identifies several plausible causes across workflow, bottleneck types, ownership and capacity, supported by the facts, and separates facts from suspicion.", "As Secure, and explains how the causes interact (for example, why existing SOPs cannot prevent these failures) and what evidence would distinguish between competing explanations."] },
    { id: "qs", name: "Quality of questions", critical: false, outcomes: ["m3-lo2"],
      desc: ["No questions, or only generic ones.", "Some relevant questions, but mostly leading or blaming, or not directed at anyone.", "Specific diagnostic questions about path, ownership, promises and evidence, directed at the right people.", "As Secure, and sequenced: which questions come first and why, and how the answers would change the plan."] },
    { id: "miss", name: "Identification of missing information", critical: false, outcomes: ["m2-lo3", "m3-lo2", "m6-lo1"],
      desc: ["Fills gaps with invented facts, or does not notice them.", "Notes some gaps but not why they matter, or not how to get the information.", "Identifies the important gaps (for example, where time goes, contract start point, margin, capacity) and how to obtain each.", "As Secure, and proposes a proportionate way to gather evidence quickly, such as following live jobs, without delaying urgent action."] },
    { id: "prio", name: "Prioritisation", critical: true, outcomes: ["m6-lo2"],
      desc: ["No priorities, or everything at once.", "Priorities given but not justified, or too many to be realistic.", "A clear first focus for the next two weeks, justified by impact, frequency, risk and effort, with deliberate deferrals.", "As Secure, and distinguishes urgent containment (for example, the conversation with Brightway or the contract check) from the first structural improvement."] },
    { id: "own", name: "Ownership and decision rights", critical: true, outcomes: ["m4-lo1", "m6-lo3"],
      desc: ["Ownership missing, or given to \"the team\" or to Rachel by default.", "Some owners named, but decision rights, thresholds or escalation are unclear.", "Named owners for the main outcomes; specifies which decisions move away from Rachel (for example, proof sign-off for standard work, job changes after approval) and which stay; defines escalation.", "As Secure, and checks whether proposed owners have the capability, information and time, and addresses the relationship bottleneck with Brightway."] },
    { id: "feas", name: "Feasibility", critical: false, outcomes: ["m2-lo2", "m5-lo1", "m6-lo2"],
      desc: ["Proposals are unrealistic for a 12-person business (for example, a full system rollout or rewriting everything first).", "Mostly realistic, but ignores a key constraint (one printer, part-time finance, a new coordinator).", "Proportionate to the business and its constraints; treats tools and documentation as means, justified by the job they need to do.", "As Secure, and anticipates the side effects of the proposed changes and how to limit them."] },
    { id: "comm", name: "Commercial and governance awareness", critical: false, outcomes: ["m1-lo2", "m4-lo2"],
      desc: ["No commercial or governance points.", "Mentions the contract or cash but does not connect them to operations or decisions.", "Connects the 5-day promise, service credits, 60-day terms and late invoicing to capacity, margin and cash; identifies who should have been able to agree the commitment.", "As Secure, and proposes how future commitments should be checked and recorded, proportionate to the business."] },
    { id: "spec", name: "Recognition of specialist advice needs", critical: true, outcomes: ["m4-lo3"],
      desc: ["Misses legal, contractual or safety issues, or asserts what the law requires.", "Mentions \"getting legal advice\" without saying on what, or what to bring.", "Identifies matters needing qualified input (for example, the agreement's terms, the self-employed installer's status and insurance, work at height), the kind of adviser, and the information to gather, without asserting the law.", "As Secure, and sequences advice sensibly with operational action, distinguishing what can proceed now from what should wait."] },
    { id: "meas", name: "Measurement and review", critical: false, outcomes: ["m6-lo1", "m6-lo3"],
      desc: ["No way of judging success.", "A measure with no baseline, owner or review date.", "A baseline (or a plan to get one), a measure, a review date and a stop rule for the first intervention.", "As Secure, and pairs measures to avoid gaming (for example, speed and rework), and states what success would and would not show."] }
  ]
};
