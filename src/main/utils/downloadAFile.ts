import fs from 'fs';
import path from 'path';
import axios from 'axios';

/**
 * 下载一个文件
 */
export async function downloadAFile(params: {
  url: string;
  targetFolder: string;
  fileName: string;
  requestHeaders?: Record<string, string>;
}): Promise<{
  /** 0-失败；1-成功 */
  code: 0 | 1;
  message: string;
}> {
  const { url, targetFolder, fileName, requestHeaders } = params;

  try {
    const { data } = await axios.get(url, {
      responseType: 'stream',
      headers: {
        accept: '*/*',
        ...requestHeaders,
      },
    });

    const f = fs.createWriteStream(path.resolve(targetFolder, `${fileName}`), {
      encoding: 'binary',
    });
    data.pipe(f);
    return {
      code: 1,
      message: `文件下载成功`,
    };
  } catch (e) {
    return {
      code: 0,
      message: String(e),
    };
  }
}
