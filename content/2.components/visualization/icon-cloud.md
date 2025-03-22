---
title: Icon Cloud
description: An interactive 3D tag cloud component
---

::ComponentLoader{label="Preview" componentName="IconCloudDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="icon-cloud"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="IconCloud.vue" language="vue" componentName="IconCloud" type="ui" id="icon-cloud"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="icon-cloud" extension="ts"}

::

## API

| Prop Name | Type     | Default | Description                                   |
| --------- | -------- | ------- | --------------------------------------------- |
| `class`   | `string` | -       | Additional classes for styling the component. |
| `images`  | `array`  | `[]`    | Array of image URLs to render in the cloud    |

## Credits

- Inspired by [MagicUI](https://magicui.design/docs/components/icon-cloud).
- Credits to [kalix127](https://github.com/kalix127) for porting this component.
