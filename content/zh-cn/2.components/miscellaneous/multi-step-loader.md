---
title: Multi Step Loader
description: A step loader for screens that works with async conditions too.
---

::ComponentLoader{label="预览" componentName="MultiStepLoaderDemo" type="examples"}  
::

## 通过 CLI 安装

::InstallationCli{componentId="multi-step-loader"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="MultiStepLoader.vue" language="vue" componentName="MultiStepLoader" type="ui" id="multi-step-loader"}
::

## API

| Prop 名称         | 类型      | 默认值  | 描述                                                                         |
| ----------------- | --------- | ------- | ---------------------------------------------------------------------------- |
| `loading`         | `boolean` | `false` | Controls the visibility of the loader. When `true`, the loader is displayed. |
| `steps`           | `Step[]`  | `[]`    | Array of step objects defining the loading sequence.                         |
| `defaultDuration` | `number`  | `1500`  | The duration of each step in milliseconds.                                   |
| `preventClose`    | `boolean` | `false` | If `true`, the close button will not be shown.                               |

| Event Name     | Payload Type | 描述                                                                 |
| -------------- | ------------ | -------------------------------------------------------------------- |
| `state-change` | `number`     | Emitted when the current step changes, providing the new step index. |
| `complete`     | `void`       | Emitted when all steps have been completed.                          |
| `close`        | `void`       | Emitted when the loader is closed by button.                         |

## 感谢

- Credits to [M Atif](https://github.com/atif0075) for this component.

- Inspired from [Aceternity UI's Multi Step Loader](https://ui.aceternity.com/components/multi-step-loader).
