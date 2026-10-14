const key = d => d?.year == null ? null
  : d.year * 1e6 + (d.month ?? 0) * 1e3 + (d.day ?? 0);
const fmt = d => [d.year, d.month, d.day].filter(v => v != null).join("/");

const me = dv.current().file.path;
const asOf = key(input?.asof ?? dv.current().asof) ?? Infinity;
const all = dv.pages('"Encounters"').where(e => (key(e) ?? -Infinity) <= asOf);

const has = (list, path) => (list ?? []).some(l => l?.path === path);
const losses = all.where(e => e.type === "memory-loss" && e.subject?.path === me
  && (!e.restored || (key(e.restored) ?? Infinity) > asOf));
const forgot = (enc, other) => losses.some(l => key(l) > key(enc)
  && (l.scope === "all" || has(l.people, other)));

const byOther = {};
for (const e of all.where(e => e.type === "encounter" && has(e.participants, me)
    && (!e.aware || has(e.aware, me)))) {
  for (const p of e.participants) {
    if (p.path === me) continue;
    (byOther[p.path] ??= { link: p, enc: [] }).enc.push(e);
  }
}

const rows = Object.values(byOther).map(({ link, enc }) => {
  enc.sort((a, b) => key(a) - key(b));
  const kept = enc.filter(e => !forgot(e, link.path));
  const lost = enc.length - kept.length;
  const status = !kept.length ? "Forgot" : lost ? "Re-met" : "Knows";
  return { first: key(enc[0]),
    row: [link, status, fmt(enc[0]), `${kept.length}/${enc.length}`] };
}).sort((a, b) => a.first - b.first).map(r => r.row);

dv.table(["Character", "Status", "First met", "Remembered"], rows);