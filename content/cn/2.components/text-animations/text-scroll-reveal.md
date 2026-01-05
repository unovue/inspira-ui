---
title: 滚动文字揭示
description: 在滚动时逐词显现的文字组件，可自定义内容与样式。
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="TextScrollRevealDemo.vue" config="TextScrollRevealConfig" componentId="text-scroll-reveal" :componentFiles='["TextScrollReveal.vue", "ScrollWord.vue"]'}

#api

## API

| 属性名 | 类型     | 默认值 | 描述                                               |
| ------ | -------- | ------ | -------------------------------------------------- |
| `text` | `string` | N/A    | 在滚动时逐词显示的文本内容。                       |
| `class`| `string` | `""`   | 应用于组件的额外 CSS 类，便于自定义。              |

#credits

- 移植自 [Magic UI Text Reveal](https://magicui.design/docs/components/text-reveal)。

::
