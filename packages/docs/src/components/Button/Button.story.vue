<template>
  <Story title="Button 按钮">
    <Variant title="default">
      <div>
        <p>测试文本</p>
        <Button>默认按钮</Button>
      </div>
    </Variant>
    <Variant title="primary">
      <Button type="primary">主要按钮</Button>
    </Variant>
    <Variant title="success">
      <Button type="success">成功按钮</Button>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
// 直接从源码导入，避免构建版本的 Vue 上下文问题
import Button from "../../../../components/src/components/Button/Button.vue";
import "element-plus/dist/index.css";
</script>

<style></style>
