import antfu from '@antfu/eslint-config';

export default antfu({
  solid: true,
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true,
  },
  typescript: {
    overrides: {
      'no-console': 'off',
      'ts/strict-boolean-expressions': 'off',
    },
  },
});
