---
title: Sleek Line Cursor
description: 使用弹簧物理和动态色彩波动，实现顺滑波浪动画效果的响应式光标拖尾组件。
navBadges:
  - value: 新
    type: lime
---

::ComponentLoader{label="预览" componentName="SleekLineCursorDemo" type="examples" id="sleek-line-cursor"}
::

## API

| 属性名      | 类型                 | 默认值      | 描述                                                 |
| ----------- | -------------------- | ----------- | ---------------------------------------------------- |
| `class`     | `string \| string[]` | `undefined` | 用于设置 canvas 容器的额外 CSS 类名。                |
| `trails`    | `number`             | `20`        | 拖尾线的数量，每条线都跟随光标移动。                 |
| `size`      | `number`             | `50`        | 每条拖尾线中由弹簧连接的节点数量。                   |
| `friction`  | `number`             | `0.5`       | 全局摩擦力，影响速度衰减。                           |
| `dampening` | `number`             | `0.25`      | 邻近节点之间的速度阻尼因子。                         |
| `tension`   | `number`             | `0.98`      | 控制拖尾末端的弹性衰减，使拖尾逐渐变细，模拟流体感。 |

> 💡 此组件默认使用 `pointer-events-none` 并全屏固定显示。你可以通过 `class` 属性扩展或覆盖其样式。

## 使用 CLI 安装

::InstallationCli{componentId="sleek-line-cursor"}
::

## 手动安装

::CodeViewer{filename="SleekLineCursor.vue" language="vue" componentName="SleekLineCursor" type="ui" id="sleek-line-cursor"}
::

## 功能特性

- **基于弹簧的动画**：拖尾线条使用弹簧物理与速度传播算法紧随光标。
- **颜色波动动态**：基于正弦波的色相变化，实现平滑的颜色过渡效果。
- **触控支持**：支持鼠标与触控操作，响应流畅。
- **轻量高效**：基于原生 `<canvas>` 实现，无需外部依赖。
- **自动响应式画布**：窗口或设备方向变动时自动调整大小。
- **自定义样式**：可通过 Tailwind 或自定义 CSS 轻松扩展样式。

## 致谢

- 基于 [Cursify 的 Canvas Cursor](https://cursify.vercel.app/components/canvas-cursor) 项目移植而来。
