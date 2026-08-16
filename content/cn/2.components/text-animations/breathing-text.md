---
title: 呼吸文字
description: 通过错开的节奏持续动画化可变字体轴，呈现呼吸般的文字效果。
category: 文字动画
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="BreathingTextDemo.vue" config="BreathingTextConfig" componentId="breathing-text" :componentFiles='["BreathingText.vue", "index.ts"]'}

#api

## API

| 属性                        | 类型                                      | 默认值                                 | 描述                                 |
| --------------------------- | ----------------------------------------- | -------------------------------------- | ------------------------------------ |
| `text`                      | `string`                                  | 插槽内容                               | 要拆分并独立动画的文字。             |
| `as`                        | `string`                                  | `"span"`                               | 根文本节点使用的 HTML 元素。         |
| `fromFontVariationSettings` | `string`                                  | —                                      | 每个动画周期开始时使用的字体轴设置。 |
| `toFontVariationSettings`   | `string`                                  | —                                      | 每个动画周期结束时使用的字体轴设置。 |
| `transition`                | `Transition`                              | `{ duration: 1.5, ease: "easeInOut" }` | 每个字母使用的 Motion transition。   |
| `staggerDuration`           | `number`                                  | `0.1`                                  | 每个字母之间的动画延迟。             |
| `staggerFrom`               | `"first" \| "last" \| "center" \| number` | `"first"`                              | 计算错开顺序的起点。                 |
| `repeatDelay`               | `number`                                  | `0.1`                                  | 每次呼吸动画周期之间的延迟。         |
| `class`                     | `string`                                  | —                                      | 合并到根元素的额外 class。           |

请使用可变字体，并传入它支持的字体轴。例如，Roboto Flex 支持 `wght` 和 `wdth`。

#credits

- 移植自 [Fancy Components Breathing Text](https://fancycomponents.dev/docs/components/text/breathing-text)。

::
