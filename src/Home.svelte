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

<div class="flex bg-warmGray-900 p-8">
    <div class="w-1/2 z-10" style="height: {viewPortHeight - 96}px">
        <Sidebar schedule={$$props.schedule} cmdrCup={$$props.cmdrCup} sections={$$props.sections} />
    </div>
    <div class="w-1/2 flex flex-col-reverse justify-end ml-8" style="height: {viewPortHeight - 96}px">
        {#each images as image, index (image.id)}
        <div class="h-full flex justify-end items-center">
            {#if index == imagesIndex}
                <img src={image.url} alt={image.label} id={image.id} class="h-full object-contain rounded-sm shadow-md justify-self-end self-center"/>
            {/if}
        </div>
        {/each}
    </div>
</div>

