<script setup>
import TheImageViewer from "./TheImageViewer.vue";

const builderStore = useBuilderStore();
const options = builderStore.options;
onMounted(async () => {});
</script>
<template>
  <TheImageViewer />
  <div class="form-ctn h-screen px-2 py-2 min-w-96">
    <div class="grid gap-4">
      <Selector type="grid" :option="option" v-for="option in options" />
    </div>
  </div>
</template>
