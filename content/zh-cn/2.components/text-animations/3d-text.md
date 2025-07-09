---
title: 3D文字
description: A stylish 3D text component with customizable colors, shadows, and animation options.
---

::ComponentLoader{label="预览" componentName="Text3dDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="text-3d"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="Text3d.vue" language="vue" componentName="Text3d" type="ui" id="text-3d"}
::

## API

| Prop 名称           | 类型      | 默认值     | 描述                                               |
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

## 功能特性

- **3D Text Effect**: Adds a three-dimensional stroke and shadow effect to text for a bold, layered look.
- **Customizable Colors & Sizes**: Easily adjust text color, stroke size, shadow colors, and letter spacing.
- **Wiggle Animation**: Includes an optional wiggle animation to make the text bounce for added emphasis.
- **Flexible Animation Control**: Customize the animation speed with the `animationDuration` prop.
