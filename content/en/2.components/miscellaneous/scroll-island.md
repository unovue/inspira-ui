---
title: Scroll Island
description: A dynamic and interactive component that displays scroll progress with animated visuals and an expandable area for additional content.
category: Miscellaneous
tags: [css, tailwind, number-flow]
---

::ComponentViewer{demoFile="ScrollIslandDemo.vue" config="ScrollIslandConfig" componentId="scroll-island" :componentFiles='["ScrollIsland.vue"]' dependencies="@number-flow/vue"}

#api

## API

| Prop Name | Type     | Default      | Description                                     |
| --------- | -------- | ------------ | ----------------------------------------------- |
| `class`   | `string` | `""`         | Additional CSS classes for custom styling.      |
| `title`   | `string` | `"Progress"` | Title displayed in the header of the component. |
| `height`  | `string` | `44`         | Height of the component.                        |

#credits

- Inspired by the work of [Ali Samadi](https://x.com/alisamadi__/status/1854312982559502556) & [Nitish Khagwal](https://x.com/nitishkmrk)
- [NumberFlow by Maxwell Barvian](https://number-flow.barvian.me/vue) for number formatting and animations.

::
