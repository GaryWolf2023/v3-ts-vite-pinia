import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'; // 给我们使用setup的文件添加name属性

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),DefineOptions()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
   //配置sass
   css: {
    preprocessorOptions: {
      scss: {
        // '@import "assets/scss/globalVar.scss";@import "assets/scss/globalMixin.scss";'
        additionalData: '@import "../styles/globalVar.scss";@import "../styles/globalMixin.scss";'
      }
    }
  },
})
