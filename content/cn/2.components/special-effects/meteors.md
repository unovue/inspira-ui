---
title: 流星雨
description: 展示流星雨动画的组件，可自定义流星数量与样式。
category: 特效
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="MeteorsDemo.vue" config="MeteorsConfig" componentId="meteors" :componentFiles='["Meteors.vue"]'}

#api

## API

| 属性名 | 类型     | 默认值 | 描述                                        |
| ------ | -------- | ------ | ------------------------------------------- |
| `count`| `number` | `20`   | 动画中显示的流星数量。                      |
| `class`| `string` | `""`   | 应用于流星的额外 CSS 类，便于自定义。       |

#instructions

在 `main.css` 的 inline theme 中添加以下内容：

```css
@theme inline {
  --animate-meteor-effect: meteor 5s linear infinite;
  @keyframes meteor {
    0% {
      transform: rotate(215deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(215deg) translateX(-500px);
      opacity: 0;
    }
  }
}
```

#credits

- 移植自 [Aceternity UI 的 Meteor Effect](https://ui.aceternity.com/components/meteors)

::
