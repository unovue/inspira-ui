---
title: 动画网格
description: 倾斜动画网格，带投影效果。
category: Miscellaneous
tags: [css, tailwind, input]
---

::ComponentViewer{demoFile="AnimateGridDemo.vue" config="AnimateGridConfig" componentId="animate-grid" :componentFiles='["AnimateGrid.vue"]'}

#instructions

#### 添加 SVG 文件

在组件同目录至少添加一个 SVG 文件，并在组件中更新导入路径使用该文件。

#api

## API

| 属性名              | 类型     | 默认值             | 描述                                         |
| ------------------- | -------- | ------------------ | -------------------------------------------- |
| `textGlowStartColor`| `string` | `"#38ef7d80"`      | 盒子阴影的起始颜色。                         |
| `textGlowEndColor`  | `string` | `"#38ef7d"`        | 盒子阴影的结束颜色。                         |
| `perspective`       | `number` | `600`              | 传递给 CSS `transform` 的透视值。            |
| `rotateX`           | `number` | `-1`               | 传递给 CSS `transform` 的 rotateX 值。       |
| `rotateY`           | `number` | `-15`              | 传递给 CSS `transform` 的 rotateY 值。       |
| `cards`             | `[]`     | `"[{logo: 'src'}]"`| 要在网格中展示的卡片。                       |
| `class`             | `string` | `""`               | 自定义样式的额外 Tailwind CSS 类。           |

#credits

- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 提供该组件。

::
