---
title: Text Generate Effect
description: A cool text effect that fades in text on page load, one by one.
---

::ComponentLoader{label="Preview" componentName="TextGenerateDemo" type="examples"}  
::

## API

| Prop Name  | Type      | Default  | Description                                               |
| ---------- | --------- | -------- | --------------------------------------------------------- |
| `words`    | `string`  | Required | The text to be displayed with the generating effect.      |
| `duration` | `number`  | `0.7`    | The duration of the text generation animation in seconds. |
| `filter`   | `boolean` | `true`   | The blur of the text.                                     |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="TextGenerateEffect.vue" language="vue" componentName="TextGenerateEffect" type="ui" id="text-generate-effect"}
::

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect).
