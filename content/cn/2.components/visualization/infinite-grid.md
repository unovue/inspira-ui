---
title: 无限网格
description: 使用 OGL 构建的高性能交互式 3D 无限网格组件，效果类似 phantom.land。
category: Visualization
tags: [css, tailwind, phantom-land, ogl, webgl]
---

::ComponentViewer{demoFile="InfiniteGridDemo.vue" config="InfiniteGridConfig" componentId="infinite-grid" :componentFiles='["InfiniteGrid.vue", "InfiniteGridClass.ts", "DisposalManager.ts", "EventHandler.ts", "GridManager.ts", "PostProcessShader.ts", "createTexture.ts", "shaders.ts", "types.ts"]' dependencies="ogl gsap"}

#api

## API

| 属性名     | 类型                           | 默认值 | 描述                                                         |
| ---------- | ------------------------------ | ------ | ------------------------------------------------------------ |
| `cardData` | `CardData[]`                   | `[]`   | 网格中每个方块的数据。**必填**。                             |
| `options`  | `Partial<InfiniteGridOptions>` | `{}`   | 布局、相机与后期处理的可选覆盖项（见下表）。                 |

### `InfiniteGridOptions`

| 选项                                     | 类型      | 默认值 | 描述                                       |
| ---------------------------------------- | --------- | ------ | ------------------------------------------ |
| `gridCols`                               | `number`  | `4`    | 网格列数。                                  |
| `gridRows`                               | `number`  | `4`    | 网格行数。                                  |
| `gridGap`                                | `number`  | `0`    | 方块之间的间距。                            |
| `tileSize`                               | `number`  | `2.4`  | 方块尺寸（OGL 单位）。                      |
| `baseCameraZ`                            | `number`  | `10`   | 相机的初始 Z 轴距离。                       |
| `enablePostProcessing`                   | `boolean` | `true` | 是否启用后期处理流程。                      |
| `postProcessParams.distortionIntensity`  | `number`  | `-0.2` | 枕形/桶形畸变强度（0 表示无）。             |
| `postProcessParams.vignetteOffset`       | `number`  | `0.0`  | 暗角偏移；值越大清晰区域越小。              |
| `postProcessParams.vignetteDarkness`     | `number`  | `0.0`  | 暗角深度；值越大边缘越暗。                  |

---

### `CardData`

| 字段          | 类型       | 必填 | 描述                          |
| ------------- | ---------- | ---- | ----------------------------- |
| `title`       | `string`   | ✓    | 主标题文本。                  |
| `badge`       | `string`   | ✓    | 徽章文字（渲染逻辑可自定义）。|
| `description` | `string`   | –    | 详细正文。                    |
| `tags`        | `string[]` | ✓    | 底部展示的标签。              |
| `date`        | `string`   | ✓    | 显示在右下角的日期。          |
| `image`       | `string`   | –    | 方块背景图的 URL。            |

---

## Emits

| 事件名        | 负载                               | 描述                                                                                 |
| ------------- | ---------------------------------- | ------------------------------------------------------------------------------------ |
| `tileClicked` | `{ card: CardData, index: number }`| 当点击/轻触方块时触发，包含被点击的 `CardData` 及其从 0 开始的 `index`。              |
| `onTileLoaded`| -                                  | 当方块中的所有图片加载完成时触发。                                                   |

#credits

- 灵感来自 [Phantom Land](https://phantom.land)。
- 特别感谢 [Safak Dinc](https://github.com/safakdinc) 提供想法并授权包含原项目，可在 [infinite-grid](https://github.com/safakdinc/infinite-grid) 查看原始仓库。
- 感谢 [kalix127](https://github.com/kalix127) 对该组件的移植。

::
