---
title: 图片徽章
description: 一个带有图片的徽章，悬停时可展示更多图片。
category: Special Effects
tags: [css, tailwind, aceternity-ui]
badge: New
---

::ComponentViewer{demoFile="ImagesBadgeDemo.vue" config="ImagesBadgeConfig" componentId="images-badge" :componentFiles='["ImagesBadge.vue"]'}

#api

## API

| 属性名            | 类型                                | 默认值                      | 描述                                                                      |
| ----------------- | ----------------------------------- | --------------------------- | ------------------------------------------------------------------------- |
| `text`            | `string`                            | —                           | 显示在文件夹徽章旁边的文字标签。                                          |
| `images`          | `string[]`                          | —                           | 要显示的图片 URL 数组（最多显示 3 张）。                                  |
| `class`           | `string`                            | —                           | 根元素的附加 CSS 类。                                                     |
| `href`            | `string`                            | —                           | 可选链接 URL；提供时渲染为 `<a>` 标签而非 `<div>`。                       |
| `target`          | `string`                            | —                           | 链接的 target 属性（例如 `_blank` 表示在新标签页中打开）。                |
| `folderSize`      | `{ width: number; height: number }` | `{ width: 32, height: 24 }` | 文件夹图标尺寸（像素）。                                                  |
| `teaserImageSize` | `{ width: number; height: number }` | `{ width: 20, height: 14 }` | 预览状态（空闲状态）下的图片尺寸（像素）。                                |
| `hoverImageSize`  | `{ width: number; height: number }` | `{ width: 48, height: 32 }` | 悬停时的图片尺寸（像素）。                                                |
| `hoverTranslateY` | `number`                            | `-35`                       | 悬停时图片向上移动的距离（像素）。                                        |
| `hoverSpread`     | `number`                            | `20`                        | 悬停时图片之间的水平间距（像素）。                                        |
| `hoverRotation`   | `number`                            | `15`                        | 悬停时图片的扇形旋转角度（度）。                                          |

#credits

- 移植自 [Aceternity UI Images Badge](https://ui.aceternity.com/components/images-badge)

::
