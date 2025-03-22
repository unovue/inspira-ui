---
title: Expandable Gallery
description: A responsive image gallery with an interactive hover effect that expands images dynamically.
---

::ComponentLoader{label="Preview" componentName="ExpandableGalleryDemo" type="examples" id="expandable-gallery"}
::

## Install using CLI

::InstallationCli{componentId="expandable-gallery"}
::

## Install Manually

Copy and paste the following code

::CodeViewer{filename="ExpandableGallery.vue" language="vue" componentName="ExpandableGallery" type="ui" id="expandable-gallery"}
::

## API

| Prop Name | Type       | Default | Description                                    |
| --------- | ---------- | ------- | ---------------------------------------------- |
| `images`  | `string[]` | `[]`    | Array of image URLs to display in the gallery. |

## Features

- **Interactive Hover Effect**: Images expand when hovered over, creating a dynamic and engaging user experience.
- **Responsive Design**: The gallery automatically adjusts to the container size, ensuring it looks great on all devices.
- **Smooth Transitions**: Includes smooth scaling animations for a polished visual effect.
- **Customizable Content**: Easily update the `images` array to change the gallery's content.

## Credits

- Inspired from [Expandable Gallery Component by David Mráz](https://x.com/davidm_ml/status/1872319793124282653)
