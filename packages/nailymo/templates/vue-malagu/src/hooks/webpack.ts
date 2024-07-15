import UNOCSS from '@unocss/webpack'
import presetUno from '@unocss/preset-uno'
import { ConfigurationContext, type WebpackContext } from '@malagu/cli-service/lib/context/context-protocol'
import VueRouter from 'unplugin-vue-router/webpack'
import AutoImport from 'unplugin-auto-import/webpack'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/webpack'

export default async (ctx: WebpackContext) => {
  const { configurations } = ctx
  const webpackConfig = ConfigurationContext.getFrontendConfiguration(configurations)

  if (!webpackConfig)
    return
  // En: Change your unocss options here
  // Zh: 可以在这里修改你的 unocss 配置 比如添加presets等
  webpackConfig.plugin('unocss').use(
    UNOCSS({
      presets: [presetUno()],
    }),
  )

  webpackConfig.plugin('vue-router').use(
    VueRouter({
      extensions: ['.vue', '.md', '.tsx'],
      dts: 'src/browser/typed-router.d.ts',
      routesFolder: 'src/browser/pages',
    }),
  )

  webpackConfig.plugin('auto-import').use(
    AutoImport({
      imports: ['vue', 'vue-i18n', '@vueuse/head', '@vueuse/core', VueRouterAutoImports],
      dts: 'src/browser/auto-imports.d.ts',
      dirs: ['src/browser/composables', 'src/browser/stores'],
      vueTemplate: true,
    }),
  )

  // Zh: 似乎目前不知道如何配置这个插件, 目前是有问题的，不能工作
  // En: Seems I don't know how to configure this plugin, it's not working now
  webpackConfig.plugin('components').use(
    Components({
      dirs: ['src/browser/components'],
      extensions: ['.vue', '.md', '.tsx'],
      dts: 'src/browser/auto-components.d.ts',
    }),
  )

  webpackConfig.optimization.set('realContentHash', true)
}
