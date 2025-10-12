---
title: Multi Step Loader
description: A step loader for screens that works with async conditions too.
---

::ComponentLoader{label="Preview" componentName="MultiStepLoaderDemo" type="examples"}  
::

## Install using CLI

::InstallationCli{componentId="multi-step-loader"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="MultiStepLoader.vue" language="vue" componentName="MultiStepLoader" type="ui" id="multi-step-loader"}
::

## API

| Prop Name         | Type      | Default | Description                                                                  |
| ----------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `loading`         | `boolean` | `false` | Controls the visibility of the loader. When `true`, the loader is displayed. |
| `steps`           | `Step[]`  | `[]`    | Array of step objects defining the loading sequence.                         |
| `defaultDuration` | `number`  | `1500`  | The duration of each step in milliseconds.                                   |
| `preventClose`    | `boolean` | `false` | If `true`, the close button will not be shown.                               |

| Event Name     | Payload Type | Description                                                          |
| -------------- | ------------ | -------------------------------------------------------------------- |
| `state-change` | `number`     | Emitted when the current step changes, providing the new step index. |
| `complete`     | `void`       | Emitted when all steps have been completed.                          |
| `close`        | `void`       | Emitted when the loader is closed by button.                         |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Multi Step Loader](https://ui.aceternity.com/components/multi-step-loader).
