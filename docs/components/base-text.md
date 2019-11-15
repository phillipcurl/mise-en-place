# `<BaseText />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Basic Usage

```vue
<BaseText>
  ...
</BaseText>
```

<UsageResult>
<BaseText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?</BaseText>
</UsageResult>

## Props

### `as`

- Type: `string`
- Default: `p`

The HTML element to render the `<BaseText />` component as. See [semantic HTML](./../guide/principles.md#semantic-html) for more details.

### `maxWidth`

- Type: `string`
- Default: `var(--measure)`

The `max-width` CSS value for the text. By default, this value is set to the `measureWidth` value in your `mise-en-place` config.

### `lineHeight`

- Type: `string`
- Default: `var(--line-height-body)`

The `line-height` CSS value for the text. By default, this value is set to the `lineHeightBody` value in your `mise-en-place` config.

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
