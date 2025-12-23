---
title: 动画光束
description: 通过 SVG 连接元素的光束动画。
category: 特效
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="AnimatedBeamDemo.vue" config="AnimatedBeamConfig" componentId="animated-beam" :componentFiles='["AnimatedBeam.vue"]'}

#api

## API

| 属性名               | 类型          | 默认值                 | 描述                                                |
| -------------------- | ------------- | ---------------------- | --------------------------------------------------- |
| `class`              | `string`      | `""`                   | 应用于组件的额外 CSS 类，便于自定义。               |
| `containerRef`       | `HTMLElement` | N/A                    | 渲染光束的容器元素引用。                            |
| `fromRef`            | `HTMLElement` | N/A                    | 光束起点元素的引用。                                |
| `toRef`              | `HTMLElement` | N/A                    | 光束终点元素的引用。                                |
| `curvature`          | `number`      | `0`                    | 控制光束弯曲程度，值越大弯曲越明显。                |
| `reverse`            | `boolean`     | `false`                | 为 `true` 时反转光束动画方向。                      |
| `pathColor`          | `string`      | `"gray"`               | 光束路径的颜色。                                    |
| `pathWidth`          | `number`      | `2`                    | 光束路径的描边宽度。                                |
| `pathOpacity`        | `number`      | `0.2`                  | 光束路径的不透明度。                                |
| `gradientStartColor` | `string`      | `"#FFAA40"`            | 光束渐变动画的起始颜色。                            |
| `gradientStopColor`  | `string`      | `"#9C40FF"`            | 光束渐变动画的结束颜色。                            |
| `delay`              | `number`      | `0`                    | 动画开始前的延迟（秒）。                            |
| `duration`           | `number`      | `Random between 4–7 s` | 光束动画循环的持续时间（秒）。                      |
| `startXOffset`       | `number`      | `0`                    | 光束起点的水平偏移。                                |
| `startYOffset`       | `number`      | `0`                    | 光束起点的垂直偏移。                                |
| `endXOffset`         | `number`      | `0`                    | 光束终点的水平偏移。                                |
| `endYOffset`         | `number`      | `0`                    | 光束终点的垂直偏移。                                |

#credits

- 灵感并移植自 [Magic UI Animated Beam](https://magicui.design/docs/components/animated-beam)。

::
