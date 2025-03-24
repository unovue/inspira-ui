---
title: Timeline
description: A visually appealing and interactive timeline component with smooth animations, sticky labels, and a gradient scrolling effect.
---

::ComponentLoader{label="Preview" componentName="TimelineDemo" type="examples" id="timeline"}
::

## API

| Prop Name        | Type                               | Default | Description                                        |
| ---------------- | ---------------------------------- | ------- | -------------------------------------------------- |
| `containerClass` | `string`                           | `""`    | Additional CSS classes for the timeline container. |
| `class`          | `string`                           | `""`    | Additional CSS classes for styling.                |
| `items`          | `{ id: string; label: string; }[]` | `[]`    | List of timeline items, each with an ID and label. |
| `title`          | `string`                           | `""`    | Title of the timeline section.                     |
| `description`    | `string`                           | `""`    | Description text displayed below the title.        |

## Install using CLI

::InstallationCli{componentId="timeline"}
::

## Install Manually

You can copy and paste the following code to create this component:

::code-group

    ::CodeViewerTab{label="Timeline.vue" language="vue" componentName="Timeline" type="ui" id="timeline"}
    ::

::

## Features

- **Animated Scroll Effect**: The timeline bar animates smoothly as the user scrolls.
- **Sticky Labels**: Each event label remains visible while scrolling.
- **Gradient Progress Bar**: A visually appealing timeline indicator with gradient effects.
- **Slot Support**: Custom content can be placed within each timeline item.
- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Dark Mode Support**: Automatically adjusts to light or dark themes.

## Credits

- Inspired and ported from [Aceternity UI's Timeline](https://ui.aceternity.com/components/timeline).
