// The Shelf: Mila's reading list, read from the NexaStrategic base, The Shelf table.
// Only rows with Published ticked are returned. Fields are addressed by ID so renaming
// columns in Airtable does not break the page. Netlify's CDN caches the answer for an hour.
const BASE = process.env.WAITLIST_AIRTABLE_BASE_ID || 'appW06EMIpNUylqOT';
const TABLE = process.env.SHELF_AIRTABLE_TABLE_ID || 'tblSWlArly40aRJfY';
const F = {
  title: 'fldeSfs8a9TgPOimQ',
  author: 'fldyhqSnZkmd2Oe9C',
  verdict: 'flddDxnuEatRkhN1r',
  why: 'fldwEKZ5ZZSsqrr6N',
  status: 'fldjg4zifT0rgwRvi',
  season: 'fldKCOqMU1cB6xlvg',
  finished: 'fldgAwMc1NqhOyaK6',
  shelf: 'fldGRG57Bqj4X7JqL',
  patterns: 'fldpfhNWhmGxPYIAS',
  pick: 'fld5hkw91JJvAm9Px',
  rating: 'fld11HksPocROmYsh',
  published: 'fldxzx7m6i0ZBLDPZ'
};
// Pattern Library entry name -> its anchor on /pattern-library/.
const PATTERNS = {
  "Anchoring": "anchoring",
  "Asch conformity experiments": "asch-conformity-experiments",
  "Availability heuristic": "availability-heuristic",
  "BATNA": "batna",
  "Bion's basic assumptions (group relations)": "bion-basic-assumptions",
  "British Cycling and Team Sky: the aggregation of marginal gains": "british-cycling-and-team-sky-the-aggregation-of-marginal-gai",
  "Burning your boats (破釜沉舟 and Sun Tzu's desperate ground)": "burning-your-boats",
  "Bystander effect (diffusion of responsibility)": "bystander-effect-diffusion-of-responsibility",
  "Chesterton's fence": "chesterton-s-fence",
  "Choice overload (the paradox of choice)": "choice-overload",
  "Clive Woodward and England's 2003 Rugby World Cup": "clive-woodward-and-england-s-2003-rugby-world-cup",
  "Conway's law": "conway-s-law",
  "Denial rather than defeat ('Так не доставайся же ты никому')": "russia-denial-rather-than-defeat",
  "Door-in-the-face (reciprocal concessions)": "door-in-the-face-reciprocal-concessions",
  "Escalation of commitment": "escalation-of-commitment",
  "Fabian strategy: Fabius Maximus and the price of delay": "fabian-strategy-fabius-maximus-and-the-price-of-delay",
  "Face (mianzi and lian)": "face-mianzi-and-lian",
  "Foot-in-the-door technique": "foot-in-the-door-technique",
  "Fundamental attribution error (correspondence bias)": "fundamental-attribution-error-correspondence-bias",
  "Gall's law": "gall-s-law",
  "Goodhart's law": "goodhart-s-law",
  "Groupthink": "groupthink",
  "Halo effect": "halo-effect",
  "Hindsight bias (creeping determinism)": "hindsight-bias-creeping-determinism",
  "Illusion of explanatory depth": "illusion-of-explanatory-depth",
  "Intel exits memory: the new CEO test": "intel-exits-memory-the-new-ceo-test",
  "Jevons paradox": "jevons-paradox",
  "Kodak and the digital camera": "kodak-and-the-digital-camera",
  "Leicester City's 2015-16 Premier League title": "leicester-city-s-2015-16-premier-league-title",
  "Loss aversion": "loss-aversion",
  "Moltke and Auftragstaktik (mission command)": "moltke-and-auftragstaktik-mission-command",
  "Moneyball": "moneyball",
  "Normalisation of deviance": "normalisation-of-deviance",
  "Operation Mincemeat": "operation-mincemeat",
  "Pareto principle (80/20 rule)": "pareto-principle-80-20-rule",
  "Planning fallacy": "planning-fallacy",
  "Prospective hindsight and the pre-mortem": "prospective-hindsight-and-the-pre-mortem",
  "Psychological safety": "psychological-safety",
  "Rapa Nui and the 'ecocide' narrative": "rapa-nui-and-the-ecocide-narrative",
  "Reactive devaluation": "reactive-devaluation",
  "Ringelmann effect and social loafing": "ringelmann-effect-and-social-loafing",
  "Russia 1812: strategic retreat and scorched earth": "russia-1812-strategic-retreat-and-scorched-earth",
  "Satisficing": "satisficing",
  "Schismogenesis": "schismogenesis",
  "Status quo bias": "status-quo-bias",
  "Survivorship bias": "survivorship-bias",
  "Svoi and chuzhie: Russian collective cohesion (sobornost, obshchina, kollektivizm)": "svoi-and-chuzhie",
  "Taboo trade-offs and sacred values": "taboo-trade-offs-and-sacred-values",
  "The Abilene paradox": "the-abilene-paradox",
  "The Ben Franklin effect": "the-ben-franklin-effect",
  "The Charge of the Light Brigade": "the-charge-of-the-light-brigade",
  "The Dunning-Kruger effect": "dunning-kruger-effect",
  "The GB men's eight and 'Will it make the boat go faster?'": "gb-mens-eight-will-it-make-the-boat-go-faster",
  "The MUM effect": "the-mum-effect",
  "The Peter principle": "the-peter-principle",
  "The Semmelweis reflex": "the-semmelweis-reflex",
  "The Trollope ploy": "the-trollope-ploy",
  "The Vasa": "the-vasa",
  "The Yerkes-Dodson law": "the-yerkes-dodson-law",
  "The burning platform": "the-burning-platform",
  "The cobra effect": "the-cobra-effect",
  "The endowment effect": "the-endowment-effect",
  "The gift and the obligation to reciprocate": "the-gift-and-the-obligation-to-reciprocate",
  "The hiding hand": "the-hiding-hand",
  "The hot hand fallacy, and its reversal": "the-hot-hand-fallacy-and-its-reversal",
  "The performative shift (Yurchak's late Soviet 'loyalty theatre')": "performative-shift",
  "Tragedy of the commons": "tragedy-of-the-commons",
  "Ubuntu (umuntu ngumuntu ngabantu)": "ubuntu"
};

