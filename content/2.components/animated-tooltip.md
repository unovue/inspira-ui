---
title: Animated Tooltip
description: A cool tooltip that reveals on hover, follows mouse pointer
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="AnimatedTooltipDemo" type="examples" id="animated-tooltip"}
::

## API

| Prop Name | Type                                                                    | Default | Description                                                                                                                                 |
| --------- | ----------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `Array<{id: number, name: string, designation: string, image: string}>` | `[]`    | An array of objects, each representing an item. Each object in the array should have the following properties: id, name, designation, image |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewerTab{filename="AnimatedTooltip.vue" language="vue" componentName="AnimatedTooltip" type="ui" id="animated-tooltip"}
::

## Credits

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Animated Tooltip](https://ui.aceternity.com/components/animated-tooltip).
