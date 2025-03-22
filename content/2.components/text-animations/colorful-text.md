---
title: Colourful Text
description: A text component with various colours, filter and scale effects.
---

::ComponentLoader{label="Preview" componentName="ColourfulTextDemo" type="examples" id="colourful-text"}
::

## Install using CLI

::InstallationCli{componentId="colourful-text"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="ColourfulText.vue" language="vue" componentName="ColourfulText" type="ui" id="colourful-text"}
::

## API

| Prop Name    | Type       | Default                                                                                                                                                                                                            | Description                                                                                                                                               |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`       | `string`   | `"black"`                                                                                                                                                                                                          | The text string to be rendered with colorful animated characters. Each character will be individually animated with color transitions and motion effects. |
| `colors`     | `string[]` | `[ "rgb(131, 179, 32)", "rgb(47, 195, 106)", "rgb(42, 169, 210)", "rgb(4, 112, 202)", "rgb(107, 10, 255)", "rgb(183, 0, 218)", "rgb(218, 0, 171)", "rgb(230, 64, 92)", "rgb(232, 98, 63)", "rgb(249, 129, 47)", ]` | The text use colors.                                                                                                                                      |
| `startColor` | `string`   | `"rgb(255,255,255)"`                                                                                                                                                                                               | The char start color.                                                                                                                                     |
| `duration`   | `number`   | `5`                                                                                                                                                                                                                | The animation duration time in seconds.                                                                                                                   |

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Ported from [Aceternity UI Colourful Text](https://ui.aceternity.com/components/colourful-text)
