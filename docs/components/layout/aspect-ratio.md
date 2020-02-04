# `<AspectRatio />`

The `<AspectRatio />` component renders its contents in a responsive container with a desired aspect ratio. It's useful for things like embedded IFrames or videos.

## Usage

```vue
<AspectRatio ratio="16:9">
  ...
</AspectRatio>
```

<UsageResult>
<AspectRatio ratio="16:9" class="bg-light-gray">
  <!-- <img src="https://picsum.photos/1600/900" /> -->
<Cover min-height="100%">
<Heading level="3">16:9</Heading></Cover>
</AspectRatio>
</UsageResult>

## Props

### `ratio`

- Type: `String`
- Default: `16:9`

The desired aspect-ratio for the component. This prop must be in the format `<WIDTH>:<HEIGHT>`.

### `as`

<as-prop name="AspectRatio" />

### `css`

<css-prop />

## Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?
