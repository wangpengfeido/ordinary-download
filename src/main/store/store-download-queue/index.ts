import { Subject } from 'rxjs';

interface IDownloadQueueItem {
  id: string;
  url: string;
  percent: number;
}

type TDownloadQueue = Array<IDownloadQueueItem>;

class StoreDownloadQueue extends Subject<TDownloadQueue> {
  private downloadQueue: TDownloadQueue = [];

  constructor() {
    super();

    this.subscribe(value => {
      this.downloadQueue = value;
    });
  }

  addDownloadItems(params: { value: TDownloadQueue }) {
    const { value } = params;

    this.next([...this.downloadQueue, ...value]);
  }

  updateUpdatePercent(params: { id: string; percent: number }) {
    const { id, percent } = params;

    const newQueue = this.downloadQueue.map(item => {
      if (item.id === id) {
        item.percent = percent;
      }
      return item;
    });

    this.next(newQueue);
  }

  getLatestNotOverDownload(): IDownloadQueueItem | null {
    for (const item of this.downloadQueue) {
      if (item.percent < 1) {
        return item;
      }
    }
    return null;
  }
}

/** 下载列表 */
export const storeDownloadQueue = new StoreDownloadQueue();
