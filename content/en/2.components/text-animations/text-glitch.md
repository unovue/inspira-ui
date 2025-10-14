---
title: Text Glitch
description: Creates a vibrant glitch effect on text with customizable speed, shadow colors, and optional hover-triggered animation.
---

::ComponentLoader{label="Preview" componentName="TextGlitchDemo" type="examples" id="text-glitch"}
::

## API

| Prop Name       | Type      | Default     | Description                                                   |
| --------------- | --------- | ----------- | ------------------------------------------------------------- |
| `text`          | `string`  | `""`        | The text content to display with the glitch effect.           |
| `speed`         | `number`  | `0.5`       | Controls the animation speed of the glitch effect in seconds. |
| `enableShadows` | `boolean` | `true`      | Toggles colored shadows that enhance the glitch look.         |
| `enableOnHover` | `boolean` | `false`     | If true, glitch animation activates only on hover.            |
| `class`         | `string`  | `undefined` | Additional CSS classes for the container div.                 |

## Install using CLI

::InstallationCli{componentId="text-glitch"}
::

## Install Manually

Copy and paste the following code:

::CodeViewer{filename="TextGlitch.vue" language="vue" componentName="TextGlitch" type="ui" id="text-glitch"}
::

## Features

- **Stylish glitch animation**: Text appears with vibrant RGB channel shifts and clipping.
- **Configurable speed**: Easily adjust animation timing via `speed` prop.
- **Shadow control**: Enable or disable colored shadows for stronger glitch effect.
- **Hover-triggered option**: Activate glitch only on mouse hover to reduce distraction.
- **Responsive sizing**: Font size scales smoothly across screen sizes using clamp().

## Credits

- Inspired and developed using resources from following YouTube videos.
  - https://www.youtube.com/watch?v=7Xyg8Ja7dyY
  - https://www.youtube.com/watch?v=9CCkp_El1So
