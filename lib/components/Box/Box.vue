<script>
import { getPadValues, validateSpacingScale } from "./../../util";

export default {
  name: "Box",
  props: {
    pad: {
      type: [String, Array],
      default: null,
      validator: function(value) {
        return validateSpacingScale(value);
      }
    },
    padX: {
      type: [String, Array],
      default: "0",
      validator: function(value) {
        return validateSpacingScale(value);
      }
    },
    padY: {
      type: [String, Array],
      default: "0",
      validator: function(value) {
        return validateSpacingScale(value);
      }
    },
    as: {
      type: String,
      default: "div"
    }
  },
  computed: {
    _pad() {
      return getPadValues("box", {
        pad: this.pad ? this.pad : null,
        padY: this.padY,
        padX: this.padX
      });
    }
  },
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: "box",
        style: this._pad
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped>
.box {
  padding: var(--box-pad);
}

@media (min-width: 768px) {
  .box {
    padding: var(--box-pad__sm);
  }
}
@media (min-width: 992px) {
  .box {
    padding: var(--box-pad__md);
  }
}
@media (min-width: 1200px) {
  .box {
    padding: var(--box-pad__lg);
  }
}
</style>
