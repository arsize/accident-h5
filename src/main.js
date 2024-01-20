/*
 * @Date: 2022-07-03 11:45:24
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 17:25:11
 * @FilePath: /my-uni-vue3-project/src/main.js
 */
import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'animate.css';
import 'animate.css/animate.compat.css';
export function createApp() {
  const app = createSSRApp(App);
  app.use(createPinia());
  return {
    app
  };
}
