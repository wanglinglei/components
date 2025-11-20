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
<docs lang="md">
# Button

## 基础用法

```vue
<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>
```

## 按钮尺寸

```vue
<Button size="large">大型按钮</Button>
<Button>默认按钮</Button>
<Button size="small">小型按钮</Button>
```

## 禁用状态

```vue
<Button disabled>默认按钮</Button>
<Button type="primary" disabled>主要按钮</Button>
<Button type="success" disabled>成功按钮</Button>
```

## API

### Props

| 参数     | 说明     | 类型    | 可选值                                                            | 默认值  |
| -------- | -------- | ------- | ----------------------------------------------------------------- | ------- |
| type     | 按钮类型 | string  | `primary` / `success` / `warning` / `danger` / `info` / `default` | default |
| size     | 按钮尺寸 | string  | `large` / `default` / `small`                                     | default |
| disabled | 是否禁用 | boolean | `true` / `false`                                                  | false   |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击按钮时触发 | (event: MouseEvent) |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮文本 |
</docs>
<style></style>
