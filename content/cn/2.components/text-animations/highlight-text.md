---
title: 高亮文本
description: 使用带方向的背景扫过动画高亮文本。
category: 文本动画
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="HighlightTextDemo.vue" config="HighlightTextConfig" componentId="highlight-text" :componentFiles='["HighlightText.vue", "index.ts"]'}

#api

## API

| 属性               | 类型                                   | 默认值                                        | 说明                             |
| ------------------ | -------------------------------------- | --------------------------------------------- | -------------------------------- |
| `as`               | `string`                               | `span`                                        | 外层包装元素。                   |
| `triggerType`      | `hover` \| `ref` \| `inView` \| `auto` | `inView`                                      | 启动高亮的触发方式。             |
| `transition`       | `Record<string, unknown>`              | 弹簧过渡                                      | 高亮扫过动画使用的 Motion 过渡。 |
| `useInViewOptions` | `Record<string, unknown>`              | `{ once: true, initial: false, amount: 0.1 }` | 进入视口触发器的选项。           |
| `class`            | `string`                               | `-`                                           | 合并到高亮文本上的类名。         |
| `highlightColor`   | `string`                               | `hsl(25 90% 80%)`                             | 高亮颜色。                       |
| `direction`        | `ltr` \| `rtl` \| `ttb` \| `btt`       | `ltr`                                         | 背景扫过方向。                   |

当使用 `ref` 触发方式时，组件暴露 `animate(direction?)` 和 `reset()` 方法。

#credits

- 灵感来自 [Fancy Components](https://fancycomponents.dev/docs/components/text/text-highlighter)。

::
