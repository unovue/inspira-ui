---
title: 闪烁网格
description: 使用 Canvas 制作的闪烁网格背景，可通过 Tailwind CSS 完全自定义。
category: Background
tags: [css, tailwind, background, canvas, magic-ui]
---

::ComponentViewer{demoFile="FlickeringGridDemo.vue" config="FlickeringGridConfig" componentId="flickering-grid" :componentFiles='["FlickeringGrid.vue"]'}

#api

## API

| 属性名        | 类型     | 默认值        | 描述                       |
| ------------- | -------- | ------------- | -------------------------- |
| `squareSize`  | `number` | `4`           | 网格中每个方块的尺寸。     |
| `gridGap`     | `number` | `6`           | 方块之间的间距。           |
| `flickerChance`| `number`| `0.3`         | 方块闪烁的概率。           |
| `color`       | `string` | `rgb(0, 0, 0)`| 方块颜色。                 |
| `width`       | `number` | `-`           | 画布宽度。                 |
| `height`      | `number` | `-`           | 画布高度。                 |
| `class`       | `string` | `-`           | 画布的额外 CSS 类。        |
| `maxOpacity`  | `number` | `0.2`         | 方块的最大不透明度。       |

#credits

- 感谢 [magicui flickering-grid](https://magicui.design/docs/components/flickering-grid) 组件。

::