const respond = (statusCode, body, cache) => ({ statusCode, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': cache || 'no-store' }, body: JSON.stringify(body) });
const text = (v, max) => String(v || '').trim().slice(0, max);
const choice = v => (v && typeof v === 'object' ? v.name : v) || '';
const slug = t => 'book-' + String(t).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

exports.handler = async event => {
  if (event.httpMethod !== 'GET') return respond(405, { error: 'Method not allowed' });
  const token = process.env.WAITLIST_AIRTABLE_PAT || process.env.AIRTABLE_PAT;
  if (!token) {
    console.error('Shelf: Airtable token missing');
    return respond(503, { books: [] });
  }
  try {
    const rows = [];
    let offset = '';
    do {
      const url = `https://api.airtable.com/v0/${BASE}/${TABLE}?returnFieldsByFieldId=true&pageSize=100${offset ? '&offset=' + encodeURIComponent(offset) : ''}`;
      const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) {
        console.error('Shelf: Airtable error', res.status, await res.text());
        return respond(502, { books: [] });
      }
      const data = await res.json();
      rows.push(...(data.records || []));
      offset = data.offset || '';
    } while (offset && rows.length < 500);

    const books = rows
      .map(r => r.fields || {})
      .filter(f => f[F.published] && text(f[F.title], 1))
      .map(f => ({
        id: slug(text(f[F.title], 200)),
        title: text(f[F.title], 200),
        author: text(f[F.author], 200),
        verdict: text(f[F.verdict], 600),
        why: text(f[F.why], 400),
        reading: choice(f[F.status]) === 'Reading now',
        season: text(f[F.season], 40),
        finished: text(f[F.finished], 10),
        shelf: choice(f[F.shelf]),
        pick: !!f[F.pick],
        rating: Math.max(0, Math.min(5, Number(f[F.rating]) || 0)),
        patterns: (f[F.patterns] || []).map(choice).filter(n => PATTERNS[n]).map(n => ({ name: n, id: PATTERNS[n] }))
      }))
      .sort((a, b) => (b.reading - a.reading) || (b.rating - a.rating) || (b.finished || '').localeCompare(a.finished || ''));
    return respond(200, { books }, 'public, max-age=300, s-maxage=3600');
  } catch (err) {
    console.error('Shelf: request failed', err);
    return respond(502, { books: [] });
  }
};
