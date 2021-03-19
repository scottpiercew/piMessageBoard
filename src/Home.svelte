<script>
    import { onMount } from 'svelte';
    import Sidebar from './Sidebar.svelte';
    export let images;

    let viewPortHeight = window.innerHeight;
    let imagesIndex = 0;

    onMount( () => {
            const interval = setInterval(() => {
                next()
            }, 15000);
        });

    const next = () => imagesIndex = (imagesIndex + 1) % images.length;

</script>

<div class="flex bg-black p-8 h-5/6">
    <div class="w-1/2">
    <!-- <div class="w-1/2" style="height: {viewPortHeight - 160}px"> -->
        <Sidebar schedule={$$props.schedule} cmdrCup={$$props.cmdrCup} sections={$$props.sections} />
    </div>
    <div class="w-1/2 flex justify-end ml-8">
    <!-- <div class="w-1/2 flex justify-end ml-8" style="height: {viewPortHeight - 160}px"> -->
        {#each images as image, index (image.id)}
        <div class="h-full flex justify-end items-center">
            {#if index == imagesIndex}
                <img src={image.url} alt={image.label} id={image.id} class="object-contain rounded-sm shadow-md justify-self-end self-center"/>
            {/if}
        </div>
        {/each}
    </div>
</div>

