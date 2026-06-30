---
title: Floating Card
description: A perspective, 3D, Tilt card as seen on Perplexity Comet's website.
category: Card
tags: [css, tailwind, card, motion, 3D, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="FloatingCardDemo.vue" config="FloatingCardConfig" componentId="floating-card" :componentFiles='["FloatingCard.vue"]'}

#api

## API

| Prop Name        | Type     | Default | Description                                             |
| ---------------- | -------- | ------- | ------------------------------------------------------- |
| `rotateDepth`    | `number` | `17.5`  | Maximum X/Y rotation applied while the card is hovered. |
| `translateDepth` | `number` | `20`    | Maximum X/Y translation applied while tracking cursor.  |
| `class`          | `string` | `-`     | Additional Tailwind classes applied to the wrapper.     |

#credits

- Inspired by [Aceternity UI](https://ui.aceternity.com/components/comet-card).

::
