---
title: Shimmer Button
description: A button with a shimmering animated effect.
---

::ComponentLoader{label="预览" componentName="ShimmerButtonDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="shimmer-button"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="ShimmerButton.vue" language="vue" componentName="ShimmerButton" type="ui" id="shimmer-button"}
::

## API

| Prop 名称         | 类型     | 默认值               | 描述                                                    |
| ----------------- | -------- | -------------------- | ------------------------------------------------------- |
| `class`           | `string` | `""`                 | Additional CSS classes to apply to the button.          |
| `shimmerColor`    | `string` | `"#ffffff"`          | Color of the shimmer effect.                            |
| `shimmerSize`     | `string` | `"0.05em"`           | Size of the shimmer effect.                             |
| `borderRadius`    | `string` | `"100px"`            | Border radius of the button.                            |
| `shimmerDuration` | `string` | `"3s"`               | Duration of the shimmer animation.                      |
| `background`      | `string` | `"rgba(0, 0, 0, 1)"` | Background color of the button. Can be rgb or hex code. |

## 功能特性

- **Shimmering Effect**: Displays a continuous shimmering animation on the button.
- **Customizable Appearance**: Adjust shimmer color, size, duration, border radius, and background color.
- **Slot Support**: Easily add any content inside the button using the default slot.
- **Interactive States**: Includes hover and active states for enhanced user interaction.
- **Responsive Design**: Adapts to different screen sizes and resolutions seamlessly.

## 感谢

- Ported from [Magic UI Shimmer Button](https://magicui.design/docs/components/shimmer-button).
