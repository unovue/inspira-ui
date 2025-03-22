---
title: Falling Stars Background
description: A stunning animated starfield background with glowing and sharp trail effects.
---

::ComponentLoader{label="Preview" componentName="FallingStarsBgDemo" type="examples" id="backgrounds"}
::

## Install using CLI

::InstallationCli{componentId="bg-falling-stars"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="FallingStarsBg.vue" language="vue" componentName="FallingStarsBg" type="ui" id="bg-falling-stars"}
::

## API

| Prop Name | Type     | Default  | Description                                 |
| --------- | -------- | -------- | ------------------------------------------- |
| `color`   | `string` | `"#FFF"` | Color of the stars in the starfield.        |
| `count`   | `number` | `200`    | Number of stars displayed in the animation. |

## Features

- **Dynamic Starfield**: Creates a 3D starfield effect with stars moving toward the viewer.
- **Glowing and Sharp Trail Effects**: Each star has a sharp line and a blurred, glowing trail.
- **Customizable**: Adjust the `color` of the stars and control the number of stars using the `count` prop.
- **Responsive Design**: Automatically adapts to the size of the canvas, ensuring a full-screen starfield effect.

## Credits

- Inspired by 3D starfield simulations and trail effects in modern canvas animations.
- Credit to [Prodromos Pantos](https://github.com/prpanto) for porting the original component to Vue & Nuxt.
