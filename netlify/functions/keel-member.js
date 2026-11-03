// Keel greeting: the member page calls GET /api/keel-member?m=<Members record id>
// and gets back the name (and email, where known) to greet her and prefill the form.
// Only the record whose id is in her personal link is ever read.
const BASE = process.env.KEEL_BASE_ID || 'appO5tOyuLIfaVXy9';
const MEMBERS = process.env.KEEL_MEMBERS_TABLE_ID || 'tblwgEg5KOS2XctrQ';
const F = {
  label: 'fld50s6Yg1XOFpRJR',      // Member Label (full name)
  preferred: 'fldiYf1R1scEigLxy',  // Preferred Name
  applicantName: 'fldIh8dhJopm3E7G0', // Full Name (from Applicant)
  email: 'flduldJI3oIVM6QFc'       // Email (from Applicant)
};

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body)
});
const first = (v) => (Array.isArray(v) ? v[0] : v) || '';
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') return json(405, { error: 'Method not allowed' });
  const m = String((event.queryStringParameters || {}).m || '').trim();
  if (!/^rec[A-Za-z0-9]{14}$/.test(m)) return json(200, { ok: false });
  const token = process.env.KEEL_AIRTABLE_PAT || process.env.AIRTABLE_PAT;
  if (!token) return json(200, { ok: false });
  try {
    const res = await fetch(`https://api.airtable.com/v0/${BASE}/${MEMBERS}/${m}?returnFieldsByFieldId=true`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) return json(200, { ok: false });
    const f = (await res.json()).fields || {};
    const label = String(f[F.label] || '').trim();
    const full = String(first(f[F.applicantName]) || (isEmail(label) ? '' : label)).trim();
    const email = String(first(f[F.email]) || (isEmail(label) ? label : '')).trim();
    const firstName = String(f[F.preferred] || full.split(/\s+/)[0] || '').trim();
    return json(200, { ok: true, first: firstName, name: full, email: isEmail(email) ? email : '' });
  } catch (e) {
    console.error(e);
    return json(200, { ok: false });
  }
};
