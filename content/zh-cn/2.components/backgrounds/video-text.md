---
title: 视频文字
description: 一个带有视频背景的文本组件。
---

::ComponentLoader{label="预览" componentName="VideoTextDemo" type="examples" id="video-text"}
::

## 通过 CLI 安装

::InstallationCli{componentId="video-text"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="VideoText.vue" language="vue" componentName="VideoText" type="ui" id="video-text"}
::

## API

| Prop 名称          | 类型                             | 默认值         | 描述                                  |
| ------------------ | -------------------------------- | -------------- | ------------------------------------- |
| `src`              | `string`                         | `Required`     | The video source URL.                 |
| `class`            | `string`                         | `""`           | Additional classes for the container. |
| `autoPlay`         | `boolean`                        | `true`         | Whether to autoplay the video.        |
| `muted`            | `boolean`                        | `true`         | Whether to mute the video.            |
| `loop`             | `boolean`                        | `true`         | Whether to loop the video.            |
| `preload`          | `"auto" \| "metadata" \| "none"` | `"auto"`       | Whether to preload the video.         |
| `fontSize`         | `string \| number`               | `"120"`        | Font size for the text mask.          |
| `fontWeight`       | `string \| number`               | `"bold"`       | Font weight for the text mask.        |
| `textAnchor`       | `string`                         | `"middle"`     | Text anchor for the text mask.        |
| `dominantBaseline` | `string`                         | `"middle"`     | Dominant baseline for the text mask.  |
| `fontFamily`       | `string`                         | `"sans-serif"` | Font family for the text mask.        |

## 感谢

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Ported from [Magic UI's Video Text](https://magicui.design/docs/components/video-text).
