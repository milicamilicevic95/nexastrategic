// Course 2 (working title: Not your own bottleneck), 29 October 2026.
// Holds the earlier six-module draft of Operations Fundamentals, its capstone and the POSI,
// moved here when Operations Fundamentals was rebuilt as "one ball, eight panels" (of-course.mjs).
// Draft for review. Nothing here is approved.

export const course2 = {
  id: "c-bn", type: "course", order: 2, title: "Not your own bottleneck (working title)", status: "Draft",
  links: { pillars: ["p-direction", "p-ownership", "p-delivery", "p-visibility", "p-improvement"], outcomes: [], prereqs: ["c-of"] },
  f: {
    purpose: `Help founders stop being their own bottleneck: find where and why work depends on them, move decisions and outcomes to the right people, and prove one real change in their own business.

The course answers the programme's question: **how to not be your own bottleneck?** It does not answer it for each learner's business. It gives them the concepts and methods to answer it for themselves.`,
    audience: "Founders who have completed Operations Fundamentals, or who already know what each panel of operations involves.",
    subjects: "How work moves through a business; why founders become the bottleneck (the five types); ownership, decision rights and escalation; commitments and when to get specialist advice; documentation that people use; seeing what's happening without checking; choosing and reviewing a first improvement.",
    prereqText: "Operations Fundamentals.",
    time: `Estimates only, carried over from the earlier draft and to be re-checked.

| Part | Estimate |
|---|---|
| Six modules, recordings | about 75 to 90 minutes in total |
| Six modules, exercises and resources | about 3 to 3.5 hours in total |
| Capstone case (NB290) | 3 to 5 hours |
| POSI: Proof of Skill Implementation (NB295) | 6 to 10 hours, over four to eight weeks |
| **Total** | **about 13.5 to 20 hours**, over roughly two to three months |`,
    structure: `**Where this course came from.** These six modules were the first draft of Operations Fundamentals (21 October). When that course was rebuilt to teach operations from zero, as one ball with eight panels, this material moved here, where founders arrive already knowing the vocabulary.

**Built on the five pillars.** Direction, Ownership, Delivery, Visibility and Improvement: the conditions David's removal test identified for a business that runs without the founder directing every move.

**Codes.** Modules NB201 to NB206, capstone NB290, POSI NB295.

**To revise before recording.**
- NB201 overlaps heavily with OF101 (what operations is). Cut it, or fold its promise, margin and cash material into NB202, once OF101 is approved.
- Add a short "turn the ball" segment to each module, to keep the one-ball approach from Operations Fundamentals.
- Rewrite lesson scripts to close with the coaching questions (task t11).`,
    notIncluded: "Legal, tax, financial or regulatory advice. Software training. Detailed finance, project management, governance, compliance and legal content beyond recognition and escalation.",
    completion: `Proposed, to be agreed.

1. **Lectures:** the recorded modules, each built as a principle, a method and tactics.
2. **Coursework:** the capstone case (NB290), which shows **reasoning about a hypothetical business**.
3. **Practical:** the POSI, Proof of Skill Implementation (NB295), which shows **one real improvement in the learner's own business**, held for at least two weeks.

The capstone and the POSI are kept separate on purpose: one shows judgement, the other shows implementation. Neither proves business results. No certificate or accreditation is attached.`
  }
};

// Earlier Operations Fundamentals modules and assessments, moved under course 2 with new codes.
export const moveToCourse2 = { m1: "NB201", m2: "NB202", m3: "NB203", m4: "NB204", m5: "NB205", m6: "NB206", "a-cap": null, "a-posi": null };

// Wider course map: shift orders down by one to make room for course 2.
export const ideaOrders = { "c-own": 3, "c-del": 4, "c-fin": 5, "c-rhythm": 6, "c-com": 7, "c-gov": 8 };

