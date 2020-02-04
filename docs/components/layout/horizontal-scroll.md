# `<HorizontalScroll />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Usage

```vue
<VStack :gap="['2', '3', '4']" :pad="['2', '4']" show-scrollbar>
  ...
</VStack>
```

<UsageResult>
<HorizontalScroll :gap="['2', '3', '4']" :pad="['2', '4']" show-scrollbar class="bg-light-gray">
<Box pad="6" v-for="i in 6" :key="i" class="bg-dark-gray"></Box>
</HorizontalScroll>
</UsageResult>

## Props

### `gap`

- Type: `String` or `Array<String>`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<HorizontalScroll />`.

### `as`

<as-prop name="HorizontalScroll" />

### `css`

<css-prop />

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
