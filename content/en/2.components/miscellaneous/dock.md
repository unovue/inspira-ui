---
title: Dock
description: A macOS-style dock with magnifying icons as you hover over them.
category: Miscellaneous
tags: [css, tailwind]
---

::ComponentViewer{demoFile="DockDemo.vue" config="DockConfig" componentId="dock" :componentFiles='["Dock.vue", "DockIcon.vue", "DockSeparator.vue", "index.ts", "types.ts", "injectionKeys.ts"]'}

#api

## API

### `Dock`

| Prop Name       | Type     | Description                                                           |
| --------------- | -------- | --------------------------------------------------------------------- |
| `class`         | `string` | Additional classes to apply to the dock container.                    |
| `magnification` | `number` | Magnification factor for the dock icons on hover (default: 60).       |
| `distance`      | `number` | Distance from the icon center where magnification applies.            |
| `direction`     | `string` | Alignment of icons (`top`, `middle`, `bottom`) (default: middle).     |
| `orientation`   | `string` | Orientation of Dock (`vertical`, `horizontal`) (default: horizontal). |

| Slot Name | Description                                          |
| --------- | ---------------------------------------------------- |
| `default` | Dock Dock or other child components to be displayed. |

### `DockIcon`

| Slot Name | Description                                             |
| --------- | ------------------------------------------------------- |
| `default` | Component or icon to be displayed inside the dock icon. |

#credits

- Credits to macOS Dock for the design inspiration and the fantastic hover magnification effect.

::
