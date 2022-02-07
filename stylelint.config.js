module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  overrides: [
    {
      files: ['**/styles.ts'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
};
