---
title: Animate Grid
description: Skew Animation grid with box shadow.
---

::ComponentLoader{label="Preview" componentName="AnimateGridDemo" type="examples" id="animate-grid"}
::

## Install using CLI

::InstallationCli{componentId="animate-grid"}
::

## Install Manually

::steps{level=4}

Copy and paste the following code

::CodeViewer{filename="AnimateGrid.vue" language="vue" componentName="AnimateGrid" type="ui" id="animate-grid"}
::

#### Add SVG file

Add at least one SVG file to the same folder as your component and update the import in your component to use it

::

## API

| Prop Name            | Type     | Default             | Description                                         |
| -------------------- | -------- | ------------------- | --------------------------------------------------- |
| `textGlowStartColor` | `string` | `"#38ef7d80"`       | Color of the box shadow start.                      |
| `textGlowEndColor`   | `string` | `"#38ef7d"`         | Color of the box shadow end.                        |
| `perspective`        | `number` | `600`               | You can pass perspective to transform CSS property. |
| `rotateX`            | `number` | `-1`                | You can pass rotateX to transform CSS property.     |
| `rotateY`            | `number` | `-15`               | You can pass rotateY to transform CSS property.     |
| `cards`              | `[]`     | `"[{logo: 'src'}]"` | Cards to display in grid.                           |
| `class`              | `string` | `""`                | Additional tailwind CSS classes for custom styling. |

## Features

- **Slot-Based Content**: Supports a default slot to add content inside the Animate Grid container.

## Credits

- Thanks to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for providing this component.
