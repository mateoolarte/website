import type { Config } from "stylelint";

const stylelintConfig: Config = {
  extends: ["stylelint-config-standard"],
  rules: {
    // Allow camelCase class names: start with lowercase, followed by any combination of letters and numbers
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};

export default stylelintConfig;
