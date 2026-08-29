---
title: HTML 拖拽
description: 使用滚动速度和按压拖动弯曲实时 HTML。
category: HTML in Canvas
tags: [webgl, shader, canvas, scroll, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlDragDemo.vue" config="HtmlDragConfig" componentId="html-drag" :componentFiles='["HtmlDrag.vue"]'}

在效果表面滚动即可弯曲分段 WebGL 平面。启用 `mouseEnabled` 可加入按压拖动变形；保持禁用则可选择 HTML 文本。

#api

## API

| 属性           | 类型      | 默认值  | 说明                                  |
| -------------- | --------- | ------- | ------------------------------------- |
| `strength`     | `number`  | `1.25`  | 垂直表面弯曲强度。                    |
| `mouseDamping` | `number`  | `0.9`   | 应用于指针移动的平滑系数。            |
| `mouseEnabled` | `boolean` | `false` | 启用按压拖动变形并关闭文本选择。      |
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
