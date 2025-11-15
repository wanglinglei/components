/**
 * TypeScript 类型定义使用示例
 * 
 * 本文件展示如何在 TypeScript 项目中使用组件库的类型定义
 */

import { ref, reactive, computed } from 'vue'
import type {
  ButtonProps,
  EnhancedButtonProps,
  ButtonType,
  ButtonSize,
  ButtonInstance,
  EnhancedButtonInstance
} from '@vue-lib/components'

// ==================== 示例 1: 基本类型使用 ====================

// 使用枚举类型
const buttonType: ButtonType = 'primary'
const buttonSize: ButtonSize = 'large'

console.log(`按钮类型: ${buttonType}, 尺寸: ${buttonSize}`)

// ==================== 示例 2: Props 类型定义 ====================

// 基础按钮配置
const basicButtonConfig: ButtonProps = {
  type: 'primary',
  size: 'default',
  disabled: false
}

// 增强按钮配置
const enhancedButtonConfig: EnhancedButtonProps = {
  type: 'success',
  size: 'large',
  disabled: false,
  loading: true,
  round: true,
  circle: false,
  plain: false
}

// ==================== 示例 3: 响应式数据类型 ====================

// 使用 ref
const buttonTypeRef = ref<ButtonType>('primary')
const buttonSizeRef = ref<ButtonSize>('default')

// 使用 reactive
const buttonPropsReactive = reactive<ButtonProps>({
  type: 'primary',
  size: 'default',
  disabled: false
})

// ==================== 示例 4: 组件实例引用 ====================

// 基础按钮引用
const buttonRef = ref<ButtonInstance>()

// 增强按钮引用
const enhancedButtonRef = ref<EnhancedButtonInstance>()

// 使用组件实例（在 mounted 后）
function useButtonInstance() {
  if (buttonRef.value) {
    console.log('基础按钮实例:', buttonRef.value)
  }
  
  if (enhancedButtonRef.value) {
    console.log('增强按钮实例:', enhancedButtonRef.value)
  }
}

// ==================== 示例 5: 计算属性和类型推断 ====================

const buttonConfig = reactive({
  type: 'primary' as ButtonType,
  size: 'default' as ButtonSize,
  loading: false
})

// 计算属性会自动推断类型
const isDisabled = computed(() => buttonConfig.loading)

const enhancedProps = computed<EnhancedButtonProps>(() => ({
  type: buttonConfig.type,
  size: buttonConfig.size,
  loading: buttonConfig.loading,
  disabled: isDisabled.value
}))

// ==================== 示例 6: 工厂函数 ====================

function createButtonConfig(type: ButtonType, size: ButtonSize = 'default'): ButtonProps {
  return {
    type,
    size,
    disabled: false
  }
}

function createEnhancedButtonConfig(
  type: ButtonType,
  options: Partial<Omit<EnhancedButtonProps, 'type'>> = {}
): EnhancedButtonProps {
  return {
    type,
    size: 'default',
    disabled: false,
    loading: false,
    round: false,
    circle: false,
    plain: false,
    ...options
  }
}

// 使用工厂函数
const primaryButton = createButtonConfig('primary', 'large')
const loadingButton = createEnhancedButtonConfig('success', { loading: true, round: true })

// ==================== 示例 7: 数组和对象类型 ====================

// 按钮配置数组
const buttonConfigList: ButtonProps[] = [
  { type: 'primary', size: 'default' },
  { type: 'success', size: 'large' },
  { type: 'warning', size: 'small' }
]

// 按钮配置映射
const buttonConfigMap: Record<string, ButtonProps> = {
  submit: { type: 'primary', size: 'default' },
  cancel: { type: 'default', size: 'default' },
  delete: { type: 'danger', size: 'default' }
}

// ==================== 示例 8: 类型守卫 ====================

type AnyButtonProps = ButtonProps | EnhancedButtonProps

function isEnhancedButtonProps(props: AnyButtonProps): props is EnhancedButtonProps {
  return 'loading' in props
}

function processButtonProps(props: AnyButtonProps) {
  console.log(`按钮类型: ${props.type}`)
  
  if (isEnhancedButtonProps(props)) {
    console.log(`加载状态: ${props.loading}`)
    console.log(`圆角: ${props.round}`)
  }
}

