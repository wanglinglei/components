<template>
  <el-button
    :type="type"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :icon="iconComponent"
    :round="round"
    :circle="circle"
    :plain="plain"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import { ElButton } from "element-plus";
import { computed } from "vue";
import type { Component } from "vue";

defineOptions({
  name: "VEnhancedButton",
});

interface Props {
  type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
  size?: "large" | "default" | "small";
  disabled?: boolean;
  loading?: boolean;
  icon?: Component;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  size: "default",
  disabled: false,
  loading: false,
  round: false,
  circle: false,
  plain: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const iconComponent = computed(() => props.icon);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};
</script>

<style scoped>
/* 自定义样式可以在这里添加 */
</style>
