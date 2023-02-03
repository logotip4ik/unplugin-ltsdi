# unplugin-ltsdi

[Rollup still does not tree shake dynamic imports](https://github.com/rollup/rollup/issues/3447) (so vite as well), and fix is pretty simple - to create another file which will reexport functions that are needed. But i am too lazy, so i created this. 

> TL;DR   
>   
> `import("comlink?only=wrap,expose,\<whatever>")`

This will create file which exports what you specified in `only` param, like this:

```js
export { wrap, expose } from 'comlink'
```

On build rollup will tree shake that "file" and dynamic import won't weight as much as whole library 

## Install

```bash
npm i unplugin-ltsdi
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import LTSDI from 'unplugin-ltsdi/vite'

export default defineConfig({
  plugins: [
    LTSDI({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import LTSDI from 'unplugin-ltsdi/rollup'

export default {
  plugins: [
    LTSDI({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-ltsdi/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-ltsdi/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-ltsdi/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import LTSDI from 'unplugin-ltsdi/esbuild'

build({
  plugins: [LTSDI()],
})
```

<br></details>
