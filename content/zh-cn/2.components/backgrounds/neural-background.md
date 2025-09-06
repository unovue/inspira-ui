---
title: Neural Background
description: 一个使用 OGL 和 GLSL 实现的动态神经元风格背景动画，基于 Shader 渲染。
navBadges:
  - value: 新
    type: lime
---

::ComponentLoader{label="预览" componentName="NeuralBgDemo" type="examples" id="bg-neural"}
::

## API 接口

| 属性名       | 类型     | 默认值 | 描述                                            |
| ------------ | -------- | ------ | ----------------------------------------------- |
| `hue`        | `number` | `200`  | 背景颜色的基础色相，单位为角度（0–360）。       |
| `saturation` | `number` | `0.8`  | 背景颜色的饱和度，范围为 0–1。                  |
| `chroma`     | `number` | `0.6`  | 背景颜色的明度（或色度），范围为 0–1。          |
| `class`      | `string` | `—`    | 可选的额外 CSS 类名，用于自定义 canvas 的样式。 |

> 💡 该组件默认是一个全屏固定的背景，并使用 `pointer-events-none`，可通过 `class` 属性自定义样式。

## 使用 CLI 安装

::InstallationCli{componentId="bg-neural"}
::

## 手动安装

::CodeViewer{filename="NeuralBg.vue" language="vue" componentName="NeuralBg" type="ui" id="bg-neural"}
::

## 功能特性

- **GPU 加速动画**：基于 [OGL](https://github.com/oframe/ogl) 实现高性能 WebGL 渲染。
- **神经网络风格视觉**：递归 shader 图形生成，模拟大脑神经网络般的流动视觉。
- **实时指针交互**：背景动态实时响应鼠标和触控移动。
- **滚动驱动变化**：颜色和亮度会随页面滚动轻微波动，增强沉浸感。
- **颜色调节支持**：支持通过 Props 实时调整色相、饱和度和明度。
- **响应式画布**：自动适配视口大小和设备像素比，适应各种屏幕。

## 说明

- 使用了自定义片元着色器（Fragment Shader）与递归正弦波算法来生成复杂的有机视觉效果。
- 性能已针对现代浏览器与 GPU 优化，旧设备和浏览器可能不支持或表现不佳。
- 适合用作装饰性背景（如全屏封面、英雄区域等），非内容交互用途。

## 致谢

- 构建基于轻量级 WebGL 框架 [OGL](https://github.com/oframe/ogl)。
- 图形逻辑基于递归三角函数叠加算法。
- 灵感与代码部分来自 [Cursify 的 Neural Glow Cursor](https://cursify.vercel.app/components/neural-glow)。
