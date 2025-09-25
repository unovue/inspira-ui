---
title: 流体光标
description: 一个模拟流体运动的GPU加速动画光标轨迹。
---

::ComponentLoader{label="Preview" componentName="FluidCursorDemo" type="examples" id="fluid-cursor"}
::

## API 接口

| 属性名                 | 类型      | 默认值                    | 描述                                                                               |
| --------------------- | --------- | ------------------------ | ---------------------------------------------------------------------------------- |
| `simResolution`       | `number`  | `128`                    | 模拟网格的分辨率，影响流体细节和性能。                                                   |
| `dyeResolution`       | `number`  | `1440`                   | 流体染料（颜色）纹理的分辨率。                                                          |
| `captureResolution`   | `number`  | `512`                    | 捕获输入事件的分辨率。                                                                 |
| `densityDissipation`  | `number`  | `3.5`                    | 颜色密度随时间消散的速率。                                                             |
| `velocityDissipation` | `number`  | `2`                      | 速度随时间衰减的速率，影响流体动量保持性。                                                |
| `pressure`            | `number`  | `0.1`                    | 流体物理计算中使用的压力系数。                                                          |
| `pressureIterations`  | `number`  | `20`                     | 压力求解器精度的迭代次数。                                                              |
| `curl`                | `number`  | `3`                      | 增强涡旋运动的涡量/旋度效应强度。                                                        |
| `splatRadius`         | `number`  | `0.2`                    | 指针在流体中的溅射效果半径。                                                            |
| `splatForce`          | `number`  | `6000`                   | 指针在交互时对流体施加的力。                                                            |
| `shading`             | `boolean` | `true`                   | 启用或禁用流体颜色上深度和光照的阴影效果。                                                 |
| `colorUpdateSpeed`    | `number`  | `10`                     | 指针颜色动态更新的速度。                                                                |
| `backColor`           | `object`  | `{ r: 0.5, g: 0, b: 0 }` | 流体的背景颜色，以RGB格式表示。                                                          |
| `transparent`         | `boolean` | `true`                   | 画布背景是否透明。                                                                     |
| `class`               | `string`  | `undefined`              | 外部容器div的额外CSS类。                                                               |

## 使用CLI安装

::InstallationCli{componentId="fluid-cursor"}
::

## 手动安装

Copy and paste the following code:

::CodeViewer{filename="FluidCursor.vue" language="vue" componentName="FluidCursor" type="ui" id="fluid-cursor"}
::

## 特性

- **基于GPU的流体模拟**：使用WebGL着色器实现平滑且性能优异的流体动力学。
- **指针交互**：流体能够动态响应鼠标和触摸输入，产生五彩斑斓的溅射效果。
- **自定义物理**：可调节模拟分辨率、压力、卷曲和耗散参数。
- **阴影效果**：可选的照明/阴影，以增强3D流体外观。
- **响应式画布**：自动调整大小并适应设备像素比，以获得清晰的视觉效果。
- **背景控制**：支持透明或纯色背景。

## 致谢

- 灵感来自 [Fluid Cursor by Cursify](https://cursify.vercel.app/components/fluid-cursor)
- 利用 WebGL 1/2 上下文和自定义 GLSL 着色器进行流体物理和渲染。
