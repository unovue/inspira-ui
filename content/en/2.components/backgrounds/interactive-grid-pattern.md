---
title: Interactive Grid Pattern
description: A interactive background grid pattern made with SVGs, fully customizable.
category: Background
tags: [css, tailwind, background, svg, magic-ui]
---

::ComponentViewer{demoFile="InteractiveGridPatternDemo.vue" config="InteractiveGridPatternConfig" componentId="interactive-grid-pattern" :componentFiles='["InteractiveGridPattern.vue"]' }

#api

## API

| Prop Name          | Type               | Default    | Description                                   |
| ------------------ | ------------------ | ---------- | --------------------------------------------- |
| `className`        | `string`           | -          | Additional classes for styling the component. |
| `squaresClassName` | `string`           | -          | Additional classes for styling the squares.   |
| `width`            | `number`           | `40`       | Width of the square in pixels.                |
| `height`           | `number`           | `40`       | Height of the square in pixels.               |
| `squares`          | `[number, number]` | `[24, 24]` | Number of squares in the grid pattern.        |

#credits

- Inspired by [MagicUI](https://magicui.design/docs/components/interactive-grid-pattern).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.

::
