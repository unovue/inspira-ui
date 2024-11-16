---
title: Flip Card
description: A dynamic flip card with smooth 180-degree flipping animations along both the X and Y axes, providing an engaging and interactive visual effect.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="FlipCardDemo" type="examples" id="flip-card"}
::

## Examples

### Horizontal Flip

::ComponentLoader{label="Preview" componentName="FlipCardHorizontalDemo" type="examples" id="flip-card"}
::

## API

| Prop Name       | Type     | Default | Description                                |
| --------------- | -------- | ------- | ------------------------------------------ |
| `class`         | `string` | `-`     | The class to be applied to the component.  |
| `image`\*       | `string` | `-`     | Pass the image URL to display the image.   |
| `title`\*       | `string` | `-`     | You can pass the title as you want.        |
| `subtitle` \*   | `string` | `-`     | You can pass the sub title as you want.    |
| `description`\* | `string` | `-`     | You can pass the description as you want.  |
| `rotate`        | `x \| y` | `y`     | You can pass the rotate value as you want. |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="FlipCard.vue" language="vue" componentName="FlipCard" type="ui" id="flip-card"}
::

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
