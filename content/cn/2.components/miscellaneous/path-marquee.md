---
title: 路径跑马灯
description: 让重复内容沿 SVG 路径移动，并支持悬停减速和拖拽控制。
category: Miscellaneous
tags: [svg, motion-v, marquee, drag]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="PathMarqueeDemo.vue" config="PathMarqueeConfig" componentId="path-marquee" :componentFiles='["PathMarquee.vue", "index.ts"]'}

#api

## API

| 属性                       | 类型                        | 默认值                            | 描述                              |
| -------------------------- | --------------------------- | --------------------------------- | --------------------------------- |
| `path`                     | `string`                    | —                                 | 用于定位每个项目的 SVG 路径数据。 |
| `pathId`                   | `string`                    | 自动生成                          | SVG 路径使用的 ID。               |
| `showPath`                 | `boolean`                   | `false`                           | 是否显示路径线条。                |
| `width`                    | `string \| number`          | `"100%"`                          | SVG 宽度。                        |
| `height`                   | `string \| number`          | `"100%"`                          | SVG 高度。                        |
| `viewBox`                  | `string`                    | `"0 0 100 100"`                   | SVG 坐标系统。                    |
| `preserveAspectRatio`      | `string`                    | `"xMidYMid meet"`                 | SVG 宽高比行为。                  |
| `baseVelocity`             | `number`                    | `5`                               | 自动移动速度。                    |
| `direction`                | `"normal" \| "reverse"`     | `"normal"`                        | 初始移动方向。                    |
| `easing`                   | `(value: number) => number` | —                                 | 可选的路径进度缓动函数。          |
| `slowdownOnHover`          | `boolean`                   | `false`                           | 悬停项目时降低移动速度。          |
| `slowDownFactor`           | `number`                    | `0.3`                             | 悬停时的速度倍率。                |
| `slowDownSpringConfig`     | `object`                    | `{ damping: 50, stiffness: 400 }` | 悬停速度变化使用的弹簧配置。      |
| `useScrollVelocity`        | `boolean`                   | `false`                           | 将滚动速度加入移动速度。          |
| `scrollAwareDirection`     | `boolean`                   | `false`                           | 根据最近的滚动方向改变移动方向。  |
| `scrollSpringConfig`       | `object`                    | `{ damping: 50, stiffness: 400 }` | 滚动速度使用的弹簧配置。          |
| `repeat`                   | `number`                    | `3`                               | 默认插槽内容的重复次数。          |
| `draggable`                | `boolean`                   | `false`                           | 是否允许沿路径拖拽。              |
| `dragSensitivity`          | `number`                    | `0.2`                             | 应用于拖拽速度的倍率。            |
| `dragVelocityDecay`        | `number`                    | `0.96`                            | 释放拖拽后的动量衰减。            |
| `dragAwareDirection`       | `boolean`                   | `false`                           | 是否自动跟随最近一次拖拽方向。    |
| `grabCursor`               | `boolean`                   | `false`                           | 可拖拽时是否使用抓取光标。        |
| `enableRollingZIndex`      | `boolean`                   | `true`                            | 是否根据路径位置设置项目层级。    |
| `zIndexBase`               | `number`                    | `1`                               | 起始 z-index。                    |
| `zIndexRange`              | `number`                    | `10`                              | 沿路径使用的层级范围。            |
| `cssVariableInterpolation` | `object[]`                  | `[]`                              | 根据路径进度插值 CSS 变量。       |
| `responsive`               | `boolean`                   | `false`                           | 是否缩放坐标空间以适应容器。      |
| `class`                    | `string`                    | —                                 | 合并到根元素的额外 class。        |

通过默认插槽传入一个或多个元素。每个插槽元素会被重复，并沿路径定位。

#credits

- 移植自 [Fancy Components Marquee Along SVG Path](https://fancycomponents.dev/docs/components/blocks/marquee-along-svg-path)。

::
