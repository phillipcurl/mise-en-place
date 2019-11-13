<script>
export default {
	props: {
		as: {
			type: String,
			default: 'div'
		}
	},
	render: function(createElement) {
		return createElement(
			this.as, // tag name
			{
				class: 'center'
			},
			this.$slots.default // array of children
		);
	}
};
</script>

<style scoped>
.center {
	box-sizing: content-box;
	max-width: var(--measure);
	margin-right: auto;
	margin-left: auto;

	/* display: flex;
	flex-direction: column;
	align-items: center; */
}
</style>

<meta>
{
  "description": "A centered component with a set max-width."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <Center>
		...
	</Center>
</example>
