const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body)
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { ...json(405, { error: 'Method not allowed' }), headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Allow': 'POST' } };
  }

  try {
    const token = process.env.AIRTABLE_PAT;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;

    if (!token || !baseId || !tableId) {
      console.error('Missing required Airtable environment variables');
      return json(500, { error: 'Application service is not configured' });
    }

    const b = JSON.parse(event.body || '{}');

    // Honeypot: silently accept bot submissions without writing to Airtable.
    if (b.website) return json(200, { ok: true });

    const firstName = String(b.firstName || '').trim();
    const lastName = String(b.lastName || '').trim();
    const email = String(b.email || '').trim();
    const based = String(b.based || '').trim();
    const navigating = String(b.navigating || '').trim();

    const allowedNavigating = new Set([
      'A significant change in professional direction',
      'Thinking seriously about what comes next',
      'Reconsidering the shape of my professional life',
      'Something I cannot name yet',
      'A business or workplace challenge'
    ]);

    if (!firstName || !lastName || !email || !based || !navigating) {
      return json(400, { error: 'Please complete all required fields' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json(400, { error: 'Please enter a valid email' });
    }
    if (!allowedNavigating.has(navigating)) {
      return json(400, { error: 'Please select a valid option' });
    }

    const fields = {
      'First name': firstName,
      'Last name': lastName,
      'Email': email,
      'Based': based,
      'Navigating': navigating
    };

    const airtableUrl = `https://api.airtable.com/v0/${encodeURIComponent(baseId)}/${encodeURIComponent(tableId)}`;
    const response = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields, typecast: true })
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Airtable error', response.status, detail);
      return json(502, { error: 'Could not submit application' });
    }

    const created = await response.json();
    if (!created || !created.id) {
      console.error('Airtable did not return a record id');
      return json(502, { error: 'Could not confirm application' });
    }

    return json(200, { ok: true });
  } catch (error) {
    console.error(error);
    return json(500, { error: 'Unexpected error' });
  }
};
