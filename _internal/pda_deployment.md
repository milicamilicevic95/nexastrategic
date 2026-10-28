# NexaStrategic structural rebuild - 10 October 2026

## Pages
- / : Mila introduction, selected evidence, thought leadership, PDA and Concentric introductions, contact.
- /work/ : operating roles, selected work, background and enquiries.
- /thinking/ : Operating Judgement, RISE 2026 speaking and Build Notes.
- /tools/ : product catalogue and the A or B? waitlist.
- /tools/decision-tool/ : launch banner, $15 general-release price, explanation and three steps. No purchase links, buttons or checkout scripts.
- /concentric/ : current live pages preserved where retrievable; existing uploaded assets retained.

## Deployment
Deploy the ZIP contents to the existing NexaStrategic Netlify site. Retain the site's existing environment variables and functions configuration. There are no API secrets in frontend code. The package is not published by this task because Netlify browser access was denied.

## Changed behaviour
Old homepage #tools, #tool-waitlist, #work, #proof and #approach links route to the new destinations through legacy-links.js. Contact stays on the homepage. The A or B? form submits the existing a-or-b value to /api/tool-waitlist. Its optional checkbox records newsletter consent; the original backend does not automatically subscribe to Beehiiv. This is not changed or misrepresented as an automatic newsletter integration.

Corrected a doubled-escape regex in the supplied waitlist function that rejected ordinary email addresses. No schema changes. No new waitlist cap implementation; do not advertise an enforced cap until the existing registration process is audited.

## Checks completed
JavaScript syntax; each rebuilt page has one H1; local links and assets resolve; tools and form are absent from homepage; product page has no purchase controls. Waitlist validation covers normal/malformed email, invalid JSON, method and honeypot; mocked successful submission verified product interest and optional consent. No live records created.

## Verification limits
Browser screenshots and mobile layout were not verified in this environment. Responsive CSS covers narrow screens but needs live visual review. Live waitlist delivery depends on PDA_AIRTABLE_PAT, PDA_AIRTABLE_BASE_ID and PDA_AIRTABLE_TABLE_ID already configured in Netlify. Stripe checkout, public-sale entitlements and purchase tracking are separate work.

Operating Judgement URL is retained from the existing website metadata; it could not be independently opened by the research tool. Check it before publication. The generic LinkedIn homepage link was removed rather than presented as Mila's profile. Add the verified profile URL when available.

The three-iPhone visual was not present in the upload. The product page uses a text hero. No unsupported brief, download, offline or answer-storage claims are advertised. Some licensed Concentric font paths were absent from the upload; preserve any existing production copies.
