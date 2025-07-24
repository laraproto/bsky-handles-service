<script lang="ts">
	import type { PageProps } from './$types';
	import step1 from '$lib/images/handle/step1.png';
	import step2 from '$lib/images/handle/step2.png';
	import step3 from '$lib/images/handle/step3.png';
	import step4 from '$lib/images/handle/step4.png';

	let { data }: PageProps = $props();

	let currentStep = $state(0);
	const steps = [
		{ image: step1, description: 'In your profile settings, go to Account.' },
		{ image: step2, description: 'Click on Handle.' },
		{ image: step3, description: 'Click on "I have my own domain".' },
		{
			image: step4,
			description: `Select "No DNS Panel", enter ${data.handle} into the textbox at the top and click "Verify Text File"`
		}
	];
</script>

<section class="w-[22rem]">
	<h1 class="text-2xl">Success!</h1>
	<p class="mt-4">Follow the steps here to get your handle set up:</p>
	<div class="steps">
		{#key currentStep}
			<div class="step">
				<img src={steps[currentStep].image} alt="Step {currentStep + 1}" />
				<p class="description">{steps[currentStep].description}</p>
				{#if currentStep < steps.length - 1}
					<button
						class="next-button"
						onclick={() => {
							if (currentStep < steps.length - 1) {
								currentStep += 1;
							}
						}}
					>
						Next
					</button>
				{/if}
			</div>
		{/key}
	</div>
</section>

<style lang="postcss">
	@reference "tailwindcss";

	.steps {
		@apply mt-4 flex flex-col items-center;
	}

	.step {
		@apply flex flex-col items-center text-center;
	}

	img {
		@apply mb-2 w-full max-w-xs rounded-lg shadow-lg;
	}

	.description {
		@apply mb-2 text-lg text-neutral-300;
	}

	.next-button {
		@apply cursor-pointer rounded-lg bg-neutral-950/50 p-2 outline outline-zinc-700 transition hover:outline-2 hover:outline-sky-500;
	}
</style>
