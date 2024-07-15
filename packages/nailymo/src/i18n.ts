import { env } from 'node:process'
import { get } from 'lodash-es'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import type * as enJSON from '../locales/en.json'
import type * as zhJSON from '../locales/zh.json'

export function getTerminalLanguage() {
  const lang = env.LANG
  if (lang.startsWith('zh'))
    return 'zh' as const
  else return 'en' as const
}

export function t<S extends keyof (typeof enJSON & typeof zhJSON)>(t: S): string {
  const lang = getTerminalLanguage()

  if (lang === 'en')
    return get(en, t, t)
  else if (lang === 'zh')
    return get(zh, t, t)
  else return t
}
