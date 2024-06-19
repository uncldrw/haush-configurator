<script setup></script>

<template>
  <div class="card-ctn grid-ctn">
    <div class="grid grid-cols-2 gap-4 py-4 px-2 sm:grid-cols-3 md:grid-cols-4">
      <div class="color-item" v-for="(n, index) in 4">
        <div class="">
          <div
            class="border-2 border-gray-100 aspect-square rounded-full"
          ></div>
          <p>IMAGE</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-ctn.grid-ctn {
}
</style>
