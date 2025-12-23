---
title: 雪花背景
description: 优雅的雪花飘落动画背景。
category: 背景
tags: [css, tailwind, background, canvas]
---

::ComponentViewer{demoFile="SnowfallBgDemo.vue" config="SnowfallBgConfig" componentId="snowfall-bg" :componentFiles='["SnowfallBg.vue"]'}

#api

## API

| 属性名    | 类型     | 默认值 | 描述                               |
| --------- | -------- | ------ | ---------------------------------- |
| `color`   | `string` | `#FFF` | 雪花的十六进制颜色。               |
| `quantity`| `number` | `100`  | 显示的雪花数量。                   |
| `speed`   | `number` | `1`    | 雪花下落速度。                     |
| `maxRadius`| `number`| `3`    | 雪花的最大半径。                   |
| `minRadius`| `number`| `1`    | 雪花的最小半径。                   |
| `class`   | `string` | `null` | 应用于容器的额外 CSS 类。          |

#credits

- 灵感来自自然的降雪效果。

::
