---
title: Animated List
description: A sequentially animated list that introduces each item with a timed delay, perfect for displaying notifications or events on your landing page.
---

::ComponentLoader{label="Preview" componentName="AnimatedListDemo" type="examples"}
::

## API

| Prop Name | Type     | Default | Description                                               |
| --------- | -------- | ------- | --------------------------------------------------------- |
| `delay`   | `number` | `1`     | The delay in seconds before adding each item to the list. |

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## Component Code

You can copy and paste the following code to create this component:

::CodeGroup
::CodeViewerTab{label="AnimatedList.vue" language="vue" componentName="AnimatedList" type="ui" id="animated-list"}
::

    ::CodeViewerTab{label="Notification.vue" language="vue" componentName="Notification" type="ui" id="notification"}
    ::

::

## Features

- **Animated Item Loading**: Items are added to the list one by one with a configurable delay.
- **Smooth Transitions**: Each item animates in with a spring effect on entry and a smooth scale and opacity animation on exit.
- **Reverse Order**: Items are displayed in reverse order (newest at the top) for a dynamic, engaging user experience.
- **Flexibility**: You can pass different components as items, making it highly versatile.

## Credits

- Inspired by [Magic UI](https://magicui.design/docs/components/animated-list).
