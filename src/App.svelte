<script>
	import Home from './Home.svelte';
	import Header from './Header.svelte';
	import UNIT from './unit.js';

	// Makes development easier
	console.log(UNIT)
</script>

<main class="bg-black">
	<Header name={UNIT.NAME} />
	<Home images={UNIT.IMAGES} schedule={UNIT.SCHEDULE} cmdrCup={UNIT.COMMANDERS_CUP} logo={UNIT.LOGO} sections={UNIT.SECTIONS} />
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
			filter: invert(1);
		}
	}
</style>