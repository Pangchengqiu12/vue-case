import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteAutoImport from 'unplugin-auto-import/vite';
// import Components from 'unplugin-vue-components/vite';
// import { fileURLToPath, URL } from 'node:url';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteAutoImport({
      imports: ['vue', 'vue-router'],
    }),
  ],
});
