---
title: 文件上传
description: 现代文件上传组件，带 3D 卡片效果、拖放交互和响应式网格背景。
category: 表单与输入
tags: [css, tailwind, input, aceternity-ui]
---

::ComponentViewer{demoFile="FileUploadDemo.vue" config="FileUploadConfig" componentId="file-upload" :componentFiles='["FileUpload.vue", "FileUploadGrid.vue"]'}

#api

## API

### `FileUpload`

`FileUpload` 组件是文件上传效果的包装容器，处理鼠标事件以创建 3D 视角。

#### Props

| 属性名 | 类型   | 默认值 | 描述                                   |
| ------ | ------ | ------ | -------------------------------------- |
| `class`| String | -      | 用于容器元素的额外样式类。             |

#### Emits

| 事件名    | 类型                      | 描述                                    |
| --------- | ------------------------- | --------------------------------------- |
| `onChange`| `(files: File[]) => void` | 添加/上传文件时触发的回调。             |

### `FileUploadGrid`

`FileUploadGrid` 组件为上传区域提供背景网格图案，应在 `FileUpload` 内使用，以在上传界面背后呈现网格效果。

#### Props

| 属性名 | 类型   | 默认值 | 描述                         |
| ------ | ------ | ------ | ---------------------------- |
| `class`| String | -      | 用于自定义样式的额外类。     |

#credits

- 感谢 [kalix127](https://github.com/kalix127) 移植该组件。
- 灵感来自 [AcernityUI](https://ui.aceternity.com/components/file-upload)。

::
