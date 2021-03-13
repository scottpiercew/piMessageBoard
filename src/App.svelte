<script>
	import Home from './Home.svelte';
	import Header from './Header.svelte';
	import UNIT from './unit.js';

	// Makes development easier
	console.log(UNIT)

</script>

<main>
	<Header name={UNIT.NAME} logo={UNIT.LOGO} />
	<Home pages={UNIT.FULL_PAGES} />
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
</style>