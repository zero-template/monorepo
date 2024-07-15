/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier/skip-formatting'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
