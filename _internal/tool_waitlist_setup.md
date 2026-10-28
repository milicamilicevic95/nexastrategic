# NexaStrategic tool waitlist — deployment requirements

The website includes a waitlist form and a Netlify Function. **It will not accept real submissions until the environment variables and Airtable table below are configured.** This prevents silently losing signups.

## Airtable

Create a dedicated table for PDA Tool Waitlist (not the Concentric Applications table), with these fields and types:

- `Name` — single line text (primary field)
- `Email` — email
- `Tool` — single select: `The Decision Tool`, `A or B?`, `Both / all tools`
- `Newsletter opt-in` — checkbox
- `Created` — optional created-time field; do not write to it

Set Netlify environment variables:

- `WAITLIST_AIRTABLE_BASE_ID` — base containing the waitlist table
- `WAITLIST_AIRTABLE_TABLE_ID` — ID of the waitlist table
- `AIRTABLE_PAT` — existing token, if it has permission to write to this table/base. Otherwise update token scopes/permissions; do not put token in HTML.

## Beehiiv (optional marketing subscription)

Set:

- `BEEHIIV_API_KEY` — API key for Professional Devil's Advocate Beehiiv account
- `BEEHIIV_PUBLICATION_ID` — publication ID for Professional Devil's Advocate / Build Notes

Only checked opt-ins are sent to Beehiiv. Unchecked signups are saved to the Airtable waitlist only. Beehiiv failure does not erase a successful waitlist signup; the visitor is told their optional newsletter subscription could not be confirmed. Beehiiv API access depends on account entitlement.

## Consent and access

Waitlist emails are required to deliver tool availability/access notifications. Optional Beehiiv product marketing is unchecked by default. Selecting a specific tool records interest only; the waitlist announcement covers all released tools. The website does not claim that payment or access is automatic or free.

## Tests after deploying

1. Submit one signup with newsletter checkbox **unchecked**. Verify Airtable record, and verify no Beehiiv subscription was created.
2. Submit one with checkbox **checked**. Verify Airtable record and Beehiiv subscriber.
3. Test all three tool selections, desktop/mobile layout, and form error state.
4. Confirm the pre-existing `/concentric/apply/` form still submits to its original endpoint.

Note: This build has passed static/syntax checks, but the live external integrations cannot be verified without configured credentials and a deployment.
