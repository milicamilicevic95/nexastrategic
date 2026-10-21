// David's design notes applied to Operations Fundamentals (21 October 2026), draft for review:
// - The whole programme answers one question: how do you stop being your own bottleneck?
// - Each module is built as Principle (stable), Method (how) and Tactic (steps that can change).
// - Learners are helped to find their own answer through questions ("Have you thought about...?", "Consider...").
// - Core courses are lectures; masterclasses are after-school expert lectures; POSI is the applied proof.

export const pmt = {
  m1: { code: "OF101",
    principle: "Operations is how the business keeps its promises, reliably and at a cost it can afford.",
    method: "Trace each important promise through the work, the people and the money it depends on: capacity, cost and cash timing.",
    tactic: `1. List the three to five promises customers would complain about if you broke them.
2. Note the main constraint on each.
3. List the decisions that come up every month and mark the ones that need you.
4. Trace one promise: who does what, what it costs, when cash goes out and comes in.`,
    coaching: `- Have you thought about which promise would break first if you were away for two weeks?
- Consider whether the price of your most common promise covers the time it really takes.
- Have you checked when the cash for that promise arrives, compared with when you pay for it?` },
  m2: { code: "OF102",
    principle: "Most delay is waiting, not working.",
    method: "Follow real work from trigger to result, and find where it waits and for whom, before deciding what to change.",
    tactic: `1. Choose one workflow tied to a promise.
2. Follow two or three real examples, including one that went badly.
3. Record each step: who, input, output, what it waits for and for how long.
4. Label it recurring, project or exception.
5. Answer the five pattern questions. Write questions, not solutions.`,
    coaching: `- Have you followed one piece of work from start to finish, or are you describing it from memory?
- Consider where that work waits, and who it waits for.
- Have you thought about which approval exists because of a problem that no longer happens?` },
  m3: { code: "OF103",
    principle: "\"Everything comes to me\" is several problems, and each one needs a different fix.",
    method: "Separate decision, knowledge, quality-check, relationship and visibility bottlenecks using evidence, then ask before you fix.",
    tactic: `1. For each bottleneck type, note whether you see it and the evidence.
2. Write three diagnostic questions for the two strongest.
3. List the information you don't have yet.
4. Mark any bottleneck with legal, safety or financial consequences, and decide who should change it.`,
    coaching: `- Have you thought about which of the five bottlenecks you are, and which you are not?
- Consider what would happen if, for one week, you said "you decide" on every decision under an agreed amount.
- Have you thought about what a new hire would need from you so they don't become one more person waiting?` },
  m4: { code: "OF104",
    principle: "Delegate outcomes and the authority to decide, not just tasks. Know where your own judgement ends.",
    method: "Set decide, consult and inform for recurring decisions, with thresholds and defined escalation. Check commitments before they're made, and brief specialists well.",
    tactic: `1. Build a five-row decision rights table for the decisions that interrupt you most.
2. Set thresholds and say when, to whom and how fast things escalate.
3. Use the commitment check before agreeing anything non-standard.
4. Keep five-line records of decisions that matter.
5. Use the advice brief when a specialist is needed.`,
    coaching: `- Have you thought about which decision you make most often that someone else could make?
- Consider who agreed the last promise your team struggled to keep, and whether they were allowed to.
- Have you thought about what you would need to bring a solicitor or accountant to get a useful answer in one conversation?` },
  m5: { code: "OF105",
    principle: "Document what works, give it an owner and keep it current. A document cannot fix a broken process.",
    method: "Decide whether a task needs documenting, design the process before writing it down, choose the lightest format, and judge tools by the job they need to do.",
    tactic: `1. Sort five recurring tasks with the "Should this be documented?" guide.
2. Fix what is obviously broken before you write.
3. Draft one SOP with an owner, access and a review date.
4. Have someone else follow it while you watch, then fix it.
5. Score your hub or tool against the job.`,
    coaching: `- Have you thought about whether you need a document, or a decision?
- Consider whether the problem would go away if this SOP were followed perfectly.
- Have you thought about who will keep this document right in six months' time?` },
  m6: { code: "OF106",
    principle: "You can stop checking when the right people can see what matters. Change one thing at a time, and prove it worked.",
    method: "Agree a minimum visibility set. Prioritise improvements by impact, frequency, risk and effort. Give each one an owner, a measure, a review date and a stop rule.",
    tactic: `1. Write up to eight signals across delivery, money, capacity and obligations, each with an owner.
2. Score three to five candidate improvements.
3. Choose one and write the brief: owner, change, baseline, measure, review date, stop rule.
4. Review it, and say what the result does and does not show.`,
    coaching: `- Have you thought about which three numbers would let you stop checking?
- Consider which single change would give you back the most hours a month.
- Have you decided what would make you stop or reverse this change?` }
};

