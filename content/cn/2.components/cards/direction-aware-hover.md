---
title: 方向感知悬停卡片
description: 方向感知的悬停卡片，在悬停时显示带动态效果的图片，并提供可自定义的内容覆盖层。
category: 卡片
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="DirectionAwareHoverDemo.vue" config="DirectionAwareHoverConfig" componentId="direction-aware-hover" :componentFiles='["DirectionAwareHover.vue"]'}

#api

## API

| 属性名          | 类型     | 默认值      | 描述                                      |
| --------------- | -------- | ----------- | ----------------------------------------- |
| `imageUrl`      | `string` | 必填        | 要显示的图片 URL。                        |
| `class`         | `string` | `undefined` | 卡片容器的额外 CSS 类。                   |
| `imageClass`    | `string` | `undefined` | 图片元素的额外 CSS 类。                   |
| `childrenClass` | `string` | `undefined` | 内容覆盖层的额外 CSS 类。                 |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI 的 Direction Aware Hover](https://ui.aceternity.com/components/direction-aware-hover)。

::
