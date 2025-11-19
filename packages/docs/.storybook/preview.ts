import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import "element-plus/dist/index.css";
import "@vue-lib/components/style.css";
import "../src/style.css";

// 配置 Vue 3
setup((app) => {
  // 在这里可以添加全局插件、组件等
  // app.use(...)
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      controls: {
        sort: "requiredFirst",
      },
      argTypes: {
        // 自定义表头文字
        table: {
          columnHeaders: {
            name: "名称",
            description: "描述",
            default: "默认值",
            control: "控件",
          },
        },
      },
    },
  },
};

export default preview;
