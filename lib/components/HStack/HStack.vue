<script>
export default {
  name: "HStack",
  props: {
    size: {
      type: String,
      default: "primary"
    },
    gap: {
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
  computed: {
    firstMargin() {
      return Array.from(this.gap).map(val => {
        let themeVal = this.$theme.get(`space.${val}`);
        if (typeof themeVal === "number") {
          return `calc(${themeVal}px / 2 * -1)`;
        } else {
          return `calc(${themeVal} / 2 * -1)`;
        }
      });
    },
    secondMargin() {
      return Array.from(this.gap).map(val => {
        let themeVal = this.$theme.get(`space.${val}`);
        if (typeof themeVal === "number") {
          return `calc(${themeVal}px / 2)`;
        } else {
          return `calc(${themeVal} / 2)`;
        }
      });
    }
  },
  render: function(h) {
    return h(
      this.as,
      {
        class: this.$theme.css(
          Object.assign({}, this.css, {
            "> *": {
              display: "flex",
              flexWrap: "wrap",
              m: this.firstMargin
            },
            "> * > *": {
              // flex-basis: calc((-30px - (100% - var(--h-stack-gap))) * 999),
              flexGrow: 1,
              flexBasis: "auto",
              m: this.secondMargin
            },
            "> *:first-child": {
              ml: "0"
            },
            "> *:last-child": {
              mr: "0"
            }
          })
        ),
        attrs: this.$attrs
      },
      [h("div", this.$slots.default)]
    );
  }
};
</script>

<style scoped>
/* .h-stack > * {
	margin: 0 calc(var(--h-stack-gap) / 2);
	flex-grow: 1;
	flex-basis: 0;
}
.h-stack > *:first-child {
	margin-left: 0;
}
.h-stack > *:last-child {
	margin-right: 0;
} */

/* .h-stack > * > :nth-last-child(n + 5),
.h-stack > * > :nth-last-child(n + 5) ~ * {
  flex-basis: 100%;
} */
</style>
