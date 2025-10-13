import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const ignorePatterns = {
  ignores: ["node_modules/**", ".next/**", ".vscode/**", "next-env.d.ts"],
};

const eslintConfig = [
  ignorePatterns,
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
];

export default eslintConfig;
