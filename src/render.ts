import { getVueValue, type VueExport } from './shared'

export const h: VueExport<'h'> = /* @__PURE__ */ getVueValue('h')

export const compile: VueExport<'compile'> = /* @__PURE__ */ getVueValue('compile')

export const mergeProps: VueExport<'mergeProps'> = /* @__PURE__ */ getVueValue('mergeProps')
