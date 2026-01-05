---
title: 卡片聚光效果
description: 一款带有动态聚光灯效果的卡片组件，光标移动时跟随，增强视觉互动。
category: Card
tags: [css, tailwind, card, magic-ui]
---

::ComponentViewer{demoFile="CardSpotlightDemo.vue" config="CardSpotlightConfig" componentId="card-spotlight" :componentFiles='["CardSpotlight.vue"]'}

#api

## API

| 属性名            | 类型     | 默认值     | 描述                                           |
| ----------------- | -------- | ---------- | ---------------------------------------------- |
| `gradientSize`    | `number` | `200`      | 聚光效果的半径（像素）。                       |
| `gradientColor`   | `string` | `'#262626'`| 聚光渐变的颜色。                               |
| `gradientOpacity` | `number` | `0.8`      | 聚光渐变效果的不透明度。                       |
| `slotClass`       | `string` | `undefined`| 应用于包含插槽的父容器的类名。                 |

#credits

- 灵感来自 [Magic UI](https://magicui.design/docs/components/magic-card) 的 Magic Card 组件。

::
