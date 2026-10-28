# Combined site QA

## Structure
- NexaStrategic root preserved.
- 15 requested Concentric directory routes created under `/concentric/`.
- 358 local HTML asset/link references checked; 0 unresolved local references.
- Concentric assets namespaced under `/concentric/assets/`; NexaStrategic assets remain under `/assets/`.
- No conflicting asset, route or Netlify Function filenames identified.

## Concentric brand
- Existing Concentric HTML, CSS, JS, layout and interactions retained as source of truth.
- Approved colors preserved: `#333A22`, `#F2EDE1`, `#C2963C`.
- Existing Recoleta / Neue Montreal font declarations preserved. The uploaded source ZIP did not include licensed font binaries; production paths are retained under `/concentric/assets/fonts/`.
- Legal remains in the Concentric footer.
- All six required Journal article routes and Research Report route are present.

## Navigation
- NexaStrategic Concentric link now points to `/concentric/`.
- Every Concentric page has a discreet `NexaStrategic ↗` link plus the existing parent-company footer statement.
- All Concentric internal links were rebased to `/concentric/...`.

## Apply / Airtable
- Form fields and approved Navigating options preserved.
- Browser submits same-origin to `/api/apply`.
- Netlify rewrites `/api/apply` to `/.netlify/functions/apply`.
- Function requires `AIRTABLE_PAT`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE_ID` environment variables.
- No Airtable PAT, Base ID, or Table ID is exposed in client-side code.
- `Submitted` is generated server-side.
- Success is returned only after Airtable responds successfully with a created record ID.
- Function syntax and mocked create-record flow tested: valid submission -> 200; incomplete submission -> 400; missing configuration -> 500.

## Redirects
- Combined-site legacy `.html` Concentric routes redirect permanently to clean directory routes.
- `migration/old-concentric-_redirects` contains permanent redirects for the separate old Concentric Netlify site. Those redirects must be deployed on that old site because a new Netlify deployment cannot redirect traffic arriving at a different Netlify site.

## Responsive/static checks
- Existing Concentric responsive breakpoints and mobile menu behavior are preserved unchanged.
- NexaStrategic responsive code is preserved from the supplied V12 build.
- Automated browser rendering is blocked by the execution environment's browser administrator policy, so final visual viewport confirmation should be done in the Netlify deploy preview before production promotion.
