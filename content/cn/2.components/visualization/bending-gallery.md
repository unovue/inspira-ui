---
title: 弯曲画廊
description: 带曲面布局的可滚动 3D 画廊，使用 WebGL 与 OGL 渲染动态图片卡片和动画文字。
category: 可视化
tags: [css, tailwind, ogl, webgl]
---

::ComponentViewer{demoFile="BendingGalleryDemo.vue" config="BendingGalleryConfig" componentId="bending-gallery" :componentFiles='["BendingGallery.vue"]' dependencies="ogl"}

#api

## API

| 属性名         | 类型                                | 默认值                | 描述                                        |
| -------------- | ----------------------------------- | --------------------- | ------------------------------------------- |
| `items`        | `{ image: string; text: string }[]` | `[]`                  | 包含图片 URL 与文字的对象数组。             |
| `bend`         | `number`                            | `3`                   | 控制画廊弯曲程度，值越大弯曲越明显。        |
| `textColor`    | `string`                            | `"#ffffff"`           | 图片下方文本的颜色。                        |
| `borderRadius` | `number`                            | `0.05`                | 图片卡片的圆角（UV 空间中的值）。           |
| `font`         | `string`                            | `"bold 30px DM Sans"` | 文本使用的字体。                            |

#credits

- 灵感来自 [Codrops 的 Infinite Circular Gallery](https://tympanus.net/Tutorials/InfiniteCircularGallery/)。

::
