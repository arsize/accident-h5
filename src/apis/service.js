/*
 * @Author       : liqiao
 * @Date         : 2024-01-21 13:09:15
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-21 16:59:56
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/apis/service.js
 */
import http from "./http";

// 查询服务范围内容
export const getServiceScopeApi = (params) => {
    return http({
      url: `/sys/blog/serviceScope/${params}`,
      method: "get",
      params:{},
    });
  };