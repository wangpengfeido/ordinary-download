import { ipcMain } from 'electron';
import { VM } from 'vm2';
import { uniqueId } from 'lodash';
import { storeDownloadQueue } from '../../store/store-download-queue';

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
      return {
        code: -1,
        message: errorMessage,
      };
    }

    if (!ordinaryDownload.downloadSrc?.source) {
      return {
        code: -1,
        message: '数据不合法',
      };
    }
    for (const item of ordinaryDownload.downloadSrc.source || []) {
      if (!item.url) {
        return {
          code: -1,
          message: '数据不合法',
        };
      }
    }

    storeDownloadQueue.addDownloadItems({
      value: ordinaryDownload.downloadSrc.source.map(item => {
        return {
          id: uniqueId(),
          url: item.url,
          percent: 0,
        };
      }),
    });
  });
}
