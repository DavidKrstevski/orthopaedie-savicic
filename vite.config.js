// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/orthopaedie-savicic/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: './index.html',
        impressum: './impressum.html',
      },
    },
  },
});