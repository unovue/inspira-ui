---
title: 发光边框
description: 动态的发光边框效果。
category: Special Effects
tags: [css, tailwind, magic-ui]
---

::ComponentViewer{demoFile="GlowBorderDemo.vue" config="GlowBorderConfig" componentId="glow-border" :componentFiles='["GlowBorder.vue"]'}

#api

## API

| 属性名         | 类型                 | 默认值 | 描述                                   |
| -------------- | -------------------- | ------ | -------------------------------------- |
| `duration`     | `number`             | `10`   | 发光边框动画的持续时间。               |
| `color`        | `string \| string[]` | `#FFF` | 应用于发光边框的颜色或颜色数组。       |
| `borderRadius` | `number`             | `10`   | 边框的圆角半径。                       |
| `borderWidth`  | `number`             | `2`    | 边框宽度。                             |

#instructions

在 `main.css` 的 inline theme 中添加以下内容：

```css
@theme inline {
  --animate-glow: glow var(--duration) infinite linear;
  @keyframes glow {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
}
```

#credits

- 感谢 [Magic UI](https://magicui.design/docs/components/shine-border) 提供这个出色的组件。

::
