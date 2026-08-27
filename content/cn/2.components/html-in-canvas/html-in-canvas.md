---
title: HTML in Canvas
description: 通过实验性的 HTML-in-Canvas API，将 ShaderToy 风格的片元着色器应用到实时 HTML 内容。
category: HTML in Canvas
tags: [webgl, shader, canvas, interactive]
badge: New
dependencies: []
---

::ComponentViewer{demoFile="HtmlInCanvasDemo.vue" config="HtmlInCanvasConfig" componentId="html-in-canvas" :componentFiles='["HtmlInCanvas.vue", "HtmlInCanvasRenderer.ts", "captureElement.ts", "presets.ts", "index.ts"]'}

HTML in Canvas 仍是实验性浏览器 API。浏览器不支持时，组件会捕获带样式的 DOM 快照，并通过同一个 WebGL 着色器处理。原始 DOM 仍保留交互能力和可访问性。

片元着色器必须定义 `mainImage(out vec4 fragColor, in vec2 fragCoord)`。捕获的 HTML 可通过 `iChannel0` 访问。

`htmlInCanvasShaders` 提供自动运行的 `liquid`、`cloth` 和 `blaze` 预设，可直接传给 `shaderCode`，也可作为自定义位移着色器的参考。

#api

## API

| 属性           | 类型             | 默认值  | 说明                                     |
| -------------- | ---------------- | ------- | ---------------------------------------- |
| `shaderCode`   | `string`         | —       | 包含 `mainImage` 函数的片元着色器代码。  |
| `uniforms`     | `ShaderUniforms` | `{}`    | 自定义数字、布尔值、向量或矩阵 uniform。 |
| `frameRate`    | `number`         | `60`    | 最大渲染帧率。                           |
| `pixelRatio`   | `number`         | `1`     | 渲染比例，限制在 `0.25` 到 `2` 之间。    |
| `speed`        | `number`         | `1`     | 应用于 `iTime` 的速度倍率。              |
| `mouseDamping` | `number`         | `0.85`  | 指针移动的平滑程度。                     |
| `paused`       | `boolean`        | `false` | 暂停渲染循环。                           |
| `autoPause`    | `boolean`        | `true`  | 离开视口或页面隐藏时自动暂停。           |
| `interactive`  | `boolean`        | `true`  | 跟踪指针并更新 `iMouse`。                |
| `class`        | `string`         | —       | 合并到根元素的额外类名。                 |

### 着色器输入

组件按照 ShaderToy 约定提供 `iResolution`、`iTime`、`iTimeDelta`、`iFrameRate`、`iFrame`、`iMouse`、`iDate`、`iHasContent`、`iChannel0` 和 `iChannelResolution`。`iPointerVelocity`、`iPointerEnergy` 和 `iPointerAge` 提供会逐渐衰减的指针冲量，适合制作移动后自然平复的效果。HTML 纹理可用时，`iHasContent` 为 `1`。

### 事件

| 事件      | 参数      | 说明                               |
| --------- | --------- | ---------------------------------- |
| `ready`   | —         | 首个 HTML 纹理完成渲染后触发。     |
| `error`   | `string`  | 着色器编译或渲染失败时触发。       |
| `support` | `boolean` | 返回原生 HTML-in-Canvas 支持状态。 |

### 插槽

| 插槽      | 说明                             |
| --------- | -------------------------------- |
| `default` | 作为着色器纹理捕获的 HTML 内容。 |

#credits

- 基于 [WICG HTML-in-Canvas 提案](https://github.com/WICG/html-in-canvas) 构建。
- Cloth 预设基于 [MartinRGB](https://www.shadertoy.com/view/DttSRB) 的矢量场。
- Blaze 预设使用 [Ashima Arts](https://github.com/ashima/webgl-noise) 的 MIT 许可 Simplex Noise 实现。

::
