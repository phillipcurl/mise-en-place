# `<Grid />`

A wrapper component that aligns its children in a configurable grid using CSS grid. Each cell fits to the height of the tallest cell in its row.

<SandboxDemo url="https://codesandbox.io/embed/mise-en-place-demo-grid-ky3uk" />

## Basic Usage

```vue
<Grid :gap="['2', '4', '6']" :pad="['2', '4']" width="20rem">
  ...
</Grid>
```

<UsageResult>
<Grid :gap="['2', '4', '6']" :pad="['2', '4']" width="20rem" class="bg-dark-gray">
  <Box pad="4" v-for="i in 6" :key="i" class="bg-light-gray"><Heading level="4" :clamp="false">Grid Item</Heading></Box>
</Grid>
</UsageResult>

## Props

### `gap`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<Grid />`.

### `width`

**Recommended**

- Type: `string`
- Default: `null`

If specified, the grid will size items accordingly, such that each child element takes up no more than the given width. The grid will responsively collapse into a vertical stack as needed. The `width` prop overrides the column prop if both are set.

### `columns`

- Type: `string`
- Default: `null`

If specified, the grid will size items accordingly, such that each child element takes up no more than the given width. The grid will responsively collapse into a vertical stack as needed. The `width` prop overrides the column prop if both are set.

### `pad`

- Type: `string` or `array`
- Default: null

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to all sides of the `<Grid />`. When specified, the `pad` prop overrides the `padX` and `padY` props.

### `padX`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to the left and right sides of the `<Grid />`.

### `padY`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to the top and bottom sides of the `<Grid />`.

### `as`

- Type: `string`
- Default: `p`

The HTML element to render the `<Grid />` component as. See [semantic HTML](./../guide/principles.md#semantic-html) for more details.

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
