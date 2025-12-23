---
title: 边框光束
description: 可定制尺寸、时长、颜色与延迟的炫酷动画边框光束效果。
category: 特效
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="BorderBeamDemo.vue" config="BorderBeamConfig" componentId="border-beam" :componentFiles='["BorderBeam.vue"]'}

#api

## API

| 属性名       | 类型     | 默认值      | 描述                                       |
| ------------ | -------- | ----------- | ------------------------------------------ |
| `class`      | `string` | `""`        | 用于自定义样式的额外 CSS 类。              |
| `size`       | `number` | `200`       | 动画边框光束的尺寸。                       |
| `duration`   | `number` | `15`        | 动画持续时间（秒）。                       |
| `borderWidth`| `number` | `1.5`       | 光束边框的宽度。                           |
| `anchor`     | `number` | `90`        | 光束的锚点，决定其在边框上的位置。         |
| `colorFrom`  | `string` | `"#ffaa40"` | 光束渐变的起始颜色。                       |
| `colorTo`    | `string` | `"#9c40ff"` | 光束渐变的结束颜色。                       |
| `delay`      | `number` | `0`         | 动画开始前的延迟时间（秒）。               |

#credits

- 移植自 [Magic UI](https://magicui.design/docs/components/border-beam)。

::
