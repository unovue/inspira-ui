---
title: Script Copy
description: A script copy component that allows users to copy code to clipboard.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="ScriptCopyDemo" type="examples"}
::

::alert
**Note:** This component requires `shiki` as a dependency. Please install these using following commands.

    ::code-group

    ```bash [npm]
    npm install -D shiki
    ```

    ```bash [yarn]
    yarn add -D shiki
    ```

    ```bash [pnpm]
    pnpm add -D shiki
    ```

    ```bash [bun]
    bun add -D shiki
    ```
    ::

::

## API

::steps

### `ScriptCopy`

#### Props

| Prop Name                    | Type                    | Default     | Description                                                           |
| ---------------------------- | ----------------------- | ----------- | --------------------------------------------------------------------- |
| `class`                      | `string`                | -           | Additional classes for styling the component.                         |
| `commandMap`                 | `Record<string,string>` | -           | Map of package manager names to their corresponding install commands. |
| `showMultiplePackageOptions` | `boolean`               | `true`      | Whether to show multiple package manager options.                     |
| `codeLanguage`               | `string`                | `shell`     | The language of the code snippet for syntax highlighting.             |
| `lightTheme`                 | `string`                | `min-light` | The theme to use for syntax highlighting in light mode.               |
| `darkTheme`                  | `string`                | `min-dark`  | The theme to use for syntax highlighting in dark mode.                |
| `theme`                      | `'light' \| 'dark'`     | `dark`      | The color theme to use for the component.                             |

#### Usage

```vue [MyComponent.vue]
<ScriptCopy
  :command-map="{
    npm: 'npm run shadcn add button',
    yarn: 'yarn shadcn add button',
    pnpm: 'pnpm dlx shadcn@latest add button',
    bun: 'bun x shadcn@latest add button',
  }"
/>
```

::

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="ScriptCopy.vue" language="vue" componentName="ScriptCopy" type="ui" id="script-copy"}
::

### Warning

This component uses `v-html` to render syntax-highlighted code snippets. While this is necessary for the syntax highlighting functionality, be cautious as `v-html` can expose your application to XSS attacks if used with untrusted content. Make sure you only pass trusted command strings to the `commandMap` prop.

### Available Themes

Check out the complete list of available themes at [shiki.style/themes](https://shiki.style/themes).

## Credits

- Inspired by [Magic UI](https://magicui.design/docs/components/script-copy-btn).
- Credit to [kalix127](https://github.com/kalix127) for porting this component.
