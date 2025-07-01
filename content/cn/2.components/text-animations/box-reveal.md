---
title: Box Reveal
description: An animated box reveal effect with customizable colors, duration, and delay.
---

::ComponentLoader{label="Preview" componentName="BoxRevealDemo" type="examples"}
::

## 使用 CLI 安装

::InstallationCli{componentId="box-reveal"}
::

## 手动安装

复制并粘贴以下代码

::CodeViewer{filename="BoxReveal.vue" language="vue" componentName="BoxReveal" type="ui" id="box-reveal"}
::

## API

| Prop Name  | 类型     | 默认值      | 说明                                                 |
| ---------- | -------- | ----------- | ---------------------------------------------------- |
| `color`    | `string` | `"#5046e6"` | Background color of the reveal box.                  |
| `duration` | `number` | `0.5`       | Duration of the reveal animation in seconds.         |
| `delay`    | `number` | `0.25`      | Delay before the reveal animation starts in seconds. |
| `class`    | `string` | `""`        | Additional CSS classes for custom styling.           |

## Features

- **Box Reveal Animation**: Creates a sliding box reveal effect with smooth transitions.
- **Customizable Animation**: Control the animation timing with the `duration` and `delay` props.
- **Slot-Based Content**: Supports default slot content that appears once the reveal animation completes.
- **Custom Background Color**: Easily customize the box's background color using the `color` prop.

## 致谢

- Ported from [Magic UI Box Reveal](https://magicui.design/docs/components/box-reveal).
