// Content hash shared by the seed builder and migrations. Must match hashOf() in the Academy script in Nexa OS.
export const stable = v => Array.isArray(v) ? "[" + v.map(stable).join(",") + "]"
  : v && typeof v === "object" ? "{" + Object.keys(v).sort().filter(k => v[k] !== undefined && v[k] !== "").map(k => JSON.stringify(k) + ":" + stable(v[k])).join(",") + "}"
  : JSON.stringify(v);
export const fnv = s => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h.toString(16).padStart(8, "0"); };
export const hashOf = it => fnv(stable({ title: it.title, f: it.f || {}, links: it.links || {} }));
export const normLinks = l => ({ pillars: [], outcomes: [], prereqs: [], ...(l || {}) });
