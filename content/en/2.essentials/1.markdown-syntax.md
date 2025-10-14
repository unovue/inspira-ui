---
title: Markdown Syntax
description: Text, title, and styling in standard markdown.
navigation:
  icon: i-lucide-heading-1
---

## Titles

Use titles to introduce main sections. They structure your documentation and help users navigate content.

::code-preview
---
class: "[&>div]:*:my-0"
---
## Titles

#code
```mdc
## Titles
```
::

### Subtitles

Use subtitles to divide sections further. They create a more detailed content hierarchy for better readability.

::code-preview
---
class: "[&>div]:*:my-0"
---
### Subtitles

#code
```mdc
### Subtitles
```
::

::tip
Each title and subtitle creates an anchor and shows up automatically in the table of contents.
::

## Text Formatting

Docus supports most Markdown formatting options.

| Style  | How to use   | Result     |
| ------ | ------------ | ---------- |
| Bold   | `**bold**`   | **Bold**   |
| Italic | `*italic*`   | *Italic*   |
| Strike | `~~strike~~` | ~~Strike~~ |

Combine formatting for richer text styles and visual emphasis.

| Style         | How to use          | Result            |
| ------------- | ------------------- | ----------------- |
| Bold Italic   | `**_bold italic_**` | ***Bold Italic*** |
| Bold Strike   | `~~**bold**~~`      | ~~**Bold**~~      |
| Italic Strike | `~~*italic*~~`      | ~~*Italic*~~      |

## Links

Links connect different parts of your documentation and external resources, essential for user navigation and providing references.
To create a link, wrap the link text in brackets `[]()`.

::code-preview
---
class: "[&>div]:*:my-0"
---
[Nuxt UI](https://ui.nuxt.com/getting-started/installation/nuxt)

#code
```mdc
[Nuxt UI](https://ui.nuxt.com/getting-started/installation/nuxt)
```
::

### Internal links

For linking within your documentation, use root-relative paths like `/getting-started/installation`.

::code-preview
---
class: "[&>div]:*:my-0"
---
[Installation](/getting-started/installation)

#code
```mdc
[Installation](/getting-started/installation)
```
::

## Lists

Organize related items in a structured, readable format. Markdown supports unordered, ordered, and nested lists for various content needs.

### Unordered

Use unordered lists for items without a specific sequence. Start each item with a `-` symbol.

::code-preview
---
class: "[&>div]:*:my-0"
---
- I'm a list item.
- I'm another list item.
- I'm the last list item.

#code
```mdc
- I'm a list item.
- I'm another list item.
- I'm the last list item.
```
::

### Ordered

Use ordered lists when item order matters, like steps in a process. Start each item with a number.

::code-preview
---
class: "[&>div]:*:my-0"
---
1. I'm a list item.
2. I'm another list item.
3. I'm the last list item.

#code
```mdc
1. I'm a list item.
2. I'm another list item.
3. I'm the last list item.
```
::

### Nested

Create hierarchical lists with sub-items for complex structures. Indent sub-items by four spaces for nesting.

::code-preview
---
class: "[&>div]:*:my-0"
---
- I'm a list item.
  - I'm a nested list item.
  - I'm another nested list item.
- I'm another list item.

#code
```mdc
- I'm a list item.
  - I'm a nested list item.
  - I'm another nested list item.
- I'm another list item.
```
::

## Tables

Present structured data in rows and columns clearly. Tables are ideal for comparing data or listing properties.

::code-preview
---
class: "[&>div]:*:my-0 [&>div]:*:w-full"
---
| Prop    | Default   | Type     |
| ------- | --------- | -------- |
| `name`  |           | `string` |
| `size`  | `md`      | `string` |
| `color` | `neutral` | `string` |

#code
```mdc
| Prop    | Default   | Type                     |
|---------|-----------|--------------------------|
| `name`  |           | `string`{lang="ts-type"} |
| `size`  | `md`      | `string`{lang="ts-type"} |
| `color` | `neutral` | `string`{lang="ts-type"} |
```
::

## Blockquotes

Highlight important quotations, citations, or emphasized text. Blockquotes visually distinguish quoted content.

### Singleline

Single-line blockquotes are best for short, impactful quotes or citations that fit within a single line. To create a single-line blockquote, add a `>` in front of a paragraph. Ideal for short and impactful quotes.

::code-preview
---
class: "[&>div]:*:my-0"
---
> Nuxt UI is a collection of Vue components, composables and utils built on top of Reka UI, oriented on structure and layout and designed to be used as building blocks for your app.

#code
```mdc
> Nuxt UI is a collection of Vue components, composables and utils built on top of Reka UI, oriented on structure and layout and designed to be used as building blocks for your app.
```
::

### Multiline

Multi-line blockquotes are suitable for longer quotes or when you need to include multiple paragraphs within a single quotation.

::code-preview
---
class: "[&>div]:*:my-0"
---
> Nuxt UI is a collection of Vue components, composables and utils built on top of Reka UI, oriented on structure and layout and designed to be used as building blocks for your app.
>
> Create beautiful, responsive, and accessible Vue applications with Nuxt UI.

#code
```mdc
> Nuxt UI is a collection of Vue components, composables and utils built on top of Reka UI, oriented on structure and layout and designed to be used as building blocks for your app.
>
> Create beautiful, responsive, and accessible Vue applications with Nuxt UI.
```
::
