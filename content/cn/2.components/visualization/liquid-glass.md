---
title: 液态玻璃效果
description: 使用 SVG 置换滤镜实现的玻璃拟态效果，类似 Apple Liquid Glass。
category: 可视化
tags: [css, tailwind, apple, svg]
---

::ComponentViewer{demoFile="LiquidGlassDemo.vue" config="LiquidGlassConfig" componentId="liquid-glass" :componentFiles='["LiquidGlass.vue"]' }

#api

## API

| 属性名          | 类型                | 默认值        | 描述                                                                            |
| --------------- | ------------------- | ------------- | ------------------------------------------------------------------------------- |
| `radius`        | `number`            | `16`          | 玻璃容器的圆角半径（像素）。                                                    |
| `border`        | `number`            | `0.07`        | 相对边框厚度，影响置换滤镜的内边距。                                            |
| `lightness`     | `number`            | `50`          | 覆盖层颜色的亮度（0-100，HSL 计）。                                            |
| `blend`         | `string`            | `"difference"`| 用于红蓝置换层的 CSS 混合模式。                                                |
| `xChannel`      | `"R" \| "G" \| "B"` | `"R"`         | 用于水平置换的通道。                                                            |
| `yChannel`      | `"R" \| "G" \| "B"` | `"B"`         | 用于垂直置换的通道。                                                            |
| `alpha`         | `number`            | `0.93`        | 覆盖层的透明度（0-1）。                                                         |
| `blur`          | `number`            | `11`          | 应用于覆盖层的高斯模糊半径。                                                    |
| `rOffset`       | `number`            | `0`           | 红色置换贴图的额外缩放偏移。                                                    |
| `gOffset`       | `number`            | `10`          | 绿色置换贴图的额外缩放偏移。                                                    |
| `bOffset`       | `number`            | `20`          | 蓝色置换贴图的额外缩放偏移。                                                    |
| `scale`         | `number`            | `-180`        | 置换效果的基础缩放，与各通道偏移叠加。                                          |
| `frost`         | `number`            | `0.05`        | 控制磨砂玻璃背景叠加强度的透明度系数。                                          |
| `class`         | `string`            | `""`          | 应用于包裹内容的内层插槽容器的额外 CSS 类。                                     |
| `containerClass`| `string`            | `""`          | 应用于外层容器 div 的额外 CSS 类。                                             |

#credits

- 灵感来自 Apple Liquid Glass。

::

::warning
该组件使用 SVG 滤镜实现背景模糊。Safari 不支持，Firefox 支持也非常有限。

建议在目标为 Chromium 内核浏览器时使用此组件，并在 Safari 或 Firefox 上提供备用组件。

例如，Inspira UI 落地页会在 Chromium 浏览器使用 Liquid Glass，在 Safari 与 Mozilla 上回退为磨砂玻璃效果。
::
