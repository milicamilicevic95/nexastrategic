// Regenerates academy/exports/ from a clean seed, using the app's own Export tab (drafts scope).
// Usage: node academy/tools/e2e/export.mjs   (needs playwright-core and a Chromium; set CHROMIUM_PATH)
import { chromium } from "playwright-core";
import http from "node:http";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";

const HERE = new URL(".", import.meta.url).pathname;
const REPO = join(HERE, "../../..");
const BASE = join(tmpdir(), "academy-export");
execFileSync("node", [join(REPO, "academy/tools/build-seed.mjs"), join(BASE, "seed")], { stdio: "ignore" });
const SKEL = '<!doctype html><html><head><meta charset=utf8><meta name=viewport content="width=device-width,initial-scale=1"></head><body>\n';
const html = SKEL + readFileSync(join(REPO, "contracts/nexa-engagement-builder.html"), "utf8") + "\n</body></html>";
const raw = JSON.parse(readFileSync(join(BASE, "seed/seed.json"), "utf8"));
const seed = {};
for (const [col, m] of Object.entries(raw)) for (const [id, d] of Object.entries(m)) seed[col + "/" + id] = d;
const mock = readFileSync(join(HERE, "mock.js"), "utf8");
const srv = http.createServer((q, r) => { r.writeHead(200, { "content-type": "text/html; charset=utf-8" }); r.end(html); }).listen(0);
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || "/opt/pw-browsers/chromium" });
const ctx = await browser.newContext();
await ctx.addInitScript(`window.__SEED__=${JSON.stringify(seed)};\n${mock}`);
const page = await ctx.newPage();
await page.goto("http://127.0.0.1:" + srv.address().port + "/#academy"); await page.waitForTimeout(600);
await page.click('#acSub [data-acsub="export"]'); await page.waitForTimeout(200);

const OUT = join(REPO, "academy/exports");
rmSync(OUT, { recursive: true, force: true }); mkdirSync(OUT, { recursive: true });
const files = [];
const grab = async (k, name) => {
  await page.click(`[data-act="exp"][data-k="${k}"]`); await page.waitForTimeout(300);
  writeFileSync(join(OUT, name), await page.inputValue("#exOut")); files.push(name);
};
await grab("programme", "01-programme-architecture.md");
for (const [cid, n, slug] of [["c-of", "02", "operations-fundamentals"], ["c-bn", "03", "not-your-own-bottleneck"]]) {
  await page.selectOption("#exC", cid); await page.waitForTimeout(200);
  await grab("handbook", `${n}a-module-handbook-${slug}.md`);
  await grab("outline", `${n}b-course-outline-${slug}.md`);
  await grab("scripts", `${n}c-lesson-scripts-${slug}.md`);
  await grab("exercises", `${n}d-exercises-and-resources-${slug}.md`);
}
await grab("cases", "04-case-briefs.md");
await grab("rubrics", "05-rubrics-and-assessor-guide.md");
await grab("mc", "06-masterclasses.md");
const day = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
writeFileSync(join(OUT, "README.md"), `# Export contents\n\n_Operations Academy (working name). Exported from Nexa OS on ${day}. Current drafts: nothing is approved unless its status says so._\n\n` + files.map(f => "- " + f).join("\n") + "\n");
await browser.close(); srv.close();
console.log(files.length + " files written to academy/exports");
