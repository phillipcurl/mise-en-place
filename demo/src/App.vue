<template>
  <div
    id="app"
    :class="
      $theme.css({
        fontFamily: 'body'
      })
    "
  >
    <Container max-width="992px" :css="{ p: '3' }">
      <HStack gap="3">
        <Box>Logo</Box>
        <Spacer />
        <Inline gap="3" as="nav">
          <Generic
            as="router-link"
            to="/"
            :css="{
              color: 'primary',
              transition: 'background-color 0.2s ease-in-out',
              ':hover': {
                bg: 'primary',
                color: 'white'
              }
            }"
            >Home</Generic
          >
          <Generic
            as="router-link"
            to="/layout"
            :css="{
              color: 'primary',
              transition: 'background-color 0.2s ease-in-out',
              ':hover': {
                bg: 'primary',
                color: 'white'
              }
            }"
            >Layout</Generic
          >
        </Inline>
      </HStack>
    </Container>
    <!-- <img src="https://picsum.photos/1600/900" /> -->

    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  margin: 0;
}

/* * {
  border: tomato 1px dotted;
} */
</style>
