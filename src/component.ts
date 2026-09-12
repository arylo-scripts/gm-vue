import { getVueValue } from './shared'

export const Fragment: typeof import('vue').Fragment = /* @__PURE__ */ getVueValue('Fragment')

export const KeepAlive: typeof import('vue').KeepAlive = /* @__PURE__ */ getVueValue('KeepAlive')

export const Transition: typeof import('vue').Transition = /* @__PURE__ */ getVueValue('Transition')

export const TransitionGroup: typeof import('vue').TransitionGroup =
  /* @__PURE__ */ getVueValue('TransitionGroup')

export const Teleport: typeof import('vue').Teleport = /* @__PURE__ */ getVueValue('Teleport')

export const Suspense: typeof import('vue').Suspense = /* @__PURE__ */ getVueValue('Suspense')
