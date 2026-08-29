---
title: HTML 色差
description: 根据指针位置分离实时 HTML 的颜色通道。
category: HTML in Canvas
tags: [webgl, shader, canvas, chromatic, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlChromaticDemo.vue" config="HtmlChromaticConfig" componentId="html-chromatic" :componentFiles='["HtmlChromatic.vue"]'}

#api

## API

| 属性           | 类型      | 默认值  | 说明                                  |
| -------------- | --------- | ------- | ------------------------------------- |
| `strength`     | `number`  | `0.03`  | 红色与蓝色通道的最大分离距离。        |
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
