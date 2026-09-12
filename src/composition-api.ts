import { getVueValue, type VueExport } from './shared'

export type { MaybeRef, MaybeRefOrGetter } from 'vue'

// Core

export const readonly: VueExport<'readonly'> = /* @__PURE__ */ getVueValue('readonly')

export const ref: VueExport<'ref'> = /* @__PURE__ */ getVueValue('ref')

export const reactive: VueExport<'reactive'> = /* @__PURE__ */ getVueValue('reactive')

export const computed: VueExport<'computed'> = /* @__PURE__ */ getVueValue('computed')

export const watch: VueExport<'watch'> = /* @__PURE__ */ getVueValue('watch')

export const watchEffect: VueExport<'watchEffect'> = /* @__PURE__ */ getVueValue('watchEffect')

export const watchPostEffect: VueExport<'watchPostEffect'> =
  /* @__PURE__ */ getVueValue('watchPostEffect')

export const watchSyncEffect: VueExport<'watchSyncEffect'> =
  /* @__PURE__ */ getVueValue('watchSyncEffect')

export const onWatcherCleanup: VueExport<'onWatcherCleanup'> =
  /* @__PURE__ */ getVueValue('onWatcherCleanup')

// Utilities

export const isRef: VueExport<'isRef'> = /* @__PURE__ */ getVueValue('isRef')

export const unref: VueExport<'unref'> = /* @__PURE__ */ getVueValue('unref')

export const toValue: VueExport<'toValue'> = /* @__PURE__ */ getVueValue('toValue')

export const toRef: VueExport<'toRef'> = /* @__PURE__ */ getVueValue('toRef')

export const toRefs: VueExport<'toRefs'> = /* @__PURE__ */ getVueValue('toRefs')

export const isProxy: VueExport<'isProxy'> = /* @__PURE__ */ getVueValue('isProxy')

export const isReactive: VueExport<'isReactive'> = /* @__PURE__ */ getVueValue('isReactive')

export const isReadonly: VueExport<'isReadonly'> = /* @__PURE__ */ getVueValue('isReadonly')

// Advanced

export const shallowRef: VueExport<'shallowRef'> = /* @__PURE__ */ getVueValue('shallowRef')

export const triggerRef: VueExport<'triggerRef'> = /* @__PURE__ */ getVueValue('triggerRef')

export const customRef: VueExport<'customRef'> = /* @__PURE__ */ getVueValue('customRef')

export const shallowReactive: VueExport<'shallowReactive'> =
  /* @__PURE__ */ getVueValue('shallowReactive')

export const shallowReadonly: VueExport<'shallowReadonly'> =
  /* @__PURE__ */ getVueValue('shallowReadonly')

export const toRaw: VueExport<'toRaw'> = /* @__PURE__ */ getVueValue('toRaw')

export const markRaw: VueExport<'markRaw'> = /* @__PURE__ */ getVueValue('markRaw')

export const effectScope: VueExport<'effectScope'> = /* @__PURE__ */ getVueValue('effectScope')

export const getCurrentInstance: VueExport<'getCurrentInstance'> =
  /* @__PURE__ */ getVueValue('getCurrentInstance')

export const onScopeDispose: VueExport<'onScopeDispose'> =
  /* @__PURE__ */ getVueValue('onScopeDispose')

// Lifecycle

export const onMounted: VueExport<'onMounted'> = /* @__PURE__ */ getVueValue('onMounted')

export const onUpdated: VueExport<'onUpdated'> = /* @__PURE__ */ getVueValue('onUpdated')

export const onUnmounted: VueExport<'onUnmounted'> = /* @__PURE__ */ getVueValue('onUnmounted')

export const onBeforeMount: VueExport<'onBeforeMount'> =
  /* @__PURE__ */ getVueValue('onBeforeMount')

export const onBeforeUpdate: VueExport<'onBeforeUpdate'> =
  /* @__PURE__ */ getVueValue('onBeforeUpdate')

export const onBeforeUnmount: VueExport<'onBeforeUnmount'> =
  /* @__PURE__ */ getVueValue('onBeforeUnmount')

export const onErrorCaptured: VueExport<'onErrorCaptured'> =
  /* @__PURE__ */ getVueValue('onErrorCaptured')

export const onActivated: VueExport<'onActivated'> = /* @__PURE__ */ getVueValue('onActivated')

export const onDeactivated: VueExport<'onDeactivated'> =
  /* @__PURE__ */ getVueValue('onDeactivated')

// Dependency Injection

export const provide: VueExport<'provide'> = /* @__PURE__ */ getVueValue('provide')

export const inject: VueExport<'inject'> = /* @__PURE__ */ getVueValue('inject')

export const hasInjectionContext: VueExport<'hasInjectionContext'> =
  /* @__PURE__ */ getVueValue('hasInjectionContext')

// Helper

export const useSlots: VueExport<'useSlots'> = /* @__PURE__ */ getVueValue('useSlots')

export const useTemplateRef: VueExport<'useTemplateRef'> =
  /* @__PURE__ */ getVueValue('useTemplateRef')

export const useId: VueExport<'useId'> = /* @__PURE__ */ getVueValue('useId')
