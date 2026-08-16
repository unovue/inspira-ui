---
title: Breathing Text
description: Animate variable font axes continuously with a staggered breathing rhythm.
category: Text Animation
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="BreathingTextDemo.vue" config="BreathingTextConfig" componentId="breathing-text" :componentFiles='["BreathingText.vue", "index.ts"]'}

#api

## API

| Prop                        | Type                                      | Default                                | Description                                              |
| --------------------------- | ----------------------------------------- | -------------------------------------- | -------------------------------------------------------- |
| `text`                      | `string`                                  | Slot content                           | Text to split into independently animated letters.       |
| `as`                        | `string`                                  | `"span"`                               | HTML element used for the root text node.                |
| `fromFontVariationSettings` | `string`                                  | —                                      | Font variation settings used at the start of each cycle. |
| `toFontVariationSettings`   | `string`                                  | —                                      | Font variation settings used at the end of each cycle.   |
| `transition`                | `Transition`                              | `{ duration: 1.5, ease: "easeInOut" }` | Motion transition for each letter.                       |
| `staggerDuration`           | `number`                                  | `0.1`                                  | Delay between each letter's animation.                   |
| `staggerFrom`               | `"first" \| "last" \| "center" \| number` | `"first"`                              | Origin used to calculate the stagger order.              |
| `repeatDelay`               | `number`                                  | `0.1`                                  | Delay between repeated breathing cycles.                 |
| `class`                     | `string`                                  | —                                      | Additional classes merged onto the root element.         |

Use a variable font and pass the axes it supports. For example, Roboto Flex can use `wght` and `wdth`.

#credits

- Ported from [Fancy Components Breathing Text](https://fancycomponents.dev/docs/components/text/breathing-text).

::
