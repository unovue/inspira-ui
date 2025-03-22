---
title: Compare
description: Slide to compare any two pieces of content - images, designs, code, or custom elements
---

::ComponentLoader{label="Preview" componentName="CompareDemo" type="examples" id="compare"}
::

## Install using CLI

::InstallationCli{componentId="compare"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="Compare.vue" language="vue" componentName="Compare" type="ui" id="compare"}
:CodeViewerTab{label="StarField.vue" language="vue" componentName="StarField" type="ui" id="compare"}

::

## Examples

Drag handle with custom content

::ComponentLoader{label="Preview" componentName="CompareDragDemo" type="examples" id="compare"}
::

AutoPlay

::ComponentLoader{label="Preview" componentName="CompareAutoplayDemo" type="examples" id="compare"}
::

Custom Content with AutoPlay

::ComponentLoader{label="Preview" componentName="CompareCustomContentDemo" type="examples" id="compare"}
::

## API

### Props

| Prop Name                 | Type                | Default          | Description                               |
| ------------------------- | ------------------- | ---------------- | ----------------------------------------- |
| `firstImage`              | `string`            | `""`             | URL of the first image                    |
| `secondImage`             | `string`            | `""`             | URL of the second image                   |
| `firstImageAlt`           | `string`            | `"First image"`  | Alt text for first image                  |
| `secondImageAlt`          | `string`            | `"Second image"` | Alt text for second image                 |
| `class`                   | `string`            | `""`             | Additional classes for the component      |
| `firstContentClass`       | `string`            | `""`             | Classes applied to first content wrapper  |
| `secondContentClass`      | `string`            | `""`             | Classes applied to second content wrapper |
| `initialSliderPercentage` | `number`            | `50`             | Initial position of slider (0-100)        |
| `slideMode`               | `"hover" \| "drag"` | `"hover"`        | Interaction mode for the slider           |
| `showHandlebar`           | `boolean`           | `true`           | Show/hide the handle bar                  |
| `autoplay`                | `boolean`           | `false`          | Enable/disable autoplay                   |
| `autoplayDuration`        | `number`            | `5000`           | Duration of autoplay cycle in ms          |

### Events

| Event Name          | Payload  | Description                                  |
| ------------------- | -------- | -------------------------------------------- |
| `update:percentage` | `number` | Emitted when slider position changes (0-100) |
| `drag:start`        | -        | Emitted when dragging starts                 |
| `drag:end`          | -        | Emitted when dragging ends                   |
| `hover:enter`       | -        | Emitted when mouse enters component          |
| `hover:leave`       | -        | Emitted when mouse leaves component          |

### Slots

| Slot Name        | Default Content                                   | Description                                                                                                                       |
| ---------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `first-content`  | `<img>` element if `firstImage` prop is provided  | Content shown on the left/first side of the comparison. Has full access to component width/height.                                |
| `second-content` | `<img>` element if `secondImage` prop is provided | Content shown on the right/second side of the comparison. Has full access to component width/height.                              |
| `handle`         | Default slider handle with dots icon              | Custom handle for the slider. Automatically positioned at the dividing line. Should handle positioning with absolute positioning. |

## Credits

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Compare](https://ui.aceternity.com/components/compare).
