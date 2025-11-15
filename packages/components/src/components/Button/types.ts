/**
 * Button 组件类型定义
 */

/**
 * 按钮类型
 */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

/**
 * 按钮尺寸
 */
export type ButtonSize = 'large' | 'default' | 'small'

/**
 * Button 组件 Props
 */
export interface ButtonProps {
  /**
   * 按钮类型
   * @default 'default'
   */
  type?: ButtonType
  /**
   * 按钮尺寸
   * @default 'default'
   */
  size?: ButtonSize
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
}

/**
 * Button 组件 Emits
 */
export interface ButtonEmits {
  /**
   * 点击事件
   */
  (e: 'click', event: MouseEvent): void
}

/**
 * Button 组件实例类型
 */
export type ButtonInstance = InstanceType<typeof import('./Button.vue')['default']>

