import { ipcMain, dialog } from 'electron';

/** 提供给渲染进程的 API */
export function createRendererApi() {
  ipcMain.handle('dialog:openFile', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({});
    if (canceled) {
      return;
    } else {
      return filePaths[0];
    }
  });
}
