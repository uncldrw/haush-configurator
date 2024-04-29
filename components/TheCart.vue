<template>
  <div class="bg-white fixed bottom-0 w-full h-min p-2 z-20 shadow-xl-mid">
    <div></div>
    <div class="flex gap-2 justify-between">
      <div class="flex gap-2">
        <button
          class="w-14 aspect-square bg-transparent border-t border-t-gray-50 border-b-2 border-b-gray-200 rounded bg-gray-100"
        >
          <span class="i-mdi-call text-2xl text-gray-500"></span>
        </button>
      </div>
      <div class="flex gap-2">
        <div class="leading-none text-right">
          <p class="text-black text-xl font-semibold">12.000,00 €</p>
          <a class="text-xs text-gray-500 underline cursor-pointer"
            >Weitere Informationen</a
          >
        </div>
        <button class="w-14 aspect-square bg-cyan rounded">
          <span class="i-mdi-basket-fill text-2xl text-white"></span>
        </button>
      </div>
    </div>
  </div>
</template>
