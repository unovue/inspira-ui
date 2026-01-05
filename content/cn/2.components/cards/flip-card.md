---
title: 翻转卡片
description: 一款动态的翻转卡片，沿 X 轴或 Y 轴平滑实现 180 度翻转，带来有趣的交互视觉效果。
category: Card
tags: [css, tailwind, card]
---

::ComponentViewer{demoFile="FlipCardDemo.vue" config="FlipCardConfig" componentId="flip-card" :componentFiles='["FlipCard.vue"]'}

#api

## API

| 属性名  | 类型       | 默认值 | 描述                               |
| ------- | ---------- | ------ | ---------------------------------- |
| `class` | `string`   | `-`    | 应用于组件的类名。                 |
| `rotate`| `x \| y`   | `y`    | 传入希望沿哪个轴翻转。             |

| 插槽名    | 描述               |
| --------- | ------------------ |
| `default` | 前面显示的内容。   |
| `back`    | 背面显示的内容。   |

#credits

- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 提供该组件。

::
