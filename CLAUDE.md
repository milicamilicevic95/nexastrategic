# NexaStrategic due diligence workspace

This folder is Mila Milićević's due diligence workspace. Read this file in full before doing any DD work.

## Context

Mila (NexaStrategic) runs operational, governance, compliance and light legal due diligence on UK solar installers that a buyer (the Client) wants to acquire. She does not give regulated legal advice; legal conclusions in any output say "should be confirmed by the buyer's lawyers".

Each target completes the portal at nexastrategic.com/review, which writes to the Airtable base "NexaStrategic". Per company the portal holds 123 document requests and 97 questions across 14 sections. The 97 are 83 closed questions (Yes, Partly, No, Not sure, Not applicable) plus one open question per section (Q{n}.O).

Mila reviews in Airtable, sends follow-ups through the portal, holds a management call, then issues a standard report so the Client can compare targets side by side.

Sections 5 (financial crime) and 9 (financial controls) are reviewed by Alex, the fractional CFO, who follows up with targets himself. Tax is out of scope.

## Skills

Three skills do the work. They are synced to Mila's account, so they load in every session; they are not stored in this repository.

| Skill | Use when | Writes to |
|---|---|---|
| `dd-register-checks` | A target is invited or named, or Mila asks for outside-in checks | DD Companies: Register checks (append only). DD Follow-ups only if Mila says yes |
| `dd-first-pass` | A target has submitted (fully or partly) and Mila asks for a review | DD Responses: Evidence level, Score, For the call, Call notes (only where empty). New DD Findings and DD Follow-ups rows |
| `dd-report` | Mila asks for a report, or to compare targets | A new Claude Doc. Overall rating and Executive summary only if empty or Mila says to replace |

Report template: "Due Diligence Report Template", https://claude.ai/artifact/WBb9ci9mtxCFzLFSAcFLJV (a Claude Doc, read through the Claude Docs connector).

## Airtable

Base: `appW06EMIpNUylqOT` (NexaStrategic). Always use table and field IDs, never names. For single selects, write the option name as a plain string. Write at most 50 records per call.

| Table | ID | How a company's rows are found |
|---|---|---|
| DD Companies | `tblWcwSf0Jhb8Tqxf` | One row per target |
| DD Requests | `tbl7N1fOGZu1yUmkE` | Company code `fldRGyw3d96IuDg9a` = Portal code |
| DD Responses | `tbl6XAgvmOyB9MuxL` | Company code `fldzSI0YvqPd7q8Rn` = Portal code |
| DD Findings | `tblCFpjgbXfNpNLq7` | Company link `fldERCqkeKghOwRqn` = record ID |
| DD Follow-ups | `tblavRdUex8ZyWwd4` | Company link `fldZIFP6SdzxwPKPj` = record ID |

The full field reference is in each skill. The fields used outside the skills:

DD Companies: Company `fldTkY60OXM8Atq69` · Client `fldNBjldJ9tzfFHGr` · Project `fldTiz22a3GXOBLtL` · Status `fldlhhPlRh9gOKZL9` (Invited, Submitted, In review, Call booked, Report issued) · Access code `fldQz7laruKfuAb0z` · Portal code `flded2qN3NfqsKr6W` (formula) · Portal link `fldjQPfyGE1JkDuJ2` (formula) · Attested at `fld5CgQyFdQNNr1ya` · Progress `fldzmwTRA4EVA5RSq` · Register checks `fldpRattUeinHp0Q2` · Report issued `fld251pzH5mBoHfnk`

Legacy, do not use: the DD Domains table, the DD Companies Portfolio field (use Client), and the per-question Finding, Recommendation, Priority, Red flag, Impact, Likelihood and Owner fields in DD Responses. Findings live in DD Findings.

Schema last checked against all three skills on 28 October 2026: every field ID, type and select option matched.

## Workflow

1. **Invite.** Create the DD Companies row and give Mila the portal link (procedure below).
2. **Register checks.** Run `dd-register-checks` straight after the invite, before the target's answers arrive, so the checks are independent of what management says.
3. **First pass.** When the target submits, run `dd-first-pass`.
4. **Mila's review.** Mila works through the drafts in Airtable: confirms findings, adjusts scores, edits follow-ups.
5. **Follow-ups.** Mila ticks Send on the follow-ups she wants; they appear in the target's portal and answers come back to DD Follow-ups.
6. **Management call.** Agenda from the first pass. Mila records call notes and awards any score of 3.
7. **Report.** Run `dd-report`, Mila edits and signs off, then sets Report issued herself.

## Rules

- Never tick Reviewed, Confirmed or Send. Those are Mila's decisions.
- Never overwrite a field Mila has filled. Write only to empty fields; where a skill appends (Register checks), add a dated block underneath.
- Never set Report issued, and never change Overall rating, a finding's Treatment or any rating Mila has set.
- Sections 5 and 9 go to Alex: score and draft findings marked "For Alex", Owner Alex, no follow-ups, off the call agenda, and a short list for Mila to forward to him.
- Tax is out of scope. Anything with tax exposure says "Refer to Alex".
- Ask before any Airtable write unless Mila has already asked for that write.
- Never delete records without Mila's explicit say-so for those records.
- Never write a person's home address, date of birth or other personal details anywhere.
- Writing: British English. No em dashes. No rhetorical questions. No "it's not X, it's Y". Short, factual sentences with dates, numbers and item references.

## Inviting a new target

When Mila says "Invite [company] for [client]":

1. Check DD Companies for an existing row with the same or a similar company name. If one exists, stop and ask.
2. Check how the Client is already spelt in DD Companies and use the same spelling, because `dd-report` compares targets by exact Client value.
3. If Mila has not given a Project (the deal code name the target sees), ask for it. Do not invent one.
4. Create one DD Companies row with Company, Client and Project only.
5. Read the row back and give Mila the Portal link field value to send to the target's lead contact only.
6. Offer to run `dd-register-checks` now.

The portal creates the 123 request rows and 97 response rows itself the first time the target opens the link. Never create request or response rows by hand.

## Known points to watch

- **Duplicate seeding.** A complete company has exactly 123 requests and 97 responses. More means the portal seeded twice; list the duplicates for Mila to delete before writing anything (`dd-first-pass` step 1).
- **Follow-up status.** Draft follow-ups are created with Status empty. The DD Companies "Open follow-ups" count includes every follow-up not Closed, so it counts unsent drafts and answered ones. When reporting outstanding follow-ups, treat a follow-up as outstanding only if Send is ticked and Status is not Answered or Closed; list unsent drafts separately.
- **Portal code for new rows.** If Access code is empty, Portal code is generated from the record ID and creation time. The DD Follow-ups "Company code" lookup reads Access code, not Portal code, so it is empty for such rows. The only company tested end to end had an Access code set. Until Mila confirms which lookup the portal uses for follow-ups, check the first real target's follow-ups appear in its portal.
