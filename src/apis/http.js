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

  url = `https://iot.feiyulot.com/${
    options?.proxy ? options.proxy : gatway
  }${url}`;
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
          if (data.data.code === 200) {
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
