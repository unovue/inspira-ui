---
title: Morphing Tabs
description: This is a morphing tabs interaction, recreated by Preet's work and featuring the gooey effect component.
category: Miscellaneous
tags: [css, tailwind]
---

::ComponentViewer{demoFile="MorphingTabsDemo.vue" config="MorphingTabsConfig" componentId="morphing-tabs" :componentFiles='["MorphingTabs.vue"]'}

#api

## API

| Prop Name          | Type       | Default | Description                                    |
| ------------------ | ---------- | ------- | ---------------------------------------------- |
| `class`            | `string`   | `""`    | Additional class names to style the component. |
| `tabs`             | `string[]` | `[]`    | Tabs.                                          |
| `activeTab`        | `string`   | `""`    | Current active Tab.                            |
| `margin`           | `number`   | `20`    | Active tab margin left and right.              |
| `blurStdDeviation` | `number`   | `6`     | Svg blur stdDeviation, tab rounded use it.     |

#credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [@Preet "Exclusion tabs"](https://x.com/wickedmishra/status/1823026659894940124).

::
