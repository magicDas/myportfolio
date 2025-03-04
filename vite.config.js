import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import svg from 'vite-plugin-svg';

export default defineConfig({
  plugins: [vue({
    template: {
      ssr: false // Отключаем SSR
    }
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // plugins: [vue(), svg()],
})
