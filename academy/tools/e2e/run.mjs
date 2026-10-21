// End-to-end checks for the Operations Academy inside Nexa OS, against the mock runtime.
import { chromium } from "playwright-core";
import http from "node:http";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Usage: node academy/tools/e2e/run.mjs [outDir]   (needs playwright-core and a Chromium; set CHROMIUM_PATH)
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
const HERE = new URL(".", import.meta.url).pathname;
const REPO = join(HERE, "../../..");
const BASE = process.argv[2] || join(tmpdir(), "academy-e2e"); const OUT = join(BASE, "shots"); mkdirSync(OUT, { recursive: true });
execFileSync("node", [join(REPO, "academy/tools/build-seed.mjs"), join(BASE, "seed")], { stdio: "ignore" });
const SKEL = '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;box-sizing:border-box}body{margin:0;padding:0}[hidden]:not([hidden=until-found i]){display:none!important}</style></head><body>\n';
const page_html = SKEL + readFileSync(join(REPO, "contracts/nexa-engagement-builder.html"), "utf8") + "\n</body></html>";
const seedRaw = JSON.parse(readFileSync(join(BASE, "seed/seed.json"), "utf8"));
const seed = {};
for (const [col, m] of Object.entries(seedRaw)) for (const [id, d] of Object.entries(m)) seed[col + "/" + id] = d;
// fictional finance record so contact linking can be exercised
seed["finance/model"] = { clients: [{ id: "cTEST1", name: "Test Client Ltd (fictional)", status: "active", fee: 0 }], leads: [{ id: "lTEST1", name: "Test Lead", company: "Fictional Co", status: "New", created: "2026-10-01", email: "" }] };
seed["engagements/NX-TEST-001"] = { data: { cl_name: "Fictional client", doctype: "EO" }, client: "Fictional client" };
const mock = readFileSync(join(HERE, "mock.js"), "utf8");

const srv = http.createServer((q, r) => { r.writeHead(200, { "content-type": "text/html; charset=utf-8" }); r.end(page_html); }).listen(0);
const URL0 = "http://127.0.0.1:" + srv.address().port + "/";

let pass = 0, fail = 0; const results = [];
const ok = (c, m) => { (c ? pass++ : fail++); results.push((c ? "PASS " : "FAIL ") + m); console.log((c ? "PASS " : "FAIL ") + m); };
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
const ctx = await browser.newContext({ viewport: { width: 1360, height: 900 } });
await ctx.addInitScript(`window.__SEED__=${JSON.stringify(seed)};\n${mock}`);
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", e => errors.push(e.message));
page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
page.on("dialog", d => d.accept());
const W = ms => page.waitForTimeout(ms);
const go = async hash => { await page.goto(URL0 + (hash || "")); await W(500); };
const sub = async name => { await page.click(`#acSub [data-acsub="${name}"]`); await W(150); };
const kpi = async label => page.evaluate(l => { const k = [...document.querySelectorAll("#acMain .kpi")].find(x => x.querySelector("span").textContent === l); return k ? k.querySelector("b").textContent : null; }, label);
const store = () => page.evaluate(() => JSON.parse(localStorage.getItem("__mockdb")));
const openItem = async id => { await page.evaluate(id => { const b = document.createElement("button"); b.dataset.act = "open"; b.dataset.id = id; b.type = "button"; document.getElementById("acMain").appendChild(b); b.click(); }, id); await W(200); };

// 1. load and overview counts
await go("#academy");
ok(await page.isVisible("#view-academy"), "Academy tab opens from #academy");
ok((await kpi("Modules approved")) === "0 of 6", "Overview: modules approved derived from records (0 of 6)");
ok((await kpi("Decisions open")) === "17", "Overview: 17 decisions awaiting agreement");
ok((await kpi("Claims to verify")) === "4", "Overview: 4 claims to verify (one verified)");
ok((await kpi("Awaiting assessment")) === "0", "Overview: no assessments awaiting review");
ok(await page.locator("text=No masterclass has a date yet.").count() === 1, "Overview: empty state for undated masterclasses");
await page.screenshot({ path: join(OUT, "01-overview-desktop.png"), fullPage: true });

