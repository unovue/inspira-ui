---
title: Multi Step Loader
description: A step loader for screens that works with async conditions too.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="MultiStepLoaderDemo" type="examples"}  
::

## API

| Prop Name | Type      | Default | Description                                                                  |
| --------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `loading` | `boolean` | `false` | Controls the visibility of the loader. When `true`, the loader is displayed. |
| `steps`   | `Step[]`  | `[]`    | Array of step objects defining the loading sequence.                         |

| Event Name     | Payload Type | Description                                                          |
| -------------- | ------------ | -------------------------------------------------------------------- |
| `state-change` | `number`     | Emitted when the current step changes, providing the new step index. |
| `complete`     | `void`       | Emitted when all steps have been completed.                          |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="MultiStepLoader.vue" language="vue" componentName="MultiStepLoader" type="ui" id="multi-step-loader"}
::

## Credits

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Multi Step Loader](https://ui.aceternity.com/components/multi-step-loader).
