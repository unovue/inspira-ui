---
title: Scroll Swap Text
description: Swap text vertically as the component moves through a scroll container.
category: Text Animation
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="ScrollSwapTextDemo.vue" config="ScrollSwapTextConfig" componentId="scroll-swap-text" :componentFiles='["ScrollSwapText.vue", "index.ts"]'}

#api

## API

| Prop Name      | Type                      | Default                           | Description                                     |
| -------------- | ------------------------- | --------------------------------- | ----------------------------------------------- |
| `as`           | `string`                  | `span`                            | Element rendered for the text wrapper.          |
| `containerRef` | `MaybeComputedElementRef` | —                                 | Scroll container used to calculate progress.    |
| `offset`       | `[string, string]`        | `["0 0", "0 1"]`                  | Scroll offsets that define the animation range. |
| `class`        | `string`                  | `-`                               | Additional classes merged onto the wrapper.     |
| `springConfig` | `object`                  | `{ stiffness: 200, damping: 30 }` | Spring settings used to smooth scroll progress. |

The component renders its slot text twice. The first copy moves out while the second copy moves in as the supplied container scrolls.

#credits

- Inspired by [Fancy Components](https://fancycomponents.dev/docs/components/text/scroll-and-swap).

::
