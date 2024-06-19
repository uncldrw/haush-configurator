<template lang="">
  <button class="ButtonInput flex items-center justify-center">
    <slot />
  </button>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: "Button",
    required: false,
  },
});
</script>
<style lang="scss">
.ButtonInput {
  background: rgb(0, 144, 255);
  border-radius: 60px;
  padding-bottom: 18.084px;
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 18.084px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
}

.ButtonInputLabel {
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-size: 15.3756px;
  @apply text-white;
}
</style>
