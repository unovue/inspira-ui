---
title: 3D Text
description: A stylish 3D text component with customizable colors, shadows, and animation options.
---

::ComponentLoader{label="Preview" componentName="Text3dDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="text-3d"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="Text3d.vue" language="vue" componentName="Text3d" type="ui" id="text-3d"}
::

## API

| Prop Name           | Type      | Default    | Description                                        |
| ------------------- | --------- | ---------- | -------------------------------------------------- |
| `textColor`         | `string`  | `"white"`  | Color of the main text.                            |
| `letterSpacing`     | `number`  | `-0.1`     | Adjusts the spacing between letters in `ch` units. |
| `strokeColor`       | `string`  | `"black"`  | Color of the text stroke.                          |
| `shadowColor`       | `string`  | `"yellow"` | Color of the text shadow.                          |
| `strokeSize`        | `number`  | `20`       | Thickness of the text stroke in pixels.            |
| `shadow1Size`       | `number`  | `7`        | Size of the first shadow layer in pixels.          |
| `shadow2Size`       | `number`  | `10`       | Size of the second shadow layer in pixels.         |
| `class`             | `string`  | `""`       | Additional CSS classes for custom styling.         |
| `animate`           | `boolean` | `true`     | Enables wiggle animation when set to `true`.       |
| `animationDuration` | `number`  | `1500`     | Duration of the wiggle animation in milliseconds.  |

## Features

- **3D Text Effect**: Adds a three-dimensional stroke and shadow effect to text for a bold, layered look.
- **Customizable Colors & Sizes**: Easily adjust text color, stroke size, shadow colors, and letter spacing.
- **Wiggle Animation**: Includes an optional wiggle animation to make the text bounce for added emphasis.
- **Flexible Animation Control**: Customize the animation speed with the `animationDuration` prop.
