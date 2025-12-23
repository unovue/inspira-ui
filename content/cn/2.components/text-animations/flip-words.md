---
title: 翻转单词
description: 循环翻转单词列表的组件。
category: 文字动画
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="FlipWordsDemo.vue" config="FlipWordsConfig" componentId="flip-words" :componentFiles='["FlipWords.vue"]'}

#api

## API

| 属性名  | 类型     | 描述                                               |
| ------- | -------- | -------------------------------------------------- |
| `words` | `Array`  | 要展示并动画的单词数组。                           |
| `duration`| `number`| 每个单词显示的时间（毫秒），之后翻转到下一个单词。 |
| `class` | `string` | 应用于组件的额外 CSS 类。                          |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI's Flip Words](https://ui.aceternity.com/components/flip-words)

::
