---
title: 模糊揭示
description: 平滑模糊淡入内容的组件。
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BlurRevealDemo.vue" config="BlurRevealConfig" componentId="blur-reveal" :componentFiles='["BlurReveal.vue"]'}

#api

## API

| 属性名   | 类型     | 默认值 | 描述                                       |
| -------- | -------- | ------ | ------------------------------------------ |
| `duration`| `number`| `1`    | 模糊淡入动画的持续时间。                   |
| `delay`  | `number` | `1`    | 子组件依次揭示的延迟。                     |
| `blur`   | `string` | `10px` | 应用于子组件的模糊量。                     |
| `yOffset`| `number` | `20`   | 入场动画的垂直偏移距离。                   |

#credits

- 感谢 [Magic UI](https://magicui.design/docs/components/blur-fade) 提供该组件。

::
