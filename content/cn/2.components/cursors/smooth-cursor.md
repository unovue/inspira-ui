---
title: 平滑光标
description: 适用于 Vue 应用的可定制物理驱动平滑光标动画组件。
category: Cursor
tags: [css, tailwind, cursor, magic-ui]
---

::ComponentViewer{demoFile="SmoothCursorDemo.vue" config="SmoothCursorConfig" componentId="smooth-cursor" :componentFiles='["SmoothCursor.vue"]'}

#api

## API

| 属性名        | 类型           | 默认值           | 描述                                        |
| ------------- | -------------- | ---------------- | ------------------------------------------- |
| `cursor`      | `Component`    | `DefaultCursor`  | 用于替换默认光标的自定义光标组件。          |
| `springConfig`| `SpringConfig` | `See below`      | 弹簧动画的配置对象。                        |

### SpringConfig 类型

```ts
interface springConfig {
  damping: number;
  stiffness: number;
  mass: number;
  restDelta: number;
}
```

#credits

- 感谢 [Whbbit1999](https://github.com/Whbbit1999) 提供该组件。
- 移植自 [Magic UI Smooth Cursor](https://magicui.design/docs/components/smooth-cursor)。

::
