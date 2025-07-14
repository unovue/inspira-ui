---
title: Spring Calendar
description: An animated calendar widget that expands to reveal events and features smooth, spring‑based Motion‑V transitions.
---

::ComponentLoader{label="预览" componentName="SpringCalendarDemo" type="examples" id="spring-calendar"}
::

## API

| Prop 名称      | 类型                                                                                                           | 默认值 | 描述                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------- |
| `calendarData` | `Array<{ month: string; date: number; day: string; events?: { title: string; day: string; time: string }[] }>` | **—**  | Array defining each calendar day and its optional events. _Required_. |
| `initialIndex` | `number`                                                                                                       | `0`    | Day index initially selected.                                         |

### Emits

| Event                | Payload  | 描述                                                               |
| -------------------- | -------- | ------------------------------------------------------------------ |
| `update:activeIndex` | `number` | Fires when a day button is clicked, emitting the new active index. |

## 通过 CLI 安装

::InstallationCli{componentId="spring-calendar"}
::

## 手动安装

复制并粘贴以下代码：

::code-group

::CodeViewerTab{label="SpringCalendar.vue" language="vue" componentName="SpringCalendar" type="ui" id="spring-calendar"}
::
::CodeViewerTab{label="TextMorph.vue" language="vue" componentName="TextMorph" type="ui" id="spring-calendar"}
::

::

## 功能特性

- **Spring Animations** — Uses `MotionConfig` to apply realistic spring/bounce transitions when height changes.
- **Dynamic Height** — The outer card automatically grows to fit event listings.
- **TextMorph Integration** — Day labels morph smoothly via the `TextMorph` sub‑component.
- **Interactive Day Picker** — Clickable day chips with hover/press scale effects.
- **Responsive Layout** — Flexbox layout that wraps chips and events neatly.

## 感谢

- Inspired from the work of [sekachov](https://x.com/sekachov)
