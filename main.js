const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { scanRoots, writeWithBackup } = require('./lib');

let win = null, settingsFile = '';
const readSettings = () => { try { return JSON.parse(fs.readFileSync(settingsFile, 'utf8')); } catch (e) { return {}; } };
const writeSettings = o => { try { fs.writeFileSync(settingsFile, JSON.stringify(o, null, 1)); } catch (e) {} };

function createWindow() {
  win = new BrowserWindow({
    width: 1280, height: 860, minWidth: 900, minHeight: 600, show: false,
    icon: path.join(__dirname, 'build', 'icon.ico'),
    webPreferences: { preload: path.join(__dirname, 'preload.js'), contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.once('ready-to-show', () => win.show());
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', e => e.preventDefault());
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

ipcMain.handle('settings:get', () => readSettings());
ipcMain.handle('settings:set', (e, k, v) => { const s = readSettings(); s[String(k)] = v; writeSettings(s); return true; });

ipcMain.handle('dialog:folder', async (e, start) => {
  const s = readSettings();
  const r = await dialog.showOpenDialog(win, { properties: ['openDirectory'], defaultPath: (typeof start === 'string' && start) || s.omsiPath || undefined });
  return r.canceled ? null : r.filePaths[0];
});

ipcMain.handle('omsi:scan', (e, roots, dir, extSrc) => {
  const list = (Array.isArray(roots) ? roots : [roots]).filter(r => typeof r === 'string' && r);
  if (!list.length || !['vehicles', 'humans'].includes(dir)) return { error: 'noFolder' };
  return scanRoots(list, dir, new RegExp(String(extSrc), 'i'));
});

ipcMain.handle('ui:zoom', (e, f) => { if (win) win.webContents.setZoomFactor(Math.min(2, Math.max(0.5, Number(f) || 1))); return true; });

ipcMain.handle('file:open', async (e, o = {}) => {
  const s = readSettings();
  const r = await dialog.showOpenDialog(win, { title: o.title, properties: ['openFile'], filters: o.filters, defaultPath: s.lastDir || undefined });
  if (r.canceled || !r.filePaths[0]) return null;
  const p = r.filePaths[0];
  s.lastDir = path.dirname(p); writeSettings(s);
  return { path: p, name: path.basename(p), bytes: fs.readFileSync(p) };
});

ipcMain.handle('file:save', async (e, o = {}) => {
  const s = readSettings();
  const r = await dialog.showSaveDialog(win, { defaultPath: path.join(s.lastDir || app.getPath('documents'), o.defaultName || 'liste.txt'), filters: o.filters });
  if (r.canceled || !r.filePath) return null;
  const res = writeWithBackup(r.filePath, Buffer.from(o.data));
  s.lastDir = path.dirname(r.filePath); writeSettings(s);
  return res;
});

ipcMain.handle('file:merge', (e, p, data) => writeWithBackup(String(p), Buffer.from(data)));

app.whenReady().then(() => {
  settingsFile = path.join(app.getPath('userData'), 'settings.json');
  Menu.setApplicationMenu(null);
  createWindow();
});
app.on('window-all-closed', () => app.quit());
