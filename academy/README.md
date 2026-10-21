# Operations Academy (working name)

An internal area of Nexa OS (`contracts/nexa-engagement-builder.html`, the **Academy** tab) for developing and running the operations programme for Founders House: curriculum, content production, masterclasses, practical assessment, pilot learners and feedback, decisions to agree with David, a sources register, and Markdown export.

## Where things live

| Path | What it is |
|---|---|
| `contracts/nexa-engagement-builder.html` | Nexa OS. The Academy is the `#view-academy` section and the last `<script>` block. |
| `academy/content/*.mjs` | The draft educational content: programme architecture, pillars, course map, Operations Fundamentals (6 modules, 15 lessons with scripts, exercises, resources), the capstone case and rubric v1, masterclass proposals, decisions, sources and starter tasks. |
| `academy/tools/build-seed.mjs` | Turns the content into database records (`acad_*` collections) for the first load. |
| `academy/tools/e2e/` | Browser checks against a test double of the claude.ai runtime (75 checks). |
| `academy/exports/` | A Markdown export of the seeded drafts, as produced by the app's Export tab. |

Once loaded, **the database is the source of truth**. Edit content in the app, not in `academy/content/`. The content files exist for the first load and for review in Git.

## Data

All records live in the Nexa OS artifact's `db` store, which only the owner can read or write (rule `{path: "", read: "owner", write: "owner"}`). Collections:

`acad_items` (programme, pillars, courses, modules, lessons, outcomes, exercises, resources, assessments) · `acad_revs` (immutable revisions) · `acad_rubrics` (immutable rubric versions) · `acad_subs` (submissions, pinned to a case revision and rubric version) · `acad_learners` · `acad_enrol` · `acad_feedback` · `acad_mc` (masterclasses) · `acad_tasks` · `acad_dec` (decisions) · `acad_src` (sources register).

Learners can link to an existing Nexa client or lead by id; nothing is copied from the finance record.

## Commands

```sh
node academy/tools/build-seed.mjs /tmp/seed          # rebuild seed records
CHROMIUM_PATH=/path/to/chrome node academy/tools/e2e/run.mjs /tmp/e2e   # needs playwright-core
```
