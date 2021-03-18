<script>
  import { fade } from 'svelte/transition';
  export let schedule;
  export let cmdrCup;
  export let images;
  export let imagesIndexNext;
  export let logo;
  export let sections;

</script>
<div class="h-full flex flex-col space-y-8 content-between">
  <div class="rounded-sm shadow-md bg-warmGray-900 w-full">
    <div class="py-2 bg-warmGray-900 text-warmGray-200 text-center text-lg flex justify-start content-center">
      <div class="flex h-10 w-10">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 297 297" fill="currentColor" style="enable-background:new 0 0 297 297;" stroke="currentColor" xml:space="preserve" class="h-8 p-1 w-12 inline-flex ralative bg-warmGray-800 rounded-full text-red-700 flex items-center justify-center ml-2">
          <g>
            <g>
              <path d="M174.691,194.214c0-2.718-2.152-4.382-4.782-3.698c0,0-12.318,3.201-21.409,3.201s-21.409-3.201-21.409-3.201
                c-2.63-0.684-4.782,0.98-4.782,3.698v14.329c0,2.718,2.224,4.941,4.941,4.941h42.5c2.718,0,4.941-2.224,4.941-4.941V194.214z"/>
            </g>
            <g>
              <path d="M223.615,9.884c0-5.458-4.426-9.884-9.884-9.884H83.269c-5.458,0-9.884,4.426-9.884,9.884v81.539
                c0,25.522,7.591,48.754,21.374,65.415c13.874,16.771,32.96,26.008,53.741,26.008c20.781,0,39.867-9.236,53.741-26.008
                c13.783-16.661,21.374-39.893,21.374-65.415V9.884z"/>
            </g>
            <g>
              <path d="M63.981,111.227c-13.525-5.033-19.753-16.706-19.753-36.111V30.969h18.285V11.202H34.346
                c-5.459,0-9.884,4.425-9.884,9.884v54.029c0,32.961,15.788,53.039,44.818,57.729C66.895,125.985,65.109,118.749,63.981,111.227z"
                />
            </g>
            <g>
              <path d="M83.269,228.31c-5.458,0-9.884,4.425-9.884,9.884v48.923c0,5.458,4.426,9.884,9.884,9.884h130.463
                c5.458,0,9.884-4.426,9.884-9.884v-48.923c0-5.459-4.426-9.884-9.884-9.884H83.269z"/>
            </g>
            <g>
              <path d="M262.654,11.202h-28.168v19.767h18.285v44.146c0,19.405-6.228,31.078-19.753,36.111
                c-1.128,7.522-2.913,14.759-5.299,21.618c29.03-4.69,44.818-24.768,44.818-57.729V21.086
                C272.538,15.627,268.113,11.202,262.654,11.202z"/>
            </g>
          </g>
        </svg>
      </div>
      <div class="self-center w-4/5">{cmdrCup.title}</div>
    </div>
    <div class="relative p-2">
      <div class="relative grid grid-cols-3 gap-x-4 text-warmGray-100">
        <div class="text-center pt-4 text-lg">{sections[0].name}</div>
        <div class="text-center pt-4 text-lg">{sections[1].name}</div>
        <div class="text-center pt-4 text-lg">{sections[2].name}</div>
        <div class="shadow-inner p-1 rounded-xl bg-warmGray-600 m-1 text-xl text-right">{sections[0].points}</div>
        <div class="shadow-inner p-1 rounded-xl bg-warmGray-600 m-1 text-xl text-right">{sections[1].points}</div>
        <div class="shadow-inner p-1 rounded-xl bg-warmGray-600 m-1 text-xl text-right">{sections[2].points}</div>
      </div>
      <div class="absolute inset-0 opacity-20 bg-warmGray-100 z-50"></div>
    </div>
  </div>
  <div class="rounded-sm shadow-md bg-warmGray-900">
    <div class="py-2 bg-warmGray-900 text-warmGray-200 text-center text-lg flex justify-start content-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="bg-warmGray-800 rounded-full text-red-700 p-2 h-10 w-10 flex items-center justify-center ml-2">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div class="self-center w-4/5">{schedule.label}</div>
    </div>
    <div class="relative bg-black">
      <div class="absolute inset-0 opacity-20 bg-warmGray-100 z-50"></div>
      <img src={schedule.schedule} alt={schedule.schedule} class="w-full p-4 filter-invert max-h-1/2" />
    </div>
  </div>
    <div class="rounded-sm shadow-md">
      <div class="w-full flex justify-start h-20">
          <img class="h-20 w-20" src={logo.logoWhiteBG} alt="Unit Logo"/>
        {#each images as image, index}
          {#if index == imagesIndexNext + 1}
              <img src={image.url} alt={image.label} id={image.id} class="w-1/4 object-contain rounded-sm shadow-md" in:fade="{{delay: 1000, duration: 1000}}" out:fade />
          {/if}
        {/each}
      </div>
  </div>
</div>