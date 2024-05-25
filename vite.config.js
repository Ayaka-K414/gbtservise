import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
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
