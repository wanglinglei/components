# @vue-lib/components

[![npm version](https://img.shields.io/npm/v/@vue-lib/components.svg)](https://www.npmjs.com/package/@vue-lib/components)
[![license](https://img.shields.io/npm/l/@vue-lib/components.svg)](https://github.com/your-org/vue-lib-components/blob/main/LICENSE)

Vue3 组件库，基于 Element Plus 进行二次开发，提供开箱即用的高质量组件。

## ✨ 特性

- 🚀 **Vue 3 Composition API** - 使用最新的 Vue 3 特性
- 📦 **开箱即用** - 完整的组件库，支持全量和按需引入
- 🛠️ **TypeScript** - 完整的类型定义，每个组件独立的类型文件
- 🎨 **Element Plus 增强** - 基于 Element Plus 二次开发，功能更强大
- 📱 **响应式设计** - 支持多种尺寸和状态
- 🌲 **Tree Shaking** - 按需引入，减小打包体积
- 🗺️ **SourceMap** - 包含完整的 source map，方便调试
- 📖 **详细文档** - 完整的使用文档和 API 说明

## 📦 安装

```bash
npm install @vue-lib/components element-plus
# 或
pnpm add @vue-lib/components element-plus
# 或
yarn add @vue-lib/components element-plus
```

> **注意：** 由于部分组件基于 Element Plus 进行二次开发，需要同时安装 `element-plus` 作为 peer 依赖。

## 🚀 快速开始

### 完整引入（适合小型项目）

```typescript
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueLib from "@vue-lib/components";
import "@vue-lib/components/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus);
app.use(VueLib); // 自动注册所有组件
app.mount("#app");
```

在模板中使用：

```vue
<template>
  <div>
    <v-button type="primary">基础按钮</v-button>
    <v-enhanced-button type="success" loading>增强按钮</v-enhanced-button>
  </div>
</template>
```

### 按需引入（推荐，适合大型项目）

```vue
<template>
  <div>
    <Button type="primary" @click="handleClick">点击我</Button>
    <EnhancedButton type="success" :loading="loading" :icon="Search">
      搜索
    </EnhancedButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button, EnhancedButton } from "@vue-lib/components";
import "@vue-lib/components/style.css";
import "element-plus/dist/index.css";
import { Search } from "@element-plus/icons-vue";

const loading = ref(false);

const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
</script>
```

## 📚 使用方式

### 方式一：完整引入

适合小型项目或需要使用大部分组件的场景。

**特点：**

- ✅ 简单方便，一行代码搞定
- ✅ 所有组件自动注册
- ❌ 打包所有组件代码

```typescript
import VueLib from "@vue-lib/components";
import "@vue-lib/components/style.css";

app.use(VueLib);
```

### 方式二：按需引入（推荐）

适合大型项目，减小打包体积，支持 Tree Shaking。

**特点：**

- ✅ 支持 Tree Shaking
- ✅ 只打包使用的组件
- ✅ 更小的打包体积
- ✅ 更好的性能

```typescript
import { Button, EnhancedButton } from "@vue-lib/components";
import "@vue-lib/components/style.css";
```

### 方式三：CDN 引入

适合快速原型开发或简单页面。

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- 引入样式 -->
    <link
      rel="stylesheet"
      href="https://unpkg.com/element-plus/dist/index.css"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@vue-lib/components/dist/style.css"
    />
  </head>
  <body>
    <div id="app">
      <v-button type="primary">Hello World</v-button>
    </div>

    <!-- 引入 Vue 3 -->
    <script src="https://unpkg.com/vue@3"></script>
    <!-- 引入 Element Plus -->
    <script src="https://unpkg.com/element-plus"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/@vue-lib/components"></script>

    <script>
      const { createApp } = Vue;
      const app = createApp({
        // 你的应用代码
      });
      app.use(VueLib);
      app.mount("#app");
    </script>
  </body>
</html>
```

## 🎯 组件列表

### 基础组件

| 组件   | 说明         | 特性               |
| ------ | ------------ | ------------------ |
| Button | 基础按钮组件 | 轻量级，无额外依赖 |

### 增强组件（基于 Element Plus）

| 组件           | 说明         | 特性                       |
| -------------- | ------------ | -------------------------- |
| EnhancedButton | 增强按钮组件 | 支持加载状态、图标、圆角等 |

## 📖 TypeScript 支持

组件库提供完整的 TypeScript 类型定义，每个组件都有独立的类型文件。

### 类型组织结构

```
src/components/
├── Button/
│   ├── Button.vue          # 组件实现
│   ├── types.ts            # 类型定义
│   └── index.ts            # 导出入口
└── EnhancedButton/
    ├── EnhancedButton.vue
    ├── types.ts
    └── index.ts
```

**优势：**

- ✅ 类型定义与组件在同一目录，便于维护
- ✅ 支持按组件导入类型
- ✅ 更清晰的模块化结构
- ✅ 便于扩展和管理

### 类型导入方式

#### 方式一：从根路径导入（推荐）

```typescript
import { Button, EnhancedButton } from "@vue-lib/components";
import type {
  ButtonProps,
  ButtonType,
  ButtonSize,
  EnhancedButtonProps,
  ButtonInstance,
  EnhancedButtonInstance,
} from "@vue-lib/components";

// 使用类型
const config: ButtonProps = {
  type: "primary",
  size: "large",
  disabled: false,
};

const buttonRef = ref<ButtonInstance>();
```

#### 方式二：从组件路径导入

```typescript
// 只导入 Button 相关类型
import type {
  ButtonProps,
  ButtonType,
  ButtonSize,
} from "@vue-lib/components/components/Button";

// 只导入 EnhancedButton 相关类型
import type { EnhancedButtonProps } from "@vue-lib/components/components/EnhancedButton";
```

### 可用类型列表

#### Button 组件

| 类型名           | 描述       | 用途                                                                     |
| ---------------- | ---------- | ------------------------------------------------------------------------ |
| `ButtonType`     | 按钮类型   | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` |
| `ButtonSize`     | 按钮尺寸   | `'large' \| 'default' \| 'small'`                                        |
| `ButtonProps`    | 组件 Props | 类型定义                                                                 |
| `ButtonEmits`    | 组件事件   | 事件类型                                                                 |
| `ButtonInstance` | 组件实例   | ref 引用类型                                                             |

#### EnhancedButton 组件

| 类型名                   | 描述       | 用途                  |
| ------------------------ | ---------- | --------------------- |
| `EnhancedButtonType`     | 按钮类型   | 同 ButtonType         |
| `EnhancedButtonSize`     | 按钮尺寸   | 同 ButtonSize         |
| `EnhancedButtonProps`    | 组件 Props | 包含 loading、icon 等 |
| `EnhancedButtonEmits`    | 组件事件   | 事件类型              |
| `EnhancedButtonInstance` | 组件实例   | ref 引用类型          |

### 完整使用示例

```vue
<template>
  <div>
    <Button v-bind="buttonProps" @click="handleClick"> 点击我 </Button>
    <EnhancedButton
      ref="enhancedButtonRef"
      v-bind="enhancedButtonProps"
      @click="handleEnhancedClick"
    >
      增强按钮
    </EnhancedButton>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button, EnhancedButton } from "@vue-lib/components";
import type {
  ButtonProps,
  EnhancedButtonProps,
  EnhancedButtonInstance,
} from "@vue-lib/components";

// 使用类型定义响应式数据
const buttonProps = reactive<ButtonProps>({
  type: "primary",
  size: "default",
  disabled: false,
});

const enhancedButtonProps = reactive<EnhancedButtonProps>({
  type: "success",
  size: "large",
  loading: false,
  round: true,
});

// 组件实例引用
const enhancedButtonRef = ref<EnhancedButtonInstance>();

// 事件处理
const handleClick = (event: MouseEvent) => {
  console.log("Button clicked", event);
};

const handleEnhancedClick = (event: MouseEvent) => {
  enhancedButtonProps.loading = true;
  setTimeout(() => {
    enhancedButtonProps.loading = false;
  }, 2000);
};
</script>
```

## 🔨 开发指南

### 项目结构

```
packages/components/
├── src/
│   ├── components/          # 组件源码
│   │   ├── Button/
│   │   │   ├── Button.vue
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   └── EnhancedButton/
│   │       ├── EnhancedButton.vue
│   │       ├── types.ts
│   │       └── index.ts
│   └── index.ts             # 统一入口
├── dist/                    # 构建产物
├── examples/                # 使用示例
├── package.json
├── vite.config.ts          # Vite 配置
├── tsconfig.json           # TypeScript 配置
└── README.md
```

### 开发命令

```bash
# 安装依赖
pnpm install

# 开发模式（启动文档站点）
pnpm dev

# 构建组件库（同时构建 ES 和 UMD）
pnpm build

# 只构建 ES 模块
pnpm build:es

# 只构建 UMD 模块
pnpm build:umd

# 类型检查
vue-tsc --noEmit
```

### 构建产物

构建后会生成以下文件：

```
dist/
├── components/              # 组件类型声明
│   ├── Button/
│   │   ├── Button.vue.d.ts
│   │   ├── types.d.ts
│   │   └── index.d.ts
│   └── EnhancedButton/
│       ├── EnhancedButton.vue.d.ts
│       ├── types.d.ts
│       └── index.d.ts
├── index.d.ts              # 统一类型入口
├── index.es.js             # ESM 格式
├── index.es.js.map         # ESM sourcemap
├── index.umd.js            # UMD 格式
├── index.umd.js.map        # UMD sourcemap
└── style.css               # 样式文件
```

**构建特性：**

- ✅ 双格式输出（ESM + UMD）
- ✅ 完整的 SourceMap 支持
- ✅ 自动生成类型声明文件
- ✅ 支持 Tree Shaking
- ✅ 模块化的类型定义

### 构建命令说明

| 命令             | 说明                 | 产物                | 使用场景             |
| ---------------- | -------------------- | ------------------- | -------------------- |
| `pnpm build`     | 构建全部格式（默认） | ES + UMD + 类型文件 | 发布到 npm 前使用    |
| `pnpm build:es`  | 只构建 ES 模块       | ES + 类型文件       | 开发调试，构建速度快 |
| `pnpm build:umd` | 只构建 UMD 模块      | UMD + 类型文件      | 只需要 CDN 使用      |

**环境变量控制：**

```bash
# 只构建 ES 模块
BUILD_FORMAT=es pnpm build

# 只构建 UMD 模块
BUILD_FORMAT=umd pnpm build

# 构建全部（默认）
pnpm build
```

**构建时间对比：**

| 构建方式 | 时间  | 文件大小                 |
| -------- | ----- | ------------------------ |
| 全部格式 | ~1.5s | ES: 2.25kB + UMD: 1.94kB |
| 只 ES    | ~1.5s | ES: 2.25kB               |
| 只 UMD   | ~1.5s | UMD: 1.94kB              |

## 🎨 添加新组件

### 1. 创建组件目录

```bash
mkdir -p src/components/NewComponent
```

### 2. 创建组件文件

#### NewComponent.vue

```vue
<template>
  <div class="new-component">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "VNewComponent",
});

// 组件逻辑
</script>

<style scoped>
.new-component {
  /* 样式 */
}
</style>
```

#### types.ts

```typescript
/**
 * NewComponent 组件类型定义
 */

export interface NewComponentProps {
  // 定义 Props
}

export interface NewComponentEmits {
  // 定义 Emits
}

export type NewComponentInstance = InstanceType<
  typeof import("./NewComponent.vue")["default"]
>;
```

#### index.ts

```typescript
import NewComponent from "./NewComponent.vue";

export default NewComponent;
export { NewComponent };

export type {
  NewComponentProps,
  NewComponentEmits,
  NewComponentInstance,
} from "./types";
```

### 3. 在根 index.ts 中注册

```typescript
// src/index.ts
import NewComponent from "./components/NewComponent";

// 导出类型
export type {
  NewComponentProps,
  NewComponentEmits,
  NewComponentInstance,
} from "./components/NewComponent";

// 导出组件
export { NewComponent };

// 添加到组件列表
const components = [Button, EnhancedButton, NewComponent];
```

### 4. 构建并验证

```bash
pnpm build
```

检查生成的类型文件：

- `dist/components/NewComponent/types.d.ts`
- `dist/components/NewComponent/index.d.ts`

## 📐 最佳实践

### 1. 类型命名规范

- Props 接口：`{ComponentName}Props`
- Emits 接口：`{ComponentName}Emits`
- 实例类型：`{ComponentName}Instance`
- 枚举类型：`{ComponentName}{PropertyName}`

### 2. 组件命名

- 组件 name：`V{ComponentName}`（如 `VButton`）
- 文件名：`{ComponentName}.vue`（大驼峰）
- 目录名：`{ComponentName}`（大驼峰）

### 3. JSDoc 注释

为所有导出的类型添加 JSDoc 注释：

```typescript
/**
 * 按钮组件 Props
 */
export interface ButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonType;

  /**
   * 按钮尺寸
   * @default 'default'
   */
  size?: ButtonSize;
}
```

### 4. 类型导出

总是使用 `export type` 导出类型，避免运行时引入：

```typescript
// ✅ 推荐
export type { ButtonProps } from "./components/Button";

// ❌ 避免
export { ButtonProps } from "./components/Button";
```

### 5. 项目规模建议

**小型项目（< 10 个组件）**

- 使用完整引入
- 代码简洁，无需单独导入

**中大型项目（> 10 个组件）**

- 使用按需引入
- 减小打包体积
- 更好的性能

**组件库/工具库**

- 永远使用按需引入
- 不增加用户项目体积
- 保持依赖清晰

## 🔧 配置说明

### Vite 配置

```typescript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true, // 自动生成类型入口
      copyDtsFiles: true, // 复制 .d.ts 文件
    }),
  ],
  build: {
    sourcemap: true, // 生成 sourcemap
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueLib",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["vue", "element-plus", "@element-plus/icons-vue"],
      output: {
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
        },
        exports: "named",
      },
    },
  },
});
```

### Package.json 配置

```json
{
  "name": "@vue-lib/components",
  "version": "1.0.0",
  "main": "./dist/index.umd.js",
  "module": "./dist/index.es.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.js"
    },
    "./components/Button": {
      "types": "./dist/components/Button/index.d.ts"
    },
    "./style.css": "./dist/style.css"
  },
  "sideEffects": ["*.css", "*.vue"],
  "peerDependencies": {
    "vue": "^3.3.0",
    "element-plus": "^2.4.0"
  }
}
```

## ❓ 常见问题

### Q: 为什么需要安装 Element Plus？

A: 部分增强组件基于 Element Plus 进行二次开发，需要 Element Plus 作为 peer 依赖。如果只使用基础组件，可以不安装。

### Q: 如何按需引入样式？

A: 目前需要手动引入完整样式文件。未来可能支持自动按需引入。

```typescript
import "@vue-lib/components/style.css";
```

### Q: TypeScript 类型没有提示？

A: 确保：

1. 已安装组件库
2. IDE 已正确配置 TypeScript
3. 使用 `type` 关键字导入类型

### Q: 如何自定义主题？

A: 可以通过覆盖 CSS 变量来自定义主题：

```css
:root {
  --v-button-primary-bg: #your-color;
}
```

### Q: 构建后类型文件在哪里？

A: 所有类型文件都在 `dist/` 目录下，与源码结构一致。

### Q: 支持 Vue 2 吗？

A: 不支持，本组件库基于 Vue 3 开发。

### Q: 如何贡献代码？

A:

1. Fork 本仓库
2. 创建特性分支
3. 提交代码
4. 发起 Pull Request

## 📦 发布到 npm

### 1. 修改 package.json

确保包名唯一：

```json
{
  "name": "@your-org/components",
  "version": "1.0.0"
}
```

### 2. 构建

```bash
pnpm build
```

### 3. 登录 npm

```bash
npm login
```

### 4. 发布

```bash
npm publish --access public
```

## 📄 License

MIT

## 📝 更多示例

### Composition API 中使用类型

```typescript
import { ref, computed } from "vue";
import type { ButtonType, ButtonSize, ButtonProps } from "@vue-lib/components";

export function useButton(initialType: ButtonType = "default") {
  const buttonType = ref<ButtonType>(initialType);
  const buttonSize = ref<ButtonSize>("default");
  const disabled = ref(false);

  const props = computed<ButtonProps>(() => ({
    type: buttonType.value,
    size: buttonSize.value,
    disabled: disabled.value,
  }));

  const setType = (type: ButtonType) => {
    buttonType.value = type;
  };

  const setSize = (size: ButtonSize) => {
    buttonSize.value = size;
  };

  return {
    props,
    setType,
    setSize,
    disabled,
  };
}

// 使用
const { props, setType, disabled } = useButton("primary");
```

### 泛型函数中使用

```typescript
import type { ButtonProps, EnhancedButtonProps } from "@vue-lib/components";

type ComponentProps = ButtonProps | EnhancedButtonProps;

function renderButton<T extends ComponentProps>(props: T): void {
  console.log("Rendering button with props:", props);

  // TypeScript 会正确推断类型
  if ("loading" in props) {
    // 这里 props 被推断为 EnhancedButtonProps
    console.log("Loading state:", props.loading);
  }
}
```

### 类型守卫

```typescript
import type { ButtonProps, EnhancedButtonProps } from "@vue-lib/components";

function isEnhancedButtonProps(
  props: ButtonProps | EnhancedButtonProps
): props is EnhancedButtonProps {
  return "loading" in props;
}

function handleButtonProps(props: ButtonProps | EnhancedButtonProps) {
  if (isEnhancedButtonProps(props)) {
    console.log("Loading:", props.loading);
    console.log("Round:", props.round);
  } else {
    console.log("Type:", props.type);
  }
}
```

### 在 JSX/TSX 中使用

```tsx
import { defineComponent } from "vue";
import { Button, EnhancedButton } from "@vue-lib/components";
import type { ButtonProps, EnhancedButtonProps } from "@vue-lib/components";

export default defineComponent({
  setup() {
    const buttonProps: ButtonProps = {
      type: "primary",
      size: "large",
    };

    const enhancedProps: EnhancedButtonProps = {
      type: "success",
      loading: true,
      round: true,
    };

    return () => (
      <div>
        <Button {...buttonProps}>基础按钮</Button>
        <EnhancedButton {...enhancedProps}>增强按钮</EnhancedButton>
      </div>
    );
  },
});
```

## 🔗 相关链接

- [Vue 3 官方文档](https://vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发规范

- 使用 Vue 3 Composition API
- 使用 TypeScript 编写组件
- 组件需要提供完整的类型定义
- 每个组件需要有对应的文档和示例
- 提交前确保通过 lint 检查

## 📮 联系方式

- Issue: [GitHub Issues](https://github.com/your-org/vue-lib-components/issues)
- Email: your-email@example.com

## 📄 更新日志

### v1.0.0 (2024-01-01)

- 🎉 初始版本发布
- ✨ 基础 Button 组件
- ✨ 增强 EnhancedButton 组件
- 📦 支持 ESM 和 UMD 格式
- 📖 完整的 TypeScript 类型支持
- 🗺️ 包含 SourceMap

---

Made with ❤️ by Your Team
