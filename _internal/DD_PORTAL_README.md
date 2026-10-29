# NexaStrategic due diligence portal: setup

Two files go into the website repository, in these exact locations:

- `review/index.html` – the client page, served at `/review/`
- `netlify/functions/dd-portal.mjs` – the connection to Airtable

A client only reaches their own company through a private link: `/review/?c=CODE`. The address on its own shows a short private notice.

## Where the portal lives

The zip adds one address to the site, `/review/`. It is not linked from your menu, footer or any page, and it tells search engines not to index it. Nobody finds it unless you send them a link.

- With a company's link (`/review/?c=...`) it opens that company's portal.
- Without a code it shows only "This page is for invited companies". The example preview appears only if you add `?preview` to the address.
- If the site builds a sitemap automatically, check `/review/` is not listed. If it is, exclude it in the sitemap settings.
- Optional, for extra certainty: add these two lines to the site's `_headers` file (create it in the publish folder if there isn't one):

```
/review/*
  X-Robots-Tag: noindex, nofollow
```

## 1. Add the Airtable token in Netlify

1. In Airtable, go to Builder hub > Personal access tokens > Create token.
2. Scopes: `data.records:read` and `data.records:write`. Access: the NexaStrategic base only.
3. In Netlify: Site configuration > Environment variables > Add variable.
   - Key: `AIRTABLE_TOKEN`
   - Value: the token
   - Scope: Functions
4. Redeploy the site.

`AIRTABLE_BASE` is optional. Without it the function uses the NexaStrategic base (`appW06EMIpNUylqOT`).

If `netlify.toml` sets a different functions folder, put `dd-portal.mjs` in that folder instead.

## 1b. Companies House lookup (optional, free)

The Your details page has a Look up button that fills in the legal name, company number and registered office from Companies House. It needs a free API key:

1. Register at developer.company-information.service.gov.uk and create an application.
2. Create a REST API key for it ("live" environment).
3. In Netlify, add a second environment variable: Key `COMPANIES_HOUSE_KEY`, Value the key, Scope Functions. Redeploy.

Without the key the portal still works; the lookup tells the company to type the details in by hand.

## 2. Fonts

The page asks for Roca One and Neue Montreal first and falls back to Fraunces and Hanken Grotesk from Google Fonts. If the site's own font files sit in the zip, add the site's existing `@font-face` stylesheet link to the `<head>` of `review/index.html` so the portal matches the rest of the site exactly.

## 3. Invite a company

In Airtable, open the **Due Diligence Review** interface and add a company on the Targets page, or add a row to **DD Companies**:

| Field | What to enter |
|---|---|
| Company | Target's trading name |
| Client | The acquirer, as the target should see it (required: companies without a Client are hidden from Targets) |
| Project | Deal code name, if any |
| P1 due | 5 working days from sending |
| P2 due | 10 working days from sending |
| Status | Invited |

The **Portal link** fills in automatically. Send it to the named lead contact only. The first time they open it, the portal creates all 123 document rows and 97 question rows for that company, so the review screens are complete from the start.

To revoke access, type a new value into Access code (24 letters and numbers); the old link stops working.

A dummy company, "TEST Solar Ltd", is already set up for an end-to-end test. Delete it, and its finding and follow-up, once you have tried the live portal.

## 4. What the client does

- Works through the 14 sections. Everything autosaves.
- Marks each requested document as Provided, To follow (with a date), Not available or Not applicable.
- Uploads files of up to 4 MB each straight into the row's **Files** field in DD Requests. Larger files: they paste a data-room or SharePoint link into the note.
- Answers the questionnaire. Any answer other than Yes needs an explanation.
- Signs the attestation on the last page. This sets Status to Submitted.

## 5. Reviewing a company

Open the **Due Diligence Review** interface, then a company from Targets. The page runs top to bottom:

1. **Status:** progress, Priority 1 items outstanding, findings, red flags, open follow-ups and the portal link.
2. **Documents:** every request with its status, the client's note and the files. Click a row to preview files. Tick Reviewed and add a comment.
3. **Questionnaire:** each answer with the client's explanation, the documents that test it (Tested by) and the suggested score. Set Evidence level and Score; tick For the call where needed.
4. **Findings:** add one row per finding. Priority is calculated from Impact and Likelihood; tick Automatic red flag for the listed red flags.
5. **Follow-up questions:** add a question, tick Send, and it appears in the company's portal. Answers and files come back to the same row, and Status changes to Answered.
6. **Report:** overall rating, executive summary and the date the report was issued.

The All findings and Follow-ups pages show the same records across every company.

When the review is done, ask Claude to draft the report for that company from Airtable into the report template.

## 6. Do not rename

The function finds Airtable tables and fields by name. Renaming any of these breaks saving:

- Tables: DD Companies, DD Requests, DD Responses, DD Follow-ups
- DD Companies: Company, Client, Project, P1 due, P2 due, Access code, Portal code, Registered office, Companies House status, Status, Progress, Attested by, Attested role, Attested at, Legal name, Company number, Contact name, Contact role, Contact email, Contributors, Business summary, Headcount, Revenue band, Top three customer share, Main operational problem
- DD Requests: Key, Company, Company code, No., Section, Item, Priority, Status, Expected date, Client note, Files
- DD Responses: Key, Company, Company code, Code, Domain, Question, Client answer, Suggested score, Client explanation, Tested by
- DD Follow-ups: Question, Company, No., Related item, Send, Client answer, Files, Answered at, Status, Portal code

You can add fields freely (for example Reviewed, Score, Impact, Likelihood, Reviewer comment). The client never sees them.

## 7. Changing the questions

The pack is built into both files. To change an item, ask Claude to rebuild both files from the pack. Editing one file alone will put the page and the function out of step.
