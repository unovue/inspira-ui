---
title: Tetris
description: Tetris background component, you can even click on a block to eliminate it.
---

::ComponentLoader{label="Preview" componentName="TetrisDemo" type="examples" id="tetris"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

::alert{type="info"}
**Note:** This component requires `theme-colors` as a dependency.
::

## API

| Prop Name      | Type     | Default | Description                                    |
| -------------- | -------- | ------- | ---------------------------------------------- |
| `class`        | `string` | `""`    | Additional class names to style the component. |
| `base`         | `number` | `10`    | How many blocks do you have in a row.          |
| `square-color` | `string` | `""`    | Square color.                                  |

## Install using CLI

::InstallationCli{componentId="tetris"}
::

## Install Manually

::steps{level=4}

#### Install the dependencies

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

Copy and paste the following code

::CodeViewer{filename="Tetris.vue" language="vue" componentName="Tetris" type="ui" id="tetris"}  
::

::

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Nuxt UI Home](https://ui2.nuxt.com/).
