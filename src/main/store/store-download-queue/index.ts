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

    this.next([...value, ...this.downloadQueue]);
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
}

/** 下载列表 */
export const storeDownloadQueue = new StoreDownloadQueue();
