import { createDownload } from './create-download';
import { dialogSelectFolder } from './dialog-select-folder';

/** 提供给渲染进程的 API */
export function createRendererApi() {
  dialogSelectFolder();
  createDownload();
}
