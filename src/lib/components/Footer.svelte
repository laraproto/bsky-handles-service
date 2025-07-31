<script lang="ts">
</script>

<footer class="footer text-center">
	<p>
		Logo art by <a href="https://bsky.app/profile/did:plc:sqwkomf6gkzbhnctiqexepzx">Aegiscarr</a>
	</p>
	<p>
		{new Date().getFullYear()} Project made by
		<a href="https://laratheprotogen.dev">Lara The Protogen</a>.
		<a href="https://github.com/laraproto/bsky-handles-service">View source code here</a>. Meow
	</p>
</footer>

<style lang="postcss">
	@reference "tailwindcss";
	a {
		@apply hover:underline hover:text-sky-500 transition;
	}
	.footer {
		@apply absolute bottom-0 z-10 w-full p-4 text-center;
	}
</style>
