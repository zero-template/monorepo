import 'uno.css'
import './assets/global.less'
import { createApp } from 'vue'
import { App } from '@malagu/vue'
import { createPinia } from 'pinia'
import RootView from './Root.view'
import { router } from './router'

// Zh: 不知道为什么，这里的不进行类型断言，TS会报错（有可能不兼容最新版Vue3了），如果你的VSCode没有报错，可以尝试去掉 as unknown as any

/* En: I don't know why, if you don't do type assertion here, TS will report an error (it may not be compatible with the latest version of Vue3),
if your VSCode doesn't report an error, you can try to remove as unknown as any */
@App(createApp(RootView).use(router).use(createPinia()) as unknown as any)
export default class {}
