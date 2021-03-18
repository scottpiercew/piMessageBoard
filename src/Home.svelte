<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Sidebar from './Sidebar.svelte';
    import { quintOut } from 'svelte/easing';
    import { flip } from 'svelte/animate';
    export let images;

    let viewPortHeight = window.innerHeight;
    let imagesIndex = 0;

    onMount( () => {
            const interval = setInterval(() => {
                next()
            }, 10000);
        });

    const next = () => imagesIndex = (imagesIndex + 1) % images.length;

</script>

<div class="flex bg-black p-8">
    <div class="w-1/3 h-full z-10" style="height: {viewPortHeight - 96}px">
        <Sidebar schedule={$$props.schedule} cmdrCup={$$props.cmdrCup} images={images} imagesIndexNext={imagesIndex} logo={$$props.logo} sections={$$props.sections} />
    </div>
    <div class="w-2/3 flex flex-col-reverse justify-end ml-8" style="height: {viewPortHeight - 96}px">
        {#each images as image, index (image.id)}
        <div class="h-full flex justify-end items-center" animate:flip={{duration: 1000, easing: quintOut}} transition:fade|local={{duration: 1000}}>
            {#if index == imagesIndex}
                <img src={image.url} alt={image.label} id={image.id} class="h-full object-contain rounded-sm shadow-md justify-self-end self-center"/>
            {/if}
        </div>
        {/each}
    </div>
</div>

