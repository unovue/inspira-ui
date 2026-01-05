---
title: 盒子揭示
description: 可自定义颜色、时长与延迟的盒子揭示动画。
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BoxRevealDemo.vue" config="BoxRevealConfig" componentId="box-reveal" :componentFiles='["BoxReveal.vue"]'}

#api

## API

| 属性名  | 类型     | 默认值     | 描述                                    |
| ------- | -------- | ---------- | --------------------------------------- |
| `color` | `string` | `"#5046e6"`| 揭示盒子的背景色。                      |
| `duration`| `number`| `0.5`     | 揭示动画的持续时间（秒）。              |
| `delay` | `number` | `0.25`     | 动画开始前的延迟（秒）。                |
| `class` | `string` | `""`       | 用于自定义样式的额外 CSS 类。           |

#credits

- 移植自 [Magic UI Box Reveal](https://magicui.design/docs/components/box-reveal)。

::