// 2. existing ERP still works
await page.click('.tab[data-view="home"]'); await W(200);
ok(/modules to approve/.test(await page.textContent("#doorAcademy")), "Home: Operations Academy tile shows live counts");
ok(/Good (morning|afternoon|evening)/.test(await page.textContent("#greet")), "Home still renders");
await page.click('.tab[data-view="legal"]'); await W(200);
ok(await page.locator("#preview .page").count() > 0, "Legal: contract preview still renders");
await page.click('.tab[data-view="forecast"]'); await W(200);
ok(await page.isVisible("#heroKeep"), "Finance forecast still renders");
await page.click('.tab[data-view="academy"]'); await W(200);

// 3. curriculum edit persists
await sub("curriculum");
await openItem("m1");
ok(await page.inputValue("#axTitle") === "What operations is, and why it is commercial", "Curriculum: Module 1 opens in editor");
await page.fill("#axf_problem", "EDITED learner problem for test.");
await page.fill("#axTitle", "What operations is (edited)");
await W(1100);
await go("#academy"); await sub("curriculum"); await openItem("m1");
ok(await page.inputValue("#axTitle") === "What operations is (edited)", "Edit to title saved and reloaded");
ok((await page.inputValue("#axf_problem")).startsWith("EDITED"), "Edit to field saved and reloaded");

// 4. revisions, approval, edit-after-approval
await page.click('[data-act="tab"][data-tab="history"]'); await W(300);
await page.fill("#axRevNote", "Test revision"); await page.click('form[data-form="rev"] button'); await W(300);
let st = await store();
ok(!!st["acad_revs/m1--r2"] && st["acad_items/m1"].rev === 2, "Saving a revision writes r2 and bumps the item");
await page.click('[data-act="tab"][data-tab="production"]'); await W(150);
await page.click('[data-act="approve"]'); await W(400);
st = await store();
ok(st["acad_items/m1"].status === "Approved" && st["acad_items/m1"].approved.rev === 2, "Approve stamps r2 and sets Approved");
await sub("overview");
ok((await kpi("Modules approved")) === "1 of 6", "Status change updates dashboard count (1 of 6)");
await sub("curriculum"); await openItem("m1");
await page.fill("#axf_time", "Changed after approval."); await W(1100);
st = await store();
ok(st["acad_items/m1"].status === "Draft" && st["acad_items/m1"].approved.rev === 2, "Editing after approval returns status to Draft and keeps approved r2");
ok(await page.locator("text=Changed since approved version r2").count() > 0, "Editor flags change since approval");
await page.click('[data-act="tab"][data-tab="history"]'); await W(300);
await page.click('[data-act="revview"][data-n="1"]'); await W(200);
await page.click('[data-act="restore"][data-n="1"]'); await W(500);
st = await store();
ok(st["acad_items/m1"].title === "What operations is, and why it is commercial", "Restoring r1 brings back the original title");
ok(!!st["acad_revs/m1--r1"] && !!st["acad_revs/m1--r2"], "Both revisions are preserved after restore");

// 5. lesson: record, approve, publish, draft vs published
await openItem("m1-l1");
await page.click('[data-act="tab"][data-tab="production"]'); await W(150);
await page.click('[data-act="approve"]'); await W(400);
await page.fill('input[data-bind="items|m1-l1|recUrl"]', "https://example.com/recording-1"); await W(1000);
await page.click('[data-act="record"]'); await W(400);
await page.click('[data-act="publish"]'); await W(400);
st = await store();
const L1 = st["acad_items/m1-l1"];
ok(L1.published && L1.recording && L1.published.rev === L1.approved.rev, "Lesson approved, recorded and published as the same revision");
await page.click('[data-act="tab"][data-tab="content"]'); await W(150);
await page.fill("#axf_summary", "NEW DRAFT SUMMARY after publication."); await W(1100);
ok(await page.locator("text=Draft differs from published").count() > 0, "Draft and published versions are distinguishable");
await sub("export");
await page.click('[data-act="expscope"][data-v="published"]'); await W(100);
await page.click('[data-act="exp"][data-k="scripts"]'); await W(600);
let ex = await page.inputValue("#exOut");
ok(ex.includes("1.1 Operations is how the business keeps its promises") && !ex.includes("NEW DRAFT SUMMARY") && ex.includes("Published version r"), "Published export uses the published revision, not the newer draft");
ok(/Not included \(not published yet\)/.test(ex), "Published export lists what isn't published");
await page.click('[data-act="expscope"][data-v="draft"]'); await W(100);
await page.click('[data-act="exp"][data-k="scripts"]'); await W(400);
ex = await page.inputValue("#exOut");
ok(ex.includes("NEW DRAFT SUMMARY") && ex.includes("(not approved)"), "Draft export shows the draft and labels its status");

