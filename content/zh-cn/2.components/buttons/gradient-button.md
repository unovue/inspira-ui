---
title: Gradient Button
description: A stylish animated button with a rotating conic gradient border and customizable properties for a vibrant look.
---

::ComponentLoader{label="Preview" componentName="GradientButtonDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="gradient-button"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="GradientButton.vue" language="vue" componentName="GradientButton" type="ui" id="gradient-button"}
::

## API

| Prop Name      | Type       | Default              | Description                                                  |
| -------------- | ---------- | -------------------- | ------------------------------------------------------------ |
| `borderWidth`  | `number`   | `2`                  | Width of the gradient border in pixels.                      |
| `colors`       | `string[]` | Rainbow Colors Array | Array of colors used in the conic gradient border.           |
| `duration`     | `number`   | `2500`               | Duration of the gradient rotation animation in milliseconds. |
| `borderRadius` | `number`   | `8`                  | Border radius for rounded corners in pixels.                 |
| `blur`         | `number`   | `4`                  | Blur intensity of the gradient border effect in pixels.      |
| `class`        | `string`   | `""`                 | Additional CSS classes for custom styling.                   |
| `bgColor`      | `string`   | `"#000"`             | Background color of the button content.                      |

## Features

- **Rotating Conic Gradient Border**: A dynamic, rotating conic gradient border creates a visually engaging effect.
- **Customizable Color Palette**: Customize the gradient colors by providing an array of color values.
- **Flexible Styling Options**: Adjust border width, border radius, and blur effect for a tailored look.
- **Slot-Based Content**: Supports a default slot to easily add button content or icons.
- **Smooth Animation Control**: Control the speed of the rotation using the `duration` prop.
