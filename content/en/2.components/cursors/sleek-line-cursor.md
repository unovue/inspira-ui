---
title: Sleek Line Cursor
description: A reactive animated cursor trail with smooth wave-like motion, using spring physics and dynamic color waves.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="SleekLineCursorDemo" type="examples" id="sleek-line-cursor"}
::

## API

| Prop Name   | Type                 | Default     | Description                                                               |
| ----------- | -------------------- | ----------- | ------------------------------------------------------------------------- |
| `class`     | `string \| string[]` | `undefined` | Additional CSS classes for the canvas container element.                  |
| `trails`    | `number`             | `20`        | Number of trailing lines rendered behind the cursor.                      |
| `size`      | `number`             | `50`        | Number of spring-connected nodes per trail.                               |
| `friction`  | `number`             | `0.5`       | Global friction applied to velocity.                                      |
| `dampening` | `number`             | `0.25`      | Velocity damping applied between connected nodes.                         |
| `tension`   | `number`             | `0.98`      | Reduces spring intensity across the tail, giving a fluid tapering motion. |

> 💡 This component uses `pointer-events-none` and is fixed fullscreen by default. You can extend or override its styling via the `class` prop.

## Install using CLI

::InstallationCli{componentId="sleek-line-cursor"}
::

## Install Manually

::CodeViewer{filename="SleekLineCursor.vue" language="vue" componentName="SleekLineCursor" type="ui" id="sleek-line-cursor"}
::

## Features

- **Spring-based animation**: Trails follow the cursor using simulated spring physics and velocity propagation.
- **Color wave dynamics**: Dynamic hue changes via sinusoidal wave functions, generating smooth color transitions.
- **Touch support**: Works seamlessly with both mouse and touch inputs.
- **Lightweight and performant**: Uses the native `<canvas>` API with no external dependencies.
- **Auto-resizing canvas**: Resizes dynamically with window or orientation changes.
- **Custom styling**: Easily styled using Tailwind or your own classes.

## Credits

- Ported from [Canvas Cursor by Cursify](https://cursify.vercel.app/components/canvas-cursor).
