<script>
export default {
  name: "Spacer",
  props: {
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
          ...this.css,
          flexGrow: "9999 !important"
        }),
        attrs: {
          "aria-hidden": true,
          ...this.$attrs
        }
      },
      this.$slots.default
    );
  }
};
</script>
