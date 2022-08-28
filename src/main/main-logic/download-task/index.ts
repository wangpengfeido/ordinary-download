import { storeDownloadQueue } from '../../store/store-download-queue';

const running = false;

export function registerDownloadTask() {
  storeDownloadQueue.subscribe(() => {
    if (!running) {
      downloadTask();
    }
  });
}

async function downloadTask() {}
