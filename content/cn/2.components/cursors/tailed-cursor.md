---
title: 尾迹光标
description: 使用 OGL 渲染的顺滑彩带尾迹光标，具备动态着色器和可定制的动画效果。
category: 光标
tags: [css, tailwind, cursor, webgl, codrops]
---

::ComponentViewer{demoFile="TailedCursorDemo.vue" config="TailedCursorConfig" componentId="tailed-cursor" :componentFiles='["TailedCursor.vue"]' dependencies="ogl"}

#api

## API

| 属性名                | 类型       | 默认值                                        | 描述                                           |
| --------------------- | ---------- | --------------------------------------------- | ---------------------------------------------- |
| `colors`              | `string[]` | `["#ff9346", "#7cff67", "#ffee51", "#00d8ff"]`| 每条尾带使用的颜色数组。                       |
| `baseSpring`          | `number`   | `0.03`                                        | 尾迹移动的弹性力度。                           |
| `baseFriction`        | `number`   | `0.9`                                         | 减缓尾迹移动的摩擦系数。                       |
| `baseThickness`       | `number`   | `30`                                          | 尾带的基础厚度。                               |
| `offsetFactor`        | `number`   | `0.05`                                        | 每条尾带之间的水平偏移系数。                   |
| `maxAge`              | `number`   | `500`                                         | 尾迹片段的最大存活时间，用于控制消失时机。     |
| `pointCount`          | `number`   | `50`                                          | 组成每条尾带的点数量。                         |
| `speedMultiplier`     | `number`   | `0.6`                                         | 控制动画速度的倍增值。                         |
| `enableFade`          | `boolean`  | `false`                                       | 是否启用尾缘的渐隐效果。                       |
| `enableShaderEffect`  | `boolean`  | `false`                                       | 是否启用尾带的动态着色器波纹效果。             |
| `effectAmplitude`     | `number`   | `2`                                           | 启用着色器波纹时的振幅。                       |
| `backgroundColor`     | `number[]` | `[0, 0, 0, 0]`                                | WebGL 画布的 RGBA 背景清除色。                 |

#credits

- 基于轻量级 WebGL 框架 [OGL](https://github.com/oframe/ogl) 构建。
- 灵感来自 [Codrops 文章](https://tympanus.net/codrops/2019/09/24/crafting-stylised-mouse-trails-with-ogl/)。

::
