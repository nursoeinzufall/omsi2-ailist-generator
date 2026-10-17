const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const IMG = /\.(jpe?g|png|bmp|gif|webp)$/i;

async function walk(dir, prefix, depth, ext, out, imgs) {
  let ents;
  try { ents = await fs.promises.readdir(dir, { withFileTypes: true }); } catch (e) { return; }
  for (const e of ents) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) { if (depth < 4) await walk(full, prefix + e.name + '\\', depth + 1, ext, out, imgs); }
    else if (ext.test(e.name)) out.push(prefix + e.name);
    else if (IMG.test(e.name)) {
      const k = prefix.toLowerCase();
      if (!imgs.has(k)) imgs.set(k, []);
      imgs.get(k).push({ name: e.name, url: pathToFileURL(full).href });
    }
  }
}

async function scanDir(root, dirName, ext) {
  let base = null;
  if (path.basename(root).toLowerCase() === dirName) base = root;
  else {
    try {
      const ents = await fs.promises.readdir(root, { withFileTypes: true });
      const d = ents.find(e => e.isDirectory() && e.name.toLowerCase() === dirName);
      if (d) base = path.join(root, d.name);
    } catch (e) {}
  }
  if (!base) return { error: 'noFolder' };
  const files = [], imgs = new Map();
  await walk(base, dirName + '\\', 0, ext, files, imgs);
  return { files, imgs: [...imgs] };
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

module.exports = { scanDir, writeWithBackup };
