---
title: Text Highlight
description: A text effect that fill background of a text to highlight it.
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextHighlightDemo.vue" config="TextHighlightConfig" componentId="text-highlight" :componentFiles='["TextHighlight.vue"]'}

#api

## API

| Prop Name        | Type     | Default   | Description                                                                |
| ---------------- | -------- | --------- | -------------------------------------------------------------------------- |
| `delay`          | `number` | `0`       | Delay before the animation starts, in `ms`.                                |
| `duration`       | `number` | `2000`    | Duration of the animation, in `ms`.                                        |
| `text-end-color` | `string` | `inherit` | Color of the text at the end of the animation. Match WCAG recommendations. |

#credits

- Inspired by [Aceternity UI](https://ui.aceternity.com/components/hero-highlight)
- Credits to [Nathan De Pachtere](https://nathandepachtere.com) for porting this component.

::
