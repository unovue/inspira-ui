---
title: 文字变形
description: 动态在一组文本之间切换，呈现平滑的渐变效果。
category: Text Animation
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="MorphingTextDemo.vue" config="MorphingTextConfig" componentId="morphing-text" :componentFiles='["MorphingText.vue"]'}

#api

## API

| 属性名      | 类型       | 默认值 | 描述                         |
| ----------- | ---------- | ------ | ---------------------------- |
| `texts`     | `string[]` | `[]`   | 需要变换的文本数组。         |
| `class`     | `string`   | `""`   | 容器的额外类名。             |
| `morphTime` | `number`   | `1.5`  | 动画执行时间。               |
| `coolDownTime`| `number` | `0.5`  | 动画停留时间。               |

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 灵感并移植自 [Magic UI Morphing Text](https://magicui.design/docs/components/morphing-text)。

::
