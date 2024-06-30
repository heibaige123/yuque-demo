import antfu from '@antfu/eslint-config'

export default antfu({
  solid: true,

  typescript: {
    tsconfigPath: 'tsconfig.json',
  },

  stylistic: {
    indent: 2,
    quotes: 'single',
  },
})
