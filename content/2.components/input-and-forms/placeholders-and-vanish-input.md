---
title: Placeholders And Vanish Input
description: Sliding in placeholders and vanish effect of input on submit
---

::ComponentLoader{label="Preview" componentName="VanishingInputDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="vanishing-input"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="VanishingInput.vue" language="vue" componentName="VanishingInput" type="ui" id="vanishing-input"}
::

## API

| Prop Name      | Type            | Default                                               | Description                                                                     |
| -------------- | --------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| `placeholders` | `Array<string>` | `["Placeholder 1", "Placeholder 2", "Placeholder 3"]` | An array of placeholder texts that cycle through as prompts in the input field. |

This component listens to the following events emitted by the `VanishingInput` component:

| Event Name | Parameters | Description                             |
| ---------- | ---------- | --------------------------------------- |
| `change`   | `Event`    | Triggered when the input value changes. |
| `submit`   | `string`   | Triggered when the input is submitted.  |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for porting this component.

- Ported from [Aceternity UI's Placeholders And Vanish Input](https://ui.aceternity.com/components/placeholders-and-vanish-input).
