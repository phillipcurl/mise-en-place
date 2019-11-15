<template>
  <iframe
    :src="
      `${url}?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=light&view=preview`
    "
    class="bg-light-gray sandbox-demo"
    style="height: 500px;"
    :style="`height: ${height};`"
    title="mise-en-place-demo"
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  ></iframe>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: "500px"
    }
  }
};
</script>

<style scoped>
.sandbox-demo {
  width: 100%;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
}
</style>
