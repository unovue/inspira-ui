---
title: 俄罗斯方块
description: 俄罗斯方块背景组件，甚至可以点击方块来消除。
category: 背景
tags: [css, tailwind, background]
---

::ComponentViewer{demoFile="TetrisDemo.vue" config="TetrisConfig" componentId="tetris" :componentFiles='["Tetris.vue"]' dependencies="theme-colors"}

#api

## API

| 属性名      | 类型     | 默认值 | 描述                               |
| ----------- | -------- | ------ | ---------------------------------- |
| `class`     | `string` | `""`   | 用于样式的额外类名。               |
| `base`      | `number` | `10`   | 每行包含的方块数量。               |
| `square-color`| `string`| `""`  | 方块颜色。                         |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 灵感并移植自 [Nuxt UI Home](https://ui2.nuxt.com/)。

::
