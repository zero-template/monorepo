import { existsSync, mkdirSync } from 'node:fs'
import { exit } from 'node:process'
import { join } from 'node:path'
import inquirer from 'inquirer'
import Chalk from 'chalk'
import { t } from './i18n'
import { copyDirectorySync } from './util'
import { overrideDir } from './override.inquirer'

let __dirname = globalThis.__dirname
if (!__dirname)
  __dirname = new URL('.', import.meta.url).pathname

export async function init(dir: string) {
  console.clear()
  console.log(Chalk.dim(`${t('will_created_in').replace('{0}', dir)}\n`))

  let answers: { template: string }
  try {
    answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: t('choose_template'),
        choices: [
          { name: 'tsup-basic', value: 'tsup-basic', description: 'Blank tsup project' },
          { name: 'monorepo-basic', value: 'monorepo-basic', description: 'Blank monorepo project' },
          { name: 'vitesse', value: 'vitesse', description: 'Antfu\'s vitesse template' },
          { name: 'vue-tsx-vitesse', value: 'vue-tsx-vitesse', description: 'Vue 3 + TSX + Vitesse' },
          { name: 'vue-malagu', value: 'vue-malagu', description: 'Vue 3 + Malagu' },
        ],
      },
    ])
  }
  catch (error) {
    console.log(t('process_exit'))
    return exit(0)
  }

  if (existsSync(dir))
    await overrideDir(dir)

  mkdirSync(dir, { recursive: true })
  copyDirectorySync(join(__dirname, '../templates', answers.template), dir)
  console.log(Chalk.green(t('created_in').replace('{0}', dir)))
}
