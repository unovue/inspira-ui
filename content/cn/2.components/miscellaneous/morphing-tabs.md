---
title: 变形标签页
description: 复刻 Preet 的胶状变形标签交互，包含粘连效果。
category: 杂项
tags: [css, tailwind]
---

::ComponentViewer{demoFile="MorphingTabsDemo.vue" config="MorphingTabsConfig" componentId="morphing-tabs" :componentFiles='["MorphingTabs.vue"]'}

#api

## API

| 属性名            | 类型       | 默认值 | 描述                           |
| ----------------- | ---------- | ------ | ------------------------------ |
| `class`           | `string`   | `""`   | 用于样式的额外类名。           |
| `tabs`            | `string[]` | `[]`   | 标签集合。                     |
| `activeTab`       | `string`   | `""`   | 当前激活的标签。               |
| `margin`          | `number`   | `20`   | 激活标签左右的外边距。         |
| `blurStdDeviation`| `number`   | `6`    | SVG 模糊的 stdDeviation 值。    |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 灵感并移植自 [@Preet \"Exclusion tabs\"](https://x.com/wickedmishra/status/1823026659894940124)。

::
