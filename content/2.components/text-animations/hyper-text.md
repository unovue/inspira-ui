---
title: Hyper Text
description: A hyper changing text animation as you hover..
---

::ComponentLoader{label="Preview" componentName="HyperTextDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="hyper-text"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="HyperText.vue" language="vue" componentName="HyperText" type="ui" id="hyper-text"}
::

## API

| Prop Name       | Type      | Default  | Description                                               |
| --------------- | --------- | -------- | --------------------------------------------------------- |
| `class`         | `string`  | `""`     | Additional CSS classes to apply to the component.         |
| `text`          | `string`  | Required | Text to animate                                           |
| `duration`      | `number`  | `0.8`    | The total duration (in seconds) for the entire animation. |
| `animateOnLoad` | `boolean` | `true`   | Play animation on load                                    |

## Credits

- Inspired by [Magic UI's Hyper Text](https://magicui.design/docs/components/hyper-text) component.
- Credits to [Prem](https://github.com/premdasvm) for porting this component.
