---
title: Book
description: A 3D book component featuring customizable sizes and color gradients.
---

::ComponentLoader{label="Preview" componentName="BookDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="book"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="Book.vue" language="vue" componentName="Book" type="ui" id="book"}
:CodeViewerTab{label="BookHeader.vue" language="vue" componentName="BookHeader" type="ui" id="book"}
:CodeViewerTab{label="BookTitle.vue" language="vue" componentName="BookTitle" type="ui" id="book"}
:CodeViewerTab{label="BookDescription.vue" language="vue" componentName="BookDescription" type="ui" id="book"}

```ts [index.ts]
export const BOOK_RADIUS_MAP = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
} as const;

export const BOOK_SIZE_MAP = {
  sm: { width: "180px", spineTranslation: "152px" },
  md: { width: "220px", spineTranslation: "192px" },
  lg: { width: "260px", spineTranslation: "232px" },
  xl: { width: "300px", spineTranslation: "272px" },
} as const;

export const BOOK_SHADOW_SIZE_MAP = {
  sm: "-5px 0 15px 5px var(--shadowColor)",
  md: "-7px 0 25px 7px var(--shadowColor)",
  lg: "-10px 0 35px 10px var(--shadowColor)",
  xl: "-12px 0 45px 12px var(--shadowColor)",
} as const;

export const BOOK_COLOR_MAP = {
  slate: { from: "from-slate-900", to: "to-slate-700" },
  gray: { from: "from-gray-900", to: "to-gray-700" },
  zinc: { from: "from-zinc-900", to: "to-zinc-700" },
  neutral: { from: "from-neutral-900", to: "to-neutral-700" },
  stone: { from: "from-stone-900", to: "to-stone-700" },
  red: { from: "from-red-900", to: "to-red-700" },
  orange: { from: "from-orange-900", to: "to-orange-700" },
  amber: { from: "from-amber-900", to: "to-amber-700" },
  yellow: { from: "from-yellow-900", to: "to-yellow-700" },
  lime: { from: "from-lime-900", to: "to-lime-700" },
  green: { from: "from-green-900", to: "to-green-700" },
  emerald: { from: "from-emerald-900", to: "to-emerald-700" },
  teal: { from: "from-teal-900", to: "to-teal-700" },
  cyan: { from: "from-cyan-900", to: "to-cyan-700" },
  sky: { from: "from-sky-900", to: "to-sky-700" },
  blue: { from: "from-blue-900", to: "to-blue-700" },
  indigo: { from: "from-indigo-900", to: "to-indigo-700" },
  violet: { from: "from-violet-900", to: "to-violet-700" },
  purple: { from: "from-purple-900", to: "to-purple-700" },
  fuchsia: { from: "from-fuchsia-900", to: "to-fuchsia-700" },
  pink: { from: "from-pink-900", to: "to-pink-700" },
  rose: { from: "from-rose-900", to: "to-rose-700" },
} as const;

export type BookColor = keyof typeof BOOK_COLOR_MAP;
export type BookSize = keyof typeof BOOK_SIZE_MAP;
export type BookRadius = keyof typeof BOOK_RADIUS_MAP;
export type BookShadowSize = keyof typeof BOOK_SHADOW_SIZE_MAP;

export { default as Book } from "./Book.vue";
export { default as BookHeader } from "./BookHeader.vue";
export { default as BookTitle } from "./BookTitle.vue";
export { default as BookDescription } from "./BookDescription.vue";
```

::

## API

### Components props

::steps{level=4}

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

::

## Credits

- Credits to [x/UI](https://ui.3x.gl/docs/book) for inspiring this component.
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
