import type { App, Plugin } from 'vue'

// 导入组件（从组件目录的 index.ts）
import Button from './components/Button'
import EnhancedButton from './components/EnhancedButton'

// 统一导出组件类型定义
export type {
  ButtonType,
  ButtonSize,
  ButtonProps,
  ButtonEmits,
  ButtonInstance
} from './components/Button'

export type {
  EnhancedButtonType,
  EnhancedButtonSize,
  EnhancedButtonProps,
  EnhancedButtonEmits,
  EnhancedButtonInstance
} from './components/EnhancedButton'

// 组件列表
const components = [Button, EnhancedButton]

// 定义 install 方法，供全量引入时调用
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name || '', component)
  })
}

// 按需导出每个组件
export { Button, EnhancedButton }

// 默认导出，支持全量引入
// 支持 app.use(VueLib) 和 app.use(VueLib.install)
const VueLib: Plugin & {
  Button: typeof Button
  EnhancedButton: typeof EnhancedButton
} = {
  install,
  Button,
  EnhancedButton
}

export default VueLib

