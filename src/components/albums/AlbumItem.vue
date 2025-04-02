<script setup lang="ts">
defineProps({
  img: String,
  title: String,
  author: String,
  year: Number,
})
</script>

<template>
  <div class="">
    <img
      :src="`./src/assets/images/albums/${img}`"
      :alt="title"
      class="block aspect-square rounded-lg w-full"
    />
    <div>
      <h3 class="text-lg -mb-1">{{ title }}</h3>
      <span class="text-sm text-gray-400">{{ author }}, {{ year }}</span>
    </div>
  </div>
</template>
