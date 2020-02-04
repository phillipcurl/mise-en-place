<script>
export default {
  name: "Grid",
  props: {
    gap: {
      type: [String, Array],
      default: "0"
    },
    width: {
      type: String
    },
    columns: {
      type: Number
    },
    as: {
      type: String,
      default: "div"
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h) {
    return h(
      this.as,
      {
        class: this.$theme.css({
          display: "grid",
          gridGap: this.gap,
          gridTemplateColumns: this.width
            ? `repeat(auto-fill, minmax(${this.width}, 1fr))`
            : `repeat(${this.columns}, 1fr)`
        }),
        attrs: {
          ...this.$attrs
        }
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped>
/* @supports (width: min(var(--grid-col-width), 100%)) {
	.grid {
		grid-template-columns: repeat(
			auto-fit,
			minmax(min(var(--grid-col-width), 100%), 1fr)
		);
	}
} */
</style>
