---
title: Text Hover Effect
description: A text hover effect that animates and outlines gradient on hover, as seen on x.ai
---

::ComponentLoader{label="Preview" componentName="TextHoverEffectDemo" type="examples"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Install using CLI

::InstallationCli{componentId="text-hover-effect"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="TextHoverEffect.vue" language="vue" componentName="TextHoverEffect" type="ui" id="text-hover-effect"}
::

## API

| Prop Name     | Type     | Default  | Description                                               |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `text`        | `string` | Required | The text to be displayed with the hover effect.           |
| `duration`    | `number` | `200`    | The duration of the mask transition animation in seconds. |
| `strokeWidth` | `number` | `0.75`   | The width of the text stroke.                             |
| `opacity`     | `number` | `null`   | The opacity of the text.                                  |
