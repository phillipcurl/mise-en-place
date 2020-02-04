# `<Grid />`

A wrapper component that aligns its children in a configurable grid using CSS grid. Each cell fits to the height of the tallest cell in its row.

## Usage

```vue
<Grid
  :gap="['2', '4', '6']"
  :pad="['2', '4']"
  :width="['5rem', '10rem', '20rem']"
>
  ...
</Grid>
```

<UsageResult>
<Grid :gap="[2, 3, 4]" :pad="[2, 4]" width="20rem" class="bg-light-gray">
  <Box pad="6" v-for="i in 6" :key="i" class="bg-dark-gray"></Box>
</Grid>
</UsageResult>

## Props

### `gap`

- Type: `String` or `Array<String>`
- Default: `0`

A [responsive prop](./../guide/principles.md#responsive-props) bound to the [spacing scale](./../guide/principles.md#spacing-scale) that applies a specified space between successive items in the `<Grid />`.

### `width`

**Recommended**

- Type: `String`
- Default: `null`

If specified, the grid will size items accordingly, such that each child element takes up no more than the given width. The grid will responsively collapse into a vertical stack as needed. The `width` prop overrides the column prop if both are set.

### `columns`

- Type: `String`
- Default: `null`

If specified, the grid will size items accordingly, such that each child element takes up no more than the given width. The grid will responsively collapse into a vertical stack as needed. The `width` prop overrides the column prop if both are set.

### `as`

<as-prop name="Grid" />

### `css`

<css-prop />

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

<SandboxDemo url="https://codesandbox.io/embed/mise-en-place-demo-grid-ky3uk" />
