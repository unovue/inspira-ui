---
title: 俄罗斯方块
description: 俄罗斯方块的背景组件，你甚至可以点击一个方块来消除它。
---

::ComponentLoader{label="预览" componentName="TetrisDemo" type="examples" id="tetris"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

::alert{type="info"}
**注意:** This component requires `theme-colors` as a dependency.
::

## API

| Prop 名称      | 类型     | 默认值 | 描述                                           |
| -------------- | -------- | ------ | ---------------------------------------------- |
| `class`        | `string` | `""`   | Additional class names to style the component. |
| `base`         | `number` | `10`   | How many blocks do you have in a row.          |
| `square-color` | `string` | `""`   | Square color.                                  |

## 通过 CLI 安装

::InstallationCli{componentId="tetris"}
::

## 手动安装

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

复制并粘贴以下代码：

::CodeViewer{filename="Tetris.vue" language="vue" componentName="Tetris" type="ui" id="tetris"}  
::

::

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Nuxt UI Home](https://ui2.nuxt.com/).
