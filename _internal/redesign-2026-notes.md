# Redesign, October 2026: before you deploy

Built from the approved Claude Design canvas ("NexaStrategic Redesign").

## Must do before the site goes live
1. **ICO registration number.** /privacy/ shows "[ICO number]". Fill it in (or register at ico.org.uk first).
2. **Waitlist token.** Netlify, Site configuration, Environment variables: add `WAITLIST_AIRTABLE_PAT`, an Airtable
   personal access token with `data.records:write` on the NexaStrategic base (appW06EMIpNUylqOT). The function falls
   back to `AIRTABLE_PAT` if that token can write to the base. Optional overrides: `WAITLIST_AIRTABLE_BASE_ID`,
   `WAITLIST_AIRTABLE_TABLE_ID`.
3. **Test the waitlist** on the deploy preview: one real submission should appear in Airtable, Client waitlist, Status New.
4. **Confirm the results figures** on /work/ ($250,000 "recovered", $120,000, 57 to 16 days). See release_review.md.

## Held back on purpose
- **Operational due diligence** is not on Home, Services or Contact until insurance is confirmed in writing
  (legal brief, section 5). The designs for it are on the canvas (Services, section 03; Home, band 03).
  To publish: rebuild those sections from the canvas and add "Operational due diligence" back to the
  waitlist radio buttons (the function already accepts it).
- **Client names.** Founders House is described as "a London founder programme" until David consents in writing.
- **Pattern entry pages.** /pattern-library/ lists all 68 patterns; individual entry pages wait for full entries.

## Retired
/thinking/ -> /writing/, /tools/ and /tool-terms/ -> /pattern-library/ and /terms/, /enquire/ -> /contact/ (301s in
netlify.toml). Tool Terms are archived in _internal/archive/ (keep 6 years if any tool was sold).
Professional Services Terms v1.0 is preserved unchanged at /professional-terms/v1-0/.

## Concentric
Home, Council, Membership (/concentric/apply/), Journal and About are rebuilt. Essays, Keel, Research Report,
Edition One, Evidence Base and Legal keep their layouts and now use the free fonts (Young Serif, Hanken Grotesk)
via concentric/styles.css. The Recoleta demo font is no longer referenced.
Member quotes are not on the page yet; add them when you have written permission.
