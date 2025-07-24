import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params: { handle } }) => {
	const user = await db.query.handle.findFirst({
		where: (user, { eq }) => eq(user.handle, handle)
	});

	if (!user) {
		error(404, 'Handle not found');
	}

	return new Response(String(user.did));
};
