# `<Container />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Usage

```vue
<Container :max-width="['200px', '400px', '500px']" pad="4">
  ...
</Container>
```

<UsageResult>
<Container :max-width="['200px', '400px', '500px']" pad="4" class="bg-light-gray">
  <Heading level="4" :clamp="false">Container Content</Heading>
</Container>
</UsageResult>

## Props

### `maxWidth`

- Type: `String` or `Array<String>`
- Default: `var(--measure)`

A [responsive prop](./../guide/principles.md#responsive-props) that specifies the `max-width` CSS value for the `<Container />` component. By default, this value is set to the `measureWidth` value in your `mise-en-place` config.

### `as`

<as-prop name="Container" />

### `css`

<css-prop />

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
