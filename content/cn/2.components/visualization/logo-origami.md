---
title: 折纸 Logo
description: 带折纸效果的翻转 Logo 动画。
category: Visualization
tags: [css, tailwind, hover-dev]
---

::ComponentViewer{demoFile="LogoOrigamiDemo.vue" config="LogoOrigamiConfig" componentId="logo-origami" :componentFiles='["LogoOrigami.vue", "LogoOrigamiItem.vue"]'}

#api

## API

| 属性名   | 类型     | 默认值 | 描述                               |
| -------- | -------- | ------ | ---------------------------------- |
| `class`  | `string` | `""`   | 用于自定义样式的额外 CSS 类。      |
| `duration`| `number`| `1.5`  | 翻转动画的持续时间（秒）。         |
| `delay`  | `number` | `2.5`  | 两次翻转动画之间的延迟（秒）。     |

#credits

- 灵感来自 [hover.dev](www.hover.dev/components/other#logo-origami) 的折纸翻转动画。

::