// 6. ordering persists
await sub("curriculum"); await openItem("m2");
await page.click('[data-act="move"][data-dir="-1"]'); await W(400);
await go("#academy");
st = await store();
ok(st["acad_items/m2"].order === 1 && st["acad_items/m1"].order === 2, "Reordering modules persists after reload");
await sub("curriculum"); await openItem("m2"); await page.click('[data-act="move"][data-dir="1"]'); await W(400);

// 7. add and delete a lesson
await openItem("m3");
await page.click('[data-act="additem"][data-type="lesson"]'); await W(400);
await page.fill("#axTitle", "Temporary lesson"); await W(1000);
st = await store();
const tmp = Object.entries(st).find(([k, v]) => k.startsWith("acad_items/") && v.title === "Temporary lesson");
ok(tmp && tmp[1].parent === "m3" && tmp[1].type === "lesson", "Adding a lesson creates a child record under Module 3");
await page.click('[data-act="delitem"]'); await W(400);
st = await store();
ok(!st[tmp[0]], "Deleting the new lesson removes it");

// 8. links
await openItem("m2");
await page.click('[data-act="tab"][data-tab="links"]'); await W(150);
await page.check('input[data-arr="items|m2|links.pillars"][value="p-improvement"]'); await W(300);
await openItem("p-improvement"); await page.click('[data-act="tab"][data-tab="links"]'); await W(150);
ok(await page.locator('.ptpane button[data-act="open"][data-id="m2"]').count() > 0, "Linking a pillar to a module shows on the pillar's 'Linked from'");
await openItem("m4-lo3"); await page.click('[data-act="tab"][data-tab="links"]'); await W(150);
ok(await page.locator("text=Recognition of specialist advice needs (rubric v1)").count() > 0, "Learning outcome shows the rubric criterion that assesses it");

// 9. masterclass planning
await sub("masterclasses");
ok(await page.locator("text=Frequency not agreed.").count() === 1, "Masterclasses show the unagreed frequency decision");
await page.click('details[data-key="mc:mc1"] > summary'); await W(150);
await page.fill('input[data-bind="mc|mc1|date"]', "2030-01-15"); await page.dispatchEvent('input[data-bind="mc|mc1|date"]', "change"); await W(300);
await page.selectOption('select[data-bind="mc|mc1|status"]', "Planned"); await W(300);
await page.fill("#pp_mc1", "Collect three example tasks from pilot learners"); await page.fill("#ppd_mc1", "2029-12-20"); await page.click('form[data-form="prep"][data-id="mc1"] button'); await W(300);
await sub("overview");
ok(await page.locator("#acMain >> text=SOP clinic").count() > 0, "Dated masterclass appears under upcoming");
st = await store();
ok(Object.values(st).some(v => v && v.mc === "mc1" && v.kind === "Prepare"), "Preparation task saved against the masterclass");

// 10. pilot: learner from existing contact, enrolment, progress, feedback
await sub("pilot"); await W(300);
await page.fill("#ln_n", "Pilot Founder A"); await page.selectOption("#ln_c", "client:cTEST1"); await page.click('form[data-form="learner"] button'); await W(400);
st = await store();
const lrn = Object.entries(st).find(([k, v]) => k.startsWith("acad_learners/") && v.name === "Pilot Founder A");
ok(lrn && lrn[1].contact && lrn[1].contact.id === "cTEST1", "Learner linked to an existing Nexa client record (id only)");
const lid = lrn[0].split("/")[1];
await page.click(`[data-act="enrol"][data-id="${lid}"]`); await W(400);
await page.selectOption(`select[data-prog$="|m1"]`, "Exercise done"); await W(400);
st = await store();
const en = Object.values(st).find(v => v && v.learner === lid && v.course === "c-of" && v.progress);
ok(en && en.progress.m1.state === "Exercise done" && en.status === "Active", "Manual progress recorded and enrolment becomes Active");
await page.selectOption("#fb_l", lid); await page.selectOption("#fb_i", "m4"); await page.selectOption("#fb_c", "3"); await page.selectOption("#fb_d", "Too hard");
await page.fill("#fb_t", "Module 4 felt dense."); await page.fill("#fb_s", "Split lesson 4.3 into two."); await page.click('form[data-form="fb"] button'); await W(400);
await sub("overview");
ok((await kpi("Feedback to act on")) === "1", "Pilot feedback counted on the overview");
await sub("pilot"); await page.click('[data-act="fbtask"]'); await W(400);
st = await store();
ok(Object.values(st).some(v => v && v.title && v.title.startsWith("Consider feedback: Split lesson 4.3")), "Feedback turned into a production task");

