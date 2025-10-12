---
title: Tracing Beam
description: A component that renders a tracing beam effect with dynamic scrolling animations and gradient strokes.
---

::ComponentLoader{label="预览" componentName="TracingBeamDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="tracing-beam"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="TracingBeam.vue" language="vue" componentName="TracingBeam" type="ui" id="tracing-beam"}
::

## API

| Prop 名称 | 类型     | 默认值 | 描述                                       |
| --------- | -------- | ------ | ------------------------------------------ |
| `class`   | `string` | `""`   | Additional CSS classes for custom styling. |

## 功能特性

- **Dynamic Tracing Beam**: Renders a gradient tracing beam that follows the scroll position, adding a modern visual effect.
- **Scroll-Based Animation**: As the user scrolls, the beam animates along a path with varying gradients, responding to scroll depth.
- **Gradient Transition**: Smoothly transitions colors along the beam from cyan to purple with fading edges for a subtle effect.
- **Slot-Based Content**: Supports a default slot to add content inside the tracing beam container.

## 感谢

- Ported from [Aceternity UI](https://ui.aceternity.com/components/tracing-beam);
