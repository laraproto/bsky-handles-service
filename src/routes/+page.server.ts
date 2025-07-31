import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { handle } from '$lib/server/db/schema';
import { HandleResolver } from '@atproto/identity';
import { fail, redirect } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
const hdlres = new HandleResolver({});

export const load: PageServerLoad = async () => {
	const count = await db.$count(handle);

	return {
		count
	};
};

const validMatch = /^[a-z0-9]+$/gm;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const usernameOld = data.get('username-old')?.toString().trim().toLowerCase();
		const usernameNew = data.get('username-new')?.toString().trim().toLowerCase();

		if (!usernameOld || !usernameNew)
			return fail(400, {
				usernameOld,
				usernameNew,
				missing: { usernameOld: !usernameOld, usernameNew: !usernameNew }
			});

		const did = await hdlres.resolve(`${usernameOld}.bsky.social`);

		const valid = validMatch.test(usernameNew);

		if (!did || !valid)
			return fail(400, {
				usernameOld,
				usernameNew,
				invalid: { usernameOld: !did, usernameNew: !valid }
			});

		const handleExists = await db.query.handle.findFirst({
			where: (hdl, { eq }) => eq(hdl.handle, usernameNew) || eq(hdl.did, did)
		});

		if (handleExists)
			return fail(400, {
				usernameOld,
				usernameNew,
				exists: {
					usernameOld: handleExists.did === did,
					usernameNew: usernameNew === handleExists.handle
				}
			});

		const insertedHandle = await db
			.insert(handle)
			.values({
				handle: usernameNew,
				did
			})
			.returning();

		return redirect(303, `/success?handle=${insertedHandle[0].handle}.${PUBLIC_URL}`);
	}
};
