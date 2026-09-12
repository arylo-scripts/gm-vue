import { getVueValue } from './shared'

export const h: typeof import('vue').h = /* @__PURE__ */ getVueValue('h')

export const compile: typeof import('vue').compile = /* @__PURE__ */ getVueValue('compile')

export const mergeProps: typeof import('vue').mergeProps = /* @__PURE__ */ getVueValue('mergeProps')
