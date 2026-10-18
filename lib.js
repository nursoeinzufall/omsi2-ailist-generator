const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const IMG = /\.(jpe?g|png|bmp|gif|webp)$/i;

const ALL = /\.(bus|ovh|sco|hum)$/i;

function addImg(map, prefix, name, full) {
  const k = prefix.toLowerCase();
  if (!map.has(k)) map.set(k, []);
  map.get(k).push({ name, url: pathToFileURL(full).href });
}

async function walk(dir, prefix, depth, files, imgs) {
  let ents;
  try { ents = await fs.promises.readdir(dir, { withFileTypes: true }); } catch (e) { return; }
  for (const e of ents) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { if (depth < 4) await walk(full, prefix + e.name + '\\', depth + 1, files, imgs); }
    else if (ALL.test(e.name)) files.push(prefix + e.name);
    else if (IMG.test(e.name)) addImg(imgs, prefix, e.name, full);
  }
}

async function findBase(root, dirName) {
  if (path.basename(root).toLowerCase() === dirName) return root;
  try {
    const ents = await fs.promises.readdir(root, { withFileTypes: true });
    const d = ents.find(e => e.isDirectory() && e.name.toLowerCase() === dirName);
    if (d) return path.join(root, d.name);
  } catch (e) {}
  return null;
}

// Scannt nur Unterordner neu, deren Änderungszeit sich seit dem letzten Scan geändert hat.
async function scanBase(base, dirName, old, onProg) {
  const ents = await fs.promises.readdir(base, { withFileTypes: true });
  const dirs = ents.filter(e => e.isDirectory());
  const entry = { folders: {}, loose: { files: [], imgs: [] } }, todo = [];
  for (const d of dirs) {
    let m = 0;
    try { m = (await fs.promises.stat(path.join(base, d.name))).mtimeMs; } catch (e) {}
    const o = old && old.folders && old.folders[d.name];
    if (o && o.m === m) entry.folders[d.name] = o; else todo.push([d, m]);
  }
  let done = 0;
  for (const [d, m] of todo) {
    const files = [], imgs = new Map();
    await walk(path.join(base, d.name), dirName + '\\' + d.name + '\\', 1, files, imgs);
    entry.folders[d.name] = { m, files, imgs: [...imgs] };
    done++; if (onProg) onProg(done, todo.length);
  }
  const lf = [], li = new Map();
  for (const e of ents) {
    if (e.isDirectory()) continue;
    if (ALL.test(e.name)) lf.push(dirName + '\\' + e.name);
    else if (IMG.test(e.name)) addImg(li, dirName + '\\', e.name, path.join(base, e.name));
  }
  entry.loose = { files: lf, imgs: [...li] };
  return { entry, cached: dirs.length - todo.length, total: dirs.length };
}

// Mehrere Wurzelordner (OMSI 2 + openOMSI) scannen und zusammenführen; cache wird aktualisiert.
async function scanRoots(roots, dirName, ext, cache, onProg) {
  cache = cache || {};
  const files = [], imgs = new Map();
  let found = false, cached = 0, total = 0;
  for (const r of roots) {
    const base = await findBase(r, dirName);
    if (!base) continue;
    found = true;
    const key = r + '|' + dirName;
    const res = await scanBase(base, dirName, cache[key], onProg);
    cache[key] = res.entry; cached += res.cached; total += res.total;
    const e = res.entry, all = [...e.loose.files];
    Object.values(e.folders).forEach(f => all.push(...f.files));
    all.filter(p => ext.test(p)).forEach(p => files.push(p));
    [e.loose.imgs, ...Object.values(e.folders).map(f => f.imgs)].forEach(list =>
      list.forEach(([k, a]) => imgs.set(k, [...(imgs.get(k) || []), ...a])));
  }
  return found ? { files, imgs: [...imgs], stats: { cached, total } } : { error: 'noFolder' };
}

function stamp() {
  const d = new Date(), z = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}${z(d.getMonth() + 1)}${z(d.getDate())}_${z(d.getHours())}${z(d.getMinutes())}${z(d.getSeconds())}`;
}

// Schreibt die Datei; existiert sie schon, wird vorher eine Sicherungskopie daneben angelegt.
function writeWithBackup(p, data) {
  let backup = null;
  if (fs.existsSync(p)) {
    const ext = path.extname(p), base = path.basename(p, ext);
    backup = path.join(path.dirname(p), `${base}_backup_${stamp()}${ext}`);
    fs.copyFileSync(p, backup);
  }
  fs.writeFileSync(p, data);
  return { path: p, backup: backup ? path.basename(backup) : null };
}

module.exports = { scanRoots, writeWithBackup };
