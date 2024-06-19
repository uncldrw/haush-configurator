<script setup>
import TheImageViewer from "./TheImageViewer.vue";

const builderStore = useBuilderStore();
const options = builderStore.data;
onMounted(async () => {});
</script>
<template>
  <TheImageViewer />
  <div class="form-ctn px-4 min-w-96">
    <div class="grid gap-4">
      <Selector type="grid" :option="option" v-for="option in options" />
    </div>
  </div>
</template>
