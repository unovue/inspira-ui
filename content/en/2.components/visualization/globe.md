---
title: Globe
description: An interactive rotating globe component.
category: Visualization
tags: [css, tailwind, cobe, magic-ui]
---

::ComponentViewer{demoFile="GlobeDemo.vue" config="GlobeConfig" componentId="globe" :componentFiles='["Globe.vue"]' dependencies="cobe vue-use-spring"}

#api

## API

| Prop Name   | Type          | Default | Description                                                                                                 |
| ----------- | ------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `class`     | `string`      | `""`    | Additional CSS classes for custom styling.                                                                  |
| `config`    | `COBEOptions` | N/A     | Configuration object for the globe, following **[COBE]**(https://cobe.vercel.app/docs/api) library options. |
| `mass`      | `number`      | `1`     | Mass parameter for the spring animation controlling rotation inertia.                                       |
| `tension`   | `number`      | `280`   | Tension parameter for the spring animation, affecting responsiveness.                                       |
| `friction`  | `number`      | `100`   | Friction parameter for the spring animation, affecting damping.                                             |
| `precision` | `number`      | `0.001` | Precision parameter for the spring animation calculations.                                                  |

#credits

- Built using the [cobe](https://github.com/shuding/cobe) library for WebGL globe visualization.
- Ported from [Magic UI](https://magicui.design/docs/components/globe).

::
