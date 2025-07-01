---
title: Logo Origami
description: Animated flipping logo with origami effect.
---

::ComponentLoader{label="Preview" componentName="LogoOrigamiDemo" type="examples"}
::

## 使用 CLI 安装

::InstallationCli{componentId="logo-origami"}
::

## 手动安装

将以下代码复制并粘贴到同一文件夹中

::code-group

:CodeViewerTab{label="LogoOrigami.vue" language="vue" componentName="LogoOrigami" type="ui" id="logo-origami"}
:CodeViewerTab{filename="LogoOrigamiItem.vue" language="vue" componentName="LogoOrigamiItem" type="ui" id="logo-origami"}
::

## API

| Prop Name  | 类型     | 默认值 | 说明                                       |
| ---------- | -------- | ------ | ------------------------------------------ |
| `class`    | `string` | `""`   | Additional CSS classes for custom styling. |
| `duration` | `number` | `1.5`  | Duration of the flip animation in seconds. |
| `delay`    | `number` | `2.5`  | Delay between flip animations in seconds.  |

## Features

- **Origami Flip Animation**: Animates flipping between multiple child components with an origami-style effect.

- **Customizable Timing**: Adjust the `duration` and `delay` props to control the animation speed and interval.

- **Slot-Based Content**: Accepts multiple child components or content via default slots.

- **Responsive Design**: Designed to adapt to various screen sizes and devices.

- **Easy Integration**: Simple to include in your Vue projects with minimal setup.

## 致谢

- Inspired by origami animations and flip effects at [hover.dev](www.hover.dev/components/other#logo-origami)
