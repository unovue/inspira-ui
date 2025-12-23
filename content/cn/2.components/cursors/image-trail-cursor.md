---
title: 图像尾迹光标
description: 一种交互式光标效果，鼠标移动时呈现动态的图像尾迹，并提供多种动画变体。
category: 光标
tags: [css, tailwind, cursor, codrops, gsap]
badge: New
---

::ComponentViewer{demoFile="ImageTrailCursorDemo.vue" config="ImageTrailCursorConfig" componentId="image-trail-cursor" :componentFiles='["ImageTrailCursor.vue", "trail-variants.ts"]' dependencies="gsap"}

#api

## API

| 属性名   | 类型          | 默认值   | 描述                                                |
| -------- | ------------- | -------- | --------------------------------------------------- |
| `images` | `string[]`    | `[]`     | 用于尾迹显示的图片 URL 数组。                       |
| `variant`| `VariantType` | `"type1"`| 动画变体类型（`"type1"` 至 `"type7"`）。            |

> 💡 该组件会创建全宽全高且 z-index 较高的容器以追踪光标。每张图像宽 190px，纵横比 1.1，带圆角。

#credits

- 灵感来自现代光标尾迹与图片悬停交互效果。
- 基于 Vue 3 组合式 API 构建，确保高响应性与性能。
- 移植自 [Codrops 文章](https://tympanus.net/codrops/2023/10/18/ideas-for-image-motion-trail-animations/)。

::
