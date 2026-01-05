---
title: 输入框
description: 具有径向悬停效果的多功能动态输入框，适配现代 Web 应用。
category: Forms & Input
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="InputDemo.vue" config="InputConfig" componentId="input" :componentFiles='["IInput.vue"]'}

#api

## API

| 属性名           | 类型                | 默认值 | 描述                                   |
| ---------------- | ------------------- | ------ | -------------------------------------- |
| `defaultValue`   | `string  \| number` | `""`   | 输入框的默认值。                       |
| `class`          | `string`            | `""`   | 用于自定义样式的额外 CSS 类。          |
| `containerClass` | `string`            | `""`   | 容器的额外 CSS 类，用于自定义样式。    |

#credits

- 构建于 ShadCN Vue Input 组件之上，并扩展以适配现代 UI/UX 需求。
- 移植自 [Aceternity UI 的 Signup Form Input 组件](https://ui.aceternity.com/components/signup-form)。

::
