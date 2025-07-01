---
title: Interactive Grid Pattern
description: A interactive background grid pattern made with SVGs, fully customizable.
---

::ComponentLoader{label="Preview" componentName="InteractiveGridPatternDemo" type="examples" id="interactive-grid-pattern"}
::

## Install using CLI

::InstallationCli{componentId="interactive-grid-pattern"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="InteractiveGridPattern.vue" language="vue" componentName="InteractiveGridPattern" type="ui" id="interactive-grid-pattern"}
::

## Examples

::ComponentLoader{label="Preview" componentName="InteractiveGridPatternColoredDemo" type="examples" id="interactive-grid-pattern"}
::

## API

#### Props

| Prop Name          | Type               | Default    | Description                                   |
| ------------------ | ------------------ | ---------- | --------------------------------------------- |
| `className`        | `string`           | -          | Additional classes for styling the component. |
| `squaresClassName` | `string`           | -          | Additional classes for styling the squares.   |
| `width`            | `number`           | `40`       | Width of the square in pixels.                |
| `height`           | `number`           | `40`       | Height of the square in pixels.               |
| `squares`          | `[number, number]` | `[24, 24]` | Number of squares in the grid pattern.        |

## Credits

- Inspired by [MagicUI](https://magicui.design/docs/components/interactive-grid-pattern).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
