<template>
  <component :is="tooltipWrapper" v-bind="tooltipBinding" class="ovit-enhanced-button__wrapper">
    <ElButton
      class="ovit-enhanced-button"
      :type="props.type"
      :size="props.size"
      :plain="props.plain"
      :round="props.round"
      :circle="props.circle"
      :link="props.link"
      :disabled="props.disabled || innerLoading"
      :loading="innerLoading"
      @click="handleClick"
    >
      <span v-if="props.icon && props.iconPlacement === 'left'" class="ovit-enhanced-button__icon">
        <component :is="props.icon" />
      </span>
      <span class="ovit-enhanced-button__text">
        <slot />
      </span>
      <span v-if="props.icon && props.iconPlacement === 'right'" class="ovit-enhanced-button__icon">
        <component :is="props.icon" />
      </span>
    </ElButton>
  </component>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ElButton, ElTooltip } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'
import type { EnhancedButtonProps } from './types'

defineOptions({
  name: 'OvitEnhancedButton'
})

const props = withDefaults(defineProps<EnhancedButtonProps>(), {
  type: 'primary',
  size: 'default',
  autoLoading: true,
  iconPlacement: 'left',
  debounceDelay: 0
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'actionSuccess'): void
  (e: 'actionError', error: unknown): void
}>()

const innerLoading = ref(false)
const lastClickAt = ref(0)
const isClient = typeof window !== 'undefined'

watch(
  () => props.loading,
  value => {
    if (typeof value === 'boolean') {
      innerLoading.value = value
    }
  },
  { immediate: true }
)

const tooltipWrapper = computed(() => (props.tooltip ? ElTooltip : 'div'))
const tooltipBinding = computed(() => {
  if (!props.tooltip) {
    return {}
  }
  return {
    content: props.tooltip,
    placement: 'top',
    effect: 'dark'
  }
})

const maybeRunAction = async () => {
  if (!props.action) return
  try {
    const result = props.action()
    if (result instanceof Promise) {
      if (props.autoLoading && props.loading === undefined) {
        innerLoading.value = true
      }
      try {
        await result
        emit('actionSuccess')
      } catch (error) {
        emit('actionError', error)
        throw error
      } finally {
        if (props.autoLoading && props.loading === undefined) {
          innerLoading.value = false
        }
      }
    } else {
      emit('actionSuccess')
    }
  } catch (error) {
    emit('actionError', error)
    throw error
  }
}

const handleClick = async (event: MouseEvent) => {
  if (props.disabled || innerLoading.value) {
    return
  }

  const now = Date.now()
  if (props.debounceDelay && now - lastClickAt.value < props.debounceDelay) {
    return
  }
  lastClickAt.value = now

  if (props.confirmMessage) {
    const confirmed = isClient ? window.confirm(props.confirmMessage) : true
    if (!confirmed) {
      return
    }
  }

  emit('click', event)

  try {
    await maybeRunAction()
  } catch {
    // 已通过 actionError 事件上报
  }
}
</script>

<style scoped>
.ovit-enhanced-button__wrapper {
  display: inline-flex;
}
</style>
