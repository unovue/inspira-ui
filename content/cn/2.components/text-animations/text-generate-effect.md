---
title: 文字生成效果
description: 炫酷的文字效果，在页面加载时逐字渐显。
category: 文字动画
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextGenerateDemo.vue" config="TextGenerateConfig" componentId="text-generate-effect" :componentFiles='["TextGenerateEffect.vue"]'}

#api

## API

| 属性名   | 类型      | 默认值  | 描述                                         |
| -------- | --------- | ------- | -------------------------------------------- |
| `words`  | `string`  | Required| 要展示并生成的文字。                         |
| `duration`| `number` | `0.7`   | 文字生成动画的持续时间（秒）。               |
| `delay`  | `number`  | `0`     | 动画开始前的延迟（毫秒）。                   |
| `filter` | `boolean` | `true`  | 文字的模糊效果。                             |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI's Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect)。

::