export const programmeAdditions = {
  model: `**The goal of the whole programme:** how do you stop being your own bottleneck?

**How learning works** (a university model, adapted)

| Element | Like | What it is for | Required? |
|---|---|---|---|
| Core course | Lectures | Short recorded lessons, exercises and resources. The structured curriculum. | Yes |
| Masterclass | After-school expert lecture | Live worked cases, discussion and specialist perspectives that apply the course. Never repeats it. | No |
| Capstone case | Coursework | Reasoning about a fictional business. Shows judgement. | Proposed: yes |
| POSI: Proof of Skill Implementation | Practical placement | One real improvement in the learner's own business, with evidence that it happened and that the founder stepped out of it. | Proposed: yes (to be agreed) |

**Teaching voice.** The programme helps founders find their own answer. Every module ends with coaching questions: "Have you thought about…?", "Consider…". The course gives concepts and methods; the founder decides what fits their business.`,
  pmt: `Every module is built in three layers, following David's design approach.

| Layer | What it is | How often it changes |
|---|---|---|
| **Principle** | The idea that stays true across businesses and over time | Rarely. These should be solid. |
| **Method** | How you apply the principle | Occasionally, as we learn from the pilot |
| **Tactic** | The concrete steps, templates and tools | Often. Tactics can be updated without rewriting the course. |

This keeps the course stable while letting the practical material improve. Software and templates sit at tactic level, so a change in tools never changes what is taught.`
};

export const posi = {
  id: "a-posi", type: "practical", parent: "c-of", order: 8, title: "POSI: Proof of Skill Implementation", status: "Draft",
  links: { outcomes: ["m2-lo1", "m3-lo1", "m4-lo1", "m5-lo1", "m6-lo1", "m6-lo2", "m6-lo3"] },
  f: {
    purpose: `The applied side of the course. The capstone shows a learner can reason about a fictional business. The POSI shows they have done it in their own: one real improvement that takes something off the founder's plate, with evidence that it happened and held.

It answers the programme question directly: **where have you stopped being the bottleneck, and how do you know?**`,
    brief: `Over four to eight weeks, choose one recurring situation where work, decisions or information wait for you. Then:

1. **Diagnose it** using the course methods: map the work, name the bottleneck type, gather evidence.
2. **Choose one change** and say why this one, not another.
3. **Hand it over properly:** a named owner, their decision rights and limits, and an escalation route.
4. **Put in what is needed to make it stick:** for example a checklist or SOP with an owner and review date, a decision rights table, or a visibility signal. Use only what the change actually needs.
5. **Measure it:** a baseline before, the same measure after, and something you watched so the change didn't break anything else.
6. **Step back:** for at least two weeks, stop doing, deciding or checking the thing you handed over, except through the agreed escalation route.
7. **Reflect:** what worked, what didn't, and what you would do next.`,
    evidence: `Submit a short pack (written, slides or a recorded walkthrough of 10 to 15 minutes):

- The problem and your evidence (for example a workflow map or wait times)
- The change, the owner and their decision rights
- The artefacts you put in place (redacted where needed)
- Baseline and result for your measure, and the "also watch" signal
- What you no longer do, decide or check, and how long that has held
- A short reflection (up to 300 words)

A short statement from the new owner confirming the change is welcome but optional.`,
    confidentiality: `You choose what to share. Remove client names, personal data, pricing and anything confidential. Describe evidence instead of attaching it where needed. Anonymised examples are fine. Assessors judge whether the evidence is credible and the reasoning sound, not the size of the business or the result.`,
    timeframe: "Four to eight weeks after finishing the six modules. Learners can start planning during Module 6.",
    effort: "Estimate: 6 to 10 hours of the learner's time across the period, plus the time of whoever takes ownership. To be checked in the pilot.",
    guidance: `**What you are assessing.** That a real change happened, that ownership and decision rights genuinely moved away from the founder, and that the learner can judge whether it worked. Not the scale of the result.

**Accept small, real changes.** Moving refund approvals under £200 to a team lead, with a weekly list for the founder, is a good POSI. A grand redesign that never left the planning stage is not.

**Credibility, not proof.** You can't verify everything. Look for consistency between the problem, the artefacts, the measure and the reflection. Ask questions where it doesn't add up.

**Specialist matters.** If the change touched legal, safety, financial or regulatory obligations, look for evidence the learner recognised it and got appropriate input. Do not assess whether they met any specific requirement.

**What a pass means.** "Evidenced" means the assessor has seen credible evidence of one implemented change and the learner's judgement about it. It is not a guarantee of business results, and no certificate or accreditation is attached.`,
    prompts: `- "Who owns this now, and what can they decide without you?"
- "What did you stop doing, and what happened the first time you didn't step in?"
- "Your baseline was ___. What else could explain the change you saw?"
- "What would make you take this back? Has that happened?"
- "Consider what you'd hand over next, and what you'd do differently."`,
    resubmission: `If the change hasn't had time to hold, or ownership hasn't really moved, the result is **In progress** with specific prompts. The learner can add evidence and resubmit within eight weeks (estimate; to be agreed). Earlier submissions and feedback are kept.`,
    evidenceNote: "POSI is evidence of implementation in the learner's own business, self-selected and possibly anonymised. It is assessed for credibility and judgement. It does not prove business outcomes, and no certificate or accreditation is attached."
  }
};

