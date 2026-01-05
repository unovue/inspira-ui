---
title: 聚焦
description: 通过动态模糊和动画框高亮句子中的单词，支持自动循环或悬停手动聚焦模式。
category: Text Animation
tags: [css, tailwind, codepen]
---

::ComponentViewer{demoFile="FocusDemo.vue" config="FocusConfig" componentId="focus" :componentFiles='["Focus.vue"]'}

#api

## API

| 属性名                  | 类型      | 默认值           | 描述                                               |
| ----------------------- | --------- | ---------------- | -------------------------------------------------- |
| `sentence`              | `string`  | `"Inspira Focus"`| 要逐词展示和动画的句子。                           |
| `manualMode`            | `boolean` | `false`          | 若为 `true`，悬停时才高亮；否则自动循环。          |
| `blurAmount`            | `number`  | `5`              | 非聚焦单词的模糊半径（像素）。                     |
| `borderColor`           | `string`  | `"green"`        | 动画聚焦边框的颜色。                               |
| `animationDuration`     | `number`  | `0.5`            | 聚焦框动画过渡的持续时间（秒）。                   |
| `pauseBetweenAnimations`| `number`  | `1`              | 自动聚焦之间的暂停时长（秒）。                     |

#credits

- 灵感来自 [CodePen 的 Focus Text Hover Effect](https://codepen.io/CameronFitzwilliam/pen/JJRjMa)。

::
