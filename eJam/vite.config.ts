import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import createSvgIconsPlugin from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Clarifion/',
  plugins: [
    vue(),
    createSvgIconsPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
