---
title: 黑洞背景
description: A mesmerizing, canvas-driven background effect that simulates a warped “black-hole” tunnel with animated discs, radial lines, and particles.
---

::ComponentLoader{label="预览" componentName="BlackHoleBackgroundDemo" type="examples" id="bg-black-hole"}
::

## API

| Prop 名称          | 类型                       | 默认值          | 描述                                                          |
| ------------------ | -------------------------- | --------------- | ------------------------------------------------------------- |
| `strokeColor`      | `string`                   | `"#737373"`     | Stroke colour for the concentric discs and radial lines.      |
| `numberOfLines`    | `number`                   | `50`            | Total radial lines emanating from the centre.                 |
| `numberOfDiscs`    | `number`                   | `50`            | Total concentric ellipses that form the tunnel.               |
| `particleRGBColor` | `[number, number, number]` | `[255,255,255]` | RGB colour used for the tiny particles flowing into the hole. |
| `class`            | `string`                   | `""`            | Extra utility classes merged onto the root wrapper.           |

## 通过 CLI 安装

::InstallationCli{componentId="bg-black-hole"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="BlackHoleBackground.vue" language="vue" componentName="BlackHoleBackground" type="ui" id="bg-black-hole"}
::

## 功能特性

- **Dynamic Canvas Rendering** – Draws concentric discs, radiating lines, and moving particles each frame.
- **Radial Gradient Layers** – Uses pseudo-elements and Motion-V to overlay colourful gradients that slowly drift.
- **Clip-Path Magic** – Calculates an inner ellipse and clips lines / particles for a convincing tunnel effect.
- **Performance-Aware** – Adjusts for device pixel ratio and throttles work to `requestAnimationFrame`.
- **Customisable** – Tweak strokes, counts, and particle colour via props to match any theme.
- **Dark-Mode Friendly** – Radial backgrounds automatically invert in dark theme.
- **Responsive** – Re-computes geometry and re-renders on window resize.

## 感谢

- Custom generative art logic inspired by tunnel / warp animations.
- Utilises **Motion-V** for gradient drift and Vue 3 Composition API for lifecycle control.
- Developed with accessibility in mind—background effect remains purely decorative via `aria-hidden` canvas.
