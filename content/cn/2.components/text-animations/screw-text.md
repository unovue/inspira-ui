---
title: 螺旋文字
description: 悬停文字时，让每个字母沿 3D 面进行翻转切换。
category: 文字动画
tags: [css, tailwind, motion-v, 3d]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="ScrewTextDemo.vue" config="ScrewTextConfig" componentId="screw-text" :componentFiles='["ScrewText.vue", "index.ts"]'}

#api

## API

| 属性              | 类型                                      | 默认值    | 说明                         |
| ----------------- | ----------------------------------------- | --------- | ---------------------------- |
| `label`           | `string`                                  | —         | 要拆分并逐字母动画的文字。   |
| `as`              | `string`                                  | `"p"`     | 根文字节点使用的 HTML 元素。 |
| `rotateDirection` | `"top" \| "right" \| "bottom" \| "left"`  | `"right"` | 3D 切换使用的轴和方向。      |
| `staggerDuration` | `number`                                  | `0.05`    | 每个字母动画之间的延迟。     |
| `staggerFrom`     | `"first" \| "last" \| "center" \| number` | `"first"` | 计算交错顺序的起点。         |
| `transition`      | `Transition`                              | 弹簧过渡  | 每个字母使用的 Motion 过渡。 |
| `class`           | `string`                                  | —         | 根元素的额外类名。           |
| `frontFaceClass`  | `string`                                  | —         | 应用于正面字母的类名。       |
| `secondFaceClass` | `string`                                  | —         | 应用于第二面字母的类名。     |

#credits

- 移植自 [Fancy Components Letter 3D Swap](https://fancycomponents.dev/docs/components/text/letter-3d-swap)。
- 原作者：[Daniel Petho](https://github.com/danielpetho/fancy)。

::
