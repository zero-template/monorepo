import { argv, cwd } from 'node:process'
import { join } from 'node:path'
import { Command } from '@commander-js/extra-typings'
import { description } from '../package.json'
import { init } from './init.command'

let __dirname = globalThis.__dirname
if (!__dirname)
  __dirname = new URL('.', import.meta.url).pathname

const executableFile = join(__dirname, '../bin/no.js')

const program = new Command('nailymo')
  .name('nailymo')
  .version('0.0.1', '-v, --version', 'output the current version')
  .description(description)

program.command('init', 'initialize a new project', { executableFile })
  .alias('i')
  .argument('[dir]', 'directory to initialize the project in', cwd())
  .option('-i, --install', 'Directly install dependencies using pnpm')
  .action(async (dir, _options) => await init(dir))

program.parse(argv)
