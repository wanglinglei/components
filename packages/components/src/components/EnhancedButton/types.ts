/**
 * EnhancedButton 组件类型定义
 */

import type { Component } from 'vue'

/**
 * 按钮类型（与 Button 组件共享）
 */
export type EnhancedButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

/**
 * 按钮尺寸（与 Button 组件共享）
 */
export type EnhancedButtonSize = 'large' | 'default' | 'small'

/**
 * EnhancedButton 组件 Props
 */
export interface EnhancedButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: EnhancedButtonType
  /**
   * 按钮尺寸
   * @default 'default'
   */
  size?: EnhancedButtonSize
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 是否加载中状态
   * @default false
   */
  loading?: boolean
  /**
   * 图标组件
   */
  icon?: Component
  /**
   * 是否圆角按钮
   * @default false
   */
  round?: boolean
  /**
   * 是否圆形按钮
   * @default false
   */
  circle?: boolean
  /**
   * 是否朴素按钮
   * @default false
   */
  plain?: boolean
}

/**
 * EnhancedButton 组件 Emits
 */
export interface EnhancedButtonEmits {
  /**
   * 点击事件
   */
  (e: 'click', event: MouseEvent): void
}

/**
 * EnhancedButton 组件实例类型
 */
export type EnhancedButtonInstance = InstanceType<typeof import('./EnhancedButton.vue')['default']>

