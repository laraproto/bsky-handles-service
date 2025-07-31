<script lang="ts">
	import '../app.css';

	import logo from '$lib/images/logo.png';

	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import Head from '$lib/components/Head.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();

	let main: HTMLElement;

	onMount(() => {
		main.style.backgroundImage = `url("${logo}")`;
	});
</script>

<ModeWatcher />
<Head
	title="protogen.social"
	ogDescription="Get a personalised bluesky handle using protogen.social"
/>
<main class="background" bind:this={main}>
	<div class="blur"></div>
	<article class="content">
		{@render children()}
	</article>
	<Footer />
</main>

<style lang="postcss">
	@reference "tailwindcss";
	.background {
		@apply relative flex h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat;
		background-size: 40%;
	}

	.blur {
		@apply absolute inset-0 h-full w-full backdrop-blur-lg;
	}

	.content {
		@apply absolute z-10 mx-auto flex max-w-screen-md flex-col items-center justify-center rounded-lg bg-neutral-800/80 p-8 text-center;
	}
</style>
