---
title: Tetris
description: Tetris background component, you can even click on a block to eliminate it.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="TetrisDemo" type="examples" id="tetris"}
::

::alert
**Note:** This component requires `theme-colors` as a dependency. Please install these using following commands.

    ::code-group

    ```bash [npm]
    npm install theme-colors
    ```

    ```bash [pnpm]
    pnpm install theme-colors
    ```

    ```bash [bun]
    bun add theme-colors
    ```

    ```bash [yarn]
    yarn add theme-colors
    ```
    ::

::

## API

| Prop Name      | Type     | Default | Description                                    |
| -------------- | -------- | ------- | ---------------------------------------------- |
| `class`        | `string` | `""`    | Additional class names to style the component. |
| `base`         | `number` | `10`    | How many blocks do you have in a row.          |
| `square-color` | `string` | `""`    | Square color.                                  |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="Tetris.vue" language="vue" componentName="Tetris" type="ui" id="tetris"}
::

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Nuxt UI Home](https://ui.nuxt.com/).
