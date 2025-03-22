---
title: Orbit
description: A component that animates content in a circular orbit, with customizable duration, delay, and radius. It also offers an optional orbit path display.
---

::ComponentLoader{label="Preview" componentName="OrbitDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="orbit"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="Orbit.vue" language="vue" componentName="Orbit" type="ui" id="orbit"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="orbit" extension="ts"}

::

## Examples

Synchronized orbit

::ComponentLoader{label="Preview" componentName="OrbitDemoSynchronized" type="examples"}  
::

## API

| Prop Name   | Type                  | Default  | Description                                                           |
| ----------- | --------------------- | -------- | --------------------------------------------------------------------- |
| `direction` | `normal` \| `reverse` | `normal` | The direction of the orbit. You can use the constant ORBIT_DIRECTION. |
| `duration`  | `?number`             | `20`     | The duration of the orbit animation in seconds.                       |
| `delay`     | `?number`             | `10`     | Delay in seconds before the animation starts.                         |
| `radius`    | `?number`             | `50`     | Radius of the orbit path in pixels.                                   |
| `path`      | `?boolean`            | `false`  | Displays a circle path for the orbit if `true`.                       |

## Features

- **Circular Orbit Animation**: The component animates its content in a smooth circular orbit around the center point.
- **Customizable Animation**: The orbit’s duration, delay, and radius are fully adjustable, providing flexibility in animation behavior.

- **Optional Orbit Path**: An optional visual representation of the orbit path can be toggled using the `path` prop.

- **Reversibility**: The orbit direction can be `reverse` by setting the `direction` prop.

- **Responsive and Efficient**: The component handles different container sizes and uses Vue’s reactivity to ensure efficient animation.

## Credits

- Inspired by [Magic UI](https://magicui.design/docs/components/orbiting-circles).
- Credits to [Nathan De Pachtere](https://nathandepachtere.com/) for updating this component.
