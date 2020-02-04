# `<Box />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

<!-- [[toc]] -->

## Usage

```vue
<Box :pad="[2, 3, 4]">
  ...
</Box>
```

<UsageResult>
<Box :pad="[2, 3, 4]" class="bg-light-gray">
  <Heading level="4" :clamp="false">Box Content</Heading>
</Box>
</UsageResult>

## Props

### `pad`

- Type: `String` or `Array<String>`
- Default: `null`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies padding to all sides of the `<Box />`. When specified, the `pad` prop overrides the `padX` and `padY` props.

### `as`

<as-prop name="Box" />

### `css`

<css-prop />

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
