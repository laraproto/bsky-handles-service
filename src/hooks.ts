import type { Reroute } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';

export const reroute: Reroute = async ({ url }) => {
	const split = url.hostname.split('.');

	console.log(url.hostname);
	console.log(split);

	if (url.hostname !== PUBLIC_URL && split.length >= 2) {
		return `/${split[0]}${url.pathname}`;
	}
};
