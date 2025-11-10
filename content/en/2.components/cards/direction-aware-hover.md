---
title: Direction Aware Hover Card
description: A direction aware hover card, that displays an image with dynamic hover effects and customizable content overlay.
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="DirectionAwareHoverDemo.vue" config="DirectionAwareHoverConfig" componentId="direction-aware-hover" :componentFiles='["DirectionAwareHover.vue"]'}

#api

## API

| Prop Name       | Type     | Default     | Description                                     |
| --------------- | -------- | ----------- | ----------------------------------------------- |
| `imageUrl`      | `string` | Required    | The URL of the image to be displayed.           |
| `class`         | `string` | `undefined` | Additional CSS classes for the card container.  |
| `imageClass`    | `string` | `undefined` | Additional CSS classes for the image element.   |
| `childrenClass` | `string` | `undefined` | Additional CSS classes for the content overlay. |

#credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.
- Ported from [Aceternity UI's Direction Aware Hover](https://ui.aceternity.com/components/direction-aware-hover)

::
