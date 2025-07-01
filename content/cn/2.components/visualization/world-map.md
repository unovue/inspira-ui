---
title: World Map
description: Displays a customizable world map with animated arcs and pulse effects for geographical points.
---

::ComponentLoader{label="Preview" componentName="WorldMapDemo" type="examples" id="world-map"}
::

## API

| Prop Name    | 类型                                                                                                                 | 默认值      | 说明                                                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------- |
| `dots`       | `Array<{ start: { lat: number; lng: number; label?: string }, end: { lat: number; lng: number; label?: string } }> ` | `[]`        | Array of dot objects, each containing a start and end coordinate (latitude, longitude). |
| `class`      | `string`                                                                                                             | `""`        | Additional CSS classes for custom styling.                                              |
| `lineColor`  | `string`                                                                                                             | `"#0EA5E9"` | Color of the arcs and dot borders.                                                      |
| `mapColor`   | `string`                                                                                                             | —           | Main color of the dotted map. (**Required**)                                            |
| `mapBgColor` | `string`                                                                                                             | —           | Background color of the map. (**Required**)                                             |

::alert{type="info"}
**Note:** This component uses Spline & requires `dotted-map` npm package as a dependency.
::

## 使用 CLI 安装

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

你可以复制并粘贴以下代码来创建此组件：

::code-group

::CodeViewerTab{label="WorldMap.vue" language="vue" componentName="WorldMap" type="ui" id="world-map"}
::

::

## Features

- **Animated Arcs**: Smooth arcs between two geographical points using an SVG `path`.
- **Dotted Background**: Renders a dotted map using the DottedMap library.
- **Pulsing Markers**: Each point animates with expanding circles to highlight the location.
- **Dynamic Projection**: Projects latitude/longitude to an 800x400 coordinate plane.
- **Customizable Colors**: Control lineColor, mapColor, and mapBgColor.

## 致谢

- Ported from (World Map by Aceternity UI)[https://ui.aceternity.com/components/world-map].
