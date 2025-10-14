---
title: Container Text Flip
description: A container that flips through words, animating the width.
---

::ComponentLoader{label="Preview" componentName="ContainerTextFlipDemo" type="examples" id="container-text-flip"}
::

## Install using CLI

::InstallationCli{componentId="container-text-flip"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="ContainerTextFlip.vue" language="vue" componentName="ContainerTextFlip" type="ui" id="container-text-flip"}
::

## Example

Standard

::ComponentLoader{label="Preview" componentName="ContainerTextFlipStandardDemo" type="examples" id="container-text-flip"}
::

Hero section with animation

::ComponentLoader{label="Preview" componentName="ContainerTextFlipHeroDemo" type="examples" id="container-text-flip"}
::

## API

| Prop Name           | Type       | Default                                        | Description                                          |
| ------------------- | ---------- | ---------------------------------------------- | ---------------------------------------------------- |
| `words`             | `string[]` | `["better", "modern", "beautiful", "awesome"]` | Array of words to cycle through in the animation     |
| `interval`          | `number`   | `3000`                                         | Time in milliseconds between word transitions        |
| `animationDuration` | `number`   | `700`                                          | Duration of the transition animation in milliseconds |
| `class`             | `string`   | ``                                             | Additional CSS classes to apply to the container     |
| `textClass`         | `string`   | ``                                             | Additional CSS classes to apply to the text          |

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Aceternity UI Container Text Flip](https://ui.aceternity.com/components/container-text-flip).