// 11. assessment workflow with rubric and case version pinning
await sub("assessments");
await page.selectOption("#sb_l", lid); await page.fill("#sb_u", "https://example.com/plan.pdf"); await page.click('form[data-form="sub"] button'); await W(600);
st = await store();
const s1 = Object.entries(st).find(([k, v]) => k.startsWith("acad_subs/") && v.learner === lid);
const s1id = s1[0].split("/")[1];
ok(s1[1].rubric === "a-cap--v1" && s1[1].caseRev === 1 && s1[1].status === "Submitted", "Submission pinned to rubric v1 and case r1");
await sub("overview");
ok((await kpi("Awaiting assessment")) === "1", "Submitted work shows as awaiting assessment");
await sub("assessments"); await page.click(`button[data-act="subopen"][data-id="${s1id}"]`); await W(300);
await page.click('[data-act="substart"]'); await W(300);
for (const c of ["diag", "qs", "miss", "prio", "own", "feas", "comm", "spec", "meas"]) await page.check(`input[name="lv_${s1id}_${c}"][value="${c === "spec" ? 1 : 2}"]`);
await page.fill("#cn_spec", "Name the kind of adviser and what you would bring to them."); await page.fill("#sb_overall", "Good diagnosis. Specialist advice needs more precision."); await W(1000);
ok(await page.locator("text=Below Secure on a required criterion: Recognition of specialist advice needs").count() > 0, "Rubric standard check explains why it is not yet met");
await page.click('[data-act="subrevise"]'); await W(400);
st = await store();
ok(st["acad_subs/" + s1id].status === "Revision requested" && st["acad_subs/" + s1id].scores.spec.note.startsWith("Name the kind"), "Criterion-level feedback saved and revision requested");
// edit the case brief and make rubric v2 after the first submission
await openItem("a-cap"); await page.fill("#axf_effort", "CHANGED effort estimate."); await W(1100);
await sub("assessments");
await page.click('[data-act="rubnew"][data-id="a-cap"]'); await W(200);
await page.fill("#rc_n0", "Diagnosis (v2 wording)"); await page.click('[data-act="rubsave"]'); await W(400);
st = await store();
ok(!!st["acad_rubrics/a-cap--v2"] && st["acad_rubrics/a-cap--v1"].criteria[0].name === "Diagnosis", "New rubric version saved; v1 unchanged");
await page.click(`button[data-act="subopen"][data-id="${s1id}"]`); await W(200);
await page.click('[data-act="subresub"]'); await W(200);
await page.fill("#rs_n", "Added specific advisers and documents."); await page.click('form[data-form="resub"] button'); await W(600);
st = await store();
const s2 = Object.entries(st).find(([k, v]) => k.startsWith("acad_subs/") && v.prev === s1id);
ok(s2 && s2[1].attempt === 2 && s2[1].rubric === "a-cap--v1" && s2[1].caseRev === 1, "Resubmission is attempt 2, still pinned to rubric v1 and case r1");
const s2id = s2[0].split("/")[1];
await page.click('[data-act="substart"]'); await W(300);
for (const c of ["diag", "qs", "miss", "prio", "own", "feas", "comm", "spec", "meas"]) await page.check(`input[name="lv_${s2id}_${c}"][value="2"]`);
await W(300);
await page.click('details[data-key^="case:"] > summary'); await W(500);
ok(!(await page.textContent("#acReview")).includes("CHANGED effort estimate") && (await page.textContent("#acReview")).includes("3 to 5 hours"), "Review shows the case brief as submitted, not the later edit");
ok(!(await page.textContent("#acReview")).includes("Assessor reference"), "Learner-facing case view hides the assessor-only withheld-information list");
await page.click('[data-act="subdone"]'); await W(400);
st = await store();
ok(st["acad_subs/" + s2id].status === "Completed" && st["acad_subs/" + s2id].result === "Meets the standard", "Second attempt completed: Meets the standard");
ok(st["acad_subs/" + s1id].result === "Not yet" && st["acad_subs/" + s1id].status === "Revision requested", "First attempt and its feedback are unchanged");
await go("#academy"); await sub("overview");
ok((await kpi("Awaiting assessment")) === "0", "After completion nothing awaits assessment (reloaded)");

