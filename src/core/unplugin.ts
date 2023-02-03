import { createUnplugin } from 'unplugin'
import type { Options } from '../types'

interface ImportMeta {
  packageName: string
  include: string[]
}
const dynamicImports: Record<string, ImportMeta> = {}

export default createUnplugin<Options | undefined>(_options => ({
  // ltsdi - lazy tree shake dynamic import
  name: 'unplugin-ltsdi',

  resolveId(id) {
    const [packageName, params] = id.split('?')

    const searchParams = new URLSearchParams(params)
    const include = searchParams.get('only')

    if (packageName && include) {
      dynamicImports[id] = {
        packageName: packageName.trim(),
        include: include.split(',').map(s => s.trim()),
      }

      return { id }
    }

    return null
  },

  load(id) {
    if (dynamicImports[id]) {
      return {
        code: `export { ${dynamicImports[id].include.join(', ')} } from "${dynamicImports[id].packageName}"`,
      }
    }
  },
}))
