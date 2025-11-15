<template>
  <button
    :class="['v-button', `v-button--${type}`, `v-button--${size}`]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineOptions({
  name: "VButton",
});

interface Props {
  type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
  size?: "large" | "default" | "small";
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: "default",
  size: "default",
  disabled: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  emit("click", event);
};
</script>

<style scoped>
.v-button {
  display: inline-block;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
  color: #606266;
  cursor: pointer;
  transition: all 0.3s;
  outline: none;
}

.v-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.v-button:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}

.v-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Type styles */
.v-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.v-button--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.v-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.v-button--success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.v-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.v-button--warning:hover {
  background-color: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.v-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.v-button--danger:hover {
  background-color: #f78989;
  border-color: #f78989;
  color: #fff;
}

.v-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.v-button--info:hover {
  background-color: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

/* Size styles */
.v-button--large {
  padding: 12px 20px;
  font-size: 16px;
}

.v-button--small {
  padding: 5px 10px;
  font-size: 12px;
}
</style>
