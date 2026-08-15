---
title: 视差浮动
description: 为分层内容添加由光标驱动的深度和独立浮动效果。
category: 杂项
tags: [motion, parallax, images]
badge: New
dependencies: motion-v
---

::ComponentViewer{demoFile="ParallaxFloatDemo.vue" config="ParallaxFloatConfig" componentId="parallax-float" :componentFiles='["ParallaxFloat.vue", "ParallaxFloatElement.vue", "ParallaxFloatContext.ts", "index.ts"]'}

#api

## API

### ParallaxFloat

| 属性名         | 类型     | 默认值 | 说明                           |
| -------------- | -------- | ------ | ------------------------------ |
| `sensitivity`  | `number` | `1`    | 应用于每个元素深度的移动倍数。 |
| `easingFactor` | `number` | `0.05` | 每帧向目标位置插值的比例。     |
| `class`        | `string` | —      | 容器的额外类名。               |

### ParallaxFloatElement

| 属性名  | 类型     | 默认值 | 说明                       |
| ------- | -------- | ------ | -------------------------- |
| `depth` | `number` | `1`    | 元素相对于光标的移动深度。 |
| `class` | `string` | —      | 元素的位置和样式类名。     |

## 使用方式

使用 `ParallaxFloat` 作为容器，将每个需要独立移动的图层放入 `ParallaxFloatElement`：

```vue
<ParallaxFloat :sensitivity="-1">
  <ParallaxFloatElement :depth="2" class="top-1/4 left-1/3">
    <img src="/images/portrait.jpg" alt="Portrait" class="size-32 object-cover" />
  </ParallaxFloatElement>
</ParallaxFloat>
```

#credits

- 移植自 [Fancy Components Parallax Floating](https://fancycomponents.dev/docs/components/image/parallax-floating)。

::
