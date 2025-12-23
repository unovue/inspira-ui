---
title: 文字悬停效果
description: 在悬停时为文字添加渐变描边与动画，灵感来自 x.ai。
category: 文字动画
tags: [css, tailwind]
---

::ComponentViewer{demoFile="TextHoverEffectDemo.vue" config="TextHoverEffectConfig" componentId="text-hover-effect" :componentFiles='["TextHoverEffect.vue"]'}

#api

## API

| 属性名     | 类型     | 默认值  | 描述                                     |
| ---------- | -------- | ------- | ---------------------------------------- |
| `text`     | `string` | Required| 应用悬停效果的文字。                     |
| `duration` | `number` | `200`   | 蒙版过渡动画的持续时间（秒）。           |
| `strokeWidth`| `number`| `0.75` | 文字描边宽度。                           |
| `opacity`  | `number` | `null`  | 文字的不透明度。                         |

::
