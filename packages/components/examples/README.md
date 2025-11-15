# 使用示例

本目录包含组件库的使用示例，演示如何以不同方式引入和使用组件。

## 示例列表

### 1. full-import.html
完整引入示例（全量导入）

**使用场景：**
- 小型项目
- 需要使用大部分组件
- 不关心打包体积

**使用方式：**
```bash
# 先构建组件库
cd /Users/wangwang/Desktop/temporary/componets
pnpm build:components

# 然后在浏览器中打开
open packages/components/examples/full-import.html
```

**特点：**
- ✅ 使用 `app.use(VueLib)` 一次性注册所有组件
- ✅ 无需单独导入每个组件
- ✅ 代码简洁
- ❌ 打包体积较大

### 2. on-demand-import.html
按需引入示例（推荐）

**使用场景：**
- 中大型项目
- 只使用部分组件
- 关注性能和打包体积

**使用方式：**
需要配合构建工具使用，查看文件内容了解具体用法。

**特点：**
- ✅ 支持 Tree Shaking
- ✅ 按需加载，减小打包体积
- ✅ 更好的性能
- ⚠️ 需要手动导入每个组件

### 3. typescript-usage.ts
TypeScript 类型定义使用示例

**使用场景：**
- TypeScript 项目
- 需要类型提示和类型检查
- 开发复杂业务逻辑

**使用方式：**
查看文件内容了解如何导入和使用类型定义。

**特点：**
- ✅ 完整的类型定义导出
- ✅ 丰富的使用示例
- ✅ Composable 函数示例
- ✅ 类型守卫和泛型使用

## 快速测试

### 测试全量引入

1. 构建组件库：
```bash
cd /Users/wangwang/Desktop/temporary/componets
pnpm build:components
```

2. 打开 `full-import.html`，在浏览器控制台查看输出

3. 验证所有组件已自动注册：
```javascript
// 打开浏览器控制台
console.log(app._context.components)
// 应该看到 VButton, VEnhancedButton 等组件
```

### 测试按需引入

在你的 Vue 项目中：

```vue
<script setup>
// 只导入需要的组件
import { Button } from '@vue-lib/components'
import '@vue-lib/components/style.css'
</script>

<template>
  <Button type="primary">测试按钮</Button>
</template>
```

## 验证 Tree Shaking

### 1. 创建测试项目

```bash
npm create vite@latest test-app -- --template vue-ts
cd test-app
npm install
npm install ../path/to/@vue-lib/components
```

### 2. 使用按需引入

```typescript
// src/main.ts
import { Button } from '@vue-lib/components'
import '@vue-lib/components/style.css'

// 只使用 Button，不使用 EnhancedButton
```

### 3. 构建并查看体积

```bash
npm run build
```

检查 `dist/assets` 目录，你会发现：
- ✅ 只有 Button 相关代码被打包
- ✅ EnhancedButton 相关代码未被包含
- ✅ Element Plus 相关代码也未被包含（如果没用到）

## 打包体积对比

| 引入方式 | 组件数量 | 打包体积（未压缩） | 打包体积（Gzip） |
|---------|---------|------------------|-----------------|
| 全量引入 | 全部 | ~50KB | ~15KB |
| 按需引入（1个基础组件） | 1 | ~10KB | ~3KB |
| 按需引入（1个增强组件） | 1 | ~25KB | ~8KB |

*注：实际体积取决于组件复杂度和使用的功能*

## 最佳实践建议

### 小型项目（< 50KB）
```typescript
// 使用全量引入
import VueLib from '@vue-lib/components'
app.use(VueLib)
```

### 中大型项目（> 50KB）
```typescript
// 使用按需引入
import { Button, EnhancedButton } from '@vue-lib/components'
```

### 组件库/工具库
```typescript
// 永远使用按需引入，不增加用户负担
import { Button } from '@vue-lib/components'
```

## 常见问题

### Q: 为什么按需引入还是打包了整个组件库？

A: 检查以下几点：
1. 确保使用 ES Modules 导入（`import` 而不是 `require`）
2. 确保构建工具支持 Tree Shaking（Vite/Webpack 5+）
3. 确保没有意外导入整个库（检查 `import * as VueLib`）

### Q: 可以混用两种方式吗？

A: 不建议。选择一种方式并保持一致：
- ❌ 不要同时使用 `app.use(VueLib)` 和按需导入
- ✅ 选择全量引入或按需引入其中一种

### Q: TypeScript 类型提示正常吗？

A: 是的，两种方式都提供完整的类型支持：
```typescript
import { Button } from '@vue-lib/components' // ✅ 有类型
import VueLib from '@vue-lib/components'      // ✅ 有类型
```

## 更多信息

- 查看 [USAGE.md](../USAGE.md) 了解详细使用说明
- 查看 [README.md](../README.md) 了解组件列表和 API

