---
title: Morphing Tabs
description: This is a morphing tabs interaction, recreated by Preet's work and featuring the gooey effect component.
---

::ComponentLoader{label="预览" componentName="MorphingTabsDemo" type="examples" id="morphing-tabs"}
::

## 通过 CLI 安装

::InstallationCli{componentId="morphing-tabs"}
::

## 手动安装

复制并粘贴以下代码：

::CodeViewer{filename="MorphingTabs.vue" language="vue" componentName="MorphingTabs" type="ui" id="morphing-tabs"}
::

## API

| Prop 名称          | 类型       | 默认值 | 描述                                           |
| ------------------ | ---------- | ------ | ---------------------------------------------- |
| `class`            | `string`   | `""`   | Additional class names to style the component. |
| `tabs`             | `string[]` | `[]`   | Tabs.                                          |
| `activeTab`        | `string`   | `""`   | Current active Tab.                            |
| `margin`           | `number`   | `20`   | Active tab margin left and right.              |
| `blurStdDeviation` | `number`   | `6`    | Svg blur stdDeviation, tab rounded use it.     |

## 感谢

- Credits to [Whbbit1999](https://github.com/Whbbit1999) for this component.
- Inspired and ported from [@Preet "Exclusion tabs"](https://x.com/wickedmishra/status/1823026659894940124).
