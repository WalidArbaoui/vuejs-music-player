<script setup lang="ts">
import router from '@/router'
import { useAlbumsStore } from '@/stores/albums'
import { defineProps } from 'vue'

defineProps({
  img: String,
  title: String,
  author: String,
  year: Number,
})

const albumStore = useAlbumsStore()

function selectAlbum(album: string) {
  albumStore.updateCurrentAlbum(album)
  router.push('/albums')
}
</script>

<template>
  <button class="cursor-pointer text-left" @click="selectAlbum(title || '')">
    <img
      :src="`./src/assets/images/albums/${img}`"
      :alt="title"
      class="block aspect-square rounded-lg w-full"
    />
    <div>
      <h3 class="text-lg -mb-1">{{ title }}</h3>
      <span class="text-sm text-gray-400">{{ author }}, {{ year }}</span>
    </div>
  </button>
</template>
