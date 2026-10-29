// One-off migration, 29 October 2026: rebuild Operations Fundamentals as "one ball, eight panels"
// and move the earlier six modules, capstone and POSI to course 2.
// Usage: node academy/tools/migrate-2026-10-29.mjs <liveItemsDir> <versions.json> <outDir>
//   liveItemsDir: acad_items/*.json as read from the live database
//   versions.json: { "<item id>": <db version>, ... } for the items read
// Writes <outDir>/<collection>/<id>.json plus <outDir>/writes.json (ArtifactData batch entries).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { courseFundamentals, ofItems } from "../content/of-course.mjs";
import { course2, moveToCourse2, ideaOrders, programmeChanges, newDecisions, firstMasterclass } from "../content/course2.mjs";
import { hashOf, normLinks } from "./hash.mjs";

const [liveDir, versionsPath, out] = process.argv.slice(2);
if (!out) { console.error("Usage: node migrate-2026-10-29.mjs <liveItemsDir> <versions.json> <outDir>"); process.exit(1); }
const AT = process.env.MIGRATE_AT || new Date().toISOString();
const versions = JSON.parse(readFileSync(versionsPath, "utf8"));
const live = id => JSON.parse(readFileSync(join(liveDir, id + ".json"), "utf8"));
const writes = [];
const emit = (op, col, id, data, ifv) => {
  mkdirSync(join(out, col), { recursive: true });
  const p = join(out, col, id + ".json");
  writeFileSync(p, JSON.stringify(JSON.parse(JSON.stringify(data)), null, 1));
  writes.push({ op, collection: col, doc_id: id, file_path: p, ...(ifv ? { if_version: ifv } : {}) });
};
const NOTE = "Restructure (29 Oct): Operations Fundamentals rebuilt as one ball, eight panels";

// New revision of an existing item: bump rev, record hash, log, and write the revision record.
function revise(id, it, note) {
  it.links = normLinks(it.links);
  const h = hashOf(it);
  if (it.revHash !== h) {
    const n = (it.rev || 0) + 1;
    emit("set", "acad_revs", id + "--r" + n, { item: id, n, at: AT, note, title: it.title, f: it.f, links: it.links, status: it.status, hash: h });
    it.rev = n; it.revHash = h;
    it.log = (it.log || []).concat({ at: AT, what: "Saved revision r" + n + ": " + note });
  }
  it.updated = AT;
  if (!versions[id]) throw new Error("No version for " + id);
  emit("update", "acad_items", id, it, versions[id]);
}

// New item with its first revision.
function create(s, note) {
  const it = { type: s.type, title: s.title, parent: s.parent || "", order: s.order || 0, status: s.status || "Draft",
    owner: "Mila", due: "", f: s.f || {}, links: normLinks(s.links), notes: [], log: [{ at: AT, what: note }],
    rev: 1, approved: null, recording: null, published: null, created: AT, updated: AT };
  it.revHash = hashOf(it);
  emit("set", "acad_items", s.id, it);
  emit("set", "acad_revs", s.id + "--r1", { item: s.id, n: 1, at: AT, note, title: it.title, f: it.f, links: it.links, status: it.status, hash: it.revHash });
}

// Programme
const prog = live("prog");
prog.f.model = (prog.f.model || "") + programmeChanges.modelAppend;
prog.f.sequence = programmeChanges.sequence;
prog.f.scope = (prog.f.scope || "") + programmeChanges.scopeAppend;
revise("prog", prog, NOTE + "; course 2 added; programme offered beyond Founders House (d19)");

// Operations Fundamentals: new course record
const cof = live("c-of");
cof.f = courseFundamentals.f; cof.links = courseFundamentals.links; cof.title = courseFundamentals.title;
revise("c-of", cof, NOTE);

// Course 2 and the new modules
create(course2, "Created in the restructure (29 Oct): holds the earlier Operations Fundamentals modules, capstone and POSI");
for (const s of ofItems) create(s, "Created in the restructure (29 Oct)");

// Move earlier modules and assessments to course 2
for (const [id, code] of Object.entries(moveToCourse2)) {
  const it = live(id);
  it.parent = "c-bn";
  it.log = (it.log || []).concat({ at: AT, what: "Moved from Operations Fundamentals to course 2 (restructure, 29 Oct)" });
  if (code) { it.f.code = code; revise(id, it, "Moved to course 2; code changed to " + code); }
  else revise(id, it, "Moved to course 2");
}

// Wider course map: make room for course 2
for (const [id, order] of Object.entries(ideaOrders)) {
  const it = live(id); it.order = order; revise(id, it, "Reordered after course 2 was added");
}

// Decisions and the first masterclass
for (const d of newDecisions) {
  const { id, ...rest } = d;
  emit("set", "acad_dec", id, { ...rest, status: "Open", agreed: "", agreedOn: "", agreedBy: "", docLink: "", engagementRef: "", notes: "", created: AT, updated: AT });
}
{
  const { id, ...m } = firstMasterclass;
  emit("set", "acad_mc", id, { ...m, presenter: "Mila", time: "", tz: "Europe/London", recordingUrl: "", resources: "",
    attendance: [], attendCount: "", feedbackNotes: "", created: AT, updated: AT });
}

writeFileSync(join(out, "writes.json"), JSON.stringify(writes, null, 1));
console.log(writes.length + " writes: " + writes.filter(w => w.op === "set").length + " set, " + writes.filter(w => w.op === "update").length + " update");
