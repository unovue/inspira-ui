---
title: Flip Words
description: A component that flips through a list of words.
---

::ComponentLoader{label="Preview" componentName="FlipWordsDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="flip-words"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="FlipWords.vue" language="vue" componentName="FlipWords" type="ui" id="flip-words"}
::

## API

| Prop Name  | Type     | Description                                                                                |
| ---------- | -------- | ------------------------------------------------------------------------------------------ |
| `words`    | `Array`  | An array of words to be displayed and animated.                                            |
| `duration` | `number` | Duration (in milliseconds) for each word to be displayed before flipping to the next word. |
| `class`    | `string` | Additional CSS classes to apply to the component.                                          |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Flip Words](https://ui.aceternity.com/components/flip-words)
