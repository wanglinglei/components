# Vue3 组件库 Monorepo

基于 Vue3 + TypeScript + Vite + pnpm 构建的组件库 monorepo 项目。

## 项目结构

```
vue-component-library/
├── packages/
│   ├── components/          # 组件库包
│   │   ├── src/
│   │   │   ├── components/  # 组件源码
│   │   │   └── index.ts     # 入口文件
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── tsconfig.json
│   └── docs/                # 文档预览站点
│       ├── src/
│       │   ├── views/       # 文档页面
│       │   ├── router/      # 路由配置
│       │   ├── App.vue
│       │   └── main.ts
│       ├── package.json
│       ├── vite.config.ts
│       └── index.html
├── package.json             # 根 package.json
├── pnpm-workspace.yaml      # pnpm workspace 配置
└── README.md
```

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - JavaScript 的超集
- **Vite** - 下一代前端构建工具
- **pnpm** - 快速、节省磁盘空间的包管理器
- **Vue Router** - Vue.js 官方路由
- **Element Plus** - 基于 Vue 3 的组件库，用于二次开发

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发

启动文档预览站点进行开发：

```bash
pnpm dev
```

访问 http://localhost:3000 查看组件文档。

### 构建

#### 构建组件库（全部格式）

```bash
pnpm build:components
```

构建产物位于 `packages/components/dist/`，包含 ES 和 UMD 两种格式。

#### 构建 ES 模块

```bash
cd packages/components
pnpm build:es
```

只构建 ES 模块格式（`index.es.js`）。

#### 构建 UMD 模块

```bash
cd packages/components
pnpm build:umd
```

只构建 UMD 模块格式（`index.umd.js`）。

#### 构建文档站点

```bash
pnpm build:docs
```

#### 构建全部

```bash
pnpm build
```

构建组件库和文档站点。

## 组件库发布

组件库包 `@vue-lib/components` 已配置好完整的构建流程，支持多种导入方式。

### 构建特性

- ✅ **双格式输出**: ESM (`index.es.js`) 和 UMD (`index.umd.js`)
- ✅ **SourceMap**: 包含完整的 source map 文件，方便调试
- ✅ **类型声明**: 自动生成 TypeScript 类型定义文件
- ✅ **Tree Shaking**: ESM 格式支持 Tree Shaking，按需打包
- ✅ **全量/按需引入**: 同时支持两种引入方式

### 发布步骤

1. 进入组件库目录

```bash
cd packages/components
```

2. 构建组件库

```bash
pnpm build
```

构建产物将包括：
```
dist/
├── index.es.js         # ESM 格式
├── index.es.js.map     # ESM sourcemap
├── index.umd.js        # UMD 格式  
├── index.umd.js.map    # UMD sourcemap
├── index.d.ts          # 类型声明
├── style.css           # 样式文件
└── components/         # 组件类型声明
```

3. 发布到 npm

```bash
npm publish --access public
```

**注意**: 首次发布前需要：
- 修改 `packages/components/package.json` 中的包名（确保名称唯一）
- 登录 npm 账号：`npm login`

### 使用方式

发布后，用户可以通过以下方式使用：

**全量引入：**
```typescript
import VueLib from '@vue-lib/components'
app.use(VueLib) // 自动注册所有组件
```

**按需引入（推荐）：**
```typescript
import { Button, EnhancedButton } from '@vue-lib/components'
// 支持 Tree Shaking，未使用的组件不会被打包
```

## 包说明

### @vue-lib/components

组件库核心包，包含所有 UI 组件。

- **入口文件**: `dist/index.es.js` (ESM) 和 `dist/index.umd.js` (UMD)
- **类型定义**: `dist/index.d.ts`
- **样式文件**: `dist/style.css`
- **依赖**: Vue 3 和 Element Plus（作为 peerDependencies）

**组件分类：**
- **基础组件**: 自主开发的轻量级组件（如 Button）
- **增强组件**: 基于 Element Plus 二次开发的组件（如 EnhancedButton）

**📖 完整文档：**
- [组件库 README](./packages/components/README.md) - 完整的使用指南和 API 文档

### @vue-lib/docs

组件库文档预览站点，用于展示组件和使用文档。包含完整的使用示例和 API 文档。

## 添加新组件

### 基础组件开发

#### 1. 创建组件

在 `packages/components/src/components/` 目录下创建新组件：

```
packages/components/src/components/
└── YourComponent/
    └── YourComponent.vue
```

#### 2. 导出组件

在 `packages/components/src/index.ts` 中导出：

```typescript
import YourComponent from './components/YourComponent/YourComponent.vue'

// 添加到 components 数组
const components = [Button, YourComponent]

// 导出组件
export { Button, YourComponent }
```

### 基于 Element Plus 的增强组件开发

#### 1. 创建组件

使用 Element Plus 组件进行二次封装：

```vue
<template>
  <el-component v-bind="$attrs">
    <slot></slot>
  </el-component>
</template>

<script setup lang="ts">
import { ElComponent } from 'element-plus'

defineOptions({
  name: 'VYourComponent'
})

// 组件逻辑
</script>
```

#### 2. 导出组件

同样在 `packages/components/src/index.ts` 中导出。

### 添加文档和路由

#### 1. 添加文档

在 `packages/docs/src/views/` 中创建对应的文档页面：

```vue
<!-- YourComponent.vue -->
<template>
  <div>
    <h1>YourComponent 组件名称</h1>
    <!-- 组件示例和文档 -->
  </div>
</template>
```

#### 2. 添加路由

在 `packages/docs/src/router/index.ts` 中添加路由：

```typescript
{
  path: '/your-component',
  name: 'YourComponent',
  component: () => import('../views/YourComponent.vue')
}
```

#### 3. 添加导航

在 `packages/docs/src/App.vue` 中添加导航链接。

## 开发规范

- 使用 Vue 3 Composition API
- 使用 TypeScript 编写组件
- 组件需要提供完整的类型定义
- 每个组件需要有对应的文档和示例
- 基础组件保持轻量，无需额外依赖
- 增强组件基于 Element Plus，充分利用其生态

## License

MIT

