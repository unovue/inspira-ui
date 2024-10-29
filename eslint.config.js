import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginTailwind from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: ["*.min.js", "*.map", "*.snap", "**/build/**", "**/dist/**", "**/.nuxt/**"],
  },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...pluginTailwind.configs["flat/recommended"],
  eslintConfigPrettier,
  importPlugin.flatConfigs.recommended,
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      "no-console": "error",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "import/no-default-export": "off",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-unresolved": "off", //Need eslint-import-resolver-typescript, waiting for flatconfig and error fix on package side
      "func-style": ["error", "declaration"],
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
