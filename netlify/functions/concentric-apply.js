// Concentric application form.
// Checks each application against the published Founding criteria, writes it to the
// Applicants table, and tells the page whether to show the join links (passed) or the
// "we'll review" screen (review).
const BASE = process.env.KEEL_BASE_ID || 'appO5tOyuLIfaVXy9';
const APPLICANTS = process.env.CONCENTRIC_APPLICANTS_TABLE_ID || 'tbloJQ9g2Nblt2DlN';

const F = {
  name: 'flduMBhxGjK3Zuz3j',
  email: 'fldFmmjkOSdFnhtao',
  source: 'fldwB2KdL8BxWEGGU',
  state: 'fldZnUQOcNly4chiP',
  wtp: 'fld19L1sbAWN6qpc2',
  nav: 'fldxP1vJNwnYpfgc8',
  usConfirmed: 'flduZi66NEdUG6Q3a',
  confidentiality: 'fldxOTI9GJgB2Pgk4',
  linkedin: 'fldodwnyFbSBqpHtP',
  applied: 'fldnaK9mYAWlLsqz1',
  role: 'fldoGRUJhz6wgkgMZ',
  check: 'fldDbYBGIyt4PiMWy',
  checkNotes: 'fldFZ98nnRbreQE56'
};

const STATES = new Set(['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']);
const ROLES = new Set(['Manager','Director or senior director','VP or SVP','C-suite','Founder or owner','Independent or fractional leader','Coach, consultant or adviser','Other']);
const HEARD = new Set(['LinkedIn','Instagram','Facebook','A friend or colleague','Mila directly','A newsletter or article','Search','Other']);

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body)
});
const clean = (v, max) => String(v || '').replace(/\s+/g, ' ').trim().slice(0, max);

// The published criteria, as rules. Anything that fails a hard rule is an error the
// applicant can fix; anything that needs judgement goes to review.
function checkCriteria(a) {
  const review = [];
  if (!/^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/in\/[^/?#\s]{2,}/i.test(a.linkedin)) {
    review.push('LinkedIn link is not a personal profile (linkedin.com/in/...).');
  }
  if (a.role === 'Coach, consultant or adviser') {
    review.push('Role is coach, consultant or adviser: check she is joining for her own decision, not to find clients.');
  }
  if (a.decision.split(/\s+/).filter(Boolean).length < 8) {
    review.push('Decision answer is very short.');
  }
  return review;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed' });
  try {
    const token = process.env.KEEL_AIRTABLE_PAT || process.env.AIRTABLE_PAT;
    if (!token) return json(500, { error: 'Applications are not configured yet.' });

    const b = JSON.parse(event.body || '{}');
    if (b.website) return json(200, { ok: true, outcome: 'review' }); // honeypot

    const a = {
      first: clean(b.firstName, 80),
      last: clean(b.lastName, 80),
      email: clean(b.email, 200).toLowerCase(),
      linkedin: clean(b.linkedin, 300),
      state: clean(b.state, 40),
      role: clean(b.role, 60),
      decision: clean(b.decision, 1200),
      heard: clean(b.heard, 60),
      referrer: clean(b.referrer, 120),
      ref: clean(b.ref, 60).toLowerCase().replace(/[^a-z0-9_-]/g, ''),
      agreed: b.agree === true || b.agree === 'on' || b.agree === 'true'
    };

    // Hard rules: fixable by the applicant.
    if (!a.first || !a.last || !a.email || !a.linkedin || !a.state || !a.role || !a.decision || !a.heard) {
      return json(400, { error: 'Please complete every required field.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)) return json(400, { error: 'Please enter a valid email.' });
    if (!/^https?:\/\//i.test(a.linkedin)) a.linkedin = 'https://' + a.linkedin.replace(/^\/+/, '');
    a.linkedin = a.linkedin.replace(/^http:\/\//i, 'https://');
    if (!/linkedin\.com\//i.test(a.linkedin)) return json(400, { error: 'Please add your LinkedIn profile link.' });
    if (!STATES.has(a.state)) return json(400, { error: 'Founding Councils are open to women based in the US. Please choose your state.' });
    if (!ROLES.has(a.role)) return json(400, { error: 'Please choose your role.' });
    if (!HEARD.has(a.heard)) return json(400, { error: 'Please choose how you heard about Concentric.' });
    if (a.decision.length < 40) return json(400, { error: 'Please tell us a little more about the decision you are facing.' });
    if (!a.agreed) return json(400, { error: 'Please confirm you can attend monthly and keep the Council confidential.' });

    const review = checkCriteria(a);
    const outcome = review.length ? 'review' : 'passed';

    let source = `Website application · ${a.heard}`;
    if (a.referrer) source += ` · referred by ${a.referrer}`;
    if (a.ref) source += ` · ref_${a.ref}`;

    const fields = {
      [F.name]: `${a.first} ${a.last}`,
      [F.email]: a.email,
      [F.linkedin]: a.linkedin,
      [F.state]: a.state,
      [F.role]: a.role,
      [F.nav]: a.decision,
      [F.source]: source,
      [F.wtp]: 'Founding $360 a month (shown on site)',
      [F.usConfirmed]: true,
      [F.confidentiality]: true,
      [F.applied]: new Date().toISOString(),
      [F.check]: outcome === 'passed' ? 'Passed' : 'Review'
    };
    if (review.length) fields[F.checkNotes] = review.join('\n');

    const res = await fetch(`https://api.airtable.com/v0/${BASE}/${APPLICANTS}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields })
    });
    if (!res.ok) {
      console.error('Airtable error', res.status, await res.text());
      return json(502, { error: 'We could not save your application. Please try again, or email concentric@nexastrategic.com.' });
    }
    const rec = await res.json().catch(() => ({}));
    return json(200, { ok: true, outcome, id: rec.id || '', email: a.email });
  } catch (e) {
    console.error(e);
    return json(500, { error: 'Something went wrong. Please try again.' });
  }
};
