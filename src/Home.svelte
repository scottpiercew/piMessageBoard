<script>
    import { onMount } from 'svelte';
    import Sidebar from './Sidebar.svelte';
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    export let UNIT;

    let images = UNIT.IMAGES;
    let viewPortHeight = window.innerHeight;
    let imagesIndex = 0;

    onMount( () => {
            const interval = setInterval(() => {
                next()
            }, 15000);
        });

    const next = () => imagesIndex = (imagesIndex + 1) % images.length;

</script>

<div class="flex bg-black p-8 pb-0 overflow-hidden h-5/6">
    <div class="w-1/2 pr-8">
        <Sidebar schedule={$$props.schedule} cmdrCup={$$props.cmdrCup} sections={$$props.sections} />
    </div>
    <div class="w-1/2 flex ml-8" style="height: {viewPortHeight - 160}px">
        <!-- <img src={images[1].url} alt={images[1].label} class="w-full pb-20" /> -->
        <!-- {#each images as image, index (image.id)}
        <div class="flex flex-shrinkjustify-end items-center">
            {#if index == imagesIndex}
                    <img src={image.url} alt={image.label} id={image.id} class="object-scale-down rounded-sm shadow-md justify-self-end self-center"/>
            {/if}
        </div>
        {/each} -->
        <!-- <div><img src={images[2].url} alt="" /></div> -->
        <!-- {#each [images[imagesIndex].url] as src (imagesIndex)}
            <div class="flex flex-end m-auto" style="height: {viewPortHeight - 180}px">
                <img class="object-scale-down" transition:fly="{{delay: 250, duration: 1000, x: 100, y: 500, opacity: 0.5, easing: quintOut}}" {src} alt="" />
            </div>
        {/each} -->
        <img class="object-fit" transition:fly="{{delay: 250, duration: 1000, x: 100, y: 500, opacity: 0.5, easing: quintOut}}" src={images[0].url} alt="" />
    </div>
</div>

