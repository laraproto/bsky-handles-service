<script lang="ts">
	import { type PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { PUBLIC_URL } from '$env/static/public';

	let { data, form }: PageProps = $props();
</script>

<section class="w-[22rem]">
	<h1 class="text-2xl font-bold">Get your own {PUBLIC_URL} handle</h1>
	<p class="mt-4">
		Get your own {PUBLIC_URL} handle with {Math.max(0, data.count - 1)} other users
	</p>
	<form method="post" use:enhance class="flex flex-col pt-4">
		<label class="flex flex-col items-start">
			<span class="input-label">Username</span>
			<div
				class="flex items-center rounded-lg w-full transition hover:outline-2 hover:outline-sky-500"
			>
				<input name="username-old" class="flex-grow" />
				<span class="static-text">.bsky.social</span>
			</div>
		</label>
		<label class="flex flex-col items-start">
			<span class="input-label">New Username</span>
			<div
				class="flex items-center w-full rounded-lg transition hover:outline-2 hover:outline-sky-500"
			>
				<input name="username-new" value={form?.usernameNew} class="flex-grow" />
				<span class="static-text">.{PUBLIC_URL}</span>
			</div>
		</label>
		<button class="cursor-pointer">Submit</button>
	</form>
</section>

<style lang="postcss">
	@reference "tailwindcss";
	label {
		@apply mb-4 flex flex-col text-left text-xl;
	}

	.input-label {
		@apply mb-1 text-sm font-medium text-neutral-300;
	}

	input {
		@apply w-2/3 rounded-l-lg bg-neutral-950/50 p-2 outline outline-zinc-700;
	}

	.static-text {
		@apply rounded-r-lg border-l border-zinc-700 bg-neutral-950/50 p-2 text-left;
	}

	button {
		@apply my-4 rounded-lg bg-neutral-950/50 p-2 outline outline-zinc-700 transition hover:outline-2 hover:outline-sky-500;
	}
</style>
