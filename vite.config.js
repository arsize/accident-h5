/*
 * @Date: 2022-07-03 11:45:24
 * @LastEditors: yosan
 * @LastEditTime: 2024-01-19 16:54:27
 * @FilePath: /my-uni-vue3-project/vite.config.js
 */
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  server: {
    // port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api/': {
        target:
          'https://service-rbji0bev-1256505457.cd.apigw.tencentcs.com/release',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, '')
      },
      '/api-prod/': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api-prod/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
})
