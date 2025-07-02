---
title: Animated Logo Cloud
description: Animated company cloud logs. Usually we can use to show company logos.
---

::ComponentLoader{label="Preview" componentName="StaticLogoCloudDemo" type="examples" id="logo-cloud"}
::

## Install using CLI

::InstallationCli{componentId="logo-cloud"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="AnimatedLogoCloud.vue" language="vue" componentName="AnimatedLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{label="IconLogoCloud.vue" language="vue" componentName="IconLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{label="StaticLogoCloud.vue" language="vue" componentName="StaticLogoCloud" type="ui" id="logo-cloud"}
:CodeViewerTab{filename="index.ts" language="typescript" componentName="index" type="ui" id="logo-cloud" extension="ts"}

::

## Examples

### Animated logs

Animated company logos.

::ComponentLoader{label="Preview" componentName="AnimatedLogoCloudDemo" type="examples" id="logo-cloud"}
::

### Icon Logo

Company logo icons

::ComponentLoader{label="Preview" componentName="IconLogoCloudDemo" type="examples" id="logo-cloud"}
::

## API

| Prop Name | Type     | Default                     | Description                                                    |
| --------- | -------- | --------------------------- | -------------------------------------------------------------- |
| `class`   | `string` | `-`                         | The delay in milliseconds before adding each item to the list. |
| `title`   | `string` | `Trusted by Companies like` | Title of animated logs.                                        |
| `logos`   | `[]`     | `[{name: "", path: ""}]`    | Array of items(logos) with name & path fields.                 |

## Credits

- Credits to [SivaReddy Uppathi](https://github.com/sivareddyuppathi) for this component.
