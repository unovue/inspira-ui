---
title: Flip Card
description: A dynamic flip card with smooth 180-degree flipping animations along both the X and Y axes, providing an engaging and interactive visual effect.
---

::ComponentLoader{label="Preview" componentName="FlipCardDemo" type="examples" id="flip-card"}
::

## Install using CLI

::InstallationCli{componentId="flip-card"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="FlipCard.vue" language="vue" componentName="FlipCard" type="ui" id="flip-card"}
::

## Examples

### Horizontal Flip

::ComponentLoader{label="Preview" componentName="FlipCardHorizontalDemo" type="examples" id="flip-card"}
::

## API

| Prop Name | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| `class`   | `string` | `-`     | The class to be applied to the component.  |
| `rotate`  | `x \| y` | `y`     | You can pass the rotate value as you want. |

| Slot Name | Description                 |
| --------- | --------------------------- |
| `default` | Component to show as front. |
| `back`    | Component to show as back.  |

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
