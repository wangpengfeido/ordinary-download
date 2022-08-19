import { ipcMain } from 'electron';
import { VM } from 'vm2';

export interface ICreateDownload {
  downloadSrcCode: string;
  targetFolder: string;
}

export interface IDownloadSrcData {
  downloadSrc?: {
    source: Array<{ url: string }>;
  };
}

export interface ICreateDownloadResult {}

/** 创建下载 */
export function createDownload() {
  ipcMain.handle('create-download', async (event, data: ICreateDownload) => {
    const ordinaryDownload: IDownloadSrcData = {};
    let errorMessage = '';

    try {
      const vm = new VM({ sandbox: { ordinaryDownload } });
      vm.run(data.downloadSrcCode);
    } catch (error) {
      errorMessage = (error as any).toString();
    }

    console.log(data, errorMessage);
    console.log('--', JSON.stringify(ordinaryDownload));
  });
}
