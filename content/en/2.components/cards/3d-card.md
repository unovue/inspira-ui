---
title: 3D Card Effect
description: A card perspective effect, hover over the card to elevate card elements.
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="CardDemo.vue" config="Card3dConfig" componentId="card-3d" :componentFiles='["CardContainer.vue", "CardBody.vue", "CardItem.vue", "useMouseState.ts"]'}

#api

## API

### `CardContainer`

The `CardContainer` component serves as a wrapper for the 3D card effect. It manages mouse events to create a 3D perspective.

#### Props

| Prop Name        | Type   | Default | Description                                                 |
| ---------------- | ------ | ------- | ----------------------------------------------------------- |
| `class`          | string | `null`  | Additional classes for styling the inner container element. |
| `containerClass` | string | `null`  | Additional classes for styling the outer container element. |

---

### `CardBody`

The `CardBody` component is a flexible container with preserved 3D styling. It is intended to be used within a `CardContainer` to hold content with a 3D transformation effect.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | string | `null`  | Additional classes for custom styling. |

---

### `CardItem`

The `CardItem` component represents individual items within the 3D card. It supports various transformations (translation and rotation) to create dynamic 3D effects.

#### Props

| Prop Name    | Type   | Default | Description                                                     |
| ------------ | ------ | ------- | --------------------------------------------------------------- |
| `as`         | string | `"div"` | The HTML tag or component to use for the item.                  |
| `class`      | string | `null`  | Additional classes for styling the item.                        |
| `translateX` | string | `0`     | X-axis translation in pixels.                                   |
| `translateY` | string | `0`     | Y-axis translation in pixels.                                   |
| `translateZ` | string | `0`     | Z-axis translation in pixels, used to control the depth effect. |
| `rotateX`    | string | `0`     | X-axis rotation in degrees.                                     |
| `rotateY`    | string | `0`     | Y-axis rotation in degrees.                                     |
| `rotateZ`    | string | `0`     | Z-axis rotation in degrees.                                     |

---

> 💡 **_Important Note:_**
>
> If you are using `CardItem` inside a `div`, add `style="transform-style: preserve-3d;"` to the div to make `translate-z` prop to work.

#credits

- Ported from Aceternity UI 3D Card Component.

::
