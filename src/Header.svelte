<script>
    import { onMount } from 'svelte';
    export let name;

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
<div class="flex flex-row h-12 justify-between bg-black p-4 px-8 content-center text-red-700 font-orbitron">
    <div class="text-2xl tracking-wide font-bold text-red-600">{name.fullName}</div>
    <div class='tracking-wide w-1/4 flex justify-end text-lg'>
        <span class="mr-4">{day} / {month} / {year}</span>
        <span class="grid grid-cols-3">
            <span>{toggleZero(hour)}:</span>
            <span>{toggleZero(min)}:</span>
            <span>{toggleZero(sec)}</span>
        </span>
        <span class="ml-2"> {zone}</span>
    </div>
</div>