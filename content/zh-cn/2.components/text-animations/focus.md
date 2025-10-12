---
title: Focus
description: Highlight words in a sentence with a dynamic blurred effect and animated focus frame. Supports auto-cycling or manual hover focus mode.
---

::ComponentLoader{label="Preview" componentName="FocusDemo" type="examples" id="focus"}
::

## API

| Prop Name                | Type      | Default           | Description                                                    |
| ------------------------ | --------- | ----------------- | -------------------------------------------------------------- |
| `sentence`               | `string`  | `"Inspira Focus"` | Text sentence to display and animate word-by-word.             |
| `manualMode`             | `boolean` | `false`           | If true, focus highlights on hover; otherwise auto-cycles.     |
| `blurAmount`             | `number`  | `5`               | Blur radius in pixels for inactive words.                      |
| `borderColor`            | `string`  | `"green"`         | Color of the animated focus frame border.                      |
| `animationDuration`      | `number`  | `0.5`             | Duration in seconds for the focus frame animation transitions. |
| `pauseBetweenAnimations` | `number`  | `1`               | Pause duration in seconds between auto-focus transitions.      |

## Install using CLI

::InstallationCli{componentId="focus"}
::

## Install Manually

Copy and paste the following code:

::CodeViewer{filename="Focus.vue" language="vue" componentName="Focus" type="ui" id="focus"}
::

## Features

- **Word-by-word focus**: Highlights individual words in a sentence with blur on inactive words.
- **Auto or manual mode**: Cycle focus automatically or control it with mouse hover.
- **Animated focus frame**: Smoothly animates a border frame around the focused word.
- **Customizable styling**: Configure blur amount, border color, and animation timing.
- **Responsive layout**: Supports flexible wrapping and alignment of words.

## Credits

- Inspired from [Focus Text Hover Effect on CodePen](https://codepen.io/CameronFitzwilliam/pen/JJRjMa).
