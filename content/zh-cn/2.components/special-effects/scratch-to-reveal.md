---
title: Scratch To Reveal
description: The ScratchToReveal component creates an interactive scratch-off effect with customizable dimensions and animations, revealing hidden content beneath.
---

::ComponentLoader{label="Preview" componentName="ScratchToRevealDemo" type="examples" id="scratch-to-reveal"}
::

## Install using CLI

::InstallationCli{componentId="scratch-to-reveal"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="ScratchToReveal.vue" language="vue" componentName="ScratchToReveal" type="ui" id="scratch-to-reveal"}
::

## API

| Prop Name              | Type                     | Default | Description                                                                                   |
| ---------------------- | ------------------------ | ------- | --------------------------------------------------------------------------------------------- |
| `class`                | `string`                 | `""`    | The class name to apply to the component.                                                     |
| `width`                | `number`                 | `""`    | Width of the scratch container.                                                               |
| `height`               | `number`                 | `""`    | Height of the scratch container.                                                              |
| `minScratchPercentage` | `number`                 | `50`    | Minimum percentage of scratched area to be considered as completed (Value between 0 and 100). |
| `gradientColors`       | `[string,string,string]` | `-`     | Gradient colors for the scratch effect.                                                       |

| Event Name | Payload | Description                                        |
| ---------- | ------- | -------------------------------------------------- |
| `complete` | `-`     | Callback function called when scratch is completed |

| Slot Name | Default Content | Description                            |
| --------- | --------------- | -------------------------------------- |
| `default` | `-`             | The text below the scratch-off ticket. |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="ScratchToReveal.vue" language="vue" componentName="ScratchToReveal" type="ui" id="scratch-to-reveal"}
::

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired by [MagicUI Scratch To Reveal](https://magicui.design/docs/components/scratch-to-reveal).
