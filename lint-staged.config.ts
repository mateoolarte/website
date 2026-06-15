import type { Configuration } from "lint-staged";

const lintStagedConfig: Configuration = {
  "*.{js,ts,tsx}": ["oxlint --fix", "oxfmt"],
  "*.{json,md,css}": ["oxfmt"],
  "*.css": ["stylelint --fix"],
};

export default lintStagedConfig;
