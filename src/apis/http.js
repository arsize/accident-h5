/*
 * @Author       : liqiao
 * @Date         : 2024-01-20 17:23:26
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-21 17:16:21
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/apis/http.js
 */
import axios from "axios";

const instance = axios.create({
  timeout: 10000, //接口超时时间
});

const gatway = "batteryServer";

export default (options) => {
  let {
    url,
    data,
    method = "get",
    params,
    headers,
    loading = true,
    responseType,
  } = options;

  // url = `https://iot.feiyulot.com/${
  //   options?.proxy ? options.proxy : gatway
  // }${url}`;
  url = `http://121.43.49.249:8080${url}`;
  return new Promise((res, rej) => {
    instance
      .request({
        url: url,
        data: data ?? {},
        method: method,
        params: params,
        headers: headers,
        loading: loading,
        responseType,
      })
      .then(
        (data) => {
          console.log("data", data);
          if (Number(data.data.code) === 0) {
            res(data.data);
          } else {
            rej(data.data);
          }
        },
        (err) => {
          rej(err);
        }
      );
  });
};
