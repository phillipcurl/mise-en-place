<script>
export default {
  name: "BaseText",
  props: {
    maxWidth: {
      type: [String, Array],
      default: "66ch"
    },
    lineHeight: {
      type: String,
      default: "body"
    },
    as: {
      type: String,
      default: "p"
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
            maxWidth: this.maxWidth,
            margin: "0px",
            lineHeight: this.lineHeight
          })
        ),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
</script>
