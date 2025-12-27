---
title: Card Spotlight
description: A card component with a dynamic spotlight effect that follows the mouse cursor, enhancing visual interactivity.
category: Card
tags: [css, tailwind, card, magic-ui]
---

::ComponentViewer{demoFile="CardSpotlightDemo.vue" config="CardSpotlightConfig" componentId="card-spotlight" :componentFiles='["CardSpotlight.vue"]'}

#api

## API

| Prop Name         | Type     | Default     | Description                                                 |
| ----------------- | -------- | ----------- | ----------------------------------------------------------- |
| `gradientSize`    | `number` | `200`       | Radius in pixels of the spotlight effect.                   |
| `gradientColor`   | `string` | `'#262626'` | The color of the spotlight gradient.                        |
| `gradientOpacity` | `number` | `0.8`       | The opacity level of the spotlight gradient effect.         |
| `slotClass`       | `string` | `undefined` | Class to apply to the parent container containing the slot. |

#credits

- Inspired by Magic Card component from [Magic UI](https://magicui.design/docs/components/magic-card).

::
