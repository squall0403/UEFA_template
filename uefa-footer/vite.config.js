import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { viteSingleFile } from "vite-plugin-singlefile";
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

const env = loadEnv('', process.cwd())
const dataPath = './src/components/' + env.VITE_COMPETITION + '/' + env.VITE_TARGET_LANG + '.vue'
const outDir = 'dist/' + env.VITE_COMPETITION + '_' + env.VITE_TARGET_LANG

export default defineConfig({
  build: {
    outDir: outDir
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['pk-menu-item', 'pk-menu', 'pk-accordion-item', 'pk-accordion-item-content', 'pk-dialog', 'pk-icon', 'pk-accordion-item-title', 'pk-dropdown'].includes(tag),
        }
      }
    }
    ),
    // vueJsx(),
    viteSingleFile()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@dataPath': fileURLToPath(new URL(dataPath, import.meta.url)),
    }
  }
})
