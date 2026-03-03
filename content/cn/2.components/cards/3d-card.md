---
title: 3D 卡片效果
description: 具有透视效果的卡片，悬停时可让卡片元素提升。
category: Card
tags: [css, tailwind, card, aceternity-ui]
---

::ComponentViewer{demoFile="CardDemo.vue" config="Card3dConfig" componentId="card-3d" :componentFiles='["CardContainer.vue", "CardBody.vue", "CardItem.vue", "useMouseState.ts"]'}

#api

## API

### `CardContainer`

`CardContainer` 组件是 3D 卡片效果的外层容器，处理鼠标事件以创建 3D 透视。

#### Props

| 属性名           | 类型   | 默认值 | 描述                       |
| ---------------- | ------ | ------ | -------------------------- |
| `class`          | string | `null` | 用于内层容器的额外样式类。 |
| `containerClass` | string | `null` | 用于外层容器的额外样式类。 |

---

### `CardBody`

`CardBody` 是一个保留 3D 样式的灵活容器，需在 `CardContainer` 内使用，以承载带有 3D 变换效果的内容。

#### Props

| 属性名  | 类型   | 默认值 | 描述                     |
| ------- | ------ | ------ | ------------------------ |
| `class` | string | `null` | 用于自定义样式的额外类。 |

---

### `CardItem`

`CardItem` 表示 3D 卡片中的单个元素，支持平移与旋转等变换，以构建动态的 3D 效果。

#### Props

| 属性名       | 类型   | 默认值  | 描述                                 |
| ------------ | ------ | ------- | ------------------------------------ |
| `as`         | string | `"div"` | 渲染该元素使用的 HTML 标签或组件。   |
| `class`      | string | `null`  | 应用于元素的额外类名。               |
| `translateX` | string | `0`     | X 轴平移（像素）。                   |
| `translateY` | string | `0`     | Y 轴平移（像素）。                   |
| `translateZ` | string | `0`     | Z 轴平移（像素），用于控制纵深效果。 |
| `rotateX`    | string | `0`     | 绕 X 轴旋转角度（度）。              |
| `rotateY`    | string | `0`     | 绕 Y 轴旋转角度（度）。              |
| `rotateZ`    | string | `0`     | 绕 Z 轴旋转角度（度）。              |

---

> 💡 **重要提示：**
>
> 如果在 `div` 内使用 `CardItem`，请在该 div 上添加 `style="transform-style: preserve-3d;"`，以确保 `translate-z` 属性生效。

#credits

- 移植自 Aceternity UI 的 3D Card 组件。

::
