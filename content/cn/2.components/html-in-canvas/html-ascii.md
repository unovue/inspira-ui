---
title: HTML ASCII
description: 使用匹配亮度的位图字符重建实时 HTML。
category: HTML in Canvas
tags: [webgl, shader, canvas, ascii, typography]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlAsciiDemo.vue" config="HtmlAsciiConfig" componentId="html-ascii" :componentFiles='["HtmlAscii.vue"]'}

按下效果表面可将字符输出切换为单色。

#api

## API

| 属性         | 类型      | 默认值  | 说明                                    |
| ------------ | --------- | ------- | --------------------------------------- |
| `cellSize`   | `number`  | `8`     | 字符单元像素尺寸，小于 `5` 时使用 `5`。 |
| `frameRate`  | `number`  | `60`    | 最大渲染帧率。                          |
| `pixelRatio` | `number`  | `1`     | 渲染比例，限制在 `0.25` 到 `2` 之间。   |
| `paused`     | `boolean` | `false` | 暂停渲染循环。                          |
| `autoPause`  | `boolean` | `true`  | 离开视口或页面隐藏时自动暂停。          |
| `class`      | `string`  | —       | 合并到效果表面的额外类名。              |

### 插槽

| 插槽      | 说明                       |
| --------- | -------------------------- |
| `default` | 通过效果渲染的 HTML 内容。 |

#credits

- 位图字符技术改编自 [movAX13h](https://www.shadertoy.com/user/movAX13h)。

::
