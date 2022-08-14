const axios = require("axios");
const fs = require("fs");
const path = require("path");

//
module.exports.downloadAFile = function (
  mp4Url,
  fileName = Math.random().toString().split(".")[1]
) {
  return axios
    .get(mp4Url, {
      responseType: "stream",
      headers: {
        accept: "*/*",
        origin: "https://avgle.com",
        referer: "https://avgle.com/",
      },
    })
    .then(
      ({ data }) => {
        const f = fs.createWriteStream(
          path.resolve(__dirname, "../", "download", `${fileName}`),
          { encoding: "binary" }
        );
        data.pipe(f);
        return `文件下载成功：${fileName}:${mp4Url}`;
      },
      (error) => {
        return Promise.reject(`文件下载失败：${fileName}:${mp4Url}`);
      }
    );
};
