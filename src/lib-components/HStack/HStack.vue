<template>
	<div
		class="h-stack"
		:style="`--h-stack-gap: var(--s${gap}); --h-stack-padY: var(--s${padY});  --h-stack-padX: var(--s${padX});`"
	>
		<div>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	// functional: true,
	props: {
		gap: {
			type: [String, Array],
			default: '0'
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
	}
	// render: function(createElement) {
	// 	return createElement(
	// 		this.as, // tag name
	// 		{
	// 			class: 'h-stack',
	// 			style: `--h-stack-gap: var(--s${this.gap}); --h-stack-padY: var(--s${this.padY});  --h-stack-padX: var(--s${this.padX});`
	// 		},
	// 		this.$slots.default // array of children
	// 	);
	// }
};
</script>

<style scoped>
.h-stack {
	/* display: flex;
	flex-direction: row;
	overflow-x: auto; */
	padding: var(--h-stack-padY) var(--h-stack-padX);
}

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

.h-stack > * {
	display: flex;
	flex-wrap: wrap;
	margin: calc((var(--h-stack-gap) / 2) * -1);
}

.h-stack > * > * {
	flex-basis: calc((var(--measure) - (100% - var(--h-stack-gap))) * 999);
	flex-grow: 1;
	margin: calc(var(--h-stack-gap) / 2);
}

.h-stack > * > :nth-last-child(n + 5),
.h-stack > * > :nth-last-child(n + 5) ~ * {
	flex-basis: 100%;
}
</style>

<meta>
{
  "description": "A component renders its children in a row and collapses to a vertical stack at a specified width."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <HStack>
		...
	</HStack>
</example>
