---
title: Number Ticker
description: Animate numbers to count up or down to a target number
---

::ComponentLoader{label="Preview" componentName="NumberTickerDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="number-ticker"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="NumberTicker.vue" language="vue" componentName="NumberTicker" type="ui" id="number-ticker"}
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

## Credits

- Credits to [Grzegorz Krol](https://github.com/Grzechu335) for porting this component.
- Ported from [Magic UI NumberTicker](https://magicui.design/docs/components/number-ticker).