// 11b. POSI is assessed with its own rubric and wording
await sub("assessments");
await page.selectOption("#sb_l", lid); await page.selectOption("#sb_a", "a-posi"); await page.click('form[data-form="sub"] button'); await W(600);
st = await store();
const p1 = Object.entries(st).find(([k, v]) => k.startsWith("acad_subs/") && v.assessment === "a-posi");
ok(p1 && p1[1].rubric === "a-posi--v1", "POSI submission pinned to the POSI rubric");
await page.click('[data-act="substart"]'); await W(300);
for (const c of ["diag", "choice", "own", "made", "step", "meas", "risk"]) await page.check(`input[name="lv_${p1[0].split("/")[1]}_${c}"][value="2"]`);
await W(300); await page.click('[data-act="subdone"]'); await W(400);
st = await store();
ok(st[p1[0]].result === "Evidenced", "POSI completes with the result 'Evidenced'");
ok((await page.textContent("#acReview")).includes("implementation in the learner's own business"), "POSI review labels the evidence as implementation, not proof of results");

// 12. decisions
await sub("decisions");
await page.click('details[data-key="dec:d01"] > summary'); await W(150);
await page.selectOption('select[data-bind="dec|d01|status"]', "Agreed"); await W(300);
ok(await page.locator("text=Record the agreed wording and date.").count() > 0, "Agreed decision without wording is flagged");
await page.click('[data-act="decf"][data-v="all"]'); await W(200);
await page.click('details[data-key="dec:d01"] > summary').catch(() => {}); await W(100);
if (!(await page.isVisible('textarea[data-bind="dec|d01|agreed"]'))) await page.click('details[data-key="dec:d01"] > summary');
await page.fill('textarea[data-bind="dec|d01|agreed"]', "One masterclass a month (test)."); await page.fill('input[data-bind="dec|d01|agreedOn"]', "2026-10-21"); await page.dispatchEvent('input[data-bind="dec|d01|agreedOn"]', "change"); await W(1000);
await sub("overview");
ok((await kpi("Decisions open")) === "16", "Agreeing a decision updates the open count (16)");

// 13. exports and downloads
await sub("export");
for (const k of ["programme", "handbook", "outline", "scripts", "exercises", "cases", "rubrics", "mc"]) {
  await page.click(`[data-act="exp"][data-k="${k}"]`); await W(300);
  const t = await page.inputValue("#exOut"); ok(t.length > 800 && t.startsWith("# "), "Export '" + k + "' produced Markdown (" + t.length + " chars)");
  if (k === "cases") ok(!t.includes("Assessor reference") && !t.includes("Common weaknesses") && !t.includes("Accept small, real changes") && t.includes("Kestrel Signs") && t.includes("Proof of Skill Implementation"), "Case brief export is learner-facing only");
  if (k === "handbook") ok(t.includes("| OF101 |") && t.includes("| OF195 |") && t.includes("**Principle**") && t.includes("Have you thought about"), "Module handbook has the course table, principles and coaching questions");
  if (k === "rubrics") ok(t.includes("| Criterion |") && t.includes("Rubric v2 (current)") && t.includes("Assessor reference"), "Rubric export includes versions, table and assessor guidance");
}
await page.click('[data-act="exp"][data-k="outline"]'); await W(300); await page.click('[data-act="expdl"]'); await W(400);
await page.click('[data-act="exp"][data-k="all"]'); await W(500); await page.click('[data-act="expdl"]'); await W(600);
const dls = await page.evaluate(() => window.__downloads.map(d => ({ f: d.filename, n: d.size, head: atob(d.b64).slice(0, 4) })));
ok(dls.some(d => /^course-outline-operations-fundamentals\.md$/.test(d.f) && d.n > 1000), "Course outline downloads as .md");
ok(dls.some(d => /operations-academy-export\.zip$/.test(d.f) && d.head === "PK\u0003\u0004"), "Everything downloads as a valid .zip");
const zipB64 = await page.evaluate(() => window.__downloads.find(d => /\.zip$/.test(d.filename)).b64);
writeFileSync(join(BASE, "export.zip"), Buffer.from(zipB64, "base64"));

