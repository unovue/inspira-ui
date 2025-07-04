---
title: Gradient Button
description: A stylish animated button with a rotating conic gradient border and customizable properties for a vibrant look.
---

::ComponentLoader{label="预览" componentName="GradientButtonDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="gradient-button"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="GradientButton.vue" language="vue" componentName="GradientButton" type="ui" id="gradient-button"}
::

## API

| Prop 名称      | 类型       | 默认值               | 描述                                                         |
| -------------- | ---------- | -------------------- | ------------------------------------------------------------ |
| `borderWidth`  | `number`   | `2`                  | Width of the gradient border in pixels.                      |
| `colors`       | `string[]` | Rainbow Colors Array | Array of colors used in the conic gradient border.           |
| `duration`     | `number`   | `2500`               | Duration of the gradient rotation animation in milliseconds. |
| `borderRadius` | `number`   | `8`                  | Border radius for rounded corners in pixels.                 |
| `blur`         | `number`   | `4`                  | Blur intensity of the gradient border effect in pixels.      |
| `class`        | `string`   | `""`                 | Additional CSS classes for custom styling.                   |
| `bgColor`      | `string`   | `"#000"`             | Background color of the button content.                      |

## 功能特性

- **Rotating Conic Gradient Border**: A dynamic, rotating conic gradient border creates a visually engaging effect.
- **Customizable Color Palette**: Customize the gradient colors by providing an array of color values.
- **Flexible Styling Options**: Adjust border width, border radius, and blur effect for a tailored look.
- **Slot-Based Content**: Supports a default slot to easily add button content or icons.
- **Smooth Animation Control**: Control the speed of the rotation using the `duration` prop.
