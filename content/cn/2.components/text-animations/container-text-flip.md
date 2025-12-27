---
title: 容器文字翻转
description: 一个循环翻转单词的容器，并随文字宽度动画。
category: 文字动画
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="ContainerTextFlipDemo.vue" config="ContainerTextFlipConfig" componentId="container-text-flip" :componentFiles='["ContainerTextFlip.vue"]'}

#api

## API

| 属性名             | 类型       | 默认值                                        | 描述                                    |
| ------------------ | ---------- | --------------------------------------------- | --------------------------------------- |
| `words`            | `string[]` | `["better", "modern", "beautiful", "awesome"]`| 循环显示的单词数组。                    |
| `interval`         | `number`   | `3000`                                        | 单词切换间隔（毫秒）。                  |
| `animationDuration`| `number`   | `700`                                         | 过渡动画时长（毫秒）。                  |
| `class`            | `string`   | ``                                            | 应用于容器的额外 CSS 类。               |
| `textClass`        | `string`   | ``                                            | 应用于文字的额外 CSS 类。               |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 移植自 [Aceternity UI Container Text Flip](https://ui.aceternity.com/components/container-text-flip)。

::
