---
title: 下划线文字
description: 在悬停时从文字中心或两侧为文字添加动画下划线。
category: Text Animation
tags: [css, tailwind, motion-v, underline]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="UnderlineTextDemo.vue" config="UnderlineTextConfig" componentId="underline-text" :componentFiles='["UnderlineText.vue", "index.ts"]'}

#api

## API

| 属性名                  | 类型                                                     | 默认值   | 描述                           |
| ----------------------- | -------------------------------------------------------- | -------- | ------------------------------ |
| `as`                    | `string`                                                 | `span`   | 文字包装器使用的 HTML 元素。   |
| `variant`               | `"center" \| "comes-in-goes-out" \| "goes-out-comes-in"` | `center` | 下划线动画样式。               |
| `direction`             | `"left" \| "right"`                                      | `left`   | 两侧动画变体使用的方向。       |
| `transition`            | `Record<string, unknown>`                                | 见默认值 | 下划线使用的 Motion 过渡配置。 |
| `underlineHeightRatio`  | `number`                                                 | `0.1`    | 相对于文字字号的下划线高度。   |
| `underlinePaddingRatio` | `number`                                                 | `0.01`   | 相对于字号的文字与下划线间距。 |
| `class`                 | `string`                                                 | —        | 合并到文字包装器的额外 class。 |

使用默认插槽传入文字内容。组件会使用当前文字颜色生成下划线。

#credits

- 移植自 [Fancy Components Underline Animation](https://fancycomponents.dev/docs/components/text/underline-animation)。

::
