const respond = (statusCode, body) => ({ statusCode, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }, body: JSON.stringify(body) });
const validEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

exports.handler = async event => {
  if (event.httpMethod !== 'POST') return respond(405, { error: 'Method not allowed' });
  let input;
  try { input = JSON.parse(event.body || '{}'); } catch { return respond(400, { error: 'Invalid request' }); }
  if (input.website) return respond(200, { ok: true }); // bot honeypot
  const name = String(input.name || '').trim().slice(0, 120);
  const email = String(input.email || '').trim().toLowerCase().slice(0, 254);
  const tool = String(input.tool || '');
  const newsletterOptIn = input.newsletterOptIn === true;
  const tools = { decision: 'The Decision Tool', 'a-or-b': 'A or B?', both: 'Both / all tools' };
  if (name.length < 2 || !validEmail(email) || !tools[tool]) return respond(400, { error: 'Please provide your name, a valid email and a tool selection.' });

  // Dedicated waitlist table: never write into Concentric's Applications table.
  const token = process.env.PDA_AIRTABLE_PAT;
  const base = process.env.PDA_AIRTABLE_BASE_ID;
  const table = process.env.PDA_AIRTABLE_TABLE_ID;
  if (!token || !base || !table) {
    console.error('Tool waitlist Airtable configuration missing');
    return respond(503, { error: 'The waitlist is temporarily unavailable. Please try again later.' });
  }
  try {
    const airtable = await fetch(`https://api.airtable.com/v0/${encodeURIComponent(base)}/${encodeURIComponent(table)}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ fields: { Name: name, Email: email, 'Tool Interest': tools[tool], 'Product Updates Consent': newsletterOptIn } }], typecast: true })
    });
    if (!airtable.ok) {
      console.error('Waitlist Airtable error', airtable.status, (await airtable.text()).slice(0, 500));
      return respond(502, { error: 'We could not save your waitlist request. Please try again.' });
    }
    // Newsletter consent is recorded in Airtable only. Subscriptions are imported manually.
    return respond(200, { ok: true });
  } catch (error) {
    console.error('Waitlist submission error', error);
    return respond(500, { error: 'Unable to save your request. Please try again.' });
  }
};
