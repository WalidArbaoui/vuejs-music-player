<script setup lang="ts">
import router from '@/router'
import { useAlbumsStore } from '@/stores/albums'
import { defineProps } from 'vue'

defineProps({
  id: { type: Number, required: true },
  img: String,
  title: String,
  artist: String,
  year: Number,
})

const albumStore = useAlbumsStore()

function selectAlbum(albumId: number) {
  albumStore.updateCurrentAlbum(albumId)
  router.push('/albums')
}
</script>

<template>
  <button class="cursor-pointer text-left" @click="selectAlbum(id)">
    <img
      :src="`./src/assets/images/albums/${img}`"
      :alt="title"
      class="block aspect-square rounded-lg w-full"
    />
    <div>
      <h3 class="text-lg -mb-1">{{ title }}</h3>
      <span class="text-sm text-gray-400">{{ artist }}, {{ year }}</span>
    </div>
  </button>
</template>
