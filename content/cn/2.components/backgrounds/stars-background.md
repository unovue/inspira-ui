---
title: 星空背景
description: 使用分层运动与随机星位的视差星空动画背景。
category: Background
tags: [css, tailwind, background, animate-ui, motion-v]
---

::ComponentViewer{demoFile="StarsBackgroundDemo.vue" config="StarsBackgroundConfig" componentId="bg-stars" :componentFiles='["StarsBackground.vue"]'}

#api

## API

| 属性名      | 类型            | 默认值                          | 描述                                                           |
| ----------- | --------------- | ------------------------------- | -------------------------------------------------------------- |
| `factor`    | `number`        | `0.05`                          | 鼠标视差移动的倍数。                                           |
| `speed`     | `number`        | `50`                            | 星层垂直循环动画的基础速度（秒）。                             |
| `transition`| `SpringOptions` | `{ stiffness: 50, damping: 20 }`| 视差响应的弹簧物理配置。                                       |
| `starColor` | `string`        | `"#fff"`                        | 星星颜色，接受任何合法 CSS 颜色。                             |
| `class`     | `string`        | `—`                             | 可选，容器 div 的额外类（如 z-index 等）。                     |

> 💡 组件包裹了一个插槽，可在背景上放置其他 UI 元素。

#credits

- 移植自 [Animate UI](https://animate-ui.com/docs/backgrounds/stars)

::
