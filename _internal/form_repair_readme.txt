NexaStrategic form repair — 16 October 2026

Deploy the ZIP as a complete site, with index.html at the publish root.
The enquiry form now has a separate, static HTML registration form (enquiry-form-registration.html), and a flat confirmation URL (/enquiry-sent.html), alongside the existing /enquiry-sent/ page.
Netlify form detection MUST be enabled before redeployment. Verify the form named nexa-enquiry appears under Netlify Forms. Then set email notifications to milica@nexastrategic.com and submit a test enquiry.
A redirect to the confirmation page alone does NOT prove the submission was recorded.
If forms still fail after a fresh deployment, check the deploy log and form detection setting. Do not use the form for leads until a submission appears in Netlify.
