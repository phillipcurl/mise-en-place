<script>
import {
  getPadValues,
  validateSpacingScale,
  getResponsiveValues
} from "./../../util";

export default {
  name: "Center",
  props: {
    width: {
      type: [String, Array],
      default: "var(--measure)"
    },
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
      return getPadValues("center", {
        pad: this.pad ? this.pad : null,
        padY: this.padY,
        padX: this.padX
      });
    },
    _width() {
      return getResponsiveValues("center-width", this.width);
    }
  },
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: "center",
        style: `${this._pad}; ${this._width}`
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped>
.center {
  box-sizing: content-box;
  max-width: var(--center-width);
  margin-right: auto;
  margin-left: auto;

  /* display: flex;
	flex-direction: column;
	align-items: center; */
  padding: var(--center-pad);
}

@media (min-width: 768px) {
  .center {
    padding: var(--center-pad__sm);
    max-width: var(--center-width__sm);
  }
}
@media (min-width: 992px) {
  .center {
    padding: var(--center-pad__md);
    max-width: var(--center-width__md);
  }
}
@media (min-width: 1200px) {
  .center {
    padding: var(--center-pad__lg);
    max-width: var(--center-width__lg);
  }
}
</style>
