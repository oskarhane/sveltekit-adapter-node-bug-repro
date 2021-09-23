import preprocess from 'svelte-preprocess';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: node({ entryPoint: 'src/server.js' }) // Doesn't work
		// adapter: node() // Works
	}
};

export default config;
