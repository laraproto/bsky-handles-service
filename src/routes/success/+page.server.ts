import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const handle = url.searchParams.get('handle');

	if (!handle) return error(400, 'Handle is required');

	return {
		handle: handle.toLowerCase()
	};
};
