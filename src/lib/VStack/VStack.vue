<template>
  <div
    class="v-stack"
    :style="
      `--v-stack-gap: var(--s${gap}); --v-stack-padY: var(--s${padY});  --v-stack-padX: var(--s${padX});`
    "
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "VStack",
  props: {
    gap: {
      type: [String, Array],
      default: "0"
    },
    padX: {
      type: [String, Array],
      default: "0"
    },
    padY: {
      type: [String, Array],
      default: "0"
    }
  }
};
</script>

<style scoped>
.v-stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: var(--v-stack-padY) var(--v-stack-padX);
}
.v-stack > * {
  margin-top: 0;
  margin-bottom: 0;
}
.v-stack > * + * {
  margin-top: var(--v-stack-gap);
}
</style>
