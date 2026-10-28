# NexaStrategic Netlify form check

1. In Netlify > Forms, enable form detection if disabled.
2. Deploy this complete ZIP to the existing site (not a new site). Netlify detects the static form `nexa-enquiry` in `enquiry-form-registration.html` at deploy time.
3. Confirm `nexa-enquiry` appears under Forms. If absent, check the deploy log for form detection; do not treat the site as ready.
4. Open `/enquiry-sent.html` and `/enquiry-sent/` directly to check both success pages are published.
5. Submit a test from the homepage and confirm the submission appears under Forms. HTTP success and redirect alone do not prove a stored submission.
6. Add an email notification to milica@nexastrategic.com.

Form JS posts URL-encoded fields to `/` and only redirects after an HTTP 2xx response. A submission failure displays an email fallback.
