<script>
export default {
	props: {
		pad: {
			type: String,
			default: null
		},
		padX: {
			type: [String, Array],
			default: '0'
		},
		padY: {
			type: [String, Array],
			default: '0'
		},
		as: {
			type: String,
			default: 'div'
		}
	},
	computed: {
		padding() {
			if (this.pad) {
				return `var(--s${this.pad})`;
			} else {
				return `var(--s${this.padY}) var(--s${this.padX})`;
			}
		}
	},
	render: function(createElement) {
		return createElement(
			this.as, // tag name
			{
				class: 'box',
				style: `--box-pad: ${this.padding};`
			},
			this.$slots.default // array of children
		);
	}
};
</script>

<style scoped>
.box {
	/* padding: var(--s1); */
	padding: var(--box-pad);
	/* border: var(--border-thin) solid; */

	--color-light: #fff;
	--color-dark: #000;

	/* color: var(--color-dark); */

	/* background-color: var(--color-light); */
}

.box * {
	color: inherit;
}
</style>

<meta>
{
  "description": "The base Box component that can be used in a variety of ways to ensure consistent spacing."
}
</meta>

<example>
  <Box pad="1">
		Some context
	</Box>
</example>
