const lintStagedConfig = {
  "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,css}": ["prettier --write"],
};

export default lintStagedConfig;
