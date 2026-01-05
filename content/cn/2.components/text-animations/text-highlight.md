---
title: 文字高亮
description: 为文字填充背景以突出显示的效果。
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextHighlightDemo.vue" config="TextHighlightConfig" componentId="text-highlight" :componentFiles='["TextHighlight.vue"]'}

#api

## API

| 属性名          | 类型     | 默认值   | 描述                                              |
| --------------- | -------- | -------- | ------------------------------------------------- |
| `delay`         | `number` | `0`      | 动画开始前的延迟（毫秒）。                         |
| `duration`      | `number` | `2000`   | 动画持续时间（毫秒）。                             |
| `text-end-color`| `string` | `inherit`| 动画结束时文字颜色，应符合 WCAG 推荐。             |

#credits

- 灵感来自 [Aceternity UI](https://ui.aceternity.com/components/hero-highlight)
- 感谢 [Nathan De Pachtere](https://nathandepachtere.com) 移植该组件。

::
