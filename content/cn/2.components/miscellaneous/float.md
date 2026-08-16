---
title: Float
description: 在三维位置和旋转轴上添加连续且自然的运动。
category: Miscellaneous
tags: [css, tailwind, motion-v, 3d, animation]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="FloatDemo.vue" config="FloatConfig" componentId="float" :componentFiles='["Float.vue", "index.ts"]'}

#api

## API

| 属性名          | 类型                       | 默认值          | 描述                                   |
| --------------- | -------------------------- | --------------- | -------------------------------------- |
| `speed`         | `number`                   | `0.5`           | 每帧的时间推进量。                     |
| `amplitude`     | `[number, number, number]` | `[10, 30, 30]`  | X、Y、Z 轴的位置移动范围，单位为像素。 |
| `rotationRange` | `[number, number, number]` | `[15, 15, 7.5]` | X、Y、Z 轴的旋转范围，单位为度。       |
| `timeOffset`    | `number`                   | `0`             | 用于错开多个浮动元素动画相位的偏移量。 |
| `class`         | `string`                   | —               | 合并到动画包装器的额外 class。         |

通过默认插槽传入需要动画的内容。组件会保留三维变换，并在每个动画帧更新位置。

#credits

- 移植自 [Fancy Components Float](https://fancycomponents.dev/docs/components/blocks/float)。

::
