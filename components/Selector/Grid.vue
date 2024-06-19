<script setup>
defineProps({
  options: Object,
});

const builderStore = useBuilderStore();

const selectHandler = (i, o) => {
  builderStore.toggleOption(i, o);
};

const isSelected = (i) => {
  return builderStore.isSelected(i);
};

const infoHandler = (i) => {
  console.log("infoHandler", i);
};

const formatShopifyId = (id) => {
  return id.replace("gid://", "");
};
</script>

<template>
  <div class="card-ctn grid-ctn">
    <div class="grid grid-cols-2 gap-2 py-4 px-2 sm:grid-cols-3 md:grid-cols-2">
      <div
        class="color-item"
        v-for="(o, index) in options"
        :class="{ selected: isSelected(o) }"
      >
        <div class="color-item-wrapper" @click="selectHandler(o, options)">
          <div :class="`color-swatch`">
            <img
              draggable="false"
              class="h-full w-full object-cover select-none"
              :src="`${formatShopifyId(o.node.id)}.png`"
              alt=""
            />
          </div>
          <div class="color-heading-ctn">
            <p class="text flex-1">{{ o.node.title }}</p>
            <span class="icon" @click.stop="infoHandler(index)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-ctn.grid-ctn {
  .color-item {
    .color-item-wrapper {
      @apply flex flex-col gap-1 cursor-pointer;
      .color-swatch {
        @apply border-2 border-white rounded-md h-12 overflow-hidden outline-2 outline-transparent outline;
        &:hover {
          @apply outline-black;
        }
      }
      .color-heading-ctn {
        @apply flex;
        span.icon {
          @apply text-lg text-gray-500 cursor-pointer i-mdi-information-outline transition-colors duration-200;
          &:hover {
            @apply text-cyan-200;
          }
        }
      }
    }
    &.selected {
      .color-heading-ctn {
        @apply font-bold;
      }
    }
  }
}
</style>
