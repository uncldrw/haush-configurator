<script setup>
import { VueFinalModal, useVfm } from "vue-final-modal";

defineProps({
  title: String,
});

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const thumbsSwiper = ref(null);

const modules = [FreeMode, Navigation, Thumbs];

const setThumbsSwiper = (swiper) => {
  if (swiper) {
    thumbsSwiper.value = swiper;
  }
};

const closeViewer = () => {
  useVfm().closeAll();
};

const builderStore = useBuilderStore();
const images = builderStore.images;
</script>

<template>
  <VueFinalModal
    class="w-screen h-screen"
    content-class="w-full h-full bg-gray-200 fixed top-0 left-0 z-50"
  >
    <div class="image-swiper">
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :loop="true"
        :spaceBetween="10"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="mySwiper2"
      >
        <swiper-slide v-for="image in images" :key="image.node.id"
          ><img :src="image.node.src"
        /></swiper-slide>
      </swiper>
      <swiper
        @swiper="setThumbsSwiper"
        :loop="true"
        :spaceBetween="10"
        :slidesPerView="images.length > 4 ? 4 : images.length"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="image in images" :key="image.node.id"
          ><img :src="image.node.src"
        /></swiper-slide>
      </swiper>
      <button
        class="w-14 aspect-square rounded bg-white absolute bottom-4 right-4 transition-colors duration-200 grid place-content-center"
        @click="closeViewer"
      >
        <span class="i-mdi-arrow-collapse text-2xl text-black"></span>
      </button>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
.image-swiper {
  @apply flex flex-col h-full justify-center gap-2;
  .swiper {
    max-width: 100%;
    .swiper-wrapper {
      .swiper-slide {
        img {
          @apply aspect-video object-cover object-center rounded;
        }
        &.swiper-slide-active {
        }
      }
    }
  }
}
</style>
