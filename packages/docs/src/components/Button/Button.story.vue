<template>
  <Story title="Button 按钮" :auto-props-disabled="true">
    <Variant title="Button" :initial-state="initialState">
      <template #default="{ state }">
        <Button
          :type="state.type"
          :size="state.size"
          :disabled="state.disabled"
          @click="logEvent('click', state)"
          >按钮文本</Button
        >
      </template>
      <template #controls="{ state }">
        <HstSelect
          v-model="state.type"
          title="Type"
          :options="[
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Primary',
              value: 'primary',
            },
            {
              label: 'Success',
              value: 'success',
            },
            {
              label: 'Warning',
              value: 'warning',
            },
            {
              label: 'Danger',
              value: 'danger',
            },
            {
              label: 'Info',
              value: 'info',
            },
          ]"
        />
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="[
            {
              label: 'Large',
              value: 'large',
            },
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Small',
              value: 'small',
            },
          ]"
        />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { Button } from "@vue-lib/components";
import { logEvent } from "histoire/client";
import "element-plus/dist/index.css";
import { reactive } from "vue";

const initialState = {
  type: "default",
  size: "default",
  disabled: false,
};
</script>

<style></style>
