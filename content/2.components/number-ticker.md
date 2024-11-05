---
title: Number Ticker
description: Animate numbers to count up or down to a target number
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="NumberTickerDemo" type="examples"}
::

---

## API

| Prop Name       | Type                | Default        | Description                                                       |
| --------------- | ------------------- | -------------- | ----------------------------------------------------------------- |
| `value`         | `int`               | `0`            | Value to count to                                                 |
| `direction`     | `up \| down`        | `up`           | Direction to count in                                             |
| `decimalPlaces` | `number`            | `0`            | Number of decimal places to show                                  |
| `delay`         | `number`            | `0`            | Delay before counting (in milliseconds)                           |
| `duration`      | `number`            | `1000`         | Total duration for the entire animation (in milliseconds).        |
| `transition`    | `TransitionPresets` | `easeOutCubic` | Name of transition preset (https://vueuse.org/core/useTransition) |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="NumberTicker.vue" language="vue" componentName="NumberTicker" type="ui" id="number-ticker"}
::

## Credits

- Credits to [Grzegorz Krol](https://github.com/Grzechu335) for porting this component.
- Ported from [Magic UI NumberTicker](https://magicui.design/docs/components/number-ticker).
