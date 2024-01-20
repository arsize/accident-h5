import http from "./http";

//登录
export const toLogin = (params) => {
  return http({
    url: "/wechat/bindAccount",
    method: "get",
    params,
  });
};

//发送验证码
export const toSendCode = (params) => {
  return http({
    url: "/wechat/sendCode",
    method: "get",
    params,
  });
};

//修改配置
export const toUpdateAccount = (params) => {
  return http({
    url: "/wechat/updateAccount",
    method: "get",
    params,
  });
};
