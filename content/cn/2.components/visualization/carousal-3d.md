---
title: 3D 轮播
description: 使用 Three.js 与 Motion-V 的动态交互 3D 轮播组件，支持平滑无限旋转与用户控制。
category: 可视化
tags: [css, tailwind, threejs, motion-v]
---

::ComponentViewer{demoFile="Carousel3dDemo.vue" config="Carousel3dConfig" componentId="carousel-3d" :componentFiles='["Carousel3D.vue"]'}

#api

## API

| 属性名           | 类型        | 默认值 | 描述                                   |
| ---------------- | ----------- | ------ | -------------------------------------- |
| `items`          | `unknown[]` | `[]`   | 轮播中展示的图片或元素列表。           |
| `class`          | `string`    | `""`   | 用于轮播覆盖层的额外 CSS 类。          |
| `containerClass` | `string`    | `""`   | 轮播容器的 CSS 类。                    |
| `width`          | `number`    | `450`  | 单个轮播项的宽度。                     |
| `height`         | `number`    | `600`  | 单个轮播项的高度。                     |

#credits

- 使用 Three.js 进行 3D 渲染。
- 使用 Motion-V 实现平滑动画。
- 感谢 [@safakdinc](https://github.com/safakdinc) 分享此组件。

::
