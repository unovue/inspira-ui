---
title: Glare Card
description: A glare effect that happens on hover, as seen on Linear's website.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="GlareCardDemo" type="examples" id="glare-card"}
::

## Examples

### Multiple Cards

::ComponentLoader{label="Preview" componentName="GlareMultiCardDemo" type="examples" id="glare-card"}
::

## API

| Prop Name   | Type     | Default | Description                                               |
| ----------- | -------- | ------- | --------------------------------------------------------- |
| `class`     | `string` | `-`     | Additional Tailwind CSS class names to apply to the card. |
| `cardWidth` | `number` | `320`   | Adjust the card width based on your needs.                |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="GlareCard.vue" language="vue" componentName="GlareCard" type="ui" id="glare-card"}
::

## Features

- **Slot Support**: Easily add any content inside the component using the default slot.

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Inspired from [Aceternity UI](https://ui.aceternity.com/components/glare-card).
