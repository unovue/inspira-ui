---
title: HTML 布料
description: 通过持续运动的布料向量场折叠实时 HTML。
category: HTML in Canvas
tags: [webgl, shader, canvas, cloth, animation]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlClothDemo.vue" config="HtmlClothConfig" componentId="html-cloth" :componentFiles='["HtmlCloth.vue"]'}

#api

## API

| 属性         | 类型      | 默认值  | 说明                                  |
| ------------ | --------- | ------- | ------------------------------------- |
| `strength`   | `number`  | `0.03`  | 向量场位移强度。                      |
| `scale`      | `number`  | `6`     | 布料场的缩放比例。                    |
| `speed`      | `number`  | `1`     | 向量场的动画速度。                    |
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

- 向量场基于 [MartinRGB](https://www.shadertoy.com/view/DttSRB) 的作品。

::
