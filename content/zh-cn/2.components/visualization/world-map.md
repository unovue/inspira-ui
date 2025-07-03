---
title: World Map
description: Displays a customizable world map with animated arcs and pulse effects for geographical points.
---

::ComponentLoader{label="预览" componentName="WorldMapDemo" type="examples" id="world-map"}
::

## API

| Prop 名称    | Type                                                                                                                 | Default     | 描述                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `dots`       | `Array<{ start: { lat: number; lng: number; label?: string }, end: { lat: number; lng: number; label?: string } }> ` | `[]`        | Array of dot objects, each containing a start and end coordinate (latitude, longitude). |
| `class`      | `string`                                                                                                             | `""`        | Additional CSS classes for custom styling.                                              |
| `lineColor`  | `string`                                                                                                             | `"#0EA5E9"` | Color of the arcs and dot borders.                                                      |
| `mapColor`   | `string`                                                                                                             | —           | Main color of the dotted map. (**Required**)                                            |
| `mapBgColor` | `string`                                                                                                             | —           | Background color of the map. (**Required**)                                             |

::alert{type="info"}
**注意:** This component uses Spline & requires `dotted-map` npm package as a dependency.
::

## 通过 CLI 安装

::InstallationCli{componentId="world-map"}
::

## 手动安装

### Install the dependencies

::code-group

```bash [npm]
npm install dotted-map
```

```bash [pnpm]
pnpm install dotted-map
```

```bash [bun]
bun add dotted-map
```

```bash [yarn]
yarn add dotted-map
```

::

## Component Code

You can 复制并粘贴以下代码： to create this component:

::code-group

::CodeViewerTab{label="WorldMap.vue" language="vue" componentName="WorldMap" type="ui" id="world-map"}
::

::

## 功能特性

- **Animated Arcs**: Smooth arcs between two geographical points using an SVG `path`.
- **Dotted Background**: Renders a dotted map using the DottedMap library.
- **Pulsing Markers**: Each point animates with expanding circles to highlight the location.
- **Dynamic Projection**: Projects latitude/longitude to an 800x400 coordinate plane.
- **Customizable Colors**: Control lineColor, mapColor, and mapBgColor.

## Credits

- Ported from (World Map by Aceternity UI)[https://ui.aceternity.com/components/world-map].
