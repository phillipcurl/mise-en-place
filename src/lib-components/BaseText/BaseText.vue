<script>
export default {
	props: {
		as: {
			type: String,
			default: 'p'
		}
	},
	render: function(createElement) {
		return createElement(
			this.as, // tag name
			{
				class: 'text'
			},
			this.$slots.default // array of children
		);
	}
};
</script>

<style scoped>
.text {
	max-width: var(--measure);
	margin: 0;
	line-height: var(--body-line-height);
}
</style>

<meta>
{
  "description": "The base text component used to render standard body copy."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <BaseText>
		Some text
	</BaseText>
</example>
