import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    program: 'src/program.ts',
  },
  dts: true,
  clean: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
})
