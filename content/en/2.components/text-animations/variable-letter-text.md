---
title: Variable Letter Text
description: Animate variable-font settings across individual letters when text is hovered.
category: Text Animation
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="VariableLetterTextDemo.vue" config="VariableLetterTextConfig" componentId="variable-letter-text" :componentFiles='["VariableLetterText.vue", "index.ts"]'}

#api

## API

| Prop                        | Type                                      | Default                             | Description                                        |
| --------------------------- | ----------------------------------------- | ----------------------------------- | -------------------------------------------------- |
| `label`                     | `string`                                  | —                                   | Text to split into independently animated letters. |
| `fromFontVariationSettings` | `string`                                  | `"'wght' 400"`                      | Font variation settings used at rest.              |
| `toFontVariationSettings`   | `string`                                  | `"'wght' 900"`                      | Font variation settings applied on hover.          |
| `transition`                | `Transition`                              | `{ type: "spring", duration: 0.7 }` | Motion transition used for each letter.            |
| `staggerDuration`           | `number`                                  | `0.03`                              | Delay between each letter's animation.             |
| `staggerFrom`               | `"first" \| "last" \| "center" \| number` | `"first"`                           | Origin used to calculate the stagger order.        |
| `class`                     | `string`                                  | —                                   | Additional classes merged onto the root element.   |

Use a variable font and pass the axes it supports. For example, Roboto Flex can use `wght` and `wdth`.

#credits

- Ported from [Fancy Components Variable Font Hover By Letter](https://fancycomponents.dev/docs/components/text/variable-font-hover-by-letter).

::
