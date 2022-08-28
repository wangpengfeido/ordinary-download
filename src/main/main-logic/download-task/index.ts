import { storeDownloadQueue } from '../../store/store-download-queue';
import { downloadAFile } from '../../utils/downloadAFile';

class DownloadTask {
  running: boolean = false;

  start() {
    if (this.running) {
      return;
    }
    this.running = true;
    this.downloadTask();
  }

  stop() {
    this.running = false;
  }

  private async downloadTask() {
    while (this.running) {
      const downloadItem = storeDownloadQueue.getLatestNotOverDownload();

      // 全部下载完毕
      if (!downloadItem) {
        this.running = false;
        return;
      }

      storeDownloadQueue.updateUpdatePercent({ id: downloadItem?.id, percent: 0.1 });

      const downloadResult = await downloadAFile({
        url: downloadItem.url,
        targetFolder: downloadItem.targetFolder,
        fileName: downloadItem.targetFileName,
        requestHeaders: downloadItem.requestHeaders,
      });
      if (downloadResult.code) {
        storeDownloadQueue.updateUpdatePercent({ id: downloadItem?.id, percent: 1 });
      } else {
        storeDownloadQueue.updateUpdatePercent({ id: downloadItem?.id, percent: 0 });
      }
    }
  }
}

export const downloadTask = new DownloadTask();
