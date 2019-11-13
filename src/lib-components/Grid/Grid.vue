<template>
	<div
		class="grid"
		:style="`--grid-gap: var(--s${gap}); --grid-padY: var(--s${padY}); --grid-padX: var(--s${padX}); grid-template-columns: ${gridTemplateColumns};`"
	>
		<slot />
	</div>
</template>

<script>
export default {
	props: {
		gap: {
			type: String,
			default: '0'
		},
		width: {
			type: String
		},
		columns: {
			type: String
		},
		padX: {
			type: [String, Array],
			default: '0'
		},
		padY: {
			type: [String, Array],
			default: '0'
		}
	},
	// methods: {
	// 	widthToColumns(width) {
	// 		return Array.isArray(width)
	// 			? width.map(this.widthToColumns)
	// 			: !!width && `repeat(auto-fit, minmax(${this.width}, 1fr))`;
	// 	},
	// 	countToColumns(count) {
	// 		return Array.isArray(count)
	// 			? count.map(countToColumns)
	// 			: !!count && `repeat(${count}, 1fr)`;
	// 	}
	// },
	computed: {
		gridTemplateColumns() {
			if (this.width) {
				return `repeat(auto-fill, minmax(${this.width}, 1fr))`;
			} else {
				return `repeat(${this.columns}, 1fr)`;
			}
		}
	}
};
</script>

<style scoped>
.grid {
	display: grid;
	grid-gap: var(--grid-gap);
	padding: var(--grid-padY) var(--grid-padX);
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

<meta>
{
  "description": "A grid component that uses CSS grid to create cells of min-width or a set number of columns."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <Grid>
		...
	</Grid>
</example>