// ==================== 示例 9: 泛型函数 ====================

function mergeButtonProps<T extends ButtonProps>(
  defaultProps: T,
  customProps: Partial<T>
): T {
  return { ...defaultProps, ...customProps }
}

const mergedProps = mergeButtonProps<EnhancedButtonProps>(
  createEnhancedButtonConfig('primary'),
  { loading: true, size: 'large' }
)

// ==================== 示例 10: Composable 函数 ====================

export function useButton(initialType: ButtonType = 'default') {
  const type = ref<ButtonType>(initialType)
  const size = ref<ButtonSize>('default')
  const disabled = ref(false)
  
  const props = computed<ButtonProps>(() => ({
    type: type.value,
    size: size.value,
    disabled: disabled.value
  }))
  
  function setType(newType: ButtonType) {
    type.value = newType
  }
  
  function setSize(newSize: ButtonSize) {
    size.value = newSize
  }
  
  function toggle() {
    disabled.value = !disabled.value
  }
  
  return {
    props,
    type,
    size,
    disabled,
    setType,
    setSize,
    toggle
  }
}

export function useEnhancedButton(initialType: ButtonType = 'default') {
  const type = ref<ButtonType>(initialType)
  const size = ref<ButtonSize>('default')
  const disabled = ref(false)
  const loading = ref(false)
  const round = ref(false)
  const circle = ref(false)
  const plain = ref(false)
  
  const props = computed<EnhancedButtonProps>(() => ({
    type: type.value,
    size: size.value,
    disabled: disabled.value,
    loading: loading.value,
    round: round.value,
    circle: circle.value,
    plain: plain.value
  }))
  
  async function withLoading<T>(fn: () => Promise<T>): Promise<T> {
    loading.value = true
    try {
      return await fn()
    } finally {
      loading.value = false
    }
  }
  
  return {
    props,
    type,
    size,
    disabled,
    loading,
    round,
    circle,
    plain,
    withLoading
  }
}

// ==================== 示例 11: 接口扩展 ====================

interface CustomButtonProps extends ButtonProps {
  icon?: string
  tooltip?: string
}

interface CustomEnhancedButtonProps extends EnhancedButtonProps {
  tooltip?: string
  badge?: number | string
}

const customButton: CustomButtonProps = {
  type: 'primary',
  size: 'default',
  icon: 'search',
  tooltip: '搜索'
}

// ==================== 示例 12: 联合类型和交叉类型 ====================

type ButtonConfig = {
  id: string
  label: string
  props: ButtonProps
}

type EnhancedButtonConfig = {
  id: string
  label: string
  props: EnhancedButtonProps
}

type AnyButtonConfig = ButtonConfig | EnhancedButtonConfig

const buttonConfigs: AnyButtonConfig[] = [
  {
    id: 'submit',
    label: '提交',
    props: { type: 'primary', size: 'default' }
  },
  {
    id: 'search',
    label: '搜索',
    props: { type: 'success', loading: false, round: true }
  }
]

// ==================== 示例 13: 类型断言 ====================

function getButtonProps(type: string): ButtonProps {
  return {
    type: type as ButtonType, // 类型断言
    size: 'default',
    disabled: false
  }
}

// ==================== 使用示例 ====================

export function exampleUsage() {
  // 使用 composable
  const { props: buttonProps, setType, toggle } = useButton('primary')
  
  setType('success')
  toggle()
  
  console.log('按钮配置:', buttonProps.value)
  
  // 使用增强按钮 composable
  const { props: enhancedProps, withLoading } = useEnhancedButton('primary')
  
  withLoading(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('加载完成')
  })
  
  // 处理按钮配置
  buttonConfigList.forEach(config => {
    console.log(`类型: ${config.type}, 尺寸: ${config.size}`)
  })
  
  // 使用类型守卫
  processButtonProps(basicButtonConfig)
  processButtonProps(enhancedButtonConfig)
}

// ==================== 导出所有示例 ====================

export {
  buttonType,
  buttonSize,
  basicButtonConfig,
  enhancedButtonConfig,
  buttonPropsReactive,
  createButtonConfig,
  createEnhancedButtonConfig,
  isEnhancedButtonProps,
  mergeButtonProps,
  buttonConfigList,
  buttonConfigMap
}

