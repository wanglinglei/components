<template>
  <Story title="EnhancedButton 增强按钮">
    <Variant title="default">
      <div>
        <p>基于 Element Plus 的增强按钮</p>
        <EnhancedButton>默认按钮</EnhancedButton>
      </div>
    </Variant>
    <Variant title="primary">
      <EnhancedButton type="primary">主要按钮</EnhancedButton>
    </Variant>
    <Variant title="success">
      <EnhancedButton type="success">成功按钮</EnhancedButton>
    </Variant>
    <Variant title="with-icon">
      <EnhancedButton type="primary" :icon="Search">搜索</EnhancedButton>
    </Variant>
    <Variant title="loading">
      <EnhancedButton type="primary" :loading="true">加载中</EnhancedButton>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { EnhancedButton } from "@vue-lib/components";
import { Search } from "@element-plus/icons-vue";
</script>

<style></style>
