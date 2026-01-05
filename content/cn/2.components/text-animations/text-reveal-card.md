---
title: 文字揭示卡片
description: 鼠标移动时在卡片底部揭示文字的效果。
category: Text Animation
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="TextRevealCardDemo.vue" config="TextRevealCardConfig" componentId="text-reveal-card" :componentFiles='["TextRevealCard.vue", "TextRevealStars.vue"]'}

#api

## API

| 属性名      | 类型     | 描述                                   |
| ----------- | -------- | -------------------------------------- |
| class       | `String` | 卡片的额外类名。                       |
| starsCount  | `Number` | 控制生成的星星数量。                   |
| starsClass  | `String` | 应用于漂浮星星的额外类名。             |

| 插槽名      | 描述                                         |
| ----------- | -------------------------------------------- |
| header      | `String`                                    |
| text        | 卡片未悬停时显示的默认文字。                 |
| revealText  | 悬停卡片时显示的文字。                       |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI's Text Reveal Card](https://ui.aceternity.com/components/text-reveal-card)。

::
