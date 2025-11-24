---
title: World Map
description: Displays a customizable world map with animated arcs and pulse effects for geographical points.
category: Visualization
tags: [css, tailwind, aceternity-ui]
---

::ComponentViewer{demoFile="WorldMapDemo.vue" config="WorldMapConfig" componentId="world-map" :componentFiles='["WorldMap.vue"]' dependencies="dotted-map"}

#api

## API

| Prop Name    | Type                                                                                                                 | Default     | Description                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `dots`       | `Array<{ start: { lat: number; lng: number; label?: string }, end: { lat: number; lng: number; label?: string } }> ` | `[]`        | Array of dot objects, each containing a start and end coordinate (latitude, longitude). |
| `class`      | `string`                                                                                                             | `""`        | Additional CSS classes for custom styling.                                              |
| `lineColor`  | `string`                                                                                                             | `"#0EA5E9"` | Color of the arcs and dot borders.                                                      |
| `mapColor`   | `string`                                                                                                             | —           | Main color of the dotted map. (**Required**)                                            |
| `mapBgColor` | `string`                                                                                                             | —           | Background color of the map. (**Required**)                                             |

#credits

- Ported from (World Map by Aceternity UI)[https://ui.aceternity.com/components/world-map].

::
