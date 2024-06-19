<script setup>
import { useModal } from "vue-final-modal";
import ModalImageView from "@/components/Modal/ImageView.vue";
const { open } = useModal({
  keepAlive: true,
  component: ModalImageView,
  props: {
    title: "Gallery",
  },
});
</script>

<template>
  <div class="image-ctn">
    <div class="image-wrapper">
      <button class="expand" @click="open">
        <span class="i-mdi-arrow-expand text-2xl text-black"></span>
      </button>
      <img class="w-full aspect-video" src="/assets/img/Pool.png" alt="Pool" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-ctn {
  @apply relative top-0 z-10 w-full;
  .image-wrapper {
    @apply sticky max-h-[38rem] overflow-hidden md:ml-2 md:my-2 md:rounded top-0;
  }
}

button.expand {
  @apply w-14 aspect-square rounded bg-white absolute bottom-4 right-4 transition-colors duration-200 grid place-content-center;
  &:hover {
    @apply bg-gray-200;
  }
}

.view-anim-enter-active {
  opacity: 1;
  animation: animExpand forwards 0.075s ease-out;
}

@keyframes animExpand {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.view-anim-leave-active {
  opacity: 0;
  animation: animClose forwards 0.075s ease-out;
}

@keyframes animClose {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
