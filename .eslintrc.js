"use strict";

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "latest",
    },
  },
};
