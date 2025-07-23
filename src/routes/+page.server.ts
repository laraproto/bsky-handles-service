import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { handle } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const count = await db.$count(handle);

	return {
		count
	};
};
