---
title: Screw Text
description: Rotate each letter through a 3D face swap when the text is hovered.
category: Text Animation
tags: [css, tailwind, motion-v, 3d]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="ScrewTextDemo.vue" config="ScrewTextConfig" componentId="screw-text" :componentFiles='["ScrewText.vue", "index.ts"]'}

#api

## API

| Prop              | Type                                      | Default           | Description                                        |
| ----------------- | ----------------------------------------- | ----------------- | -------------------------------------------------- |
| `label`           | `string`                                  | —                 | Text to split into independently animated letters. |
| `as`              | `string`                                  | `"p"`             | HTML element used for the root text node.          |
| `rotateDirection` | `"top" \| "right" \| "bottom" \| "left"`  | `"right"`         | Axis and direction used for the 3D swap.           |
| `staggerDuration` | `number`                                  | `0.05`            | Delay between each letter's animation.             |
| `staggerFrom`     | `"first" \| "last" \| "center" \| number` | `"first"`         | Origin used to calculate stagger order.            |
| `transition`      | `Transition`                              | Spring transition | Motion transition used for each letter.            |
| `class`           | `string`                                  | —                 | Additional classes for the root element.           |
| `frontFaceClass`  | `string`                                  | —                 | Classes applied to each front letter face.         |
| `secondFaceClass` | `string`                                  | —                 | Classes applied to each secondary letter face.     |

#credits

- Ported from [Fancy Components Letter 3D Swap](https://fancycomponents.dev/docs/components/text/letter-3d-swap).

::
