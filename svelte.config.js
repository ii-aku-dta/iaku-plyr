
// svelte.config.js
//import adapter from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';

const config = {
	kit: {
		target: '#svelte',
		adapter: node()
	//	adapter: adapter({
			// default options are shown
		//	pages: 'build',
		//	assets: 'build',
		//	fallback: null,
		//	precompress: false
		//})
	}
};

export default config;