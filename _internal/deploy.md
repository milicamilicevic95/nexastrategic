# NexaStrategic + Concentric deployment

## Netlify
Publish directory: repository root (`.`)
Functions directory: `netlify/functions`

## Required environment variables
Set these in Netlify before testing the Concentric application form:
- `AIRTABLE_PAT`
- `AIRTABLE_BASE_ID`
- `AIRTABLE_TABLE_ID`

The browser posts to `/api/apply`; `netlify.toml` rewrites that request to the Netlify Function. No Airtable credential or ID is embedded in browser code. `Submitted` is generated server-side only.

## Concentric licensed fonts
The uploaded Concentric ZIP references licensed font files but does not contain them. The CSS continues to use the approved production paths:
- `/concentric/assets/fonts/Recoleta-RegularDEMO.otf`
- `/concentric/assets/fonts/NeueMontreal-Regular.otf`
- `/concentric/assets/fonts/neuemontreal-bold.otf`

Add your existing licensed binaries at those paths before production deployment if they are part of your source repository.

## Old Concentric Netlify domain
See `migration/README.md`. The permanent redirects for the old standalone Netlify site must be deployed to that old site after verification.


## Keel (member decision profile)
Page: `/concentric/keel/` (not indexed, not linked from navigation). Files: `concentric/keel/index.html`, `keel.css`, `keel.js`, `keel-spec.js`. Function: `netlify/functions/keel.js`.

How it works: each member opens her personal link `/concentric/keel/?m=<Members record id>` (the **Keel link** field in the Members table builds it). Answers save in her browser as she goes. On submit the page posts to the `keel` function, which checks the record id exists in Members, checks every answer against `keel-spec.js`, and writes one record to the Diagnostics table by field id, linked to her Members record, Report Status "New". Renaming Airtable columns does not break it. Six month retake: the **Keel retake link** field (adds `&t=retake`, asks one extra question, sets Type to "Six month retake").

Environment variables (Netlify, Site configuration, Environment variables):
- `KEEL_AIRTABLE_PAT` an Airtable personal access token with `data.records:read` and `data.records:write` on the Concentric base (appO5tOyuLIfaVXy9). If unset, the function falls back to `AIRTABLE_PAT`, which only works if that token has access to the Concentric base.
- `KEEL_PILOT_CODE` optional. Any short code, for pilot testers who are not in Members: `/concentric/keel/?m=<code>`. Records are saved with "(pilot)" after the name and no member link. Remove it after the pilot.
- Optional overrides: `KEEL_BASE_ID`, `KEEL_TABLE_ID`, `KEEL_MEMBERS_TABLE_ID` (defaults are the Concentric base, Diagnostics and Members).

Changing a question: edit `concentric/keel/keel-spec.js` only (page and function both read it). Option text must match the Report Studio scoring; change both together.
