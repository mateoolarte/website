import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["nextjs", "typescript", "unicorn"],
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
    "convex/_generated/**",
  ],
});
