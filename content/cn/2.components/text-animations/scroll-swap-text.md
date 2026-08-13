---
title: 滚动切换文本
description: 当组件在滚动容器中移动时，让文本垂直切换。
category: 文本动画
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="ScrollSwapTextDemo.vue" config="ScrollSwapTextConfig" componentId="scroll-swap-text" :componentFiles='["ScrollSwapText.vue", "index.ts"]'}

#api

## API

| 属性           | 类型                      | 默认值                            | 说明                         |
| -------------- | ------------------------- | --------------------------------- | ---------------------------- |
| `as`           | `string`                  | `span`                            | 文本包装元素。               |
| `containerRef` | `MaybeComputedElementRef` | —                                 | 用于计算滚动进度的容器。     |
| `offset`       | `[string, string]`        | `["0 0", "0 1"]`                  | 定义动画范围的滚动偏移量。   |
| `class`        | `string`                  | `-`                               | 合并到包装元素上的额外类名。 |
| `springConfig` | `object`                  | `{ stiffness: 200, damping: 30 }` | 用于平滑滚动进度的弹簧设置。 |

组件会渲染两份插槽文本。滚动容器移动时，第一份文本离开，第二份文本进入。

#credits

- 灵感来自 [Fancy Components](https://fancycomponents.dev/docs/components/text/scroll-and-swap)。

::
