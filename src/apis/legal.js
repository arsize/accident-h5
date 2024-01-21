/*
 * @Author       : liqiao
 * @Date         : 2024-01-21 20:17:22
 * @LastEditors  : liqiao
 * @LastEditTime : 2024-01-21 20:19:13
 * @Description  : Do not edit
 * @FilePath     : /accident-h5/src/apis/legal.js
 */

import http from "./http";

// 查询服务范围内容
export const getRelatedKnowledgeApi = (params) => {
    return http({
      url: `/sys/blog/relatedKnowledge/${params}`,
      method: "get",
      params:{},
    });
  };