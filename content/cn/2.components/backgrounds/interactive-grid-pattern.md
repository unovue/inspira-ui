---
title: 交互网格图案
description: 采用 SVG 制作的交互式网格背景，完全可自定义。
category: Background
tags: [css, tailwind, background, svg, magic-ui]
---

::ComponentViewer{demoFile="InteractiveGridPatternDemo.vue" config="InteractiveGridPatternConfig" componentId="interactive-grid-pattern" :componentFiles='["InteractiveGridPattern.vue"]' }

#api

## API

| 属性名            | 类型               | 默认值    | 描述                               |
| ----------------- | ------------------ | --------- | ---------------------------------- |
| `className`       | `string`           | -         | 组件样式的额外类名。               |
| `squaresClassName`| `string`           | -         | 方块样式的额外类名。               |
| `width`           | `number`           | `40`      | 方块宽度（像素）。                 |
| `height`          | `number`           | `40`      | 方块高度（像素）。                 |
| `squares`         | `[number, number]` | `[24, 24]`| 网格中方块的数量。                 |

#credits

- 灵感来自 [MagicUI](https://magicui.design/docs/components/interactive-grid-pattern)。
- 感谢 [kalix127](https://github.com/kalix127) 移植该组件。

::
