<template>
	<div
		class="inline"
		:style="`--inline-gap: var(--s${gap}); --inline-pad: var(--s${padY}); --inline-align: ${align};`"
	>
		<div>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		gap: {
			type: String,
			default: '0'
		},
		padY: {
			type: String,
			default: '0'
		},
		align: {
			type: String,
			default: 'center',
			validator: function(value) {
				return (
					[
						'baseline',
						'center',
						'flex-end',
						'flex-start',
						'initial',
						'stretch',
						'unset'
					].indexOf(value) !== -1
				);
			}
		}
	}
};
</script>

<style scoped>
.inline {
	padding-top: var(--inline-pad);
	overflow: hidden;
}

.inline:not(:last-child) {
	padding-bottom: var(--inline-pad);
}

.inline > * {
	display: flex;
	flex-wrap: wrap;
	align-items: var(--inline-align);
	justify-content: flex-start;
	margin: calc(var(--inline-gap) / 2 * -1);
}

.inline > * > * {
	margin: calc(var(--inline-gap) / 2);
}
</style>

<meta>
{
  "description": "A component that aligns its children inline."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <Inline>
		...
	</Inline>
</example>
