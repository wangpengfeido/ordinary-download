interface OrdinaryDownloadApi_ICreateDownload {
  downloadSrcCode: string;
  targetFolder: string;
}

interface Window {
  ordinary_download_api: {
    selectFolder: () => Promise<string>;
    createDownload: (data: OrdinaryDownloadApi_ICreateDownload) => Promise<string>;
  };
}