// 14. demo records separated
await sub("pilot"); await page.click('[data-act="mkdemo"]'); await W(800);
st = await store();
ok(Object.values(st).filter(v => v && v.demo).length >= 3, "Practice records created and flagged demo");
await sub("overview"); await page.uncheck('[data-act="demo"]'); await W(200);
ok((await kpi("Awaiting assessment")) === "0", "Demo submission excluded from counts by default");
await page.check('[data-act="demo"]'); await W(200);
ok((await kpi("Awaiting assessment")) === "1", "Demo submission counted only when demo records are included");
await sub("pilot"); await page.click('[data-act="rmdemo"]'); await W(600);
st = await store();
ok(!Object.values(st).some(v => v && v.demo), "All demo records removed");

// 15. mobile layout
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await m.addInitScript(`window.__SEED__=${JSON.stringify(seed)};\n${mock}`);
const mp = await m.newPage(); mp.on("pageerror", e => errors.push("mobile: " + e.message)); mp.on("dialog", d => d.accept());
const noHScroll = async (name) => { const r = await mp.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]); ok(r[0] <= r[1] + 1, "Mobile " + name + ": no horizontal page scroll (" + r[0] + " ≤ " + r[1] + ")"); };
for (const [s, file] of [["overview", "m-overview"], ["curriculum", "m-curriculum"], ["production", "m-production"], ["masterclasses", "m-masterclasses"], ["assessments", "m-assessments"], ["pilot", "m-pilot"], ["decisions", "m-decisions"], ["export", "m-export"]]) {
  await mp.goto(URL0 + "#academy"); await mp.waitForTimeout(400);
  await mp.click(`#acSub [data-acsub="${s}"]`); await mp.waitForTimeout(300);
  if (s === "curriculum") { await mp.click('.actree button[data-id="m4"]'); await mp.waitForTimeout(300); }
  await noHScroll(s);
  await mp.screenshot({ path: join(OUT, file + ".png"), fullPage: s !== "curriculum" });
}
// desktop shots
await go("#academy"); await sub("curriculum"); await openItem("m5-l3"); await page.screenshot({ path: join(OUT, "02-curriculum-desktop.png") });
await page.click('[data-act="pv"][data-v="1"]'); await W(200); await page.screenshot({ path: join(OUT, "03-curriculum-preview.png") });
await sub("production"); await page.screenshot({ path: join(OUT, "04-production.png") });
await sub("assessments"); await page.click(`button[data-act="subopen"][data-id="${s1id}"]`); await W(300); await page.screenshot({ path: join(OUT, "05-assessment-review.png"), fullPage: true });
await sub("masterclasses"); await page.screenshot({ path: join(OUT, "06-masterclasses.png") });
await sub("decisions"); await page.screenshot({ path: join(OUT, "07-decisions.png") });
await sub("overview"); await page.screenshot({ path: join(OUT, "08-overview-after.png"), fullPage: true });

// 16. signed out: no runtime
const so = await browser.newContext({ viewport: { width: 1200, height: 800 } });
await so.addInitScript(() => localStorage.setItem("__noclaude", "1"));
const sp = await so.newPage(); sp.on("pageerror", e => errors.push("signed-out: " + e.message));
await sp.goto(URL0 + "#academy"); await sp.waitForTimeout(400);
ok((await sp.textContent("#acMain")).includes("Sign in to claude.ai"), "Without the runtime the Academy shows a sign-in empty state, no hard-coded data");

ok(errors.length === 0, "No page errors" + (errors.length ? ": " + errors.slice(0, 5).join(" | ") : ""));
console.log(`\n${pass} passed, ${fail} failed`);
writeFileSync(join(BASE, "results.txt"), results.join("\n") + `\n\n${pass} passed, ${fail} failed\n`);
await browser.close(); srv.close();
process.exit(fail ? 1 : 0);
