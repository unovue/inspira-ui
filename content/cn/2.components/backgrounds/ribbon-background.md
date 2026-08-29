---
title: 丝带背景
description: 可配置颜色、旋转角度和透明度的分层动态丝带背景。
category: Background
tags: [css, tailwind, background, shader-toy, ogl, webgl]
badge: New
---

::ComponentViewer{demoFile="RibbonBackgroundDemo.vue" config="RibbonBackgroundConfig" componentId="ribbon-background" :componentFiles='["RibbonBackground.vue"]'}

#api

## API

| 属性名            | 类型       | 默认值                                                    | 描述                                  |
| ----------------- | ---------- | --------------------------------------------------------- | ------------------------------------- |
| `colors`          | `string[]` | `['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b']` | 分层丝带使用的五个 CSS 十六进制颜色。 |
| `backgroundColor` | `string`   | `'#282828'`                                               | 丝带后方渲染的 CSS 十六进制背景色。   |
| `transparent`     | `boolean`  | `false`                                                   | 将空白背景像素的 alpha 值设为 `0`。   |
| `enableShadows`   | `boolean`  | `true`                                                    | 启用重叠丝带层之间的阴影。            |
| `angle`           | `number`   | `0`                                                       | 以度为单位旋转整个丝带区域。          |
| `offsetX`         | `number`   | `0`                                                       | 以视口单位水平移动丝带区域。          |
| `offsetY`         | `number`   | `0`                                                       | 以视口单位垂直移动丝带区域。          |
| `speed`           | `number`   | `1`                                                       | 动画速度倍数。                        |
| `class`           | `string`   | `—`                                                       | 应用于全尺寸外层元素的附加类。        |

组件会填满最近的已定位父元素。请为父元素设置明确高度和 `position: relative`。

#credits

- 使用 Inspira UI Shader Toy Viewer 和 [OGL](https://github.com/oframe/ogl) 渲染。

::
