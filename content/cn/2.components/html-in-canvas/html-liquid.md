---
title: HTML 液体
description: 通过响应指针移动的流动液面折射实时 HTML。
category: HTML in Canvas
tags: [webgl, shader, canvas, liquid, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlLiquidDemo.vue" config="HtmlLiquidConfig" componentId="html-liquid" :componentFiles='["HtmlLiquid.vue"]'}

#api

## API

| 属性           | 类型      | 默认值  | 说明                                  |
| -------------- | --------- | ------- | ------------------------------------- |
| `strength`     | `number`  | `0.03`  | 纹理位移强度。                        |
| `frequency`    | `number`  | `18`    | 流体表面与指针涟漪的密度。            |
| `speed`        | `number`  | `3`     | 液体场的运动速度。                    |
| `mouseDamping` | `number`  | `0.9`   | 应用于指针移动的平滑系数。            |
| `frameRate`    | `number`  | `60`    | 最大渲染帧率。                        |
| `pixelRatio`   | `number`  | `1`     | 渲染比例，限制在 `0.25` 到 `2` 之间。 |
| `paused`       | `boolean` | `false` | 暂停渲染循环。                        |
| `autoPause`    | `boolean` | `true`  | 离开视口或页面隐藏时自动暂停。        |
| `class`        | `string`  | —       | 合并到效果表面的额外类名。            |

### 插槽

| 插槽      | 说明                       |
| --------- | -------------------------- |
| `default` | 通过效果渲染的 HTML 内容。 |

::
