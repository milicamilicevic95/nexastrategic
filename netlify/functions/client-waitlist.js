// Client waitlist: writes one row to the NexaStrategic base, Client waitlist table.
// Fields are addressed by ID so renaming columns in Airtable does not break the form.
const BASE = process.env.WAITLIST_AIRTABLE_BASE_ID || 'appW06EMIpNUylqOT';
const TABLE = process.env.WAITLIST_AIRTABLE_TABLE_ID || 'tblddXc92mT1ATSwX';
const F = {
  name: 'fldzdUEmWvhlcXFGH',
  email: 'fldEUah95oaDNlGdB',
  company: 'fldVlDJvt7eD0Zcum',
  interest: 'fldT83AJPkPIEnfcY',
  message: 'fld5b1JfCy90SlOwP',
  joined: 'fldwRYLieiqCM2p6f',
  status: 'fldWm5yUGrcMVMOJI',
  privacy: 'fldXFQ0wc2jIgpVUv',
  source: 'fldT0cwl2IfmSXjLk'
};
// Form wording -> option name in the Airtable single select.
const INTERESTS = {
  'Fractional COO': 'Fractional COO',
  'Operations Adviser in Residence': 'Resident Operations Adviser',
  'Operational due diligence': 'Operational due diligence'
};

const respond = (statusCode, body) => ({ statusCode, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, body: JSON.stringify(body) });
const validEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const clean = (v, max) => String(v || '').trim().slice(0, max);

exports.handler = async event => {
  if (event.httpMethod !== 'POST') return respond(405, { error: 'Method not allowed' });
  let input;
  try { input = JSON.parse(event.body || '{}'); } catch { return respond(400, { error: 'Invalid request.' }); }
  if (input.website) return respond(200, { ok: true }); // bot honeypot

  const name = clean(input.name, 120);
  const email = clean(input.email, 254).toLowerCase();
  const company = clean(input.company, 160);
  const message = clean(input.message, 3000);
  const interest = INTERESTS[input.interest] || 'Fractional COO';
  if (name.length < 2 || !validEmail(email) || message.length < 2) {
    return respond(400, { error: 'Please add your name, a valid email and a few words about the business.' });
  }

  const token = process.env.WAITLIST_AIRTABLE_PAT || process.env.AIRTABLE_PAT;
  if (!token) {
    console.error('Client waitlist: Airtable token missing');
    return respond(503, { error: 'The waitlist is temporarily unavailable.' });
  }

  try {
    const res = await fetch(`https://api.airtable.com/v0/${BASE}/${TABLE}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        typecast: true,
        returnFieldsByFieldId: true,
        records: [{ fields: {
          [F.name]: name, [F.email]: email, [F.company]: company, [F.interest]: interest, [F.message]: message,
          [F.joined]: new Date().toISOString(), [F.status]: 'New', [F.privacy]: true, [F.source]: '/contact/'
        } }]
      })
    });
    if (!res.ok) {
      console.error('Client waitlist Airtable error', res.status, (await res.text()).slice(0, 500));
      return respond(502, { error: 'The waitlist could not be saved.' });
    }
    return respond(200, { ok: true });
  } catch (error) {
    console.error('Client waitlist error', error);
    return respond(500, { error: 'The waitlist could not be saved.' });
  }
};
