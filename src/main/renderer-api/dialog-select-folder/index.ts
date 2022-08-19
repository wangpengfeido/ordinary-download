import { ipcMain, dialog, BrowserWindow } from 'electron';

/** 选择文件夹 */
export function dialogSelectFolder() {
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
