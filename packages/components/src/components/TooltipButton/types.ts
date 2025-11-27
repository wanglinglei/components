import type { Component } from 'vue'

export type EnhancedButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'text'

export type EnhancedButtonSize = 'small' | 'default' | 'large'

export interface EnhancedButtonProps {
  type?: EnhancedButtonType
  size?: EnhancedButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  link?: boolean
  disabled?: boolean
  loading?: boolean
  autoLoading?: boolean
  debounceDelay?: number
  confirmMessage?: string
  tooltip?: string
  icon?: Component
  iconPlacement?: 'left' | 'right'
  action?: () => Promise<void> | void
}

