---
title: Fey Cards
description: 一个带有分层图片切换和电影感标题揭示效果的悬停卡片堆叠动画组件。
category: Card
tags: [css, tailwind, card, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="FeyCardsDemo.vue" config="FeyCardsConfig" componentId="fey-cards" :componentFiles='["FeyCards.vue"]'}

#api

## API

| 属性名            | 类型           | 默认值                                                 | 描述                               |
| ----------------- | -------------- | ------------------------------------------------------ | ---------------------------------- |
| `imgSrc`          | `string[]`     | `[]`                                                   | 用于堆叠卡片的图片地址数组。       |
| `mainImg`         | `string`       | `-`                                                    | 卡片堆叠背后的主图。               |
| `idleImg`         | `string`       | `-`                                                    | 未悬停时显示的闲置图片。           |
| `cardSpacing`     | `number`       | `32`                                                   | 卡片之间的水平间距。               |
| `spring`          | `SpringConfig` | `{ type: "spring", visualDuration: 0.5, bounce: 0.2 }` | 进入动画和位移动画使用的弹簧配置。 |
| `shiftDistance`   | `number`       | `60`                                                   | 卡片在悬停状态下水平移动的距离。   |
| `swapDuration`    | `number`       | `0.5`                                                  | 图片切换过渡的时长，单位为秒。     |
| `entranceStagger` | `number`       | `0.2`                                                  | 每张卡片进入动画之间的延迟。       |
| `class`           | `string`       | `-`                                                    | 应用于外层容器的额外 Tailwind 类。 |

#credits

- 灵感来源于 [Aceternity UI](https://ui.aceternity.com/labs/fey-card)。

::
