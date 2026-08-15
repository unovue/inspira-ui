---
title: 可变文字
description: 让可变字体轴根据指针距离变化，也可以在悬停时按随机顺序显示每个字母。
category: 文字动画
tags: [css, tailwind, motion-v, variable-font]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="VariableTextDemo.vue" config="VariableTextConfig" componentId="variable-text" :componentFiles='["VariableText.vue", "index.ts"]'}

#api

## API

| 属性                        | 类型                                      | 默认值     | 说明                                           |
| --------------------------- | ----------------------------------------- | ---------- | ---------------------------------------------- |
| `label`                     | `string`                                  | —          | 要拆分并逐字母动画的文本。                     |
| `fromFontVariationSettings` | `string`                                  | —          | 静止状态和离开作用范围时使用的字体轴设置。     |
| `toFontVariationSettings`   | `string`                                  | —          | 指针位于字母中心时使用的字体轴设置。           |
| `containerRef`              | `MaybeComputedElementRef`                 | —          | 用于计算接近模式指针坐标的容器元素。           |
| `radius`                    | `number`                                  | `50`       | 字母响应指针的像素范围。                       |
| `falloff`                   | `"linear" \| "exponential" \| "gaussian"` | `"linear"` | 控制效果随距离衰减的方式。                     |
| `random`                    | `boolean`                                 | `false`    | 悬停时按随机字母顺序动画，而不是跟踪指针距离。 |
| `transition`                | `Transition`                              | 弹簧过渡   | 随机模式使用的 Motion 过渡。                   |
| `staggerDuration`           | `number`                                  | `0.03`     | 随机模式中字母之间的延迟。                     |
| `as`                        | `string`                                  | `"span"`   | 根文字节点使用的 HTML 元素。                   |
| `class`                     | `string`                                  | —          | 合并到根元素的额外类名。                       |

#credits

- 移植自 [Fancy Components Variable Font Cursor Proximity](https://fancycomponents.dev/docs/components/text/variable-font-cursor-proximity)。
- 随机字母行为基于 [Fancy Components Variable Font Hover By Random Letter](https://fancycomponents.dev/docs/components/text/variable-font-hover-by-random-letter)。

::
