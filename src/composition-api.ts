import { getVueValue } from './shared'

export type { MaybeRef, MaybeRefOrGetter } from 'vue'

// Core

export const readonly: typeof import('vue').readonly = /* @__PURE__ */ getVueValue('readonly')

export const ref: typeof import('vue').ref = /* @__PURE__ */ getVueValue('ref')

export const reactive: typeof import('vue').reactive = /* @__PURE__ */ getVueValue('reactive')

export const computed: typeof import('vue').computed = /* @__PURE__ */ getVueValue('computed')

export const watch: typeof import('vue').watch = /* @__PURE__ */ getVueValue('watch')

export const watchEffect: typeof import('vue').watchEffect =
  /* @__PURE__ */ getVueValue('watchEffect')

export const watchPostEffect: typeof import('vue').watchPostEffect =
  /* @__PURE__ */ getVueValue('watchPostEffect')

export const watchSyncEffect: typeof import('vue').watchSyncEffect =
  /* @__PURE__ */ getVueValue('watchSyncEffect')

export const onWatcherCleanup: typeof import('vue').onWatcherCleanup =
  /* @__PURE__ */ getVueValue('onWatcherCleanup')

// Utilities

export const isRef: typeof import('vue').isRef = /* @__PURE__ */ getVueValue('isRef')

export const unref: typeof import('vue').unref = /* @__PURE__ */ getVueValue('unref')

export const toValue: typeof import('vue').toValue = /* @__PURE__ */ getVueValue('toValue')

export const toRef: typeof import('vue').toRef = /* @__PURE__ */ getVueValue('toRef')

export const toRefs: typeof import('vue').toRefs = /* @__PURE__ */ getVueValue('toRefs')

export const isProxy: typeof import('vue').isProxy = /* @__PURE__ */ getVueValue('isProxy')

export const isReactive: typeof import('vue').isReactive = /* @__PURE__ */ getVueValue('isReactive')

export const isReadonly: typeof import('vue').isReadonly = /* @__PURE__ */ getVueValue('isReadonly')

// Advanced

export const shallowRef: typeof import('vue').shallowRef = /* @__PURE__ */ getVueValue('shallowRef')

export const triggerRef: typeof import('vue').triggerRef = /* @__PURE__ */ getVueValue('triggerRef')

export const customRef: typeof import('vue').customRef = /* @__PURE__ */ getVueValue('customRef')

export const shallowReactive: typeof import('vue').shallowReactive =
  /* @__PURE__ */ getVueValue('shallowReactive')

export const shallowReadonly: typeof import('vue').shallowReadonly =
  /* @__PURE__ */ getVueValue('shallowReadonly')

export const toRaw: typeof import('vue').toRaw = /* @__PURE__ */ getVueValue('toRaw')

export const markRaw: typeof import('vue').markRaw = /* @__PURE__ */ getVueValue('markRaw')

export const effectScope: typeof import('vue').effectScope =
  /* @__PURE__ */ getVueValue('effectScope')

export const getCurrentInstance: typeof import('vue').getCurrentInstance =
  /* @__PURE__ */ getVueValue('getCurrentInstance')

export const onScopeDispose: typeof import('vue').onScopeDispose =
  /* @__PURE__ */ getVueValue('onScopeDispose')

// Lifecycle

export const onMounted: typeof import('vue').onMounted = /* @__PURE__ */ getVueValue('onMounted')

export const onUpdated: typeof import('vue').onUpdated = /* @__PURE__ */ getVueValue('onUpdated')

export const onUnmounted: typeof import('vue').onUnmounted =
  /* @__PURE__ */ getVueValue('onUnmounted')

export const onBeforeMount: typeof import('vue').onBeforeMount =
  /* @__PURE__ */ getVueValue('onBeforeMount')

export const onBeforeUpdate: typeof import('vue').onBeforeUpdate =
  /* @__PURE__ */ getVueValue('onBeforeUpdate')

export const onBeforeUnmount: typeof import('vue').onBeforeUnmount =
  /* @__PURE__ */ getVueValue('onBeforeUnmount')

export const onErrorCaptured: typeof import('vue').onErrorCaptured =
  /* @__PURE__ */ getVueValue('onErrorCaptured')

export const onActivated: typeof import('vue').onActivated =
  /* @__PURE__ */ getVueValue('onActivated')

export const onDeactivated: typeof import('vue').onDeactivated =
  /* @__PURE__ */ getVueValue('onDeactivated')

// Dependency Injection

export const provide: typeof import('vue').provide = /* @__PURE__ */ getVueValue('provide')

export const inject: typeof import('vue').inject = /* @__PURE__ */ getVueValue('inject')

export const hasInjectionContext: typeof import('vue').hasInjectionContext =
  /* @__PURE__ */ getVueValue('hasInjectionContext')

// Helper

export const useSlots: typeof import('vue').useSlots = /* @__PURE__ */ getVueValue('useSlots')

export const useTemplateRef: typeof import('vue').useTemplateRef =
  /* @__PURE__ */ getVueValue('useTemplateRef')

export const useId: typeof import('vue').useId = /* @__PURE__ */ getVueValue('useId')
