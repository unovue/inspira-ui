---
title: Floating Card
description: 一个带有透视、3D 倾斜和光泽跟随效果的悬停卡片组件，灵感来自 Perplexity Comet 网站。
category: Card
tags: [css, tailwind, card, motion, 3D, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="FloatingCardDemo.vue" config="FloatingCardConfig" componentId="floating-card" :componentFiles='["FloatingCard.vue"]'}

#api

## API

| 属性名           | 类型     | 默认值 | 描述                               |
| ---------------- | -------- | ------ | ---------------------------------- |
| `rotateDepth`    | `number` | `17.5` | 卡片悬停时应用的最大 X/Y 旋转值。  |
| `translateDepth` | `number` | `20`   | 跟随光标时应用的最大 X/Y 平移值。  |
| `class`          | `string` | `-`    | 应用于外层容器的额外 Tailwind 类。 |

#credits

- 灵感来源于 [Aceternity UI](https://ui.aceternity.com/components/comet-card)。

::
