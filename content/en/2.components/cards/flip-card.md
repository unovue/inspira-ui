---
title: Flip Card
description: A dynamic flip card with smooth 180-degree flipping animations along both the X and Y axes, providing an engaging and interactive visual effect.
category: Card
tags: [css, tailwind, card]
---

::ComponentViewer{demoFile="FlipCardDemo.vue" config="FlipCardConfig" componentId="flip-card" :componentFiles='["FlipCard.vue"]'}

#api

## API

| Prop Name | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| `class`   | `string` | `-`     | The class to be applied to the component.  |
| `rotate`  | `x \| y` | `y`     | You can pass the rotate value as you want. |

| Slot Name | Description                 |
| --------- | --------------------------- |
| `default` | Component to show as front. |
| `back`    | Component to show as back.  |

#credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.

::
