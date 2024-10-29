import tsParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import ts from "@typescript-eslint/eslint-plugin";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const eslintrc = new FlatCompat({
  baseDirectory: __dirname,
});

//https://github.com/vuejs/eslint-plugin-vue/issues/1291
//https://stackoverflow.com/questions/74237042/how-to-correctly-configure-the-parser-plugins-with-eslints-new-flat-config
export default [
  {
    ignores: ["*.min.js", "*.map", "*.snap", "**/build/**", "**/dist/**", "**/.nuxt/**"],
  },
  {
    rules: {
      "no-console": "error",
      "sort-keys": "off",
      "import/no-default-export": "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/one-component-per-file": "off",
    },
  },
  ...eslintrc.plugins("vue", "simple-import-sort", "import", "prettier", "risxss"),
  ...eslintrc.extends("plugin:vue/vue3-recommended", "prettier", "plugin:yml/standard"),
  {
    files: ["**/*.ts"],
    ignores: ["**/*.d.ts", "**/*.spec.ts"],
    languageOptions: {
      globals: { ...globals.browser },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      ts,
    },
    rules: {
      ...ts.configs["recommended"].rules,
      // this rule, if on, would require explicit return type on the `render` function
      "@typescript-eslint/explicit-function-return-type": "off",
      // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser,
        //tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...ts.configs["recommended"].rules,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "risxss/catch-potential-xss-vue": "error",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.yml"],
    rules: {
      "yml/sort-keys": ["error"],
      "yml/file-extension": ["error", { extension: "yml" }],
      "yml/block-sequence": "error",
      "yml/no-multiple-empty-lines": ["error", { max: 1 }],
      "yml/quotes": ["error", { prefer: "single", avoidEscape: true }],
      "yml/sort-sequence-values": ["error", { order: { type: "asc" }, pathPattern: "^dependsOn$" }],
      "yml/no-empty-sequence-entry": ["error"],
    },
  },
  ...tailwind.configs["flat/recommended"],
  {
    rules: {
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "off",
    },
  },
];
