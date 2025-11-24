---
title: Book
description: A 3D book component featuring customizable sizes and color gradients.
category: Miscellaneous
tags: [css, tailwind, x-ui]
---

::ComponentViewer{demoFile="BookDemo.vue" config="BookConfig" componentId="book" :componentFiles='["Book.vue", "BookHeader.vue", "BookTitle.vue", "BookDescription.vue", "index.ts"]'}

#api

## API

#### `Book`

| Prop Name    | Type    | Default | Description                                   |
| ------------ | ------- | ------- | --------------------------------------------- |
| `class`      | String  | -       | Additional classes for styling the component. |
| `duration`   | Number  | 1000    | Animation duration in milliseconds.           |
| `color`      | String  | "zinc"  | Color theme for the book gradient.            |
| `isStatic`   | Boolean | false   | Disables hover animations when true.          |
| `size`       | String  | "md"    | Size variant of the book.                     |
| `radius`     | String  | "md"    | Border radius variant of the book.            |
| `shadowSize` | String  | "lg"    | Shadow size variant of the book.              |

#### `BookHeader`

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#### `BookTitle`

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#### `BookDescription`

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#credits

- Credits to [x/UI](https://ui.3x.gl/docs/book) for inspiring this component.
- Credits to [kalix127](https://github.com/kalix127) for porting this component.

::
