<script>
export default {
  name: "BaseText",
  props: {
    as: {
      type: String,
      default: "p"
    },
    maxWidth: {
      type: String,
      default: "var(--measure)"
    },
    lineHeight: {
      type: String,
      default: "var(--line-height-body)"
    }
  },
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: "text",
        style: `--text-max-width: ${this.maxWidth}; --text-line-height: ${this.lineHeight}`
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped>
.text {
  max-width: var(--text-max-width);
  margin: 0;
  padding: 0;
  line-height: var(--text-line-height);
}
</style>
