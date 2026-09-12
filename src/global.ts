import { getVueValue } from './shared'

export const createApp: typeof import('vue').createApp = /* @__PURE__ */ getVueValue('createApp')

export const nextTick: typeof import('vue').nextTick = /* @__PURE__ */ getVueValue('nextTick')

export const defineComponent: typeof import('vue').defineComponent =
  /* @__PURE__ */ getVueValue('defineComponent')

export const defineAsyncComponent: typeof import('vue').defineAsyncComponent =
  /* @__PURE__ */ getVueValue('defineAsyncComponent')
