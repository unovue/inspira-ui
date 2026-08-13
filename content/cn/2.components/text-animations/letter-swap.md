---
title: 字母切换
description: 使用正向、往返和随机动画模式，在悬停时垂直切换字母。
category: 文字动画
tags: [css, tailwind, motion-v]
badge: New
---

::ComponentViewer{demoFile="LetterSwapDemo.vue" config="LetterSwapConfig" componentId="letter-swap" :componentFiles='["LetterSwap.vue", "index.ts"]' dependencies="motion-v"}

#api

## API

| 属性              | 类型                                      | 默认值                              | 描述                               |
| ----------------- | ----------------------------------------- | ----------------------------------- | ---------------------------------- |
| `label`           | `string`                                  | —                                   | 要显示并进行动画的文本。           |
| `animation`       | `"forward" \| "pingpong"`                 | `"forward"`                         | 正向播放，或在指针离开时反向播放。 |
| `random`          | `boolean`                                 | `false`                             | 以随机顺序为字母设置动画。         |
| `reverse`         | `boolean`                                 | `true`                              | 设置切换的垂直方向。               |
| `transition`      | `Transition`                              | `{ type: "spring", duration: 0.7 }` | 每个字母使用的 Motion 过渡。       |
| `staggerDuration` | `number`                                  | `0.03`                              | 每个字母动画开始之间的延迟。       |
| `staggerFrom`     | `"first" \| "last" \| "center" \| number` | `"first"`                           | 计算交错顺序的起点。               |
| `class`           | `string`                                  | `-`                                 | 合并到根元素的其他 class。         |

#credits

- 灵感来自 [Fancy Components](https://fancycomponents.dev/docs/components/text/letter-swap.md)。
- 原始作品来自 [Daniel Petho](https://github.com/danielpetho/fancy)。

::
