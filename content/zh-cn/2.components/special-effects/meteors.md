---
title: Meteor
description: A component that displays a meteor shower animation with customizable meteor count and styling.
---

::ComponentLoader{label="Preview" componentName="MeteorsDemo" type="examples"}  
::

::alert{type="warning"}
This component uses the `nuxt-only` syntax with the `<ClientOnly>`. If you are not using Nuxt, you can simply remove it.
::

## API

| Prop Name | Type     | Default | Description                                                       |
| --------- | -------- | ------- | ----------------------------------------------------------------- |
| `count`   | `number` | `20`    | The number of meteors to display in the animation.                |
| `class`   | `string` | `""`    | Additional CSS classes to apply to the meteors for customization. |

## Installation

::alert
Add following entry to inline theme in your `main.css` file.

```css
@theme inline {
  --animate-meteor-effect: meteor 5s linear infinite;
  @keyframes meteor {
    0% {
      transform: rotate(215deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(215deg) translateX(-500px);
      opacity: 0;
    }
  }
}
```

::

## Install using CLI

::InstallationCli{componentId="meteors"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="Meteors.vue" language="vue" componentName="Meteors" type="ui" id="meteors"}
::

## Features

- **Meteor Shower Animation**: The component renders an animated meteor shower effect, adding a dynamic visual element to your application.

- **Customizable Meteor Count**: Adjust the number of meteors by setting the `count` prop to control the density of the meteor shower.

- **Randomized Animations**: Each meteor has randomized position, delay, and duration, creating a natural and varied animation.

- **Styling Flexibility**: Pass additional CSS classes through the `class` prop to customize the appearance of the meteors.

- **Responsive Design**: The component adapts to different screen sizes and uses Vue’s reactivity for smooth animations.

## Credits

- Ported from [Aceternity UI's Meteor Effect](https://ui.aceternity.com/components/meteors)
