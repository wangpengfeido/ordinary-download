const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ordinary_download_api", {
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
});
