<template>
  <div class="home">
    <h1>Vue3 组件库</h1>
    <p>基于 Vue3 + TypeScript + Vite 构建的组件库</p>

    <h2>特性</h2>
    <ul>
      <li>🚀 基于 Vue3 Composition API</li>
      <li>📦 开箱即用的高质量组件</li>
      <li>🛠️ 使用 TypeScript 编写，提供完整的类型定义</li>
      <li>🎨 支持主题定制</li>
      <li>⚡ 基于 Element Plus 进行二次开发，功能更强大</li>
    </ul>

    <h2>安装</h2>
    <pre><code>npm install @vue-lib/components element-plus
# 或
pnpm add @vue-lib/components element-plus</code></pre>

    <p><strong>注意：</strong>由于组件库基于 Element Plus 进行二次开发，需要同时安装 element-plus 作为依赖。</p>

    <h2>快速开始</h2>
    <h3>完整引入</h3>
    <pre><code>import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueLib from '@vue-lib/components'
import '@vue-lib/components/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(VueLib)
app.mount('#app')</code></pre>

    <h3>按需引入</h3>
    <pre><code>import { Button, EnhancedButton } from '@vue-lib/components'
import 'element-plus/dist/index.css'
import '@vue-lib/components/style.css'

export default {
  components: {
    VButton: Button,
    VEnhancedButton: EnhancedButton
  }
}</code></pre>

    <h2>组件分类</h2>
    <h3>基础组件</h3>
    <p>自主开发的轻量级组件，无需额外依赖：</p>
    <ul>
      <li>Button - 基础按钮组件</li>
    </ul>

    <h3>增强组件（基于 Element Plus）</h3>
    <p>基于 Element Plus 进行二次封装的组件，提供更丰富的功能：</p>
    <ul>
      <li>EnhancedButton - 增强型按钮，支持加载状态、图标等</li>
    </ul>

    <h2>浏览器支持</h2>
    <p>现代浏览器和 IE11（需要 polyfill）。</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  line-height: 1.8;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 1px solid #e1e4e8;
  padding-bottom: 10px;
}

h3 {
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  padding-left: 25px;
}

li {
  margin: 8px 0;
}
</style>

