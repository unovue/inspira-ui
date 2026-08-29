---
title: Shader Toy Viewer
description: 在浏览器中渲染 ShaderToy GLSL 着色器的强大灵活组件。
category: Miscellaneous
tags: [css, tailwind, shader-toy, ogl, webgl]
badge: Updated
---

::ComponentViewer{demoFile="ShaderToyDemo.vue" config="ShaderToyConfig" componentId="shader-toy" :componentFiles='["ShaderToy.vue", "InspiraShaderToy.ts"]' dependencies="ogl"}

#api

## API

| 属性名       | 类型                                 | 默认值    | 描述                                    |
| ------------ | ------------------------------------ | --------- | --------------------------------------- |
| `shaderCode` | `string`                             | `-`       | 来自 ShaderToy 的 GLSL 片段着色器源码。 |
| `uniforms`   | `Record<string, number \| number[]>` | `{}`      | 着色器中声明的自定义 uniform 值。       |
| `mouseMode`  | `'click' \| 'hover'`                 | `'click'` | 鼠标跟踪模式：点击或持续悬停。          |
| `hue`        | `number`                             | `0`       | 调整着色器输出的色相。                  |
| `saturation` | `number`                             | `1`       | 调整着色器输出的饱和度。                |
| `brightness` | `number`                             | `1`       | 调整着色器输出的亮度。                  |
| `speed`      | `number`                             | `1`       | 调整着色器输出的速度。                  |
| `frameRate`  | `number`                             | `60`      | 为较重的着色器限制渲染帧率。            |
| `pixelRatio` | `number`                             | `1`       | 控制画布渲染倍率，平衡清晰度与性能。    |
| `paused`     | `boolean`                            | `false`   | 手动暂停播放。                          |
| `autoPause`  | `boolean`                            | `true`    | 离开视口或标签页隐藏时暂停渲染。        |
| `class`      | `string`                             | `-`       | 应用于容器的自定义类。                  |

#credits

- 使用 [OGL](https://github.com/oframe/ogl) 构建。
- 灵感来自 [Shadertoy](https://shadertoy.com/)，并为 Vue 兼容性做了适配。

::
