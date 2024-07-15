const antfu = require('@antfu/eslint-config')

module.exports = antfu.default({
  rules: {
    'no-console': 'off',
  },
  ignores: [
    'templates/**/*',
  ],
})
