---
title: 霓虹边框
description: 视觉吸引力强的霓虹边框组件，可自定义动画与颜色。
category: Special Effects
tags: [css, tailwind, border]
---

::ComponentViewer{demoFile="NeonBorderDemo.vue" config="NeonBorderConfig" componentId="neon-border" :componentFiles='["NeonBorder.vue"]'}

#api

## API

| 属性名          | 类型                         | 默认值      | 描述                           |
| --------------- | ---------------------------- | ----------- | ------------------------------ |
| `color1`        | `string`                     | `"#0496ff"` | 霓虹边框的主色。               |
| `color2`        | `string`                     | `"#ff0a54"` | 霓虹边框的辅色。               |
| `animationType` | `"none" \| "half" \| "full"` | `"half"`    | 应用于边框的动画类型。         |
| `duration`      | `number`                     | `6`         | 动画持续时间（秒）。           |
| `class`         | `string`                     | `""`        | 用于样式的额外 CSS 类。        |

#instructions

在 `main.css` 的 inline theme 中添加以下内容：

```css
@theme inline {
  --animate-neon-border: neon-border var(--neon-border-duration) linear infinite;
  @keyframes neon-border {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
```

#credits

- 灵感来自现代霓虹边框效果。

::
