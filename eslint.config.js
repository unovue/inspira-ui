import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginTailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import eslintPluginYml from "eslint-plugin-yml";
import importTypescriptResolver from "eslint-import-resolver-typescript";

export default [
  {
    ignores: ["*.min.js", "*.map", "*.snap", "**/build/**", "**/dist/**", "**/.nuxt/**"],
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...pluginTailwind.configs["flat/recommended"],
  eslintConfigPrettier,
  importPlugin.flatConfigs.recommended,
  importTypescriptResolver.flatConfigs.recommended,
  ...eslintPluginYml.configs["flat/recommended"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      "no-console": "error",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "import/no-default-export": "off",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "func-style": ["error", "declaration"],
    },
  },
];
