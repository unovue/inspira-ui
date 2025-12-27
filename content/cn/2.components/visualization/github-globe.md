---
title: Github 地球
description: 可自定义弧线、点与动画的 3D 互动地球可视化，灵感来自 Github。
category: 可视化
tags: [css, tailwind, threejs, aceternity-ui]
badge: Updated
---

::ComponentViewer{demoFile="GithubGlobeDemo.vue" config="GithubGlobeConfig" componentId="github-globe" :componentFiles='["GithubGlobe.vue"]' dependencies="three postprocessing three-globe" devDependencies="@types/three"}

#api

#### 下载 GeoJSON 文件

从 [GeoJSON Maps](https://geojson-maps.kyd.au/) 按需选择大陆与精度下载地理数据，将文件保存为与组件同目录的 `globe.json`。

## API

| 属性名        | 类型         | 默认值 | 描述                                                                                       |
| ------------- | ------------ | ------ | ------------------------------------------------------------------------------------------ |
| `globeConfig` | `object`     | `{}`   | 地球的配置项，包括颜色、大气、旋转速度与光照等。                                           |
| `data`        | `Position[]` | `[]`   | 表示地球上弧线与点的坐标数组，包含纬度、经度、颜色等信息。                                 |
| `class`       | `string`     | `""`   | 用于自定义样式的额外 CSS 类。                                                              |

### `globeConfig` 属性

| 属性                  | 类型      | 默认值                 | 描述                           |
| --------------------- | --------- | ---------------------- | ------------------------------ |
| `pointSize`           | `number`  | `1`                    | 地球上单个点的大小。           |
| `globeColor`          | `string`  | `"#1d072e"`            | 地球表面的颜色。               |
| `showAtmosphere`      | `boolean` | `true`                 | 是否显示大气层。               |
| `atmosphereColor`     | `string`  | `"#ffffff"`            | 大气层颜色。                   |
| `atmosphereAltitude`  | `number`  | `0.1`                  | 大气层的高度。                 |
| `emissive`            | `string`  | `"#000000"`            | 材质的自发光颜色。             |
| `emissiveIntensity`   | `number`  | `0.1`                  | 自发光强度。                   |
| `shininess`           | `number`  | `0.9`                  | 材质的高光度。                 |
| `polygonColor`        | `string`  | `rgba(255,255,255,0.7)`| 地图多边形边界的颜色。         |
| `arcTime`             | `number`  | `2000`                 | 弧线动画的持续时间。           |
| `arcLength`           | `number`  | `0.9`                  | 弧线长度。                     |
| `rings`               | `number`  | `1`                    | 每个点显示的环数量。           |
| `maxRings`            | `number`  | `3`                    | 每个点的最大环数量。           |
| `initialPosition`     | `object`  | `{ lat: 0, lng: 0 }`   | 地球初始经纬度。               |
| `autoRotate`          | `boolean` | `false`                | 是否自动旋转。                 |
| `autoRotateSpeed`     | `number`  | `0.8`                  | 启用自动旋转时的速度。         |

### `data` 结构（Position）

| 字段      | 类型     | 描述                             |
| --------- | -------- | -------------------------------- |
| `order`   | `number` | 点或弧线的顺序。                 |
| `startLat`| `number` | 弧线起点纬度。                   |
| `startLng`| `number` | 弧线起点经度。                   |
| `endLat`  | `number` | 弧线终点纬度。                   |
| `endLng`  | `number` | 弧线终点经度。                   |
| `arcAlt`  | `number` | 弧线的高度（决定弧线的抬升）。   |
| `color`   | `string` | 弧线或点的颜色，支持 hex 或 RGB。|

#credits

- 基于 Three.js 与 Three Globe 构建，适用于地理数据可视化与动态效果。
- 移植自 [Aceternity UI](https://ui.aceternity.com/components/github-globe)。

::
