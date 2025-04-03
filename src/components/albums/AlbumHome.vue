<script setup lang="ts">
import { useAlbumFetch } from '@/composables/useAlbums'
import AlbumItem from './AlbumItem.vue'
import { Icon } from '@iconify/vue'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const { albums, fetchAlbums } = useAlbumFetch()

onMounted(() => {
  fetchAlbums()
})
</script>

<template>
  <div class="grid grid-cols-6 gap-2">
    <AlbumItem
      v-for="album in albums.slice(0, 5)"
      :img="`${album.img}`"
      :title="album.title"
      :author="album.author"
      :year="album.year"
    />
    <RouterLink
      to="/albums"
      class="aspect-square bg-gray-lighter rounded-lg w-full flex items-center justify-center"
    >
      <div class="flex flex-col gap-1 items-center">
        <Icon icon="iconamoon:music-album-light" class="text-white" width="48" height="48" />
        <span>All Albums</span>
      </div>
    </RouterLink>
  </div>
</template>
