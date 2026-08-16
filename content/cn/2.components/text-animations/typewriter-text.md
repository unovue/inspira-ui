---
title: 打字机文字
description: 使用可选的动态光标逐字显示并循环切换文本。
category: 文字动画
tags: [css, tailwind, motion-v, typewriter]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="TypewriterTextDemo.vue" config="TypewriterTextConfig" componentId="typewriter-text" :componentFiles='["TypewriterText.vue", "index.ts"]'}

#api

## API

| 属性                      | 类型                                             | 默认值   | 描述                                 |
| ------------------------- | ------------------------------------------------ | -------- | ------------------------------------ |
| `text`                    | `string \| string[]`                             | —        | 要逐字显示的文本或文本序列。         |
| `as`                      | `string`                                         | `"div"`  | 根文本节点使用的 HTML 元素。         |
| `speed`                   | `number`                                         | `50`     | 字符输入之间的延迟，单位为毫秒。     |
| `initialDelay`            | `number`                                         | `0`      | 开始输入前的延迟，单位为毫秒。       |
| `waitTime`                | `number`                                         | `2000`   | 删除或切换到下一段文本前的停留时间。 |
| `deleteSpeed`             | `number`                                         | `30`     | 字符删除之间的延迟，单位为毫秒。     |
| `loop`                    | `boolean`                                        | `true`   | 最后一段文本后是否从第一段重新开始。 |
| `showCursor`              | `boolean`                                        | `true`   | 是否显示动态光标。                   |
| `hideCursorOnType`        | `boolean`                                        | `false`  | 输入或删除文本时是否隐藏光标。       |
| `cursorChar`              | `string`                                         | `"\|"`   | 作为光标显示的字符。                 |
| `cursorAnimationVariants` | `{ initial: VariantType; animate: VariantType }` | 见默认值 | 光标闪烁使用的 Motion variants。     |
| `cursorClass`             | `string`                                         | `"ml-1"` | 应用于光标的额外 class。             |
| `class`                   | `string`                                         | —        | 合并到根元素的额外 class。           |

#credits

- 移植自 [Fancy Components Typewriter](https://fancycomponents.dev/docs/components/text/typewriter)。

::
