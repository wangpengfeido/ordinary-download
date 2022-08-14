import { ipcMain, dialog, BrowserWindow } from 'electron';

/** 提供给渲染进程的 API */
export function createRendererApi() {
  ipcMain.handle('dialog:select-folder', async event => {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (win) {
      const { canceled, filePaths } = await dialog.showOpenDialog(win, {
        properties: ['openDirectory'],
      });
      if (canceled) {
        return;
      } else {
        return filePaths[0];
      }
    }
  });
}
