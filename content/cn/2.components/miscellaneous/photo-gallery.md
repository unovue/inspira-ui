---
title: 照片画廊
description: 用精美的画廊展示团队风采。
category: Miscellaneous
tags: [css, tailwind, gallery]
---

::ComponentViewer{demoFile="PhotoGalleryDemo.vue" config="PhotoGalleryConfig" componentId="photo-gallery" :componentFiles='["PhotoGallery.vue"]'}

#api

## API

| 属性名          | 类型                | 默认值 | 描述                                       |
| --------------- | ------------------- | ------ | ------------------------------------------ |
| `items`         | `"[{src: string}]"` | `[]`   | 传入要动画的图片项/图片源。                |
| `containerClass`| `string`            | `""`   | 容器的额外 Tailwind CSS 类。               |
| `class`         | `string`            | `""`   | 自定义样式的额外 Tailwind CSS 类。         |

#credits

- 所有图片来自 [Pexels](https://www.pexels.com/@soldiervip/)
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 提供该组件。

::
