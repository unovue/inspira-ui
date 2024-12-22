---
title: Morphing Text
description: This MorphingText component dynamically transitions between an array of text strings, creating a smooth, engaging visual effect.

navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="MorphingTextDemo" type="examples" id="morphing-text"}
::

## API

| Prop Name | Type       | Default | Description                           |
| --------- | ---------- | ------- | ------------------------------------- |
| `texts`   | `string[]` | `[]`    | Array of texts to morph between.      |
| `class`   | `string`   | `""`    | Additional classes for the container. |

## Component Code

You can copy and paste the following code to create these components:

::CodeViewer{filename="MorphingText.vue" language="vue" componentName="MorphingText" type="ui" id="morphing-text"}
::

## Credits

- Inspired and ported from [Magic UI Morphing Text](https://magicui.design/docs/components/morphing-text).
