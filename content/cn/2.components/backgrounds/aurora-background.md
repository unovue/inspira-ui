---
title: 极光背景
description: 细腻的极光（南北极光）背景效果。
category: Background
tags: [css, tailwind, background, aceternity-ui]
---

::ComponentViewer{demoFile="AuroraBackgroundDemo.vue" config="AuroraBackgroundConfig" componentId="aurora-background" :componentFiles='["AuroraBackground.vue"]'}

#instructions

在 `main.css` 的 inline theme 中添加以下内容：

```css
@theme inline {
  --animate-aurora: aurora 60s linear infinite;
  @keyframes aurora {
    from {
      background-position:
        50% 50%,
        50% 50%;
    }
    to {
      background-position:
        350% 50%,
        350% 50%;
    }
  }
}
```

#api

## API

| 属性名           | 类型      | 默认值 | 描述                                              |
| ---------------- | --------- | ------ | ------------------------------------------------- |
| `class`          | `string`  | `-`    | 应用于组件的额外 CSS 类。                         |
| `radialGradient` | `boolean` | `true` | 是否为背景应用径向渐变效果。                      |

#credits

- 感谢 [Aceternity UI](https://ui.aceternity.com/components/aurora-background)。
- 感谢 [SivaReddy Uppathi](https://github.com/sivareddyuppathi) 移植该组件。

::
