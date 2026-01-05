---
title: 占位符滚动与消失输入框
description: 输入框占位符滑入，并在提交时呈现消失效果。
category: Forms & Input
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="VanishingInputDemo.vue" config="VanishingInputConfig" componentId="vanishing-input" :componentFiles='["VanishingInput.vue"]'}

#api

## API

| 属性名        | 类型            | 默认值                                               | 描述                                               |
| ------------- | --------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `placeholders`| `Array<string>` | `["Placeholder 1", "Placeholder 2", "Placeholder 3"]`| 占位文本数组，会在输入框中轮换显示。               |

该组件监听 `VanishingInput` 发出的以下事件：

| 事件名  | 参数     | 描述                         |
| ------- | -------- | ---------------------------- |
| `change`| `Event`  | 当输入值变化时触发。         |
| `submit`| `string` | 当提交输入时触发。           |

#credits

- 感谢 [M Atif](https://github.com/atif0075) 移植该组件。
- 移植自 [Aceternity UI 的 Placeholders And Vanish Input](https://ui.aceternity.com/components/placeholders-and-vanish-input)。

::
