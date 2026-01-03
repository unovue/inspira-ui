---
title: Stractium 背景
description: 基于着色器的背景，灵感来自复杂分形与有机纹理，使用光线步进与 GLSL 创建不断演化的视觉效果。
category: 背景
tags: [css, tailwind, background, shader-toy, webgl, ogl]
---

::ComponentViewer{demoFile="StractiumBackgroundDemo.vue" config="StractiumBackgroundConfig" componentId="bg-stractium" :componentFiles='["StractiumBackground.vue"]'}

#api

## API

| 属性名             | 类型     | 默认值 | 描述                                                  |
| ------------------ | -------- | ------ | ----------------------------------------------------- |
| `hue`              | `number` | `0`    | 分形纹理的基础色相（0–360°）。                        |
| `saturation`       | `number` | `1`    | 颜色饱和度（0–1）。                                   |
| `brightness`       | `number` | `1`    | 输出颜色的亮度倍数（建议 0–2）。                      |
| `speed`            | `number` | `1`    | 纹理动画的速度倍数。                                  |
| `mouseSensitivity` | `number` | `0.5`  | 控制纹理对鼠标移动的响应度（0–1）。                   |
| `damping`          | `number` | `1`    | 控制纹理变形平滑度的阻尼系数（0–1）。                 |
| `class`            | `string` | `—`    | 可选，应用于容器 div 的额外 CSS 类（如 z-index 等）。 |

> 💡 该组件适合用于全屏或大区块背景，对现代 GPU 做了优化，但在低端设备上可能较吃性能。

#credits

- 基于原作者的 ShaderToy 片段着色器（MIT License）。
- 封装为 Vue 组件并适配动态输入。
- 灵感来自分形纹理、自然纹理与高级光线步进技术。

::
