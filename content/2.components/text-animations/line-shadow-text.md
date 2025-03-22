---
title: Line Shadow Text
description: A line shadow text component for Magic UI that adds a shadow effect to the text, making it visually appealing and engaging.
---

::ComponentLoader{label="Preview" componentName="LineShadowTextDemo" type="examples" id="line-shadow-text"}
::

## Install using CLI

::InstallationCli{componentId="line-shadow-text"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="LineShadowText.vue" language="vue" componentName="LineShadowText" type="ui" id="line-shadow-text"}
::

## API

| Prop Name     | Type     | Default   | Description                                |
| ------------- | -------- | --------- | ------------------------------------------ |
| `shadowColor` | `string` | `"black"` | The color of the shadow effect             |
| `class`       | `string` | `""`      | Additional CSS classes for custom styling. |
| `as`          | `string` | `"span"`  | The HTML element to render the text as.    |

## Features

- **Slot-Based Content**: Supports default slots for dynamic content, making it flexible for various use cases.

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Ported from [Magic UI's Line Shadow Text](https://magicui.design/docs/components/line-shadow-text)
