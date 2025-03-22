---
title: Text Generate Effect
description: A cool text effect that fades in text on page load, one by one.
---

::ComponentLoader{label="Preview" componentName="TextGenerateDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="text-generate-effect"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="TextGenerateEffect.vue" language="vue" componentName="TextGenerateEffect" type="ui" id="text-generate-effect"}
::

## Examples

Two text with different delay

::ComponentLoader{label="Preview" componentName="TextGenerateEffectDemoDelayed" type="examples" id="text-generate-effect"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## API

| Prop Name  | Type      | Default  | Description                                                            |
| ---------- | --------- | -------- | ---------------------------------------------------------------------- |
| `words`    | `string`  | Required | The text to be displayed with the generating effect.                   |
| `duration` | `number`  | `0.7`    | The duration of the text generation animation in seconds.              |
| `delay`    | `number`  | `0`      | The delay before the text generation animation starts in milliseconds. |
| `filter`   | `boolean` | `true`   | The blur of the text.                                                  |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Text Generate Effect](https://ui.aceternity.com/components/text-generate-effect).
