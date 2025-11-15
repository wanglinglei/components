import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// 获取构建格式环境变量
const buildFormat = process.env.BUILD_FORMAT;

// 根据环境变量决定构建格式
const getFormats = () => {
  if (buildFormat === "es") return ["es"];
  if (buildFormat === "umd") return ["umd"];
  return ["es", "umd"]; // 默认构建两种格式
};

// 根据环境变量决定输出配置
const getOutputConfig = () => {
  const formats = getFormats();
  const outputs = [];

  if (formats.includes("es")) {
    outputs.push({
      format: "es" as const,
      entryFileNames: "index.es.js",
      // 保留模块结构，支持 tree-shaking
      preserveModules: false,
      exports: "named" as const,
      sourcemap: true,
    });
  }

  if (formats.includes("umd")) {
    outputs.push({
      format: "umd" as const,
      entryFileNames: "index.umd.js",
      name: "VueLib",
      exports: "named" as const,
      sourcemap: true,
      globals: {
        vue: "Vue",
        "element-plus": "ElementPlus",
        "@element-plus/icons-vue": "ElementPlusIconsVue",
      },
    });
  }

  return outputs;
};

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueLib",
      fileName: (format) => `index.${format}.js`,
      formats: getFormats() as ("es" | "umd")[],
    },
    rollupOptions: {
      external: ["vue", "element-plus", "@element-plus/icons-vue"],
      output: getOutputConfig(),
    },
  },
});
