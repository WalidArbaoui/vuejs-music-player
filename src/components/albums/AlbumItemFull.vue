<script setup lang="ts">
import { useAlbumsStore } from '@/stores/albums'
import { storeToRefs } from 'pinia'

defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
})

const albumStore = useAlbumsStore()
const { currentAlbum } = storeToRefs(albumStore)
</script>

<template>
  <button
    :class="`flex items-center gap-2 cursor-pointer text-left w-full p-2 rounded-lg ${currentAlbum === title ? 'bg-gray-lighter' : ''}`"
    @click="albumStore.updateCurrentAlbum(title)"
  >
    <img
      :src="`./src/assets/images/albums/${img}`"
      :alt="title"
      class="block aspect-square rounded-lg w-18"
    />
    <div>
      <h3 class="text-md whitespace-nowrap-mb-1">{{ title }}</h3>
      <span class="text-sm text-gray-400">{{ author }}, {{ year }}</span>
    </div>
  </button>
</template>
