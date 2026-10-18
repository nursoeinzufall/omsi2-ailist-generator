const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('omsi', {
  getSettings: () => ipcRenderer.invoke('settings:get'),
  setSetting: (k, v) => ipcRenderer.invoke('settings:set', k, v),
  pickFolder: s => ipcRenderer.invoke('dialog:folder', s),
  setZoom: f => ipcRenderer.invoke('ui:zoom', f),
  clearCache: () => ipcRenderer.invoke('cache:clear'),
  version: () => ipcRenderer.invoke('app:version'),
  onProgress: cb => ipcRenderer.on('scan:progress', (e, d) => cb(d)),
  scan: (root, dir, ext) => ipcRenderer.invoke('omsi:scan', root, dir, ext),
  openFile: o => ipcRenderer.invoke('file:open', o),
  saveFile: o => ipcRenderer.invoke('file:save', o),
  mergeFile: (p, d) => ipcRenderer.invoke('file:merge', p, d)
});
