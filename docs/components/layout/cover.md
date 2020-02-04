# `<Cover />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Usage

```vue
<Cover min-height="300px" pad="3">
  <template v-slot:header>
    Cover Header
  </template>
  Cover Content
  <template v-slot:footer>
    Cover Footer
  </template>
</Cover>
```

<UsageResult>
<Cover min-height="300px" pad="3" class="bg-light-gray">
<template v-slot:header>
<Heading level="4" :clamp="false">Cover Header</Heading>
</template>
<Heading level="4" :clamp="false">Cover Content</Heading>
<template v-slot:footer>
<Heading level="4" :clamp="false">Cover Footer</Heading>
</template>
</Cover>
</UsageResult>

## Props

### `minHeight`

- Type: `String` or `Array<String>`
- Default: `100vh`

A [responsive prop](./../guide/principles.md#responsive-props) that specifies the `max-width` CSS value for the `<BaseText />` component. By default, this value is set to the `measureWidth` value in your `mise-en-place` config.

### `gap`

- Type: `String` or `Array<String>`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<Grid />`.

### `as`

<as-prop name="Cover" />

### `css`

<css-prop />

## Slots

### `header`

- Type: `String` or `Array<String>`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<Grid />`.

### `footer`

- Type: `String` or `Array<String>`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<Grid />`.

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
