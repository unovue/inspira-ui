---
title: 3D 文字
description: 时尚的 3D 文字组件，可自定义颜色、阴影与动画选项。
category: Text Animation
tags: [css, tailwind, 3d]
---

::ComponentViewer{demoFile="Text3dDemo.vue" config="Text3dConfig" componentId="text-3d" :componentFiles='["Text3d.vue"]'}

#api

## API

| 属性名            | 类型      | 默认值    | 描述                              |
| ----------------- | --------- | --------- | --------------------------------- |
| `textColor`       | `string`  | `"white"` | 主文字颜色。                      |
| `letterSpacing`   | `number`  | `-0.1`    | 字符间距，单位为 `ch`。           |
| `strokeColor`     | `string`  | `"black"` | 描边颜色。                        |
| `shadowColor`     | `string`  | `"yellow"`| 阴影颜色。                        |
| `strokeSize`      | `number`  | `20`      | 描边厚度（像素）。                |
| `shadow1Size`     | `number`  | `7`       | 第一层阴影尺寸（像素）。          |
| `shadow2Size`     | `number`  | `10`      | 第二层阴影尺寸（像素）。          |
| `class`           | `string`  | `""`      | 用于自定义样式的额外 CSS 类。     |
| `animate`         | `boolean` | `true`    | 为 `true` 时启用晃动动画。        |
| `animationDuration`| `number` | `1500`    | 晃动动画时长（毫秒）。            |

::
