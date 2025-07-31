<script lang="ts">
	import { type PageProps } from './$types';
	import { enhance } from '$app/forms';
	import { PUBLIC_URL } from '$env/static/public';
	import CircleAlertIcon from '@lucide/svelte/icons/circle-alert';
	import * as Alert from '$lib/components/ui/alert/index.js';

	let { data, form }: PageProps = $props();

	$inspect(form);
</script>

<section class="w-[22rem]">
	<h1 class="text-2xl font-bold">Get your own {PUBLIC_URL} handle</h1>
	<p class="mt-4">
		Get your own {PUBLIC_URL} handle with {Math.max(0, data.count)} other users
	</p>
	<form method="post" use:enhance class="flex flex-col pt-4">
		{#if form?.missing || form?.exists || form?.invalid}
			<Alert.Root variant="destructive" class="text-left bg-neutral-800/40 mb-2">
				<CircleAlertIcon class="size-4" />
				<Alert.Title>Error</Alert.Title>
				<Alert.Description>
					<ul class="list-inside list-disc text-sm">
						{#if form?.missing?.usernameOld}
							<li>Current username cannot be blank</li>
						{/if}
						{#if form?.missing?.usernameNew}
							<li>New username cannot be blank</li>
						{/if}
						{#if form?.invalid?.usernameOld}
							<li>Current username could not be found</li>
						{/if}
						{#if form?.invalid?.usernameNew}
							<li>
								New username contains invalid characters or the form action timed out for some
								reason, in which case try again
							</li>
						{/if}
						{#if form?.exists?.usernameOld}
							<li>Only one handle per person</li>
						{/if}
						{#if form?.exists?.usernameNew}
							<li>New username already taken</li>
						{/if}
					</ul>
				</Alert.Description>
			</Alert.Root>
		{/if}
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
