declare const Vue: typeof import('vue')

export type VueExport<K extends keyof typeof import('vue')> = (typeof import('vue'))[K]

export function getVueValue<K extends keyof typeof Vue>(key: K): (typeof Vue)[K] {
  return Vue[key]
}
