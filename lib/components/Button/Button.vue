<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: "default"
    },
    css: {
      type: Object,
      default: () => ({})
    }
  },
  render: function(h) {
    // const {base}
    const buttonStyles = this.$theme.get(`button`);
    console.log("buttonStyles: ", buttonStyles);
    return h(
      "button",
      {
        class: this.$theme.css(
          Object.assign(
            {},
            this.$theme.get("button.default", "button[0]"),
            this.$theme.get(`button.${this.variant}`, "button[0]"),
            this.css
          )
        ),
        on: this.$listeners,
        attrs: this.$attrs
      },
      this.$slots.default
    );
  }
};
</script>
