---
title: Snowfall Background
description: A beautifully animated snowfall effect applied as a background.
---

::ComponentLoader{label="Preview" componentName="SnowfallBgDemo" type="examples" id="backgrounds"}
::

## Install using CLI

::InstallationCli{componentId="snowfall-bg"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="SnowfallBg.vue" language="vue" componentName="SnowfallBg" type="ui" id="snowfall-bg"}
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

## Credits

- Inspired by natural snowfall effects.
