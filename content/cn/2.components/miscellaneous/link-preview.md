---
title: 链接预览
description: 为锚点生成动态链接预览。
category: 杂项
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="LinkPreviewDemo.vue" config="LinkPreviewConfig" componentId="link-preview" :componentFiles='["LinkPreview.vue"]' dependencies="qss"}

#api

## API

| 属性名     | 类型      | 默认值 | 描述                                                              |
| ---------- | --------- | ------ | ----------------------------------------------------------------- |
| `class`    | `string`  | `""`   | 应用于主元素的自定义类。                                         |
| `linkClass`| `string`  | `""`   | 应用于链接元素的自定义类。                                       |
| `width`    | `number`  | `200`  | 预览图的宽度。                                                   |
| `height`   | `number`  | `125`  | 预览图的高度。                                                   |
| `isStatic` | `boolean` | `false`| 预览图是否为静态图；设为 `true` 使用静态模式。                   |
| `imageSrc` | `string`  | `""`   | 静态模式下要显示的图片来源（`isStatic` 为 `true` 时必填）。     |
| `url`      | `string`  | `""`   | 链接的 URL，同时用于生成预览（`isStatic` 为 `false` 时必填）。  |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI's Link Preview](https://ui.aceternity.com/components/link-preview)。

::
