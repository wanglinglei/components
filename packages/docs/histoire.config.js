import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    HstVue({
      setupApp: (app) => {
        // Element Plus 在 story 文件中导入样式即可
      },
    }),
  ],
  vite: {
    resolve: {
      dedupe: ["vue"],
      alias: {
        "@vue-lib/components": resolve(__dirname, "../components/src"),
      },
    },
  },
  theme: {
    title: "我的组件库",
  },
});