// Programme record: fields replaced or extended by the restructure.
export const programmeChanges = {
  modelAppend: `

**Two lenses.** The **panels** (process, people, commercial, finance and revenue, legal, compliance, governance, risk) describe what operations is made of, and are taught as one ball in Operations Fundamentals. The **pillars** (Direction, Ownership, Delivery, Visibility, Improvement) describe the conditions a business needs so the founder stops being the bottleneck, and carry course 2.`,
  sequence: `**Proposed learning sequence** (estimates, not commitments)

1. **Operations Fundamentals.** Operations from zero, as one ball with eight panels in four pairs. Seven modules (OF101 to OF107), about 6.5 to 7 hours including exercises. Required before every other course.
2. **Not your own bottleneck** (working title; all five pillars). Where and why work depends on the founder, decision rights, documentation people use, seeing without checking, the capstone case and the POSI. About 13.5 to 20 hours including assessment.
3. **Specialist follow-on courses** (ideas, not yet scoped): Ownership, Delegation and Decision Rights; Workflows, Projects and Documentation; Finance Operations and Capacity; Operating Rhythm; Commercial Operations; Governance, Compliance and Legal Awareness. Several overlap with OF102 to OF106 and course 2, so each will be re-scoped as a deeper follow-on, or dropped.

Learners do not need every course. The masterclasses (frequency to be agreed) sit alongside the courses as after-school expert lectures; they are never required to complete one.`,
  scopeAppend: `

**Who it's for and who owns it.** Designed as a NexaStrategic programme that can be offered to other companies and founder communities, not only to Founders House. Founders House is the first cohort. Offering it elsewhere depends on the IP and permitted-use position (decision d07) and is decision d19.`
};

export const newDecisions = [
  { id: "d18", kind: "Programme design", title: "New structure: Operations Fundamentals as one ball, bottleneck material as course 2",
    question: "Operations Fundamentals has been rebuilt to teach operations from zero, as one ball with eight panels in four pairs (OF101 to OF107). The earlier six modules, the capstone and the POSI move to course 2 (working title: Not your own bottleneck). Confirm the structure with David, and whether course 2 runs for the same cohort straight after.",
    proposal: "Run Operations Fundamentals first with the pilot cohort, then course 2. Confirm the six course 2 principles (d17) once NB201's overlap with OF101 is resolved." },
  { id: "d19", kind: "Offering", title: "Offer the programme beyond Founders House",
    question: "The programme is designed so it can be offered to other companies and founder communities as a NexaStrategic offering. That depends on who owns the course materials and recordings, and what Founders House may use, during and after the engagement (d07).",
    proposal: "Keep the programme as NexaStrategic IP, licensed to Founders House for its members during the term, and confirm the signed agreement allows offering it elsewhere. Founders House remains the first cohort." }
];

export const firstMasterclass = {
  id: "mc7", order: 0, title: "The heart of the business: why operations decides whether a founder's ideas ever happen (proposed title)",
  purpose: "A standalone, complementary companion to Operations Fundamentals. The course teaches the parts of operations plainly; this masterclass takes the bigger view: operations is the heart of the business, connecting the brain (the founder) to everything else, and when it isn't set, the rest is a mess. Designed to work for people who haven't started the course, and to be repurposed for a wider audience.",
  outcomes: [], modules: ["f1"],
  format: `Proposed, up to 90 minutes including questions.

1. **The picture** (10 min): brain, heart, body. The founder is the brain; customers see the body; operations is the heart, moving decisions, money, information and people to every part, on a rhythm.
2. **What failure looks like** (20 min): blockages (everything waits for the founder), an irregular rhythm (no operating cadence), a weak pump (cash can't reach where it's needed) and the sudden event (a key person leaves, a big client goes, a contract surprises you). One short anonymised story each.
3. **Why it's underestimated** (10 min): it's invisible when it works; businesses hire for the body first; and the ball gets cut up into ops teams. One slide back to the beach ball.
4. **Live case** (25 min): one anonymised founder decision, checked live with the room.
5. **A health check for this week** (10 min): three checks a founder can run on their own business.
6. **Questions** (15 min).`,
  takeaway: "A plain-language way to explain what operations does for the business, and a three-question health check to run on their own business this week.",
  guest: "Not needed for the first one. David could open or close it.", guestStatus: "Not needed",
  date: "2026-11-20", status: "Planned"
};
