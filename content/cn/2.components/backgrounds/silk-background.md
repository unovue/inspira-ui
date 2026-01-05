---
title: 丝绸背景
description: 柔和流动的着色器背景，灵感来自丝绸纹理与运动，基于 ShaderToy。
category: Background
tags: [css, tailwind, background, shader-toy, ogl, webgl]
---

::ComponentViewer{demoFile="SilkBackgroundDemo.vue" config="SilkBackgroundConfig" componentId="bg-silk" :componentFiles='["SilkBackground.vue"]'}

#api

## API

| 属性名       | 类型     | 默认值 | 描述                                                  |
| ------------ | -------- | ------ | ----------------------------------------------------- |
| `hue`        | `number` | `300`  | 丝绸纹理的基础色相（度数 0–360）。                    |
| `saturation` | `number` | `0.5`  | 颜色饱和度（0–1）。                                   |
| `brightness` | `number` | `1`    | 输出颜色的亮度倍数（建议 0–2）。                      |
| `speed`      | `number` | `1`    | 动画速度倍数（例如 `2` 表示两倍速度）。               |
| `class`      | `string` | `—`    | 可选，应用于容器 div 的额外 CSS 类（如 z-index 等）。 |

> 💡 组件默认使用全屏绝对定位容器，可通过 `class` 覆写定位与层级。

#credits

- 改编自 Giorgi Azmaipharashvili 在 [ShaderToy](https://www.shadertoy.com/view/X3yXRd) 的着色器（MIT License）。
- 灵感来自丝绸纹理与自然流动的运动模式。

::
