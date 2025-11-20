import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import ElementPlus from "element-plus";

export default defineConfig({
  plugins: [
    HstVue({
      setupApp: (app) => {
        // 全局注册 Element Plus，供 EnhancedButton 使用
        app.use(ElementPlus);
      },
    }),
  ],
  vite: {
    resolve: {
      // 确保 vue 实例唯一，避免多实例问题
      dedupe: ["vue", "@vue/runtime-core", "@vue/runtime-dom", "@vue/shared"],
      alias: {
        // 将 @vue-lib/components 指向源码，而不是构建后的 dist
        // 这样可以避免构建版本与 Histoire 环境的 Vue 实例冲突
        "@vue-lib/components": resolve(__dirname, "../components/src/index.ts"),
      },
    },
    optimizeDeps: {
      // 预构建这些依赖，避免 ESM 导出问题
      include: [
        "vue",
        "element-plus",
        "dayjs",
        "dayjs/locale/zh-cn",
        "@element-plus/icons-vue",
      ],
      // 强制预构建，确保使用相同的 Vue 实例
      force: true,
    },
  },
  theme: {
    title: "我的组件库",
  },
});
