---
title: Github Globe
description: A 3D interactive globe visualization with customizable arcs, points, and animation options inspired from Github.
category: Visualization
tags: [css, tailwind, threejs, aceternity-ui]
---

::ComponentViewer{demoFile="GithubGlobeDemo.vue" config="GithubGlobeConfig" componentId="github-globe" :componentFiles='["GithubGlobe.vue"]' dependencies="three postprocessing three-globe" devDependencies="@types/three"}

#api

#### Download GeoJSON file

Download a GeoJSON file containing the globe's geographical data from [GeoJSON Maps](https://geojson-maps.kyd.au/) by customizing the continents and detail level. Save the downloaded file as `globe.json` in the same folder as your component.

## API

| Prop Name     | Type         | Default | Description                                                                                         |
| ------------- | ------------ | ------- | --------------------------------------------------------------------------------------------------- |
| `globeConfig` | `object`     | `{}`    | Configuration options for the globe, including colors, atmosphere, rotation speed, and lighting.    |
| `data`        | `Position[]` | `[]`    | Array of positions representing arcs and points on the globe, with latitude, longitude, color, etc. |
| `class`       | `string`     | `""`    | Additional CSS classes for custom styling.                                                          |

### `globeConfig` Properties

| Property             | Type      | Default                 | Description                                              |
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

| Field      | Type     | Description                                     |
| ---------- | -------- | ----------------------------------------------- |
| `order`    | `number` | Order of the point or arc for sequencing.       |
| `startLat` | `number` | Starting latitude for an arc.                   |
| `startLng` | `number` | Starting longitude for an arc.                  |
| `endLat`   | `number` | Ending latitude for an arc.                     |
| `endLng`   | `number` | Ending longitude for an arc.                    |
| `arcAlt`   | `number` | Altitude of the arc (determines arc height).    |
| `color`    | `string` | Color of the arc or point in hex or RGB format. |

#credits

- Built with Three.js and Three Globe libraries, designed for global data visualizations and dynamic effects.
- Ported from [Aceternity UI](https://ui.aceternity.com/components/github-globe).

::
