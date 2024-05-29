import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

const env = loadEnv("", process.cwd());
const compettion = "./src/assets/" + env.VITE_COMPETITION;
const uefapath = "./src/assets/generic";
const langPath = "./src/components/header/" + env.VITE_TARGET_LANG;
const navContainerPath = "./src/components/" + env.VITE_COMPETITION + "/" + env.VITE_TARGET_LANG;
const langParentPath = "./src/components/header/" + env.VITE_TARGET_LANG;
const dataPath = "./src/components/dataOptions/" + env.VITE_TARGET_LANG + "_" + env.VITE_COMPETITION + ".vue";
const headerDataPath = "./src/components/dataOptions/" + env.VITE_TARGET_LANG + "_header.vue";
const outDir = "dist/" + env.VITE_COMPETITION + "_" + env.VITE_TARGET_LANG;

export default defineConfig({
  build: {
    outDir: outDir,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            [
              "pk-menu-item",
              "pk-menu",
              "pk-accordion-item",
              "pk-accordion-item-content",
              "pk-dialog",
              "pk-icon",
              "pk-accordion-item-title",
              "pk-dropdown",
              "pk-button",
            ].includes(tag),
        },
      },
    }),
    vueJsx(),
    viteSingleFile(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@langPath": fileURLToPath(new URL(langPath, import.meta.url)),
      "@navcontainer": fileURLToPath(new URL(navContainerPath, import.meta.url)),
      "@langparentpath": fileURLToPath(new URL(langParentPath, import.meta.url)),
      "@colorpath": fileURLToPath(new URL(compettion, import.meta.url)),
      "@dataPath": fileURLToPath(new URL(dataPath, import.meta.url)),
      "@headerDataPath": fileURLToPath(new URL(headerDataPath, import.meta.url)),
      "@uafePath": fileURLToPath(new URL(uefapath, import.meta.url)),
    },
  },
});
