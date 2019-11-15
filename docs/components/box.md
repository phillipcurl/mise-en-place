# `<Box />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

<!-- [[toc]] -->

## Basic Usage

```vue
<Box :pad="['2', '4', '6']">
  ...
</Box>
```

<UsageResult>
<Box :pad="['2', '4', '6']" class="bg-light-gray">
  <Heading level="4" :clamp="false">Box Content</Heading>
</Box>
</UsageResult>

## Props

### `as`

- Type: `string`
- Default: `p`

The HTML element to render the `<Box />` component as. See [semantic HTML](./../guide/principles.md#semantic-html) for more details.

### `pad`

- Type: `string` or `array`
- Default: null

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to all sides of the `<Box />`. When specified, the `pad` prop overrides the `padX` and `padY` props.

### `padX`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to the left and right sides of the `<Box />`.

### `padY`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to the top and bottom sides of the `<Box />`.

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?