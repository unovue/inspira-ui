---
title: 流体光标
description: GPU 加速的动画光标尾迹，模拟流体运动。
category: Cursor
tags: [css, tailwind, cursor, webgl, cursify]
---

::ComponentViewer{demoFile="FluidCursorDemo.vue" config="FluidCursorConfig" componentId="fluid-cursor" :componentFiles='["FluidCursor.vue"]'}

#api

## API

| 属性名                | 类型      | 默认值                  | 描述                                                   |
| --------------------- | --------- | ----------------------- | ------------------------------------------------------ |
| `simResolution`       | `number`  | `128`                   | 模拟网格的分辨率，影响流体细节与性能。                 |
| `dyeResolution`       | `number`  | `1440`                  | 流体染色（颜色）纹理的分辨率。                        |
| `captureResolution`   | `number`  | `512`                   | 捕获输入事件的分辨率。                                 |
| `densityDissipation`  | `number`  | `3.5`                   | 颜色密度随时间消散的速度。                             |
| `velocityDissipation` | `number`  | `2`                     | 速度随时间衰减的程度，影响动量保持。                   |
| `pressure`            | `number`  | `0.1`                   | 流体物理计算中的压力系数。                             |
| `pressureIterations`  | `number`  | `20`                    | 压力求解的迭代次数。                                   |
| `curl`                | `number`  | `3`                     | 漩涡/旋度效果的强度，用于增强旋转运动。                |
| `splatRadius`         | `number`  | `0.2`                   | 指针在流体中的溅射半径。                               |
| `splatForce`          | `number`  | `6000`                  | 指针作用于流体的力。                                   |
| `shading`             | `boolean` | `true`                  | 是否启用流体颜色的明暗效果。                           |
| `colorUpdateSpeed`    | `number`  | `10`                    | 指针颜色动态更新的速度。                               |
| `backColor`           | `object`  | `{ r: 0.5, g: 0, b: 0 }`| 流体背景色，RGB 格式。                                 |
| `transparent`         | `boolean` | `true`                  | 画布背景是否透明。                                     |
| `class`               | `string`  | `undefined`             | 外层容器 div 的额外 CSS 类。                           |

#credits

- 灵感来自 [Fluid Cursor by Cursify](https://cursify.vercel.app/components/fluid-cursor)。
- 使用 WebGL 1/2 上下文与自定义 GLSL 着色器实现流体物理与渲染。

::
