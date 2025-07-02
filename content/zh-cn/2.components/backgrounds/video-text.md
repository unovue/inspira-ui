---
title: Video Text
description: A text component with a video background.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="VideoTextDemo" type="examples" id="video-text"}
::

## Install using CLI

::InstallationCli{componentId="video-text"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="VideoText.vue" language="vue" componentName="VideoText" type="ui" id="video-text"}
::

## API

| Prop Name          | Type                             | Default        | Description                           |
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

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Ported from [Magic UI's Video Text](https://magicui.design/docs/components/video-text).
