<template>
  <div class="button-demo">
    <h1>Button 按钮</h1>
    <p>常用的操作按钮。</p>

    <h2>基础用法</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-button>默认按钮</v-button>
        <v-button type="primary">主要按钮</v-button>
        <v-button type="success">成功按钮</v-button>
        <v-button type="info">信息按钮</v-button>
        <v-button type="warning">警告按钮</v-button>
        <v-button type="danger">危险按钮</v-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-button&gt;默认按钮&lt;/v-button&gt;
&lt;v-button type="primary"&gt;主要按钮&lt;/v-button&gt;
&lt;v-button type="success"&gt;成功按钮&lt;/v-button&gt;
&lt;v-button type="info"&gt;信息按钮&lt;/v-button&gt;
&lt;v-button type="warning"&gt;警告按钮&lt;/v-button&gt;
&lt;v-button type="danger"&gt;危险按钮&lt;/v-button&gt;</code></pre>
      </div>
    </div>

    <h2>按钮尺寸</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-button size="large">大型按钮</v-button>
        <v-button>默认按钮</v-button>
        <v-button size="small">小型按钮</v-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-button size="large"&gt;大型按钮&lt;/v-button&gt;
&lt;v-button&gt;默认按钮&lt;/v-button&gt;
&lt;v-button size="small"&gt;小型按钮&lt;/v-button&gt;</code></pre>
      </div>
    </div>

    <h2>禁用状态</h2>
    <div class="demo-block">
      <div class="demo-block__demo">
        <v-button disabled>默认按钮</v-button>
        <v-button type="primary" disabled>主要按钮</v-button>
        <v-button type="success" disabled>成功按钮</v-button>
      </div>
      <div class="demo-block__code">
        <pre><code>&lt;v-button disabled&gt;默认按钮&lt;/v-button&gt;
&lt;v-button type="primary" disabled&gt;主要按钮&lt;/v-button&gt;
&lt;v-button type="success" disabled&gt;成功按钮&lt;/v-button&gt;</code></pre>
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
          <td>点击按钮时触发</td>
          <td>(event: MouseEvent)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.button-demo {
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
</style>

