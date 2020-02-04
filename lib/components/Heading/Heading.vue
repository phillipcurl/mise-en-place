<script>
export default {
  name: "Heading",
  props: {
    level: {
      type: String,
      required: true
    },
    clamp: {
      type: Boolean,
      default: false
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h) {
    return h(
      `h${this.level}`,
      {
        class: this.$theme.css(
          Object.assign({}, this.css, {
            m: "0px",
            lineHeight: "heading",
            "::before": {
              display: this.clamp ? "block" : "none",
              width: "0px",
              height: "0px",
              mt: `calc((0.8 - ${this.$theme.get(
                "lineHeights.heading"
              )}) * 0.5em)`,
              content: '""'
            }
          })
        ),
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
</script>
