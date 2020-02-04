<script>
export default {
  name: "Box",
  props: {
    pad: {
      type: [String, Array],
      default: "0"
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
        class: this.$theme.css(
          Object.assign({}, this.css, {
            p: this.pad
          })
        ),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
</script>
