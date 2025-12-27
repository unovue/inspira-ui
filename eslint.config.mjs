import antfu from "@antfu/eslint-config";
import oxlint from "eslint-plugin-oxlint";
import globals from "globals";

export default antfu(
  {
    ignores: [
      ".husky/",
      ".vscode/",
      ".yarn/",
      "coverage/",
      "dist/",
      "public/assets/",
      "tsconfig.*.json",
      "components.d.ts",
      "**/*.md",
    ],
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
);
