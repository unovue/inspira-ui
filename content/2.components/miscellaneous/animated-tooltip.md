---
title: Animated Tooltip
description: A cool tooltip that reveals on hover, follows mouse pointer
---

::ComponentLoader{label="Preview" componentName="AnimatedTooltipDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="animated-tooltip"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="AnimatedTooltip.vue" language="vue" componentName="AnimatedTooltip" type="ui" id="animated-tooltip"}
::

## API

| Prop Name | Type                                                                    | Default | Description                                                                                                                                 |
| --------- | ----------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `Array<{id: number, name: string, designation: string, image: string}>` | `[]`    | An array of objects, each representing an item. Each object in the array should have the following properties: id, name, designation, image |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Animated Tooltip](https://ui.aceternity.com/components/animated-tooltip).
