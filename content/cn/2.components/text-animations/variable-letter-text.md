---
title: 可变字母文字
description: 悬停文字时，为每个字母分别应用可变字体轴动画。
category: 文字动画
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="VariableLetterTextDemo.vue" config="VariableLetterTextConfig" componentId="variable-letter-text" :componentFiles='["VariableLetterText.vue", "index.ts"]'}

#api

## API

| 属性                        | 类型                                      | 默认值         | 说明                         |
| --------------------------- | ----------------------------------------- | -------------- | ---------------------------- |
| `label`                     | `string`                                  | —              | 要拆分并分别动画的文字。     |
| `fromFontVariationSettings` | `string`                                  | `"'wght' 400"` | 静止状态使用的字体轴设置。   |
| `toFontVariationSettings`   | `string`                                  | `"'wght' 900"` | 悬停时使用的字体轴设置。     |
| `transition`                | `Transition`                              | 弹簧过渡       | 每个字母使用的 Motion 过渡。 |
| `staggerDuration`           | `number`                                  | `0.03`         | 每个字母动画开始之间的延迟。 |
| `staggerFrom`               | `"first" \| "last" \| "center" \| number` | `"first"`      | 用于计算交错顺序的起点。     |
| `class`                     | `string`                                  | —              | 合并到根元素的额外类名。     |

请使用可变字体，并传入该字体支持的轴。例如，Roboto Flex 支持 `wght` 和 `wdth`。

#credits

- 移植自 [Fancy Components Variable Font Hover By Letter](https://fancycomponents.dev/docs/components/text/variable-font-hover-by-letter)。

::
