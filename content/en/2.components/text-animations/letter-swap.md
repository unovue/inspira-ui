---
title: Letter Swap
description: Swap letters vertically on hover with forward, ping-pong, and random animation modes.
category: Text Animation
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="LetterSwapDemo.vue" config="LetterSwapConfig" componentId="letter-swap" :componentFiles='["LetterSwap.vue", "index.ts"]' dependencies="motion-v"}

#api

## API

| Prop              | Type                                      | Default                             | Description                                              |
| ----------------- | ----------------------------------------- | ----------------------------------- | -------------------------------------------------------- |
| `label`           | `string`                                  | —                                   | Text to display and animate.                             |
| `animation`       | `"forward" \| "pingpong"`                 | `"forward"`                         | Plays once on enter or reverses when the pointer leaves. |
| `random`          | `boolean`                                 | `false`                             | Animates letters in a shuffled order.                    |
| `reverse`         | `boolean`                                 | `true`                              | Sets the vertical direction of the swap.                 |
| `transition`      | `Transition`                              | `{ type: "spring", duration: 0.7 }` | Motion transition used for each letter.                  |
| `staggerDuration` | `number`                                  | `0.03`                              | Delay between each letter's animation start.             |
| `staggerFrom`     | `"first" \| "last" \| "center" \| number` | `"first"`                           | Origin used to calculate the stagger order.              |
| `class`           | `string`                                  | `-`                                 | Additional classes merged onto the root element.         |

#credits

- Inspired by [Fancy Components](https://fancycomponents.dev/docs/components/text/letter-swap.md).
- Original work by [Daniel Petho](https://github.com/danielpetho/fancy).

::
