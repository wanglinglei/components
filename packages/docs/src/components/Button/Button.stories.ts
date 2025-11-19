import type { Meta, StoryObj } from "@storybook/vue3";
import { Button } from "@vue-lib/components";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  parameters: {
    docs: {
      argTypes: {
        table: {
          columnHeaders: {
            name: "名称",
            description: "描述",
            default: "默认值",
            control: "控件",
          },
        },
      },
    },
  },
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
        labels: {
          default: "默认",
          primary: "主要",
          success: "成功",
          warning: "警告",
          danger: "危险",
          info: "信息",
        },
      },
      options: ["default", "primary", "success", "warning", "danger", "info"],
      defaultValue: "default",
      description: "按钮类型",
      table: {
        type: {
          summary: "enum",
          detail: "default | primary | success | warning | danger | info",
        },
        defaultValue: { summary: "default" },
        category: "属性",
      },
    },
    size: {
      control: {
        type: "inline-radio",
        labels: {
          large: "大",
          default: "默认",
          small: "小",
        },
      },
      options: ["large", "default", "small"],
      defaultValue: "default",
      description: "按钮尺寸",
      table: {
        type: {
          summary: "enum",
          detail: "large | default | small",
        },
        defaultValue: { summary: "default" },
        category: "属性",
      },
    },
    disabled: {
      control: "inline-radio",
      defaultValue: false,
      description: "是否禁用",
      options: [true, false],
      table: {
        type: {
          summary: "enum",
          detail: "true | false",
        },
        defaultValue: { summary: "false" },
        category: "属性",
      },
    },
    onClick: {
      action: "clicked",
      description: "点击事件",
      table: {
        type: {
          summary: "(event: MouseEvent) => void",
        },
        category: "事件",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// 默认按钮
export const Default: Story = {
  name: "默认按钮",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">默认按钮</Button>',
  }),
  parameters: {
    docs: {
      source: {
        code: "<Button>默认按钮</Button>",
      },
    },
  },
};

// 不同类型
export const Primary: Story = {
  name: "主要按钮",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">主要按钮</Button>',
  }),
  args: {
    type: "primary",
  },
  parameters: {
    docs: {
      source: {
        code: '<Button type="primary">主要按钮</Button>',
      },
    },
  },
};

export const Success: Story = {
  name: "成功按钮",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">成功按钮</Button>',
  }),
  args: {
    type: "success",
  },
  parameters: {
    docs: {
      source: {
        code: '<Button type="success">成功按钮</Button>',
      },
    },
  },
};

export const Warning: Story = {
  name: "警告按钮",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">警告按钮</Button>',
  }),
  args: {
    type: "warning",
  },
  parameters: {
    docs: {
      source: {
        code: '<Button type="warning">警告按钮</Button>',
      },
    },
  },
};

export const Danger: Story = {
  name: "危险按钮",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">危险按钮</Button>',
  }),
  args: {
    type: "danger",
  },
  parameters: {
    docs: {
      source: {
        code: '<Button type="danger">危险按钮</Button>',
      },
    },
  },
};

export const Info: Story = {
  name: "信息按钮",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" @click="args.onClick">信息按钮</Button>',
  }),
  args: {
    type: "info",
  },
  parameters: {
    docs: {
      source: {
        code: '<Button type="info">信息按钮</Button>',
      },
    },
  },
};

// 不同尺寸
export const Sizes: Story = {
  name: "不同尺寸",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 12px; align-items: center;">
        <Button v-bind="args" size="large" @click="args.onClick">大按钮</Button>
        <Button v-bind="args" size="default" @click="args.onClick">默认按钮</Button>
        <Button v-bind="args" size="small" @click="args.onClick">小按钮</Button>
      </div>
    `,
  }),
  args: {
    type: "primary",
  },
  parameters: {
    docs: {
      source: {
        code: `<template>
  <div style="display: flex; gap: 12px; align-items: center;">
    <Button type="primary" size="large">大按钮</Button>
    <Button type="primary" size="default">默认按钮</Button>
    <Button type="primary" size="small">小按钮</Button>
  </div>
</template>`,
      },
    },
  },
};

// 禁用状态
export const Disabled: Story = {
  name: "禁用状态",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <Button v-bind="args" type="default" disabled @click="args.onClick">默认禁用</Button>
        <Button v-bind="args" type="primary" disabled @click="args.onClick">主要禁用</Button>
        <Button v-bind="args" type="success" disabled @click="args.onClick">成功禁用</Button>
        <Button v-bind="args" type="warning" disabled @click="args.onClick">警告禁用</Button>
        <Button v-bind="args" type="danger" disabled @click="args.onClick">危险禁用</Button>
        <Button v-bind="args" type="info" disabled @click="args.onClick">信息禁用</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <Button type="default" disabled>默认禁用</Button>
    <Button type="primary" disabled>主要禁用</Button>
    <Button type="success" disabled>成功禁用</Button>
    <Button type="warning" disabled>警告禁用</Button>
    <Button type="danger" disabled>危险禁用</Button>
    <Button type="info" disabled>信息禁用</Button>
  </div>
</template>`,
      },
    },
  },
};

// 所有类型展示
export const AllTypes: Story = {
  name: "所有类型展示",
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <Button v-bind="args" type="default" @click="args.onClick">默认按钮</Button>
        <Button v-bind="args" type="primary" @click="args.onClick">主要按钮</Button>
        <Button v-bind="args" type="success" @click="args.onClick">成功按钮</Button>
        <Button v-bind="args" type="warning" @click="args.onClick">警告按钮</Button>
        <Button v-bind="args" type="danger" @click="args.onClick">危险按钮</Button>
        <Button v-bind="args" type="info" @click="args.onClick">信息按钮</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `<template>
  <div style="display: flex; gap: 12px; flex-wrap: wrap;">
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>
  </div>
</template>`,
      },
    },
  },
};
