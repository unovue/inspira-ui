Thank you for your interest in contributing to the **Inspira UI** project! Your contributions help make this project better for everyone. Please take a moment to read through these guidelines to ensure a smooth collaboration.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Code of Conduct](#code-of-conduct)
3. [How to Contribute](#how-to-contribute)
   - [Reporting Bugs](#reporting-bugs)
   - [Suggesting Enhancements](#suggesting-enhancements)
   - [Adding New Components](#adding-new-components)
4. [Project Structure](#project-structure)
5. [Style Guidelines](#style-guidelines)
   - [Coding Standards](#coding-standards)
   - [Component Format](#component-format)
   - [Commit Messages](#commit-messages)
6. [Documentation Guidelines](#documentation-guidelines)
   - [Single-File Components](#single-file-components)
   - [Multi-File Components](#multi-file-components)
7. [Testing](#testing)
8. [License](#license)

---

## Getting Started

- **Fork the Repository**: Create a personal fork of the project on GitHub.
- **Clone Your Fork**: Clone your forked repository to your local machine.
- **Create a Branch**: Create a new branch for your contribution (`git checkout -b feature/YourFeatureName`).
- **Install Dependencies**: Run `npm install` to install all necessary dependencies.

## Code of Conduct

By participating in this project, you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md), which aims to foster an open and welcoming environment.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an [issue](https://github.com/unovue/inspira-ui/issues){:target="\_blank"} and include:

- A clear and descriptive title.
- Steps to reproduce the issue.
- Expected and actual results.
- Screenshots or code snippets, if applicable.

### Suggesting Enhancements

We welcome suggestions for new features or improvements. Please open an [issue](https://github.com/unovue/inspira-ui/issues){:target="\_blank"} and include:

- A clear and descriptive title.
- A detailed description of the enhancement.
- Any relevant examples or mockups.

### Adding New Components

We appreciate contributions that add new components to the library. Please ensure that:

- The component is generally useful and aligns with the project's goals.
- The component is compatible with both **Nuxt** and **Vue**.
- You follow the coding and documentation guidelines outlined below.
- You include unit tests for your component.

## Project Structure

Understanding the project structure is crucial for effective contribution:

- **Components Directory**:
  - Main components should be placed in `components/content/inspira/ui/<component-folder-name>/`.
  - Example components should be placed in `components/content/inspira/examples/<component-folder-name>/`.
- **Documentation**:
  - Documentation files are located in the `content/2.components/` directory.
  - After adding a component, write its documentation in this directory.

## Style Guidelines

### Coding Standards

- **Language**: All components should be written in **Vue.js** with TypeScript support.
- **Styling**: Use **Tailwind CSS** classes for styling whenever possible.
- **Naming Conventions**: Use `PascalCase` for component names and filenames.

### Component Format

Your Vue components should adhere to the following structure:

```vue
<!-- Template -->
<template>
  <!-- Your template code goes here -->
</template>

<!-- Script -->
<script lang="ts" setup>
// Your script code goes here
</script>

<!-- Styles (if required) -->
<style scoped>
/* Your styles go here */
</style>
```

**Notes:**

- Use `<script lang="ts" setup>` for TypeScript and the Composition API.
- Keep styles scoped to prevent conflicts.
- Ensure compatibility with both **Nuxt** and **Vue**.

### Commit Messages

- Use the [Conventional Commits](https://www.conventionalcommits.org/) format.
- Begin with a type (`feat`, `fix`, `docs`, etc.) followed by a short description.
- Example: `feat: add TextHoverEffect component`

## Documentation Guidelines

Proper documentation is crucial for users to understand and effectively use the components. Follow these guidelines when adding documentation for new components.

### Steps to Add a New Component

1. **Create the Component**
   - Place the main component in `components/content/inspira/ui/<component-folder-name>/`.
   - Follow the [Component Format](#component-format) specified above.
   - If the component requires examples or demos, add demo components to `components/content/inspira/examples/<component-folder-name>/`.

2. **Write Documentation**
   - Add a new Markdown file in `content/2.components/` for your component's documentation.
   - Use the appropriate template based on whether your component is single-file or multi-file (see below).
   - Mention the **Credits** and source if the component is ported from any other UI library or taken inspiration from any other source.

3. **Ensure Compatibility**
   - Test your component in both **Nuxt** and **Vue** environments.

### Single-File Components

For components that are contained within a single `.vue` file, use the following template:

1. **Front Matter**

   Begin with YAML front matter that includes the `title` and `description`:

   ```yaml
   ---
   title: Your Component Title
   description: A brief description of what your component does.
   ---
   ```

2. **Preview Section**

   Use the `ComponentLoader` to display a live preview of the component. The `id` should be set to the folder name of your component in `components/content/inspira/examples/`. In case, there is no folder, then `id` is not required.

   ```markdown
   ::ComponentLoader{label="Preview" componentName="YourComponentDemo" type="examples" id="your-component-folder-name"}
   ::
   ```

3. **API Documentation**

   Provide a table listing all props:

   ```markdown
   ## API

   | Prop Name | Type     | Default | Description           |
   | --------- | -------- | ------- | --------------------- |
   | `prop1`   | `string` | `''`    | Description of prop1. |
   | `prop2`   | `number` | `0`     | Description of prop2. |
   ```

4. **Component Code**

   Include the full code of the component using `CodeViewer`. The `id` should be set to the folder name of your component in `components/content/inspira/ui/`.

   ```markdown
   ## Component Code

   You can copy and paste the following code to create this component:

   ::CodeViewer{filename="YourComponent.vue" language="vue" componentName="YourComponent" type="ui" id="your-component-folder-name"}
   ::
   ```

**Example:**

```markdown
---
title: Text Hover Effect
description: A text hover effect that animates and outlines gradient on hover.
---

::ComponentLoader{label="Preview" componentName="TextHoverEffectDemo" type="examples" id="text-hover-effect"}
::

## API

| Prop Name     | Type     | Default  | Description                                               |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `text`        | `string` | Required | The text to be displayed with the hover effect.           |
| `duration`    | `number` | `200`    | The duration of the mask transition animation in seconds. |
| `strokeWidth` | `number` | `0.75`   | The width of the text stroke.                             |
| `opacity`     | `number` | `null`   | The opacity of the text.                                  |

## Component Code

You can copy and paste the following code to create this component:

::CodeViewer{filename="TextHoverEffect.vue" language="vue" componentName="TextHoverEffect" type="ui" id="text-hover-effect"}
::
```

In this example, the `id` used in both `ComponentLoader` and `CodeViewer` is `text-hover-effect`, which matches the folder name where the component and its demo are stored.

### Multi-File Components

For components that consist of multiple files, such as a main component and several sub-components or variants, use the following template:

1. **Front Matter**

   Begin with YAML front matter:

   ```yaml
   ---
   title: Your Components Group Title
   description: A brief description of what this group of components does.
   ---
   ```

2. **Preview Sections**

   Include multiple `ComponentLoader` sections for each example or variant. The `id` should be set to the folder name of your component in `components/content/inspira/examples/`.

   ```markdown
   ::ComponentLoader{label="Preview" componentName="ComponentVariantDemo" type="examples" id="your-component-folder-name"}
   ::
   ```

3. **API Documentation**

   Provide comprehensive API documentation covering all components:

   ```markdown
   ## API

   | Prop Name | Type     | Default | Description                             |
   | --------- | -------- | ------- | --------------------------------------- |
   | `prop1`   | `string` | `''`    | Description applicable to all variants. |
   ```

4. **Utility Classes**

   If applicable, list any utility classes:

   ```markdown
   ### Utility Classes

   - **Class Name:** `class-description`
   ```

5. **Component Code**

   Use a `code-group` to group multiple `CodeViewerTab` components, one for each file. The `id` should be set to the folder name of your component in `components/content/inspira/ui/`.

   ```markdown
   ## Component Code

   You can copy and paste the following code to create these components:

   ::code-group

   ::CodeViewerTab{label="MainComponent.vue" language="vue" componentName="MainComponent" type="ui" id="your-component-folder-name"}
   ::

   ::CodeViewerTab{filename="VariantOne.vue" language="vue" componentName="VariantOne" type="ui" id="your-component-folder-name"}
   ::

   ::CodeViewerTab{filename="VariantTwo.vue" language="vue" componentName="VariantTwo" type="ui" id="your-component-folder-name"}
   ::

   ::
   ```

**Example:**

```markdown
---
title: Pattern Backgrounds
description: Simple animated pattern backgrounds to make your sections stand out.
---

::ComponentLoader{label="Preview" componentName="DotBackgroundDemo" type="examples" id="pattern-backgrounds"}
::

## Examples

Grid background without animation:

::ComponentLoader{label="Preview" componentName="GridBackgroundDemo" type="examples" id="pattern-backgrounds"}
::

Small grid background with animation:

::ComponentLoader{label="Preview" componentName="GridSmallBackgroundDemo" type="examples" id="pattern-backgrounds"}
::

## API

| Prop Name   | Type                                                                                                     | Default | Description                           |
| ----------- | -------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------- |
| `animate`   | `boolean`                                                                                                | `false` | Set `true` to animate the background. |
| `direction` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | `'top'` | Direction of the animation movement.  |

### Utility Classes

- **Dot Pattern:** `dark:bg-dot-white/[0.2] bg-dot-black/[0.2]`
- **Grid Pattern:** `dark:bg-grid-white/[0.2] bg-grid-black/[0.2]`
- **Small Grid Pattern:** `dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]`

## Component Code

You can copy and paste the following code to create these components:

::code-group

::CodeViewerTab{label="PatternBackground.vue" language="vue" componentName="PatternBackground" type="ui" id="pattern-backgrounds"}
::

::CodeViewerTab{filename="DotBackground.vue" language="vue" componentName="DotBackground" type="ui" id="pattern-backgrounds"}
::

::CodeViewerTab{filename="GridBackground.vue" language="vue" componentName="GridBackground" type="ui" id="pattern-backgrounds"}
::

::CodeViewerTab{filename="GridSmallBackground.vue" language="vue" componentName="GridSmallBackground" type="ui" id="pattern-backgrounds"}
::

::
```

In this example, the `id` used in `ComponentLoader` and all `CodeViewerTab` components is `pattern-backgrounds`, which matches the folder name where the components and their demos are stored.

## Testing

- **Unit Tests**: Write unit tests for your component if applicable.
- **Cross-Environment Testing**: Ensure that your component works correctly in both **Nuxt** and **Vue** environments.
- **Visual Testing**: Check the component visually to ensure it renders correctly.

## Additional Notes

- **Component Names**: Use `PascalCase` for component filenames and names.
- **IDs**: In `CodeViewer`, `CodeViewerTab`, and `ComponentLoader`, the `id` parameter should be set to the **folder name** where the component is stored in `components/content/inspira/ui/<component-folder-name>/` and `components/content/inspira/examples/<component-folder-name>/`. This helps in correctly linking the code and examples in the documentation.
- **Demo Components**: For each component, create a corresponding `Demo` component used in the `ComponentLoader` for previews, and place it in `components/content/inspira/examples/<component-folder-name>/`.
- **Localization**: If your component supports multiple languages, include details in the documentation.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](https://github.com/unovue/inspira-ui/blob/main/LICENSE){:target="\_blank"}.
