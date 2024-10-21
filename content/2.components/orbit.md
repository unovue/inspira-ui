---
title: Orbit
description: A component that animates content in a circular orbit, with customizable duration, delay, and radius. It also offers an optional orbit path display.
---

::ComponentLoader{label="Preview" componentName="OrbitDemo" type="examples"}  
::

## API

| Prop Name  | Type      | Default | Description                                     |
| ---------- | --------- | ------- | ----------------------------------------------- |
| `reverse`  | `boolean` | `false` | Reverses the orbit direction if `true`.         |
| `duration` | `number`  | `20`    | The duration of the orbit animation in seconds. |
| `delay`    | `number`  | `10`    | Delay in seconds before the animation starts.   |
| `radius`   | `number`  | `50`    | Radius of the orbit path in pixels.             |
| `path`     | `boolean` | `true`  | Displays a circle path for the orbit if `true`. |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="Orbit.vue" language="vue" componentName="Orbit" type="ui" id="orbit"}
::

## Features

- **Circular Orbit Animation**: The component animates its content in a smooth circular orbit around the center point.
- **Customizable Animation**: The orbit’s duration, delay, and radius are fully adjustable, providing flexibility in animation behavior.

- **Optional Orbit Path**: An optional visual representation of the orbit path can be toggled using the `path` prop.

- **Reversibility**: The orbit direction can be reversed by setting the `reverse` prop to `true`.

- **Responsive and Efficient**: The component handles different container sizes and uses Vue’s reactivity to ensure efficient animation.

## Credits

- Inspired by [Magic UI](https://magicui.design/docs/components/orbiting-circles).
