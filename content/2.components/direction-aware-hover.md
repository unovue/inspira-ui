---
title: Direction Aware Hover
description: A direction aware hover card, that displays an image with dynamic hover effects and customizable content overlay.
---

::ComponentLoader{label="Preview" componentName="DirectionAwareHoverDemo" type="examples"}  
::

The `DynamicImageCard` component is a versatile Nuxt 3 component that displays an image with dynamic hover effects and customizable content overlay.

## API

| Prop Name           | Type     | Default     | Description                                     |
| ------------------- | -------- | ----------- | ----------------------------------------------- |
| `imageUrl`          | `string` | Required    | The URL of the image to be displayed.           |
| `className`         | `string` | `undefined` | Additional CSS classes for the card container.  |
| `imageClassName`    | `string` | `undefined` | Additional CSS classes for the image element.   |
| `childrenClassName` | `string` | `undefined` | Additional CSS classes for the content overlay. |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="DirectionAwareHover.vue" language="vue" componentName="DirectionAwareHover" type="ui" id="direction-aware-hover"}
::

## Credits

- Ported from [Aceternity UI's Direction Aware Hover](https://ui.aceternity.com/components/direction-aware-hover)
