---
title: Text Hover Effect
description: A text hover effect that animates and outlines gradient on hover, as seen on x.ai
---

::ComponentLoader{label="预览" componentName="TextHoverEffectDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## 通过 CLI 安装

::InstallationCli{componentId="text-hover-effect"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="TextHoverEffect.vue" language="vue" componentName="TextHoverEffect" type="ui" id="text-hover-effect"}
::

## API

| Prop 名称     | 类型     | 默认值   | 描述                                                      |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `text`        | `string` | Required | The text to be displayed with the hover effect.           |
| `duration`    | `number` | `200`    | The duration of the mask transition animation in seconds. |
| `strokeWidth` | `number` | `0.75`   | The width of the text stroke.                             |
| `opacity`     | `number` | `null`   | The opacity of the text.                                  |
