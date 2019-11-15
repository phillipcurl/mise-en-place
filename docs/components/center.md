# `<Center />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Basic Usage

```vue
<Center :width="['200px', '400px', '500px']" pad="4">
  ...
</Center>
```

<UsageResult>
<Center :width="['200px', '400px', '500px']" pad="4" class="bg-light-gray">
  <Heading level="4" :clamp="false">Center Content</Heading>
</Center>
</UsageResult>

## Props

### `width`

- Type: `string`
- Default: `var(--measure)`

A [responsive prop](./../guide/principles.md#responsive-props) that specifies the `max-width` CSS value for the `<Center />` component. By default, this value is set to the `measureWidth` value in your `mise-en-place` config.

### `as`

- Type: `string`
- Default: `p`

The HTML element to render the `<Center />` component as. See [semantic HTML](./../guide/principles.md#semantic-html) for more details.

### `pad`

- Type: `string` or `array`
- Default: null

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to all sides of the `<Center />`. When specified, the `pad` prop overrides the `padX` and `padY` props.

### `padX`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to the left and right sides of the `<Center />`.

### `padY`

- Type: `string` or `array`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to the top and bottom sides of the `<Center />`.

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
