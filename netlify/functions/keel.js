// Keel submissions: browser posts to /api/keel, this writes one record to the
// Diagnostics table in the Concentric base, by field id, so renaming a column
// in Airtable never breaks it. No Airtable credential reaches the browser.
const SPEC = require('../../concentric/keel/keel-spec.js');

const BASE = process.env.KEEL_BASE_ID || 'appO5tOyuLIfaVXy9';
const DIAGNOSTICS = process.env.KEEL_TABLE_ID || 'tblGAkOzIXHFARoMl';
const MEMBERS = process.env.KEEL_MEMBERS_TABLE_ID || 'tblwgEg5KOS2XctrQ';

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body)
});

const clean = (v, max) => String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max || 300);

// Validate every answer against the spec. Returns { fields } or { error }.
function buildFields(answers, isRetake) {
  const F = SPEC.fields;
  const fields = {};
  for (const step of SPEC.steps) {
    for (const q of step.questions) {
      if (q.retakeOnly && !isRetake) continue;
      const a = answers[q.id];
      if (q.long) {
        const t = clean(a, q.max || 3000);
        if (!t) return { error: 'Please answer every question before submitting.' };
        fields[F[q.id]] = t;
        continue;
      }
      if (q.pick) {
        const picks = Array.isArray(a) ? a.map((x) => clean(x)) : [];
        const uniq = [...new Set(picks)];
        if (uniq.length !== q.pick || uniq.some((p) => !q.options.includes(p))) {
          return { error: 'Please choose exactly two things that matter most.' };
        }
        // Keep the order the options appear in, as the old form did.
        fields[F[q.id]] = q.options.filter((o) => uniq.includes(o)).join(', ');
        continue;
      }
      const v = clean(a);
      let ok = q.options.includes(v);
      if (!ok && q.other && v.indexOf('other:') === 0) {
        const own = clean(v.slice(6), 200);
        if (own) { fields[F[q.id]] = own; ok = 'done'; }
      }
      if (!ok) return { error: 'Please answer every question before submitting.' };
      if (ok !== 'done') fields[F[q.id]] = (q.store && q.store[v]) || v;
      if (q.conf) {
        const c = clean(answers[q.conf]);
        if (!SPEC.conf.includes(c)) return { error: 'Please say how sure you are for each reasoning question.' };
        fields[F[q.conf]] = c;
      }
    }
  }
  return { fields };
}

async function airtable(path, token, init) {
  const res = await fetch(`https://api.airtable.com/v0/${path}`, {
    ...(init || {}),
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
  });
  return res;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { ...json(405, { error: 'Method not allowed' }), headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', Allow: 'POST' } };
  }
  try {
    const token = process.env.KEEL_AIRTABLE_PAT || process.env.AIRTABLE_PAT;
    if (!token) {
      console.error('Missing KEEL_AIRTABLE_PAT / AIRTABLE_PAT');
      return json(500, { error: 'Keel is not configured yet.' });
    }
    if ((event.body || '').length > 40000) return json(413, { error: 'Submission too large.' });

    const b = JSON.parse(event.body || '{}');
    if (b.website) return json(200, { ok: true }); // honeypot

    // Access: a Members record id, or the shared pilot code.
    const access = clean(b.m, 60);
    const pilotCode = process.env.KEEL_PILOT_CODE || '';
    const isPilot = !!pilotCode && access === pilotCode;
    let memberId = null;
    if (!isPilot) {
      if (!/^rec[A-Za-z0-9]{14}$/.test(access)) return json(403, { error: 'This link is not valid. Please use the link in your welcome email.' });
      const m = await airtable(`${BASE}/${MEMBERS}/${access}`, token);
      if (m.status === 404 || m.status === 403) return json(403, { error: 'This link is not valid. Please use the link in your welcome email.' });
      if (!m.ok) { console.error('Members lookup', m.status, await m.text()); return json(502, { error: 'We could not check your link. Please try again in a minute.' }); }
      memberId = access;
    }

    const name = clean(b.name, 120);
    const email = clean(b.email, 200);
    const country = clean(b.country, 40);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json(400, { error: 'Please give your name and a valid email.' });
    if (!SPEC.countries.includes(country)) return json(400, { error: 'Please say where you are based.' });
    if (b.consent !== true) return json(400, { error: 'Please confirm consent to continue.' });

    const isRetake = b.type === 'retake';
    const built = buildFields(b.answers || {}, isRetake);
    if (built.error) return json(400, { error: built.error });

    const F = SPEC.fields;
    const fields = Object.assign(built.fields, {
      [F.Submission]: name + (isPilot ? ' (pilot)' : ''),
      [F.Email]: email,
      [F.Country]: country,
      [F.Consent]: true,
      [F.Submitted]: new Date().toISOString(),
      [F.Type]: isRetake ? 'Six month retake' : 'Baseline',
      [F.Status]: 'New'
    });
    if (memberId) fields[F.Member] = [memberId];
    // Timing from the page: seconds per section. Informational only, so bad values are dropped, never rejected.
    if (b.times && typeof b.times === 'object') {
      const parts = []; let total = 0;
      for (const st of SPEC.steps) {
        const v = Math.round(Number(b.times[st.id]));
        if (Number.isFinite(v) && v > 0 && v < 3600) { parts.push(st.id + ' ' + v); total += v; }
      }
      if (total > 0) { fields[F.Duration] = total; fields[F.SectionTimes] = parts.join(' \u00b7 '); }
    }

    const res = await airtable(`${BASE}/${DIAGNOSTICS}`, token, {
      method: 'POST',
      body: JSON.stringify({ records: [{ fields }], typecast: true })
    });
    if (!res.ok) {
      console.error('Airtable error', res.status, await res.text());
      return json(502, { error: 'We could not save your answers. Please try again in a minute; nothing has been lost on this page.' });
    }
    const out = await res.json();
    if (!out.records || !out.records[0] || !out.records[0].id) return json(502, { error: 'We could not confirm your answers were saved. Please try again.' });
    return json(200, { ok: true });
  } catch (err) {
    console.error(err);
    return json(500, { error: 'Something went wrong. Please try again; your answers are still on this page.' });
  }
};

exports._buildFields = buildFields; // for tests
