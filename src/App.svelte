<script>
	import Home from './Home.svelte';
	import Header from './Header.svelte';
	import UNIT from './unit.js';

	// Makes development easier
	console.log(UNIT)
</script>

<main class="h-5/6 m-auto overflow-hidden" style="width:97%">
	<Header name={UNIT.NAME} logo={UNIT.LOGO} />
	<Home UNIT={UNIT} />
</main>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	@layer base {
		@font-face {
			font-family: 'Orbitron';
    	src: url('../fonts/Orbitron-Regular.ttf') format('truetype');
			}
		}
		@layer utilities {
			.filter-invert {
				filter: invert(1) brightness(0.8) contrast(1.3);
			}
		}
</style>