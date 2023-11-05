# mox-components
Simple, accessible Web Components

## Installation
This isn't packaged anywhere right now, and may never be, who knows.

`npm i github:moxamber/mox-components`

## Motivation
As a React developer I often find myself rewriting a handful of base components and utilities over and over. This repo is intended to provide myself a useful reference for a (mostly) unstyled, but functional and accessible, base version of these components I can build on and share with others.
It's also a fun way to learn more about Web Components 😁

## Compatibility
This project is written to support ES2021, and will include polyfills for any components that require newer functionality.

## Components
### mox-modal
A basic modal built on <dialog>, with click-outside behaviour and a default header with a close button.

Usage:
```html
  <mox-modal>
    <h1 slot="title">Title</h1>
    <p slot="content">Content</p>
  </mox-modal>
```

## Planned Components
**VisuallyHidden** - Hide text visually while still leaving it visible in the accessibility tree
**MediaObject** - 2 column box with an image and some amount of content (eg. a Facebook status)
**Accordion** - Stack of collapsible panels that contain large amounts of content (eg. FAQs)
**Dropdown** - A dropdown menu
**Tabs** - A set of containers controlled by tabs
