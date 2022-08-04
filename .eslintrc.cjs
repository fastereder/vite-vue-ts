module.exports = {
  env: { node: true },
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    'prettier'
  ],
  /* globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  }, */
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  // plugins: ['@typescript-eslint'], // might not be needed
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn'
  }
}
