<template>
  <ModalsContainer />
  <DummyHeader />
  <div class="md:flex">
    <TheConfigurator />
  </div>
  <TheCart />
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";
const builderStore = useBuilderStore();
await builderStore.fetchGraphQLData();
</script>
