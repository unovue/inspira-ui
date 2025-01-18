---
title: Snowfall Background
description: A beautifully animated snowfall effect applied as a background.
---

::ComponentLoader{label="Preview" componentName="SnowfallBgDemo" type="examples" id="backgrounds"}
::

## API

| Prop Name   | Type     | Default | Description                                               |
| ----------- | -------- | ------- | --------------------------------------------------------- |
| `color`     | `string` | `#FFF`  | Color of the snowflakes in hexadecimal format.            |
| `quantity`  | `number` | `100`   | Number of snowflakes to display.                          |
| `speed`     | `number` | `1`     | Speed at which snowflakes fall.                           |
| `maxRadius` | `number` | `3`     | Maximum radius of snowflakes.                             |
| `minRadius` | `number` | `1`     | Minimum radius of snowflakes.                             |
| `class`     | `string` | `null`  | Additional CSS classes to apply to the container element. |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="SnowfallBg.vue" icon="vscode-icons:file-type-vue" language="vue" componentName="SnowfallBg" type="ui" id="snowfall-bg"}
::

## Credits

- Inspired by natural snowfall effects.
