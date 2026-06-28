---
title: Fey Cards
description: An animated hover card stack with layered image swapping and a cinematic heading reveal.
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="FeyCardsDemo.vue" config="FeyCardsConfig" componentId="fey-cards" :componentFiles='["FeyCards.vue"]'}

#api

## API

| Prop Name         | Type           | Default                                                | Description                                                        |
| ----------------- | -------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| `imgSrc`          | `string[]`     | `[]`                                                   | Array of image sources used for the stacked cards.                 |
| `mainImg`         | `string`       | `-`                                                    | Main image shown behind the card stack.                            |
| `idleImg`         | `string`       | `-`                                                    | Idle image shown before the hovered swap effect.                   |
| `cardSpacing`     | `number`       | `32`                                                   | Horizontal spacing between stacked cards.                          |
| `spring`          | `SpringConfig` | `{ type: "spring", visualDuration: 0.5, bounce: 0.2 }` | Motion spring configuration for the entrance and shift animations. |
| `shiftDistance`   | `number`       | `60`                                                   | Distance cards move horizontally when a hover state is active.     |
| `swapDuration`    | `number`       | `0.5`                                                  | Duration of the image swap transition in seconds.                  |
| `entranceStagger` | `number`       | `0.2`                                                  | Delay between the entrance animations of each card.                |
| `class`           | `string`       | `-`                                                    | Additional Tailwind classes applied to the wrapper.                |

#credits

- Inspired by [Aceternity UI](https://ui.aceternity.com/labs/fey-card).

::
