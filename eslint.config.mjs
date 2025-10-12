import antfu from "@antfu/eslint-config";
import globals from "globals";
// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  antfu(
    {
      stylistic: false,
      vue: true,
      typescript: true,
      unicorn: true,
      languageOptions: {
        globals: {
          ...globals.node,
          ...globals.browser,
        },
      },
      rules: {
        "node/prefer-global/process": "off",
        "vue/multi-word-component-names": "off",
        "vue/no-multiple-template-root": "off",
        "vue/singleline-html-element-content-newline": "off",
      },
    },
    oxlint.configs["flat/recommended"], // oxlint should be the last one
  ),
);
