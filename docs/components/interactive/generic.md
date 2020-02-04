# `<Generic />`

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

<!-- [[toc]] -->

## Usage

```vue
<Generic
	:theme-p="[2, 3, 4]"
	aria-label="Native HTML attributes still work."
>
  ...
</Generic>
```

<UsageResult>
<Generic :theme-p="[2, 3, 4]" theme-bg="primary" aria-label="this is the label">
  <Heading level="4" :clamp="false">Box Content</Heading>
</Generic>
</UsageResult>

## Props

### `as`

- Type: `String`
- Default: `div`

The HTML element to render the `<Generic />` component as. See [semantic HTML](./../guide/principles.md#semantic-html) for more details.

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
