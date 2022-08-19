const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ordinary_download_api', {
  selectFolder: () => ipcRenderer.invoke('dialog:select-folder'),
  createDownload: data => ipcRenderer.invoke('create-download', data),
});
