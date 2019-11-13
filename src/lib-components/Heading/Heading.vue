<script>
export default {
	props: {
		level: {
			type: String,
			required: true
		},
		clamp: {
			type: Boolean,
			default: true
		}
	},
	render: function(createElement) {
		return createElement(
			'h' + this.level, // tag name
			{
				class: 'heading',
				style: `--heading-clamp: ${this.clamp ? 'block' : 'none'}`
			},
			this.$slots.default // array of children
		);
	}
};
</script>

<style scoped>
.heading {
	max-width: 60ch;
	margin: 0;
	line-height: var(--heading-line-height);
}
.heading::before {
	display: var(--heading-clamp);
	width: 0;
	height: 0;

	/* margin-top: calc((1rem - var(--heading-line-height)) * 0.5em); */
	margin-top: calc((0.8 - var(--heading-line-height)) * 0.5em);
	content: '';
}
</style>

<meta>
{
  "description": "Renders a basic heading with the optional ability to clip the height so that the heading sits at the top of its container."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <Heading level="2">...</Heading>
</example>
