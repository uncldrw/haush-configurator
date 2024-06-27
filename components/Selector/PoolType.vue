<script setup>
const builderStore = useBuilderStore();
const collections = builderStore.filteredCollections;
</script>

<template>
  <div
    class="bg-black bg-opacity-80 h-screen w-screen z-[100] fixed backdrop-blur-md"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex-col flex items-center"
    >
      <span class="text-white font-bold text-3xl"
        >Wählen sie ihren Pooltypen</span
      >
      <div class="grid grid-cols-4 max-w-5xl w-full p-8">
        <template v-for="collection in collections">
          <div class="text-center cursor-pointer">
            <span class="text-xl font-bold text-white">{{
              collection.node.title
            }}</span>
          </div></template
        >
      </div>
    </div>
  </div>
</template>
