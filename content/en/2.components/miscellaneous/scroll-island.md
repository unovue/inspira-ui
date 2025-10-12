---
title: Scroll Island
description: A dynamic and interactive component that displays scroll progress with animated visuals and an expandable area for additional content.
---

::ComponentLoader{label="Preview" componentName="ScrollIslandDemo" type="examples" id="scroll-island"}
::

::alert{type="info"}
**Note:** This component requires `@number-flow/vue` as a dependency.
::

## Install using CLI

::InstallationCli{componentId="scroll-island"}
::

## Install Manually

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install @number-flow/vue
```

```bash [pnpm]
pnpm install @number-flow/vue
```

```bash [bun]
bun add @number-flow/vue
```

```bash [yarn]
yarn add @number-flow/vue
```

::

Copy and paste the following code

::CodeViewer{filename="ScrollIsland.vue" language="vue" componentName="ScrollIsland" type="ui" id="scroll-island"}  
::
::

## API

| Prop Name | Type     | Default      | Description                                     |
| --------- | -------- | ------------ | ----------------------------------------------- |
| `class`   | `string` | `""`         | Additional CSS classes for custom styling.      |
| `title`   | `string` | `"Progress"` | Title displayed in the header of the component. |
| `height`  | `string` | `44`         | Height of the component.                        |

## Features

- **Scroll Progress Tracking**: Dynamically displays the scroll progress of the page as a percentage.
- **Expandable Layout**: Transforms between a circular and a rectangular layout based on user interaction.
- **Animated Circular Progress Bar**: Displays a visually appealing progress bar with smooth transitions.
- **Dynamic Content Slot**: Supports additional content in the expandable section.
- **Dark Mode Support**: Adapts to the dark or light mode of the user's system preferences.

## Credits

- Inspired by the work of [Ali Samadi](https://x.com/alisamadi__/status/1854312982559502556) & [Nitish Khagwal](https://x.com/nitishkmrk)
- [NumberFlow by Maxwell Barvian](https://number-flow.barvian.me/vue) for number formatting and animations.
