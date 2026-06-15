import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["nextjs", "typescript", "unicorn"],
  jsPlugins: ["eslint-plugin-sonarjs"],
  env: {
    builtin: true,
    es2026: true,
  },
  settings: {
    react: {
      version: "19",
    },
  },
  ignorePatterns: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".vscode/**",
    "node_modules/**",
    "playwright-report/**",
    "test-results/**",
    "convex/_generated/**",
  ],
});
