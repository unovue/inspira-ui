---
title: 雷暴背景
description: 受云层雷暴启发的基于着色器的背景。
category: 背景
tags: [css, tailwind, background, shader-toy, webgl, ogl]
badge: New
---

::ComponentViewer{demoFile="ThunderstormBackgroundDemo.vue" config="ThunderstormBackgroundConfig" componentId="bg-thunderstorm" :componentFiles='["ThunderstormBackground.vue"]'}

#api

## API

| 属性名             | 类型     | 默认值 | 描述                                        |
| ------------------ | -------- | ------ | ------------------------------------------- |
| `hue`              | `number` | `0`    | 分形纹理的基础色相（0–360 度）。            |
| `saturation`       | `number` | `1`    | 颜色的饱和度（0–1）。                       |
| `brightness`       | `number` | `1`    | 输出颜色的亮度倍增（推荐 0–2）。            |
| `speed`            | `number` | `1`    | 动画的速度倍增。                            |
| `mouseSensitivity` | `number` | `0.5`  | 控制对鼠标移动的响应程度（0–5）。           |
| `damping`          | `number` | `1`    | 阻尼系数，用于平滑纹理的扭曲（0–1）。       |
| `class`            | `string` | `-`    | 容器 div 的额外 CSS 类（例如 z-index 等）。 |

> 💡 该组件适用于全屏或大段落的背景。针对现代 GPU 优化，但在低端设备上可能较耗资源。

#credits

- 改编自 [这个 ShaderToy 着色器](https://www.shadertoy.com/view/W3d3z7)。

::
