---
title: Infinite Grid
description: A high-performance, interactive 3D infinite grid component built with OGL as seen on phantom.land
---

::ComponentLoader{label="Preview" componentName="InfiniteGridDemo" type="examples" id="infinite-grid"}
::

::alert{type="info"}
**Note:** This component uses OGL & requires `ogl` and `gsap` as dependencies.
::

## API

| Prop Name  | Type                           | Default | Description                                                                   |
| ---------- | ------------------------------ | ------- | ----------------------------------------------------------------------------- |
| `cardData` | `CardData[]`                   | `[]`    | Data for every tile shown in the grid. **Required**.                          |
| `options`  | `Partial<InfiniteGridOptions>` | `{}`    | Optional overrides for layout, camera, and post-processing (see table below). |

### `InfiniteGridOptions`

| Option                                  | Type      | Default | Description                                         |
| --------------------------------------- | --------- | ------- | --------------------------------------------------- |
| `gridCols`                              | `number`  | `4`     | Grid Columns .                                      |
| `gridRows`                              | `number`  | `4`     | Grid Rows .                                         |
| `gridGap`                               | `number`  | `0`     | Gap between squares.                                |
| `tileSize`                              | `number`  | `2.4`   | Tile size (OGL units).                              |
| `baseCameraZ`                           | `number`  | `10`    | Starting Z-distance of the camera.                  |
| `enablePostProcessing`                  | `boolean` | `true`  | Toggle the post-processing pipeline.                |
| `postProcessParams.distortionIntensity` | `number`  | `-0.2`  | Barrel / pincushion distortion strength (0 = none). |
| `postProcessParams.vignetteOffset`      | `number`  | `0.0`   | Vignette offset; higher ⇒ smaller clear area.       |
| `postProcessParams.vignetteDarkness`    | `number`  | `0.0`   | Vignette darkness; higher ⇒ darker edges.           |

---

### `CardData`

| Field         | Type       | Required | Description                                   |
| ------------- | ---------- | -------- | --------------------------------------------- |
| `title`       | `string`   | ✓        | Main heading text.                            |
| `badge`       | `string`   | ✓        | Badge label (render logic can be customised). |
| `description` | `string`   | –        | Longer body text.                             |
| `tags`        | `string[]` | ✓        | Tag pills rendered at the bottom.             |
| `date`        | `string`   | ✓        | Date string shown bottom-right.               |
| `image`       | `string`   | –        | URL for the tile's background image.          |

---

## Emits

| Event Name     | Payload                             | Description                                                                                                             |
| -------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `tileClicked`  | `{ card: CardData, index: number }` | Fired whenever a tile is clicked/tapped. The payload contains the clicked `CardData` object and its zero-based `index`. |
| `onTileLoaded` | -                                   | Fired when all the images are loaded inside the tile.                                                                   |

## Install using CLI

::InstallationCli{componentId="infinite-grid"}
::

## Install Manually

#### Install the dependencies

::code-group

```bash [npm]
npm install ogl gsap
```

```bash [pnpm]
pnpm install ogl gsap
```

```bash [bun]
bun add ogl gsap
```

```bash [yarn]
yarn add ogl gsap
```

::

#### Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="InfiniteGrid.vue" language="vue" componentName="InfiniteGrid" type="ui" id="infinite-grid"}

:CodeViewerTab{filename="InfiniteGridClass.ts" language="typescript" componentName="InfiniteGridClass" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="DisposalManager.ts" language="typescript" componentName="DisposalManager" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="EventHandler.ts" language="typescript" componentName="EventHandler" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="GridManager.ts" language="typescript" componentName="GridManager" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="PostProcessShader.ts" language="typescript" componentName="PostProcessShader" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="createTexture.ts" language="typescript" componentName="createTexture" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="shaders.ts" language="typescript" componentName="shaders" type="ui" id="infinite-grid" extension="ts"}
:CodeViewerTab{filename="types.ts" language="typescript" componentName="types" type="ui" id="infinite-grid" extension="ts"}

::

## Credits

- Inspired from [Phantom Land](https://phantom.land)
- Special thanks to [Safak Dinc](https://github.com/safakdinc) for the idea and for granting permission to include it here. You can find the original repository at [infinite-grid](https://github.com/safakdinc/infinite-grid). Your contribution is greatly appreciated!
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
