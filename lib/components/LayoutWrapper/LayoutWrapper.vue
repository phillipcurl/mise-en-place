<script>
export default {
  name: "LayoutWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: "layout-wrapper"
      },
      this.$slots.default
    );
  }
};
</script>

<style>
:root {
  --line-height-heading: 1.2;
  --line-height-body: 1.4;
  --measure: 60ch;
  --breakpoint-sm: "768px";
  --breakpoint-md: "992px";
  --breakpoint-lg: "1250px";
  --spacing-ratio: 1.61803398875;
  --s-base: 1rem;
  --s0: 0;
  --s1: calc(var(--s-base) * 0.25);
  --s2: calc(var(--s-base) * 0.5);
  --s3: calc(var(--s-base) * 0.75);
  --s4: var(--s-base);
  --s5: calc(var(--s4) * var(--spacing-ratio));
  --s6: calc(var(--s5) * var(--spacing-ratio));
  --s7: calc(var(--s6) * var(--spacing-ratio));
  --s8: calc(var(--s7) * var(--spacing-ratio));
  --s9: calc(var(--s8) * var(--spacing-ratio));
  box-sizing: border-box;
}

.layout-wrapper {
}
</style>
