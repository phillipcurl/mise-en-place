<script>
import { getPadValues, getGapValues, validateSpacingScale } from "./../../util";

export default {
  name: "Grid",
  props: {
    gap: {
      type: [String, Array],
      default: "0",
      validator: function(value) {
        return validateSpacingScale(value);
      }
    },
    width: {
      type: String
    },
    columns: {
      type: String
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
    gridTemplateColumns() {
      if (this.width) {
        return `repeat(auto-fill, minmax(${this.width}, 1fr))`;
      } else {
        return `repeat(${this.columns}, 1fr)`;
      }
    },
    _pad() {
      return getPadValues("grid", {
        pad: this.pad ? this.pad : null,
        padY: this.padY,
        padX: this.padX
      });
    },
    _gap() {
      return getGapValues("grid", this.gap);
    }
  },
  render: function(createElement) {
    return createElement(
      this.as,
      {
        class: "grid",
        style: `${this._pad}; ${this._gap}; grid-template-columns: ${this.gridTemplateColumns};`
      },
      this.$slots.default
    );
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: var(--grid-gap);
  padding: var(--grid-pad);
}

@media (min-width: 768px) {
  .grid {
    grid-gap: var(--grid-gap__sm);
    padding: var(--grid-pad__sm);
  }
}
@media (min-width: 992px) {
  .grid {
    grid-gap: var(--grid-gap__md);
    padding: var(--grid-pad__md);
  }
}
@media (min-width: 1200px) {
  .grid {
    grid-gap: var(--grid-gap__lg);
    padding: var(--grid-pad__lg);
  }
}

/* @supports (width: min(var(--grid-col-width), 100%)) {
	.grid {
		grid-template-columns: repeat(
			auto-fit,
			minmax(min(var(--grid-col-width), 100%), 1fr)
		);
	}
} */
</style>
