/** @type {import('lint-staged').Configuration} */
const lintStagedConfig = {
  "*.{js,ts,tsx}": ["oxlint --fix", "oxfmt"],
  "*.{json,md,css}": ["oxfmt"],
  "*.css": ["stylelint --fix"],
};

export default lintStagedConfig;
