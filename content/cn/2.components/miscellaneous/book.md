---
title: 书本
description: 可自定义尺寸与渐变的 3D 书本组件。
category: 杂项
tags: [css, tailwind, x-ui]
---

::ComponentViewer{demoFile="BookDemo.vue" config="BookConfig" componentId="book" :componentFiles='["Book.vue", "BookHeader.vue", "BookTitle.vue", "BookDescription.vue", "index.ts"]'}

#api

## API

#### `Book`

| 属性名      | 类型    | 默认值 | 描述                                 |
| ----------- | ------- | ------ | ------------------------------------ |
| `class`     | String  | -      | 应用于组件的额外类。                 |
| `duration`  | Number  | 1000   | 动画持续时间（毫秒）。               |
| `color`     | String  | "zinc" | 书本渐变的配色主题。                 |
| `isStatic`  | Boolean | false  | 为 true 时禁用悬停动画。             |
| `size`      | String  | "md"   | 书本尺寸变体。                       |
| `radius`    | String  | "md"   | 书本圆角变体。                       |
| `shadowSize`| String  | "lg"   | 阴影大小变体。                       |

#### `BookHeader`

| 属性名 | 类型   | 默认值 | 描述                          |
| ------ | ------ | ------ | ----------------------------- |
| `class`| String | -      | 自定义样式的额外类。          |

#### `BookTitle`

| 属性名 | 类型   | 默认值 | 描述                          |
| ------ | ------ | ------ | ----------------------------- |
| `class`| String | -      | 自定义样式的额外类。          |

#### `BookDescription`

| 属性名 | 类型   | 默认值 | 描述                          |
| ------ | ------ | ------ | ----------------------------- |
| `class`| String | -      | 自定义样式的额外类。          |

#credits

- 感谢 [x/UI](https://ui.3x.gl/docs/book) 带来的灵感。
- 感谢 [kalix127](https://github.com/kalix127) 移植该组件。

::
