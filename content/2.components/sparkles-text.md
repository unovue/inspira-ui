---
title: Sparkles Text
description: A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.
navBadges:
  - value: New
    type: lime
---

::ComponentLoader{label="Preview" componentName="SparklesTextDemo" type="examples" id="sparkles-text"}
::

## API

| Prop Name       | Type     | Default                                  | Description                                   |
| --------------- | -------- | ---------------------------------------- | --------------------------------------------- |
| `class`         | `string` | `-`                                      | The class to be applied to the sparkles text. |
| `text`          | `string` | `Inspira UI`                             | The text to display.                          |
| `sparklesCount` | `number` | `10`                                     | sparkles count that appears on the text.      |
| `colors`        | `object` | `{first: '#A07CFE'; second: '#FE8FB5';}` | The sparkles colors.                          |

## Component Code

You can copy and paste the following code to create these components:

::code-group
::CodeViewerTab{label="SparklesText.vue" icon="vscode-icons:file-type-vue" componentName="SparklesText" type="ui" id="sparkles-text"}
::

::CodeViewerTab{label="Sparkle.vue" icon="vscode-icons:file-type-vue" componentName="Sparkle" type="ui" id="sparkles-text"}
::

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
- Inspired from [Magic UI](https://magicui.design/docs/components/sparkles-text).
