---
title: Underline Text
description: Animate an underline from the center or across a text label on hover.
category: Text Animation
tags: [css, tailwind, motion-v, underline]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="UnderlineTextDemo.vue" config="UnderlineTextConfig" componentId="underline-text" :componentFiles='["UnderlineText.vue", "index.ts"]'}

#api

## API

| Prop Name               | Type                                                     | Default     | Description                                        |
| ----------------------- | -------------------------------------------------------- | ----------- | -------------------------------------------------- |
| `as`                    | `string`                                                 | `span`      | HTML element used for the text wrapper.            |
| `variant`               | `"center" \| "comes-in-goes-out" \| "goes-out-comes-in"` | `center`    | Underline animation style.                         |
| `direction`             | `"left" \| "right"`                                      | `left`      | Direction used by the side-to-side variants.       |
| `transition`            | `Record<string, unknown>`                                | See default | Motion transition for the underline.               |
| `underlineHeightRatio`  | `number`                                                 | `0.1`       | Underline height relative to the text font size.   |
| `underlinePaddingRatio` | `number`                                                 | `0.01`      | Distance below the text relative to the font size. |
| `class`                 | `string`                                                 | —           | Additional classes merged onto the text wrapper.   |

Use the default slot for the text content. The component creates the underline from the current text color.

#credits

- Ported from [Fancy Components Underline Animation](https://fancycomponents.dev/docs/components/text/underline-animation).

::
