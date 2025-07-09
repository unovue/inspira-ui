---
title: 旋转地球
description: A 3D interactive globe visualization with customizable arcs, points, and animation options inspired from Github.
---

::ComponentLoader{label="预览" componentName="GithubGlobeDemo" type="examples" id="globe"}
::

::alert{type="info"}
**注意:** This component uses Three.js & requires `three`, `three-globe` & `postprocessing` npm package as a dependency.
::

::alert{type="warning"}
**For Nuxt users**:
Use `<ClientOnly>` tag to wrap this component to avoid `window is not defined` error.
::

## 通过 CLI 安装

::InstallationCli{componentId="github-globe"}
::

## 手动安装

::steps{level=4}

#### Install the dependencies

::code-group

```bash [npm]
npm install three postprocessing three-globe
npm install -D @types/three
```

```bash [pnpm]
pnpm install three postprocessing three-globe
pnpm install -D @types/three
```

```bash [bun]
bun add three postprocessing three-globe
bun add -d @types/three
```

```bash [yarn]
yarn add three postprocessing three-globe
yarn add --dev @types/three
```

::

复制并粘贴以下代码：

::CodeViewer{filename="GithubGlobe.vue" language="vue" componentName="GithubGlobe" type="ui" id="github-globe"}  
::

#### Download GeoJSON file

Download a GeoJSON file containing the globe's geographical data from [GeoJSON Maps](https://geojson-maps.kyd.au/) by customizing the continents and detail level. Save the downloaded file as `globe.json` in the same folder as your component.

::

## API

| Prop 名称     | 类型         | 默认值 | 描述                                                                                                |
| ------------- | ------------ | ------ | --------------------------------------------------------------------------------------------------- |
| `globeConfig` | `object`     | `{}`   | Configuration options for the globe, including colors, atmosphere, rotation speed, and lighting.    |
| `data`        | `Position[]` | `[]`   | Array of positions representing arcs and points on the globe, with latitude, longitude, color, etc. |
| `class`       | `string`     | `""`   | Additional CSS classes for custom styling.                                                          |

### `globeConfig` Properties

| Property             | 类型      | 默认值                  | 描述                                                     |
| -------------------- | --------- | ----------------------- | -------------------------------------------------------- |
| `pointSize`          | `number`  | `1`                     | Size of individual points on the globe.                  |
| `globeColor`         | `string`  | `"#1d072e"`             | Color of the globe surface.                              |
| `showAtmosphere`     | `boolean` | `true`                  | Whether to display atmosphere around the globe.          |
| `atmosphereColor`    | `string`  | `"#ffffff"`             | Color of the atmosphere around the globe.                |
| `atmosphereAltitude` | `number`  | `0.1`                   | Altitude of the atmosphere layer.                        |
| `emissive`           | `string`  | `"#000000"`             | Emissive color for the globe material.                   |
| `emissiveIntensity`  | `number`  | `0.1`                   | Intensity of the emissive color.                         |
| `shininess`          | `number`  | `0.9`                   | Shininess of the globe material.                         |
| `polygonColor`       | `string`  | `rgba(255,255,255,0.7)` | Color of polygon boundaries on the globe.                |
| `arcTime`            | `number`  | `2000`                  | Duration for arcs animation.                             |
| `arcLength`          | `number`  | `0.9`                   | Length of arcs on the globe.                             |
| `rings`              | `number`  | `1`                     | Number of rings to display per point.                    |
| `maxRings`           | `number`  | `3`                     | Maximum rings around each point.                         |
| `initialPosition`    | `object`  | `{ lat: 0, lng: 0 }`    | Initial latitude and longitude for the globe's position. |
| `autoRotate`         | `boolean` | `false`                 | Automatically rotate the globe.                          |
| `autoRotateSpeed`    | `number`  | `0.8`                   | Speed of auto-rotation when enabled.                     |

### `data` Structure (Position)

| Field      | 类型     | 描述                                            |
| ---------- | -------- | ----------------------------------------------- |
| `order`    | `number` | Order of the point or arc for sequencing.       |
| `startLat` | `number` | Starting latitude for an arc.                   |
| `startLng` | `number` | Starting longitude for an arc.                  |
| `endLat`   | `number` | Ending latitude for an arc.                     |
| `endLng`   | `number` | Ending longitude for an arc.                    |
| `arcAlt`   | `number` | Altitude of the arc (determines arc height).    |
| `color`    | `string` | Color of the arc or point in hex or RGB format. |

## 功能特性

- **3D Interactive Globe**: A Three.js-based globe with interactive controls and orbit support.
- **Customizable Globe & Atmosphere**: Allows configuration of globe color, atmosphere visibility, and colors.
- **Arcs & Points Visualization**: Display arcs and points on the globe, simulating connections and locations.
- **Auto-Rotate and Zoom**: Supports auto-rotation, zoom, and customizable controls for a dynamic experience.
- **Responsive Design**: Adapts to container size and maintains performance with WebGL rendering.

## 感谢

- Built with Three.js and Three Globe libraries, designed for global data visualizations and dynamic effects.
- Ported from [Aceternity UI](https://ui.aceternity.com/components/github-globe).
