---
title: Morphing Text
description: This MorphingText component dynamically transitions between an array of text strings, creating a smooth, engaging visual effect.
---

::ComponentLoader{label="Preview" componentName="MorphingTextDemo" type="examples" id="morphing-text"}
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Install using CLI

::InstallationCli{componentId="morphing-text"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="MorphingText.vue" language="vue" componentName="MorphingText" type="ui" id="morphing-text"}
::

## API

| Prop Name      | Type       | Default | Description                           |
| -------------- | ---------- | ------- | ------------------------------------- |
| `texts`        | `string[]` | `[]`    | Array of texts to morph between.      |
| `class`        | `string`   | `""`    | Additional classes for the container. |
| `morphTime`    | `number`   | `1.5`   | Animation execution time.             |
| `coolDownTime` | `number`   | `0.5`   | Animation dwell time.                 |

## Credits

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [Magic UI Morphing Text](https://magicui.design/docs/components/morphing-text).
