import { getVueValue, type VueExport } from './shared'

export const createApp: VueExport<'createApp'> = /* @__PURE__ */ getVueValue('createApp')

export const nextTick: VueExport<'nextTick'> = /* @__PURE__ */ getVueValue('nextTick')

export const defineComponent: VueExport<'defineComponent'> =
  /* @__PURE__ */ getVueValue('defineComponent')

export const defineAsyncComponent: VueExport<'defineAsyncComponent'> =
  /* @__PURE__ */ getVueValue('defineAsyncComponent')
