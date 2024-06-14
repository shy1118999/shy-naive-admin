import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  rules: {
    'regexp/no-super-linear-backtracking': 'off',
  },
})
