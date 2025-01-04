---
title: Book
description: A 3D book component featuring customizable sizes and color gradients.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="BookDemo" type="examples"}
::

## API

::steps

### `Book`

The `Book` component serves as a wrapper for creating an interactive 3D book effect.

#### Props

| Prop Name    | Type    | Default | Description                                   |
| ------------ | ------- | ------- | --------------------------------------------- |
| `class`      | String  | -       | Additional classes for styling the component. |
| `duration`   | Number  | 1000    | Animation duration in milliseconds.           |
| `color`      | String  | "zinc"  | Color theme for the book gradient.            |
| `isStatic`   | Boolean | false   | Disables hover animations when true.          |
| `size`       | String  | "md"    | Size variant of the book.                     |
| `radius`     | String  | "md"    | Border radius variant of the book.            |
| `shadowSize` | String  | "lg"    | Shadow size variant of the book.              |

#### Usage

```vue [MyBookComponent.vue]
<Book class="additional-class">
  <!-- Your content here -->
</Book>
```

### `BookHeader`

The `BookHeader` component is a flexible container with preserved 3D styling. It is intended to be used within a `Book` to hold content with a 3D transformation effect.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#### Usage

```vue [MyBookComponent.vue]
<BookHeader class="additional-class">
  <!-- Your content here -->
</BookHeader>
```

### `BookTitle`

The `BookTitle` component is a flexible container with preserved 3D styling. It is intended to be used within a `Book` to hold content with a 3D transformation effect.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#### Usage

```vue [MyBookComponent.vue]
<BookTitle class="additional-class">
  <!-- Your text here -->
</BookTitle>
```

### `BookDescription`

The `BookDescription` component is a flexible container with preserved 3D styling. It is intended to be used within a `Book` to hold content with a 3D transformation effect.

#### Props

| Prop Name | Type   | Default | Description                            |
| --------- | ------ | ------- | -------------------------------------- |
| `class`   | String | -       | Additional classes for custom styling. |

#### Usage

```vue [MyBookComponent.vue]
<BookDescription class="additional-class">
  <!-- Your text here -->
</BookDescription>
```

::

## Component Code

You can copy and paste the following code to create these components:

::code-group
::CodeViewerTab{label="Book.vue" icon="vscode-icons:file-type-vue" componentName="Book" type="ui" id="book"}
::

::CodeViewerTab{label="BookHeader.vue" icon="vscode-icons:file-type-vue" componentName="BookHeader" type="ui" id="book"}
::

::CodeViewerTab{label="BookTitle.vue" icon="vscode-icons:file-type-vue" componentName="BookTitle" type="ui" id="book"}
::

::CodeViewerTab{label="BookDescription.vue" icon="vscode-icons:file-type-vue" componentName="BookDescription" type="ui" id="book"}
::

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
