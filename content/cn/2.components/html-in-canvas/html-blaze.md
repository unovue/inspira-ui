---
title: HTML 火焰
description: 使用上升热流、烟雾、火花和火光扭曲实时 HTML。
category: HTML in Canvas
tags: [webgl, shader, canvas, fire, animation]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlBlazeDemo.vue" config="HtmlBlazeConfig" componentId="html-blaze" :componentFiles='["HtmlBlaze.vue"]'}

#api

## API

| 属性         | 类型      | 默认值  | 说明                                  |
| ------------ | --------- | ------- | ------------------------------------- |
| `strength`   | `number`  | `0.03`  | 热流位移强度。                        |
| `scale`      | `number`  | `6`     | 火焰噪声场的缩放比例。                |
| `speed`      | `number`  | `1`     | 火焰动画速度。                        |
| `frameRate`  | `number`  | `60`    | 最大渲染帧率。                        |
| `pixelRatio` | `number`  | `1`     | 渲染比例，限制在 `0.25` 到 `2` 之间。 |
| `paused`     | `boolean` | `false` | 暂停渲染循环。                        |
| `autoPause`  | `boolean` | `true`  | 离开视口或页面隐藏时自动暂停。        |
| `class`      | `string`  | —       | 合并到效果表面的额外类名。            |

### 插槽

| 插槽      | 说明                       |
| --------- | -------------------------- |
| `default` | 通过效果渲染的 HTML 内容。 |

#credits

- 使用 [Ashima Arts](https://github.com/ashima/webgl-noise) 的 MIT 许可 Simplex Noise 实现。

::
