---
title: Animated List
description: A sequentially animated list that introduces each item with a timed delay, perfect for displaying notifications or events on your landing page.
---

::ComponentLoader{label="Preview" componentName="AnimatedListDemo" type="examples"}
::

## Install using CLI

::InstallationCli{componentId="animated-list"}
::

## Install Manually

Copy and paste the following code in the same folder

::code-group

:CodeViewerTab{label="AnimatedList.vue" language="vue" componentName="AnimatedList" type="ui" id="animated-list"}
:CodeViewerTab{label="Notification.vue" language="vue" componentName="Notification" type="ui" id="animated-list"}
::

## API

| Prop Name | Type     | Default | Description                                                    |
| --------- | -------- | ------- | -------------------------------------------------------------- |
| `delay`   | `number` | `1`     | The delay in milliseconds before adding each item to the list. |

## Features

- **Animated Item Loading**: Items are added to the list one by one with a configurable delay.
- **Smooth Transitions**: Each item animates in with a spring effect on entry and a smooth scale and opacity animation on exit.
- **Reverse Order**: Items are displayed in reverse order (newest at the top) for a dynamic, engaging user experience.
- **Flexibility**: You can pass different components as items, making it highly versatile.

## Credits

- Inspired by [Magic UI](https://magicui.design/docs/components/animated-list).
