<script>
export default {
  name: "AspectRatio",
  props: {
    ratio: {
      type: String,
      default: "16:9"
    },
    as: {
      type: String,
      default: "div"
    }
  },
  computed: {
    padding() {
      const [d, n] = this.ratio.split(":");
      if (n && d) {
        return `calc(${n} / ${d} * 100%);`;
      } else {
        return "calc(9 / 16 * 100%);";
      }
    }
  },
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: "frame",
        style: `--frame-pad: ${this.padding};`
      },
      this.$slots.default
    );
  }
};
</script>
<style scoped>
.frame {
  position: relative;
  padding-bottom: var(--frame-pad);
}

.frame > * {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.frame > img,
.frame > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
