---
title: Animated List
description: A sequentially animated list that introduces each item with a timed delay, perfect for displaying notifications or events on your landing page.
---

::ComponentLoader{label="预览" componentName="AnimatedListDemo" type="examples"}
::

## 通过 CLI 安装

::InstallationCli{componentId="animated-list"}
::

## 手动安装

在同一个文件中，复制并粘贴以下代码：

::code-group

:CodeViewerTab{label="AnimatedList.vue" language="vue" componentName="AnimatedList" type="ui" id="animated-list"}
:CodeViewerTab{label="Notification.vue" language="vue" componentName="Notification" type="ui" id="animated-list"}
::

## API

| Prop 名称 | 类型     | 默认值 | 描述                                                           |
| --------- | -------- | ------ | -------------------------------------------------------------- |
| `delay`   | `number` | `1`    | The delay in milliseconds before adding each item to the list. |

## 功能特性

- **Animated Item Loading**: Items are added to the list one by one with a configurable delay.
- **Smooth Transitions**: Each item animates in with a spring effect on entry and a smooth scale and opacity animation on exit.
- **Reverse Order**: Items are displayed in reverse order (newest at the top) for a dynamic, engaging user experience.
- **Flexibility**: You can pass different components as items, making it highly versatile.

## 感谢

- Inspired by [Magic UI](https://magicui.design/docs/components/animated-list).
