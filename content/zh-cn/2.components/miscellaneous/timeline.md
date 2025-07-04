---
title: Timeline
description: A visually appealing and interactive timeline component with smooth animations, sticky labels, and a gradient scrolling effect.
---

::ComponentLoader{label="预览" componentName="TimelineDemo" type="examples" id="timeline"}
::

## API

| Prop 名称        | 类型                               | 默认值 | 描述                                               |
| ---------------- | ---------------------------------- | ------ | -------------------------------------------------- |
| `containerClass` | `string`                           | `""`   | Additional CSS classes for the timeline container. |
| `class`          | `string`                           | `""`   | Additional CSS classes for styling.                |
| `items`          | `{ id: string; label: string; }[]` | `[]`   | List of timeline items, each with an ID and label. |
| `title`          | `string`                           | `""`   | Title of the timeline section.                     |
| `description`    | `string`                           | `""`   | Description text displayed below the title.        |

## 通过 CLI 安装

::InstallationCli{componentId="timeline"}
::

## 手动安装

You can 复制并粘贴以下代码： to create this component:

::code-group

    ::CodeViewerTab{label="Timeline.vue" language="vue" componentName="Timeline" type="ui" id="timeline"}
    ::

::

## 功能特性

- **Animated Scroll Effect**: The timeline bar animates smoothly as the user scrolls.
- **Sticky Labels**: Each event label remains visible while scrolling.
- **Gradient Progress Bar**: A visually appealing timeline indicator with gradient effects.
- **Slot Support**: Custom content can be placed within each timeline item.
- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Dark Mode Support**: Automatically adjusts to light or dark themes.

## 感谢

- Inspired and ported from [Aceternity UI's Timeline](https://ui.aceternity.com/components/timeline).
