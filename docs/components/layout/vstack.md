# `<VStack />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Usage

```vue
<VStack :gap="[2, 3, 4]" :pad="[2, 4]">
  ...
</VStack>
```

<UsageResult>
<VStack :gap="[2, 3, 4]" :pad="[3, 4]" class="bg-light-gray">
  <Box pad="4" v-for="i in 4" :key="i" class="bg-dark-gray" />
</VStack>
</UsageResult>

## Props

### `gap`

- Type: `String` or `Array<String>`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<HorizontalScroll />`.

### `as`

<as-prop name="VStack" />

### `css`

<css-prop />

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
