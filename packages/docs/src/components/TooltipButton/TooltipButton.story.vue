<template>
  <Story title="TooltipButton 工具提示按钮" :auto-props-disabled="true">
    <Variant title="TooltipButton" :initial-state="initialState">
      <template #default="{ state }">
        <TooltipButton
          :type="state.type"
          :size="state.size"
          :disabled="state.disabled"
          :loading="state.loading"
          :plain="state.plain"
          :round="state.round"
          :circle="state.circle"
          :link="state.link"
          :tooltip="state.tooltip || undefined"
          :icon="state.showIcon ? Search : undefined"
          :icon-placement="state.iconPlacement"
          :confirm-message="state.confirmMessage || undefined"
          :debounce-delay="state.debounceDelay"
          :auto-loading="state.autoLoading"
          :action="state.withAction ? handleAsyncAction : undefined"
          @click="logEvent('click', state)"
          @action-success="() => logEvent('actionSuccess', {})"
          @action-error="(error) => logEvent('actionError', error)"
        >
          {{ state.buttonText }}
        </TooltipButton>
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.buttonText" title="按钮文本" />
        <HstSelect
          v-model="state.type"
          title="Type"
          :options="[
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
            { label: 'Danger', value: 'danger' },
            { label: 'Info', value: 'info' },
          ]"
        />
        <HstSelect
          v-model="state.size"
          title="Size"
          :options="[
            { label: 'Large', value: 'large' },
            { label: 'Default', value: 'default' },
            { label: 'Small', value: 'small' },
          ]"
        />
        <HstCheckbox v-model="state.disabled" title="Disabled" />
        <HstCheckbox v-model="state.loading" title="Loading" />
        <HstCheckbox v-model="state.plain" title="Plain" />
        <HstCheckbox v-model="state.round" title="Round" />
        <HstCheckbox v-model="state.circle" title="Circle" />
        <HstCheckbox v-model="state.link" title="Link" />
        <HstText v-model="state.tooltip" title="Tooltip" />
        <HstCheckbox v-model="state.showIcon" title="显示图标" />
        <HstSelect
          v-model="state.iconPlacement"
          title="Icon Placement"
          :options="[
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ]"
        />
        <HstText v-model="state.confirmMessage" title="Confirm Message" />
        <HstNumber v-model="state.debounceDelay" title="Debounce Delay (ms)" />
        <HstCheckbox v-model="state.autoLoading" title="Auto Loading" />
        <HstCheckbox v-model="state.withAction" title="With Async Action" />
      </template>
    </Variant>
  </Story>
</template>

<script setup lang="ts">
import { TooltipButton } from "@vue-lib/components";
import { Search } from "@element-plus/icons-vue";
import { logEvent } from "histoire/client";

const initialState = {
  buttonText: "按钮文本",
  type: "primary",
  size: "default",
  disabled: false,
  loading: false,
  plain: false,
  round: false,
  circle: false,
  link: false,
  tooltip: "",
  showIcon: false,
  iconPlacement: "left",
  confirmMessage: "",
  debounceDelay: 0,
  autoLoading: true,
  withAction: false,
};

const handleAsyncAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("异步操作完成");
};
</script>

<docs lang="md">
# TooltipButton

基于 Element Plus 的增强按钮组件，支持 tooltip、icon、loading、防抖、确认提示等功能。

## 基础用法

```vue
<TooltipButton>默认按钮</TooltipButton>
<TooltipButton type="primary">主要按钮</TooltipButton>
<TooltipButton type="success">成功按钮</TooltipButton>
<TooltipButton type="warning">警告按钮</TooltipButton>
<TooltipButton type="danger">危险按钮</TooltipButton>
<TooltipButton type="info">信息按钮</TooltipButton>
```

## 按钮尺寸

```vue
<TooltipButton size="large">大型按钮</TooltipButton>
<TooltipButton>默认按钮</TooltipButton>
<TooltipButton size="small">小型按钮</TooltipButton>
```

## 带提示信息

```vue
<TooltipButton type="primary" tooltip="这是一个提示信息">
  带提示的按钮
</TooltipButton>
```

## 带图标

```vue
<TooltipButton type="primary" :icon="Search" icon-placement="left">
  搜索
</TooltipButton>
<TooltipButton type="primary" :icon="Search" icon-placement="right">
  搜索
</TooltipButton>
```

## 加载状态

```vue
<TooltipButton type="primary" :loading="true">加载中</TooltipButton>
```

## 异步操作（自动 loading）

```vue
<TooltipButton type="primary" :action="handleAsyncAction">
  异步操作
</TooltipButton>
```

## 防抖功能

```vue
<TooltipButton type="primary" :debounce-delay="1000">
  防抖按钮
</TooltipButton>
```

## 确认提示

```vue
<TooltipButton type="danger" confirm-message="确定要执行此操作吗？">
  删除
</TooltipButton>
```

## API

### Props

| 参数           | 说明                       | 类型      | 可选值                                                            | 默认值  |
| -------------- | -------------------------- | --------- | ----------------------------------------------------------------- | ------- |
| type           | 按钮类型                   | string    | `primary` / `success` / `warning` / `danger` / `info` / `default` | primary |
| size           | 按钮尺寸                   | string    | `large` / `default` / `small`                                     | default |
| disabled       | 是否禁用                   | boolean   | -                                                                 | false   |
| loading        | 是否加载中                 | boolean   | -                                                                 | false   |
| plain          | 是否朴素按钮               | boolean   | -                                                                 | false   |
| round          | 是否圆角按钮               | boolean   | -                                                                 | false   |
| circle         | 是否圆形按钮               | boolean   | -                                                                 | false   |
| link           | 是否链接按钮               | boolean   | -                                                                 | false   |
| tooltip        | 提示信息                   | string    | -                                                                 | -       |
| icon           | 图标组件                   | Component | -                                                                 | -       |
| iconPlacement  | 图标位置                   | string    | `left` / `right`                                                  | left    |
| confirmMessage | 点击前的确认提示           | string    | -                                                                 | -       |
| debounceDelay  | 防抖延迟（毫秒）           | number    | -                                                                 | 0       |
| autoLoading    | 异步操作时自动显示 loading | boolean   | -                                                                 | true    |
| action         | 点击时执行的异步或同步操作 | Function  | -                                                                 | -       |

### Events

| 事件名        | 说明               | 回调参数            |
| ------------- | ------------------ | ------------------- |
| click         | 点击按钮时触发     | (event: MouseEvent) |
| actionSuccess | 异步操作成功时触发 | -                   |
| actionError   | 异步操作失败时触发 | (error: unknown)    |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮文本 |
</docs>

<style></style>
