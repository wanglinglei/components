<template>
  <div class="enhanced-button-demo">
    <h1>EnhancedButton 增强按钮</h1>
    <p>基于 Element Plus 的 Button 组件进行二次封装，提供更强大的功能。</p>

    <h2>基础用法</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button>默认按钮</v-enhanced-button>
        <v-enhanced-button type="primary">主要按钮</v-enhanced-button>
        <v-enhanced-button type="success">成功按钮</v-enhanced-button>
        <v-enhanced-button type="info">信息按钮</v-enhanced-button>
        <v-enhanced-button type="warning">警告按钮</v-enhanced-button>
        <v-enhanced-button type="danger">危险按钮</v-enhanced-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-enhanced-button&gt;默认按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="primary"&gt;主要按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="success"&gt;成功按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="info"&gt;信息按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="warning"&gt;警告按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="danger"&gt;危险按钮&lt;/v-enhanced-button&gt;</code></pre>
      </div>
    </div>

    <h2>朴素按钮</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button plain>默认按钮</v-enhanced-button>
        <v-enhanced-button type="primary" plain>主要按钮</v-enhanced-button>
        <v-enhanced-button type="success" plain>成功按钮</v-enhanced-button>
        <v-enhanced-button type="info" plain>信息按钮</v-enhanced-button>
        <v-enhanced-button type="warning" plain>警告按钮</v-enhanced-button>
        <v-enhanced-button type="danger" plain>危险按钮</v-enhanced-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-enhanced-button plain&gt;默认按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="primary" plain&gt;主要按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="success" plain&gt;成功按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="info" plain&gt;信息按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="warning" plain&gt;警告按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="danger" plain&gt;危险按钮&lt;/v-enhanced-button&gt;</code></pre>
      </div>
    </div>

    <h2>圆角按钮</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button round>默认按钮</v-enhanced-button>
        <v-enhanced-button type="primary" round>主要按钮</v-enhanced-button>
        <v-enhanced-button type="success" round>成功按钮</v-enhanced-button>
        <v-enhanced-button type="info" round>信息按钮</v-enhanced-button>
        <v-enhanced-button type="warning" round>警告按钮</v-enhanced-button>
        <v-enhanced-button type="danger" round>危险按钮</v-enhanced-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-enhanced-button round&gt;默认按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="primary" round&gt;主要按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="success" round&gt;成功按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="info" round&gt;信息按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="warning" round&gt;警告按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="danger" round&gt;危险按钮&lt;/v-enhanced-button&gt;</code></pre>
      </div>
    </div>

    <h2>图标按钮</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button type="primary" :icon="Search">搜索</v-enhanced-button>
        <v-enhanced-button type="success" :icon="Edit">编辑</v-enhanced-button>
        <v-enhanced-button type="danger" :icon="Delete">删除</v-enhanced-button>
        <v-enhanced-button type="primary" :icon="Search" circle />
        <v-enhanced-button type="success" :icon="Edit" circle />
        <v-enhanced-button type="danger" :icon="Delete" circle />
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;script setup&gt;
import { Search, Edit, Delete } from '@element-plus/icons-vue'
&lt;/script&gt;

&lt;v-enhanced-button type="primary" :icon="Search"&gt;搜索&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="success" :icon="Edit"&gt;编辑&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="danger" :icon="Delete"&gt;删除&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="primary" :icon="Search" circle /&gt;
&lt;v-enhanced-button type="success" :icon="Edit" circle /&gt;
&lt;v-enhanced-button type="danger" :icon="Delete" circle /&gt;</code></pre>
      </div>
    </div>

    <h2>加载状态</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button type="primary" loading>加载中</v-enhanced-button>
        <v-enhanced-button type="primary" :loading="loading" @click="handleLoad">
          点击加载
        </v-enhanced-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-enhanced-button type="primary" loading&gt;加载中&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button 
  type="primary" 
  :loading="loading" 
  @click="handleLoad"
&gt;
  点击加载
&lt;/v-enhanced-button&gt;</code></pre>
      </div>
    </div>

    <h2>按钮尺寸</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button size="large" type="primary">大型按钮</v-enhanced-button>
        <v-enhanced-button type="primary">默认按钮</v-enhanced-button>
        <v-enhanced-button size="small" type="primary">小型按钮</v-enhanced-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-enhanced-button size="large" type="primary"&gt;大型按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="primary"&gt;默认按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button size="small" type="primary"&gt;小型按钮&lt;/v-enhanced-button&gt;</code></pre>
      </div>
    </div>

    <h2>禁用状态</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-enhanced-button disabled>默认按钮</v-enhanced-button>
        <v-enhanced-button type="primary" disabled>主要按钮</v-enhanced-button>
        <v-enhanced-button type="success" disabled>成功按钮</v-enhanced-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-enhanced-button disabled&gt;默认按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="primary" disabled&gt;主要按钮&lt;/v-enhanced-button&gt;
&lt;v-enhanced-button type="success" disabled&gt;成功按钮&lt;/v-enhanced-button&gt;</code></pre>
      </div>
    </div>

    <h2>API</h2>
    <h3>Props</h3>
    <table class="api-table">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>按钮类型</td>
          <td>string</td>
          <td>primary / success / warning / danger / info / default</td>
          <td>default</td>
        </tr>
        <tr>
          <td>size</td>
          <td>按钮尺寸</td>
          <td>string</td>
          <td>large / default / small</td>
          <td>default</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>是否加载中状态</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>图标组件</td>
          <td>Component</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>round</td>
          <td>是否圆角按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>circle</td>
          <td>是否圆形按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>plain</td>
          <td>是否朴素按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>Events</h3>
    <table class="api-table">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击按钮时触发（禁用和加载状态下不会触发）</td>
          <td>(event: MouseEvent)</td>
        </tr>
      </tbody>
    </table>

    <h2>特性对比</h2>
    <p>相比原生 Button 组件，EnhancedButton 基于 Element Plus 提供了：</p>
    <ul>
      <li>✅ 更丰富的样式和主题</li>
      <li>✅ 加载状态支持</li>
      <li>✅ 图标支持</li>
      <li>✅ 圆角和圆形按钮</li>
      <li>✅ 朴素按钮样式</li>
      <li>✅ 与 Element Plus 生态系统完美集成</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Edit, Delete } from '@element-plus/icons-vue'

const loading = ref(false)

const handleLoad = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.enhanced-button-demo {
  line-height: 1.8;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 20px;
}

h3 {
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 15px;
}

.demo-block__demo {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
}

.api-table th,
.api-table td {
  border: 1px solid #e1e4e8;
  padding: 12px;
  text-align: left;
}

.api-table th {
  background-color: #f6f8fa;
  font-weight: 600;
}

.api-table td:first-child {
  color: #e96900;
  font-family: monospace;
}

ul {
  padding-left: 25px;
}

li {
  margin: 8px 0;
}
</style>

