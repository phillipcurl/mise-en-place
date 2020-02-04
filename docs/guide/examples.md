# Examples

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id. Cumque pariatur ex facere voluptatem perspiciatis porro libero. Suscipit blanditiis eum saepe obcaecati quis aliquam?

## Card

```vue
<Box pad="4">
  <VStack gap="4">
    <AspectRatio>
      <img src="..." />
    </AspectRatio>
    <Heading level="3">Card Title</Heading>
    <BaseText>...</BaseText>
    <Inline gap="3">
      <Box v-for="i in 3" pad-y="2" pad-x="3" class="bg-light-gray">Tag {{i}}</Box>
    </Inline>
  </VStack>
</Box>
```

<UsageResult>
<Center>
<Box pad="4" style="border: 1px solid #eaecef;">
<VStack gap="4">
<AspectRatio class="bg-dark-gray">
<img src="https://picsum.photos/200/300" />
</AspectRatio>
<Heading level="3" :clamp="false">Card Title</Heading>
<BaseText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis inventore autem minus optio dolorem id.</BaseText>
<Inline gap="3">
<Box v-for="i in 3" pad-y="2" pad-x="3" class="bg-light-gray">Tag {{i}}</Box>
</Inline>
</VStack>
</Box>
</Center>
</UsageResult>

## Navbar

```vue
<HStack :gap="['2', '4', '6']" :pad="['2', '4']">
  ...
</HStack>
```

<UsageResult>
<HStack :gap="['2', '4']" :pad="['2', '4']" class="bg-light-gray">
<Box pad="6" class="bg-dark-gray"></Box>
  <Inline  :gap="['2', '4']" justify="stretch">
  <Box pad="4" v-for="i in 3" :key="i" class="bg-dark-gray"></Box>
  </Inline>
</HStack>
</UsageResult>
