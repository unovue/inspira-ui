---
title: Animate Grid
description: Skew Animation grid with box shadow.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="AnimateGridDemo" type="examples" id="animate-grid"}
::

## API

| Prop Name       | Type     | Default                     | Description                                         |
| --------------- | -------- | --------------------------- | --------------------------------------------------- |
| `textGlowStart` | `string` | `"rgba(56, 239, 125, 0.5)"` | Color of the box shadow start.                      |
| `textGlowEnd`   | `string` | `"rgba(56, 239, 125, 1)"`   | Color of the box shadow end.                        |
| `cards`         | `[]`     | `"[{logo: 'src'}]"`         | Cards to display in grid.                           |
| `class`         | `string` | `""`                        | Additional tailwind CSS classes for custom styling. |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="AnimateGrid.vue" language="vue" componentName="AnimateGrid" type="ui" id="animate-grid"}
::

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
