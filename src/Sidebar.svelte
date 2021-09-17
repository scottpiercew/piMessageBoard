<script>
  export let schedule;
  export let cmdrCup;
  export let sections;

  const fieldDay = ['Sunday Field Meet Section vs. Section']
</script>
<div class="flex flex-col space-y-8 content-between">
  <div class="rounded-sm shadow-md bg-black">
    <div class="py-2 bg-gray-800 text-warmGray-200 text-center text-lg flex justify-start content-center">
      <div class="flex">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 297 297"
          fill="currentColor"
          style="enable-background:new 0 0 297 297;"
          stroke="currentColor"
          xml:space="preserve"
          class="h-10 p-2 w-10 ralative bg-gray-700 rounded-full text-red-700 flex items-center justify-center ml-2"
        >
          <g>
            <g>
              <path
                d="M174.691,194.214c0-2.718-2.152-4.382-4.782-3.698c0,0-12.318,3.201-21.409,3.201s-21.409-3.201-21.409-3.201
                c-2.63-0.684-4.782,0.98-4.782,3.698v14.329c0,2.718,2.224,4.941,4.941,4.941h42.5c2.718,0,4.941-2.224,4.941-4.941V194.214z"
              />
            </g>
            <g>
              <path
                d="M223.615,9.884c0-5.458-4.426-9.884-9.884-9.884H83.269c-5.458,0-9.884,4.426-9.884,9.884v81.539
                c0,25.522,7.591,48.754,21.374,65.415c13.874,16.771,32.96,26.008,53.741,26.008c20.781,0,39.867-9.236,53.741-26.008
                c13.783-16.661,21.374-39.893,21.374-65.415V9.884z"
              />
            </g>
            <g>
              <path
                d="M63.981,111.227c-13.525-5.033-19.753-16.706-19.753-36.111V30.969h18.285V11.202H34.346
                c-5.459,0-9.884,4.425-9.884,9.884v54.029c0,32.961,15.788,53.039,44.818,57.729C66.895,125.985,65.109,118.749,63.981,111.227z"
              />
            </g>
            <g>
              <path
                d="M83.269,228.31c-5.458,0-9.884,4.425-9.884,9.884v48.923c0,5.458,4.426,9.884,9.884,9.884h130.463
                c5.458,0,9.884-4.426,9.884-9.884v-48.923c0-5.459-4.426-9.884-9.884-9.884H83.269z"
              />
            </g>
            <g>
              <path
                d="M262.654,11.202h-28.168v19.767h18.285v44.146c0,19.405-6.228,31.078-19.753,36.111
                c-1.128,7.522-2.913,14.759-5.299,21.618c29.03-4.69,44.818-24.768,44.818-57.729V21.086
                C272.538,15.627,268.113,11.202,262.654,11.202z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="self-center w-4/5 tracking-wide text-xl">{cmdrCup.title}</div>
    </div>
    <div class="relative p-2">
      <div class="relative grid grid-cols-3 gap-x-4 text-warmGray-100">
        <div class="text-center pt-4 text-lg">{sections[0].name}</div>
        <div class="text-center pt-4 text-lg">{sections[1].name}</div>
        <div class="text-center pt-4 text-lg">{sections[2].name}</div>
        <div class="shadow-inner p-1 rounded-xl bg-gray-600 m-1 text-xl text-right m-auto w-24">{sections[0].points}</div>
        <div class="shadow-inner p-1 rounded-xl bg-gray-600 m-1 text-xl text-right m-auto w-24">{sections[1].points}</div>
        <div class="shadow-inner p-1 rounded-xl bg-gray-600 m-1 text-xl text-right m-auto w-24">{sections[2].points}</div>
      </div>
      <div class="absolute inset-0 opacity-10 bg-white z-50"></div>
    </div>
  </div>
  <div class="rounded-sm shadow-md bg-black">
    <div class="py-2 bg-gray-800 text-warmGray-200 text-center text-lg flex justify-start content-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="bg-gray-700 rounded-full text-red-700 p-2 h-10 w-10 flex items-center justify-center ml-2">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div class="self-center w-4/5 tracking-wide text-xl">{schedule.label}</div>
    </div>
    <div class="relative bg-black text-warmGray-100 p-4">
      <div class="absolute inset-0 opacity-10 bg-white z-50"></div>
      <div class="grid grid-cols-3">
        {#each schedule.events as event}
         <div class="pt-4 text-lg">- {event}</div>
        {/each}
      </div>
    </div>
  </div>
  <div class="rounded-sm shadow-md bg-black">
    <div class="py-2 bg-gray-800 text-warmGray-200 text-center text-lg flex justify-start content-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="icon-target bg-gray-700 rounded-full p-2 h-10 w-10 flex items-center justify-center ml-2" stroke="currentColor"><path class="primary text-red-700" d="M15.23 2.53l-.35.35a3 3 0 0 0-.8 1.4 8.01 8.01 0 1 0 5.64 5.63 3 3 0 0 0 1.4-.79l.35-.35A9.99 9.99 0 0 1 12 22a10 10 0 1 1 3.23-19.47zM13.55 6.2L11.75 8a4 4 0 1 0 4.24 4.25l1.8-1.8a6 6 0 1 1-4.24-4.25z"/><path class="secondary text-grey-700" d="M16 6.59V5a1 1 0 0 1 .3-.7l2-2A1 1 0 0 1 20 3v1h1a1 1 0 0 1 .7 1.7l-2 2a1 1 0 0 1-.7.3h-1.59l-4.7 4.7a1 1 0 0 1-1.42-1.4L16 6.58z"/></svg>
      <div class="self-center w-4/5 tracking-wide text-xl">Final Commander's Cup Event</div>
    </div>
    <div class="relative bg-black text-warmGray-100 p-4">
      <div class="absolute inset-0 opacity-10 bg-white z-50"></div>
      <div class="">
        {#each fieldDay as event}
         <div class="pt-4 text-lg">- {event}</div>
        {/each}
      </div>
    </div>
  </div>
</div>


