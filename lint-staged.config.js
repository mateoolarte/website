const lintStagedConfig = {
  "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": ["prettier --write"],
  "*.css": ["stylelint --fix"],
};

export default lintStagedConfig;
