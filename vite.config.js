const { resolve } = require('path');
import { defineConfig } from 'vite';
const root = 'src'

export default defineConfig({
  root: root,
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, root, 'index.html'),
        aboutus: resolve(__dirname, root, 'aboutus/index.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "src/style/scss/_base.scss" as *;
          @use "src/style/scss/_header.scss" as *;`
      }
    }
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    }
  }
});
