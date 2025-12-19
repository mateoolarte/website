import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";

const ignorePatterns = {
  ignores: [
    ".next/**",
    ".vscode/**",
    "node_modules/**",
    "playwright-report/**",
    "test-results/**",
    "next-env.d.ts",
  ],
};

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
  prettier,
  ignorePatterns,
];

export default eslintConfig;
