---
title: Direction Aware Hover
description: A direction aware hover card, that displays an image with dynamic hover effects and customizable content overlay.
---

::ComponentLoader{label="Preview" componentName="DirectionAwareHoverDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="direction-aware-hover"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="DirectionAwareHover.vue" language="vue" componentName="DirectionAwareHover" type="ui" id="direction-aware-hover"}
::

## API

| Prop Name       | Type     | Default     | Description                                     |
| --------------- | -------- | ----------- | ----------------------------------------------- |
| `imageUrl`      | `string` | Required    | The URL of the image to be displayed.           |
| `class`         | `string` | `undefined` | Additional CSS classes for the card container.  |
| `imageClass`    | `string` | `undefined` | Additional CSS classes for the image element.   |
| `childrenClass` | `string` | `undefined` | Additional CSS classes for the content overlay. |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Direction Aware Hover](https://ui.aceternity.com/components/direction-aware-hover)
