---
title: Focus
description: Highlight words in a sentence with a dynamic blurred effect and animated focus frame. Supports auto-cycling or manual hover focus mode.
category: Text Animation
tags: [css, tailwind, codepen]
---

::ComponentViewer{demoFile="FocusDemo.vue" config="FocusConfig" componentId="focus" :componentFiles='["Focus.vue"]'}

#api

## API

| Prop Name                | Type      | Default           | Description                                                    |
| ------------------------ | --------- | ----------------- | -------------------------------------------------------------- |
| `sentence`               | `string`  | `"Inspira Focus"` | Text sentence to display and animate word-by-word.             |
| `manualMode`             | `boolean` | `false`           | If true, focus highlights on hover; otherwise auto-cycles.     |
| `blurAmount`             | `number`  | `5`               | Blur radius in pixels for inactive words.                      |
| `borderColor`            | `string`  | `"green"`         | Color of the animated focus frame border.                      |
| `animationDuration`      | `number`  | `0.5`             | Duration in seconds for the focus frame animation transitions. |
| `pauseBetweenAnimations` | `number`  | `1`               | Pause duration in seconds between auto-focus transitions.      |

#credits

- Inspired from [Focus Text Hover Effect on CodePen](https://codepen.io/CameronFitzwilliam/pen/JJRjMa).

::
