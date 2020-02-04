<template>
  <VStack :gap="['16', '20']">
    <h1>Home</h1>
  </VStack>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    count: 5,
    showHorizontalScrollbar: false
  })
};
</script>
