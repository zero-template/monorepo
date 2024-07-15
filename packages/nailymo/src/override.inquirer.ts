import { exit } from 'node:process'
import { rmSync } from 'node:fs'
import inquirer from 'inquirer'
import { t } from './i18n'

export async function overrideDir(dir: string) {
  const answers = await inquirer.prompt<{ is_override: boolean }>([
    { name: 'is_override', type: 'confirm', message: t('dir_exists').replace('{0}', dir), default: false },
  ])
  if (answers.is_override === false) {
    console.log(t('process_exit'))
    return exit(0)
  }

  rmSync(dir, { recursive: true, force: true })
}
