# gm-vue

Vue helpers for userscripts that consume a page-level Vue runtime.

## Install

```sh
npm install @arylo-scripts/gm-vue
```

## Usage

```ts
import {
  computed,
  createApp,
  defineComponent,
  h,
  onMounted,
  ref,
} from '@arylo-scripts/gm-vue'

const App = defineComponent({
  setup() {
    const count = ref(0)
    const doubled = computed(() => count.value * 2)

    onMounted(() => {
      count.value += 1
    })

    return () => h('div', `${count.value} / ${doubled.value}`)
  },
})

createApp(App).mount('#app')
```

Vue is a peer dependency and must exist as the page-level `Vue` global. This
package exposes the page runtime with the same TypeScript types instead of
bundling another Vue instance.

## API

- Global APIs: `createApp`, `nextTick`, `defineComponent`, `defineAsyncComponent`
- Rendering: `h`, `compile`, `mergeProps`
- Components: `Fragment`, `KeepAlive`, `Transition`, `TransitionGroup`, `Teleport`, `Suspense`
- Common Composition API utilities, lifecycle hooks, dependency injection, and Vue types

## Development

```sh
npm install
npm run lint
npm run build
```
