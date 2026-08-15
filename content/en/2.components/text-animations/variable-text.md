---
title: Variable Text
description: Animate variable font axes near the pointer, or reveal each letter in a randomized hover sequence.
category: Text Animation
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="VariableTextDemo.vue" config="VariableTextConfig" componentId="variable-text" :componentFiles='["VariableText.vue", "index.ts"]'}

#api

## API

| Prop                        | Type                                      | Default                             | Description                                                                 |
| --------------------------- | ----------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------- |
| `label`                     | `string`                                  | —                                   | Text to split into independently animated letters.                          |
| `fromFontVariationSettings` | `string`                                  | —                                   | Font variation settings used at rest and outside the proximity radius.      |
| `toFontVariationSettings`   | `string`                                  | —                                   | Font variation settings applied at the center of the proximity effect.      |
| `containerRef`              | `MaybeComputedElementRef`                 | —                                   | Element used to calculate pointer coordinates for proximity mode.           |
| `radius`                    | `number`                                  | `50`                                | Radius in pixels around the pointer where letters respond.                  |
| `falloff`                   | `"linear" \| "exponential" \| "gaussian"` | `"linear"`                          | Controls how the effect decreases with distance.                            |
| `random`                    | `boolean`                                 | `false`                             | Uses randomized letter order on hover instead of cursor proximity tracking. |
| `transition`                | `Transition`                              | `{ type: "spring", duration: 0.7 }` | Motion transition used in random mode.                                      |
| `staggerDuration`           | `number`                                  | `0.03`                              | Delay between letters in random mode.                                       |
| `as`                        | `string`                                  | `"span"`                            | HTML element used for the root text node.                                   |
| `class`                     | `string`                                  | —                                   | Additional classes merged onto the root element.                            |

#credits

- Ported from [Fancy Components Variable Font Cursor Proximity](https://fancycomponents.dev/docs/components/text/variable-font-cursor-proximity).
- Random letter behavior is based on [Fancy Components Variable Font Hover By Random Letter](https://fancycomponents.dev/docs/components/text/variable-font-hover-by-random-letter).

::
