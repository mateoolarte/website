import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

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
  ignorePatterns,
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
];

export default eslintConfig;
