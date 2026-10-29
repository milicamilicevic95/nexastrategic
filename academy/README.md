# Operations Academy (working name)

An internal area of Nexa OS (`contracts/nexa-engagement-builder.html`, the **Academy** tab) for developing and running the operations programme for Founders House: curriculum, content production, masterclasses, practical assessment, pilot learners and feedback, decisions to agree with David, a sources register, and Markdown export.

## Where things live

| Path | What it is |
|---|---|
| `contracts/nexa-engagement-builder.html` | Nexa OS. The Academy is the `#view-academy` section and the last `<script>` block. |
| `academy/content/*.mjs` | The draft educational content: programme architecture, pillars and course map; Operations Fundamentals rebuilt as one ball, eight panels (`of-course.mjs`, OF101 to OF107); course 2, Not your own bottleneck (`course2.mjs`, which holds the earlier six modules from `of-1.mjs` to `of-3.mjs`, the capstone and the POSI); masterclasses, decisions, sources and starter tasks. |
| `academy/courses/` | Readable Markdown copies of the course map and finished modules, for review outside the app. |
| `academy/tools/build-seed.mjs` | Turns the content into database records (`acad_*` collections) for the first load. |
| `academy/tools/migrate-2026-10-29.mjs` | One-off migration that applied the restructure to the live database, pinned to the versions read. |
| `academy/tools/e2e/` | Browser checks against a test double of the claude.ai runtime (80 checks), and `export.mjs`, which regenerates `academy/exports/`. |
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
CHROMIUM_PATH=/path/to/chrome node academy/tools/e2e/export.mjs          # regenerate academy/exports/
```
