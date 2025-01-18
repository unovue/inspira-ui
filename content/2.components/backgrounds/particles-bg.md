---
title: Particles Background
description: Particles can add a dynamic and engaging element to your website's visuals. They help create a feeling of depth, motion, and interaction, making the site more visually appealing.
---

::ComponentLoader{label="Preview" componentName="ParticlesBgDemo" type="examples"}
::

## API

| Prop Name   | Type     | Default | Description                                                                                                 |
| ----------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `color`     | `string` | `#FFF`  | Hexadecimal color code used for particles. Supports 3 or 6 character hex codes.                             |
| `quantity`  | `number` | `100`   | The number of particles to generate and display on the canvas.                                              |
| `staticity` | `number` | `50`    | Determines how much the particles move based on the mouse's proximity. Higher values reduce movement.       |
| `ease`      | `number` | `50`    | Controls the easing effect of particle movement; lower values make particles follow the mouse more closely. |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="ParticlesBg.vue" language="vue" componentName="ParticlesBg" type="ui" id="particles-bg"}
::

## Credits

- Credits to [Magic UI](https://magicui.design/docs/components/particles) for this fantastic component.
- Credit to [Prodromos Pantos](https://github.com/prpanto) for porting the original component to Vue & Nuxt.
