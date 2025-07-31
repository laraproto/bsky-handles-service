import { NodeOAuthClient } from '@atproto/oauth-client-node';
import type { Database } from '$lib/server/db';
import { PUBLIC_URL } from '$env/static/public';

export const createClient = async (db: Database) => {
	const clientUrl = PUBLIC_URL ? `https://${PUBLIC_URL}` : 'http://localhost:5173';
	return new NodeOAuthClient({
		clientMetadata: {
			client
		}
	});
};