export const posiRubric = {
  id: "a-posi--v1", assessment: "a-posi", version: 1,
  note: "First draft POSI rubric for review and calibration in the pilot.",
  levels: ["Not yet evident", "Partly evidenced", "Evidenced", "Strong"],
  standard: "**Evidenced** when Ownership moved, Founder stepped out and Measurement are each at least Evidenced, and no criterion is Not yet evident. Otherwise the result is **In progress** and the learner is invited to add evidence.",
  criteria: [
    { id: "diag", name: "Diagnosis grounded in evidence", critical: false, outcomes: ["m2-lo1", "m3-lo1"],
      desc: ["No evidence of the problem, or the problem is assumed.", "Some evidence, but it doesn't clearly show where work waited or why.", "Credible evidence of where work waited and which bottleneck type it was.", "As Evidenced, and the learner tested their first explanation and revised it."] },
    { id: "choice", name: "Choice of change", critical: false, outcomes: ["m6-lo2"],
      desc: ["No reason given for this change.", "A reason, but no comparison with alternatives.", "Justified by impact, frequency, risk and effort, with alternatives considered.", "As Evidenced, and the learner explains what they deliberately left for later and why."] },
    { id: "own", name: "Ownership moved", critical: true, outcomes: ["m4-lo1", "m6-lo3"],
      desc: ["Ownership stayed with the founder, or is unclear.", "A person is named but their decision rights or limits are unclear.", "A named owner with clear decision rights, a threshold and an escalation route.", "As Evidenced, and the learner checked the owner had the capability, information and time."] },
    { id: "made", name: "What was put in place", critical: false, outcomes: ["m5-lo1"],
      desc: ["Nothing put in place, or only a plan.", "Something put in place, but it doesn't match what the change needed.", "Proportionate artefacts (for example a checklist, SOP, threshold table or signal) with an owner and review date.", "As Evidenced, and the artefacts were tested with the person using them and improved."] },
    { id: "step", name: "Founder stepped out", critical: true, outcomes: ["m4-lo1"],
      desc: ["No evidence the founder stopped doing, deciding or checking anything.", "Stepped back briefly, or only partly.", "Stopped for at least two weeks, except through the agreed escalation route.", "As Evidenced, and the learner describes what they did when tempted to step back in."] },
    { id: "meas", name: "Measurement and judgement", critical: true, outcomes: ["m6-lo1", "m6-lo3"],
      desc: ["No measure, or no baseline.", "A measure with a baseline, but no result or no 'also watch' signal.", "Baseline and result for the measure, an 'also watch' signal, and an honest view of what it shows.", "As Evidenced, and the learner considers other explanations for the change."] },
    { id: "risk", name: "Risk and specialist matters", critical: false, outcomes: ["m4-lo2", "m4-lo3"],
      desc: ["Obvious legal, safety, financial or regulatory issues ignored.", "Issues mentioned but not acted on.", "Relevant issues recognised and appropriate input sought, or a reasoned note that none applied.", "As Evidenced, and the learner recorded the decision and who made it."] }
  ]
};
