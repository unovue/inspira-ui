---
title: Marquee
description: A customizable scrolling component that loops its content horizontally or vertically, with configurable direction, hover pause, and repeat options.
category: Miscellaneous
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="MarqueeDemo.vue" config="MarqueeConfig" componentId="marquee" :componentFiles='["Marquee.vue", "ReviewCard.vue"]'}

#api

## API

| Prop Name      | Type      | Default | Description                                                               |
| -------------- | --------- | ------- | ------------------------------------------------------------------------- |
| `class`        | `string`  | `''`    | Custom CSS classes to apply to the outermost container of the marquee.    |
| `reverse`      | `boolean` | `false` | Sets the scrolling direction to reverse (right to left or bottom to top). |
| `pauseOnHover` | `boolean` | `false` | Pauses the marquee animation when hovered.                                |
| `vertical`     | `boolean` | `false` | Sets the scrolling direction to vertical instead of horizontal.           |
| `repeat`       | `number`  | `4`     | Number of times the content inside the marquee should be repeated.        |

## CSS Variables

You can customize the speed and gap between the items by setting the following CSS variables:

- **`--duration`**: Controls the speed of the marquee animation.
- **`--gap`**: Sets the space between repeated items in the marquee.

#credits

- Inspired by [Magic UI](https://magicui.design/docs/components/marquee).

::
