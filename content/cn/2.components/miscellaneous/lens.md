---
title: 放大镜
description: 用于放大图片、视频或任意元素的镜头组件。
category: Miscellaneous
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="LensDemo.vue" config="LensConfig" componentId="lens" :componentFiles='["Lens.vue", "Rays.vue", "Beams.vue"]'}

#api

## API

| 属性名      | 类型                       | 默认值              | 描述                                         |
| ----------- | -------------------------- | ------------------- | -------------------------------------------- |
| `zoomFactor`| `number`                   | `1.5`               | 镜头的放大倍率。                             |
| `lensSize`  | `number`                   | `170`               | 镜头直径（像素）。                           |
| `position`  | `{ x: number, y: number }` | `{ x: 200, y: 150 }`| 静态模式下镜头的位置。                       |
| `isStatic`  | `boolean`                  | `false`             | 为 `true` 时镜头固定；否则跟随鼠标。         |
| `hovering`  | `boolean`                  | `"false"`           | 外部控制悬停状态。                           |

#credits

- 感谢 [Aceternity UI](https://ui.aceternity.com/components/lens)。
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 移植该组件。

::
