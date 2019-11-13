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
				class: 'layout'
			},
			this.$slots.default // array of children
		);
	}
};
</script>

<style>
:root {
	--heading-line-height: 1.2;
	--body-line-height: 1.4;
	--measure: 60ch;
	--spacing-ratio: 1.61803398875;
	--s-base: 1rem;

	/* --s-7: calc(var(--s-6) * var(--spacing-ratio));
	--s-6: calc(var(--s-5) * var(--spacing-ratio));
	--s-5: calc(var(--s-4) * var(--spacing-ratio));
	--s-4: calc(var(--s-3) * var(--spacing-ratio));
	--s-3: calc(var(--s-2) * var(--spacing-ratio));
	--s-2: calc(var(--s-base) * -1);
	--s-1: calc(var(--s-base) / 2 * -1); */
	--s0: 0;

	/* --s-base: 1rem; */
	--s1: calc(var(--s-base) * 0.25);
	--s2: calc(var(--s-base) * 0.5);
	--s3: calc(var(--s-base) * 0.75);
	--s4: var(--s-base);
	--s5: calc(var(--s4) * var(--spacing-ratio));
	--s6: calc(var(--s5) * var(--spacing-ratio));
	--s7: calc(var(--s6) * var(--spacing-ratio));
	--s8: calc(var(--s7) * var(--spacing-ratio));
	--s9: calc(var(--s8) * var(--spacing-ratio));

	/* font-size: calc(1rem + 0.5vw); */
	box-sizing: border-box;
}

/* set measure for inline elements */

/* * {
	max-width: var(--measure);
}
html,
body,
div,
header,
nav,
main,
footer {
	max-width: none;
} */

/* end measure for inline elements */

.layout {
	/* width: 100%; */
	/* margin: var(--s0); */
	/* overflow-x: hidden; */
}

/* @media (min-width: 768px) {
	:root {
		font-size: 125%;
		--s-base: 0.9rem;
	}
}
@media (min-width: 1024px) {
	:root {
		font-size: 125%;
		--s-base: 1rem;
	}
} */
</style>

<meta>
{
  "description": "The base Layout component that wraps other layouts and provides base styling options."
}
</meta>

<example>
  <!-- No props or content are necessary. -->
  <Layout id="app">
		Your application content goes here.
	</Layout>
</example>
