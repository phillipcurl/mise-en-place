<template>
  <VStack :gap="['16', '20']">
    <Cover
      as="header"
      min-height="70vh"
      :css="{
        bg: 'primary',
        color: 'white'
      }"
    >
      <Heading level="1">Cover</Heading>
      <!-- <div slot="footer">
        footer
      </div> -->
    </Cover>

    <!-- <button @click="count++">Add</button> -->
    <Container as="section" max-width="992px" :css="{ px: 3 }">
      <VStack gap="md">
        <HStack gap="3">
          <Heading level="2">VStack</Heading>
          <Spacer />
          <Button variant="outline">Show Code</Button>
        </HStack>
        <VStack :gap="['sm', 'md']">
          <Box
            :pad="['md', null, 'lg']"
            :css="{
              bg: 'indigo.100'
            }"
          >
            <Generic
              as="input"
              type="range"
              min="1"
              max="10"
              :value="count"
              @input="count = Number($event.target.value)"
              :css="{
                height: '4px',
                cursor: 'pointer',
                color: 'inherit',
                bg: 'primary',
                borderRadius: '9999px'
              }"
            />
          </Box>
          <Box
            :pad="['md', null, 'lg']"
            v-for="i in count"
            :key="i"
            :css="{
              bg: 'indigo.100'
            }"
          >
            <Heading level="3">VStack Child {{ i }}</Heading>
          </Box>
        </VStack>
      </VStack>
    </Container>

    <Container as="VStack" max-width="992px" gap="md">
      <Heading level="2">Inline</Heading>
      <Inline :gap="['sm', 'md']">
        <Box
          :pad="['md', null, 'lg']"
          v-for="i in 8"
          :key="i"
          :css="{
            bg: 'indigo.100'
          }"
        >
          <Heading level="3">Inline Child {{ i }}</Heading>
        </Box>
      </Inline>
    </Container>

    <Container as="section" max-width="992px" :css="{ px: 3 }">
      <VStack gap="md">
        <Heading level="2">HorizontalScroll</Heading>
        <label>
          Show scrollbar
          <Generic
            as="input"
            type="checkbox"
            min="1"
            max="10"
            :checked="showHorizontalScrollbar"
            @change="showHorizontalScrollbar = $event.target.checked"
            :css="{
              color: 'primary'
            }"
          />
        </label>
        <HorizontalScroll
          :gap="['2', '3', '4']"
          :show-scrollbar="showHorizontalScrollbar"
        >
          <Box
            pad="6"
            v-for="i in 25"
            :key="i"
            :css="{
              bg: 'indigo.100'
            }"
          ></Box>
        </HorizontalScroll>
      </VStack>
    </Container>

    <Container as="section" max-width="992px" :css="{ px: 3 }">
      <VStack gap="md">
        <Heading level="2">AspectRatio</Heading>
        <AspectRatio ratio="16:9">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cjgxmtUAwTg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </VStack>
    </Container>

    <Container as="section" max-width="1250px" :css="{ px: 3 }">
      <VStack gap="md">
        <Heading level="2">Grid</Heading>
        <Grid :gap="['sm', 'md', 'lg']" width="20rem">
          <Box
            :pad="['md', null, 'lg']"
            v-for="i in count"
            :key="i"
            :css="{
              bg: 'indigo.100'
            }"
          >
            <Heading level="3">Heading {{ i }}</Heading>
            <BaseText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis incidunt, ex at necessitatibus temporibus debitis
              assumenda, magni cupiditate sit molestias minus sequi velit quos
              eius. Iure labore explicabo placeat assumenda!
            </BaseText>
          </Box>
        </Grid>
      </VStack>
    </Container>
  </VStack>
</template>

<script>
export default {
  name: "layout",
  data: () => ({
    count: 5,
    showHorizontalScrollbar: false
  })
};
</script>
