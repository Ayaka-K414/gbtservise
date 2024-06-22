import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = 'src';

export default defineConfig({
  root: root,
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, root, 'index.html'),
        aboutus: path.resolve(__dirname, root, 'aboutus/index.html'),
        service: path.resolve(__dirname, root, 'service/index.html'),
        works: path.resolve(__dirname, root, 'works/index.html'),
        post: path.resolve(__dirname, root, 'post/index.html')
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
