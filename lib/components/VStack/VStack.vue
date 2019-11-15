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
    },
    as: {
      type: String,
      default: "div"
    }
  },
  render: function(createElement) {
    return createElement(
      this.as, // tag name
      {
        class: "v-stack",
        style: `--v-stack-gap: var(--s${this.gap}); --v-stack-padY: var(--s${this.padY});  --v-stack-padX: var(--s${this.padX});`
      },
      this.$slots.default // array of children
    );
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
