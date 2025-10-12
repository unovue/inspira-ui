---
title: 灯光效果
description: A captivating lamp lighting effect with conic gradients, spotlights, and glowing lines for an immersive visual experience.
---

::ComponentLoader{label="预览" componentName="LampEffectDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="lamp-effect"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="LampEffect.vue" language="vue" componentName="LampEffect" type="ui" id="lamp-effect"}
::

## API

| Prop 名称  | 类型     | 默认值 | 描述                                           |
| ---------- | -------- | ------ | ---------------------------------------------- |
| `delay`    | `number` | `0.5`  | Delay before the animation starts, in seconds. |
| `duration` | `number` | `0.8`  | Duration of the animation, in seconds.         |
| `class`    | `string` | `""`   | Additional CSS classes for custom styling.     |

## 功能特性

- **Conic Gradient Animation**: Creates a smooth expanding conic gradient effect, giving a dynamic light-source appearance.
- **Spotlight Animation**: The spotlight smoothly expands, providing a focused lighting effect.
- **Glowing Line Effect**: A glowing line animates across the center, simulating a light beam or laser.
- **Customizable Timing**: The `delay` and `duration` props allow for precise control of animation timings.
- **Slot-Based Content**: Supports default slot content, making it easy to overlay text or other components.

## 感谢

- Ported from [Aceternity UI](https://ui.aceternity.com/components/lamp-effect)
