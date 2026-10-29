// Builds the Operations Academy seed records from academy/content/*.mjs.
// Usage: node academy/tools/build-seed.mjs <outDir>
// Writes <outDir>/<collection>/<id>.json (for ArtifactData batch writes) and
// <outDir>/seed.json (one bundle, used by the local test harness).
// The hash below must match acHash() in the Academy script in Nexa OS.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { programme } from "../content/programme.mjs";
import { of1 } from "../content/of-1.mjs";
import { of2 } from "../content/of-2.mjs";
import { of3 } from "../content/of-3.mjs";
import { capstone, rubricV1 } from "../content/capstone.mjs";
import { masterclasses, decisions, sources, tasks } from "../content/ops.mjs";
import { pmt, programmeAdditions, posi, posiRubric } from "../content/pmt.mjs";
import { courseFundamentals, ofItems } from "../content/of-course.mjs";
import { course2, moveToCourse2, ideaOrders, programmeChanges, newDecisions, firstMasterclass } from "../content/course2.mjs";
import { hashOf as sharedHash, normLinks as sharedNorm } from "./hash.mjs";

const out = process.argv[2];
if (!out) { console.error("Usage: node build-seed.mjs <outDir>"); process.exit(1); }
const AT = process.env.SEED_AT || new Date().toISOString();

const hashOf = sharedHash, normLinks = sharedNorm;

// Restructure (29 Oct): Operations Fundamentals rebuilt as one ball, eight panels; the earlier
// modules, capstone and POSI move to course 2. Applied to the source content before seeding.
const restructure = s => {
  if (s.id === "prog") return { ...s, f: { ...s.f, model: (s.f.model || "") + programmeChanges.modelAppend, sequence: programmeChanges.sequence, scope: (s.f.scope || "") + programmeChanges.scopeAppend } };
  if (s.id === "c-of") return { ...s, title: courseFundamentals.title, f: courseFundamentals.f, links: courseFundamentals.links };
  if (s.id in moveToCourse2) return { ...s, parent: "c-bn", f: moveToCourse2[s.id] ? { ...s.f, code: moveToCourse2[s.id] } : s.f };
  if (s.id in ideaOrders) return { ...s, order: ideaOrders[s.id] };
  return s;
};

const docs = {};
const put = (col, id, data) => { (docs[col] ||= {})[id] = data; };

for (const s0 of [...programme, ...of1, ...of2, ...of3, ...capstone, posi, course2, ...ofItems]) {
  const s = restructure({ ...s0, f: { ...(s0.f || {}), ...(pmt[s0.id] || {}), ...(s0.id === "prog" ? programmeAdditions : {}) } });
  const it = { type: s.type, title: s.title, parent: s.parent || "", order: s.order || 0, status: s.status || "Draft",
    owner: "Mila", due: "", f: s.f || {}, links: normLinks(s.links), notes: [], log: [{ at: AT, what: "Seeded as draft content" }],
    rev: 1, approved: null, recording: null, published: null, created: AT, updated: AT, seed: true };
  it.revHash = hashOf(it);
  put("acad_items", s.id, it);
  put("acad_revs", s.id + "--r1", { item: s.id, n: 1, at: AT, note: "Initial draft (seeded)", title: it.title, f: it.f, links: it.links, status: it.status, hash: it.revHash });
}
for (const r of [rubricV1, posiRubric]) put("acad_rubrics", r.id, { ...r, id: undefined, created: AT });
[...masterclasses, { ...firstMasterclass, seededStatus: firstMasterclass.status, seededDate: firstMasterclass.date }].forEach(m => put("acad_mc", m.id, { ...m, id: undefined, seededStatus: undefined, seededDate: undefined, status: m.seededStatus || "Proposal", presenter: m.seededStatus ? "Mila" : "Mila (proposed)", date: m.seededDate || "", time: "", tz: "Europe/London",
  recordingUrl: "", resources: "", attendance: [], attendCount: "", feedbackNotes: "", created: AT, updated: AT }));
[...decisions, ...newDecisions].forEach(d => put("acad_dec", d.id, { ...d, id: undefined, status: ["d03", "d04"].includes(d.id) ? "Proposed" : "Open", agreed: "", agreedOn: "", agreedBy: "",
  docLink: d.docLink || "", engagementRef: "", notes: "", created: AT, updated: AT }));
sources.forEach(s => put("acad_src", s.id, { ...s, id: undefined, created: AT, updated: AT }));
tasks.forEach((t, i) => put("acad_tasks", t.id, { ...t, id: undefined, owner: "Mila", due: "", done: false, doneAt: "", notes: "", mc: "", order: i + 1, created: AT }));

// strip undefined
const clean = o => JSON.parse(JSON.stringify(o));
let n = 0;
for (const [col, m] of Object.entries(docs)) {
  mkdirSync(join(out, col), { recursive: true });
  for (const [id, d] of Object.entries(m)) { writeFileSync(join(out, col, id + ".json"), JSON.stringify(clean(d), null, 1)); n++; }
}
writeFileSync(join(out, "seed.json"), JSON.stringify(clean(docs)));
console.log(Object.entries(docs).map(([c, m]) => c + ": " + Object.keys(m).length).join("\n") + "\ntotal " + n);
