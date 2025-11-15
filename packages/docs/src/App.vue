<template>
  <div id="app">
    <div class="layout">
      <aside class="sidebar">
        <h1 class="title">Vue3 组件库</h1>
        <nav class="nav">
          <h3>开发指南</h3>
          <ul>
            <li>
              <router-link to="/">快速开始</router-link>
            </li>
          </ul>
          <h3>基础组件</h3>
          <ul>
            <li>
              <router-link to="/button">Button 按钮</router-link>
            </li>
          </ul>
          <h3>增强组件 (基于 Element Plus)</h3>
          <ul>
            <li>
              <router-link to="/enhanced-button">EnhancedButton 增强按钮</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background-color: #f6f8fa;
  border-right: 1px solid #e1e4e8;
  padding: 20px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.nav h3 {
  font-size: 14px;
  color: #666;
  margin: 20px 0 10px;
  font-weight: 600;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  margin: 5px 0;
}

.nav a {
  display: block;
  padding: 8px 12px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav a:hover {
  background-color: #e6e9ec;
  color: #409eff;
}

.nav a.router-link-active {
  background-color: #409eff;
  color: #fff;
}

.main {
  flex: 1;
  margin-left: 260px;
  padding: 40px;
  max-width: 1200px;
}
</style>

