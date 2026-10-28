# Concentric domain migration

The combined NexaStrategic deployment cannot redirect requests that still arrive at the separate `concentric-pilot.netlify.app` site.

After the combined site is verified, deploy `old-concentric-_redirects` as `_redirects` on the OLD Concentric Netlify site. This permanently redirects every known Concentric page to its new `nexastrategic.com/concentric/...` route.

Do not deploy these redirects on the combined NexaStrategic site.
