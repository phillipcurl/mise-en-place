<template>
	<div class="cover" :style="`--cover-gap: var(--s${gap}); --cover-height: ${height};`">
		<slot name="header" />
		<div class="centered">
			<slot />
		</div>
		<slot name="footer" />
	</div>
</template>

<script>
export default {
	props: {
		gap: {
			type: String,
			default: '0'
		},
		height: {
			type: String,
			default: '100vh'
		}
	}
};
</script>

<style scoped>
.cover {
	display: flex;
	flex-direction: column;
	min-height: var(--cover-height);
	padding: 0;
}

.cover > * {
	margin-top: var(--cover-gap);
	margin-bottom: var(--cover-gap);
}

.cover > :first-child:not(.centered) {
	margin-top: 0;
}

.cover > :last-child:not(.centered) {
	margin-bottom: 0;
}

.cover > .centered {
	margin-top: auto;
	margin-bottom: auto;
}
</style>

<meta>
{
  "description": "A component that centers content in the middle of a height-specified element with optional header and footer."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <Cover>
		...
	</Cover>
</example>
