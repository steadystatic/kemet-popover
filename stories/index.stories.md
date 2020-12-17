```js script
import { html } from '@open-wc/demoing-storybook';
import '../kemet-popover.js';

export default {
  title: 'KemetPopover',
  component: 'kemet-popover',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# KemetPopover

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add kemet-popover
```

```js
import 'kemet-popover/kemet-popover.js';
```

```js preview-story
export const Simple = () => html`
  <kemet-popover></kemet-popover>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <kemet-popover title="Hello World"></kemet-popover>
`;
```
