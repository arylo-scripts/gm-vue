import { getVueValue, type VueExport } from './shared'

export const Fragment: VueExport<'Fragment'> = /* @__PURE__ */ getVueValue('Fragment')

export const KeepAlive: VueExport<'KeepAlive'> = /* @__PURE__ */ getVueValue('KeepAlive')

export const Transition: VueExport<'Transition'> = /* @__PURE__ */ getVueValue('Transition')

export const TransitionGroup: VueExport<'TransitionGroup'> =
  /* @__PURE__ */ getVueValue('TransitionGroup')

export const Teleport: VueExport<'Teleport'> = /* @__PURE__ */ getVueValue('Teleport')

export const Suspense: VueExport<'Suspense'> = /* @__PURE__ */ getVueValue('Suspense')
