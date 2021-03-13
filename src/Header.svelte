<script>
    export let name;
    export let logo;
    import { onMount } from 'svelte';

    let date = new Date();
	$: hour = date.getHours();
	$: min = date.getMinutes();
	$: sec = date.getSeconds();
    $: day = date.getDate();
    $: month = date.getMonth()+1;
    $: year = date.getFullYear();
    let zone = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]

    onMount( () => {
		const interval = setInterval(() => {
			date = new Date();
            hour = (hour < 10) ? `0${hour}` : hour;
		}, 1000);
	});

    const toggleZero = (num) => (num < 10) ? `0${num}` : num;
</script>

<div class="flex flex-row h-10 justify-between bg-black px-4 pt-2 content-center text-red-600 font-orbitron">
    <div class="w-1/5 z-10">
        <img class="h-20" src={logo.logoWhiteBG} alt="Unit Logo"/>
    </div>
    <div class="text-xl">{name.fullName}</div>
    <div class='tracking-wide w-1/5 flex justify-end text-lg'>
        <span class="mr-4">{day} / {month} / {year}</span>
        <span class="grid grid-cols-3">
            <span>{toggleZero(hour)}:</span>
            <span>{toggleZero(min)}:</span>
            <span>{toggleZero(sec)}</span>
        </span>
        <span> {zone}</span>
    </div>
</div>