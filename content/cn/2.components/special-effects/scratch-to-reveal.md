---
title: 刮刮乐揭示
description: 互动式刮刮乐效果，可自定义尺寸与动画，在刮开后显示隐藏内容。
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="ScratchToRevealDemo.vue" config="ScratchToRevealConfig" componentId="scratch-to-reveal" :componentFiles='["ScratchToReveal.vue"]'}

#api

## API

| 属性名                | 类型                     | 默认值 | 描述                                                                 |
| --------------------- | ------------------------ | ------ | -------------------------------------------------------------------- |
| `class`               | `string`                 | `""`   | 应用于组件的类名。                                                   |
| `width`               | `number`                 | `""`   | 刮刮区域的宽度。                                                     |
| `height`              | `number`                 | `""`   | 刮刮区域的高度。                                                     |
| `minScratchPercentage`| `number`                 | `50`   | 视为完成的最小刮开比例（0 到 100 之间）。                            |
| `gradientColors`      | `[string,string,string]` | `-`    | 刮刮效果的渐变颜色。                                                 |

| 事件名    | 负载 | 描述                               |
| --------- | ---- | ---------------------------------- |
| `complete`| `-`  | 刮开完成时调用的回调函数。         |

| 插槽名    | 默认内容 | 描述                          |
| --------- | -------- | ----------------------------- |
| `default` | `-`      | 刮开后显示的文字或内容。       |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 灵感来自 [MagicUI Scratch To Reveal](https://magicui.design/docs/components/scratch-to-reveal)。

::
