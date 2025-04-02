<script setup lang="ts">
import AlbumItem from './AlbumItem.vue'
import { Icon } from '@iconify/vue'

const fakeAlbums = [
  {
    img: 'Squid_-_Cowards.jpg',
    title: 'Cowards',
    author: 'Squid',
    year: 2025,
  },
  {
    img: 'Kind_of_Blue_(1959,_CL_1355)_album_cover.jpg',
    title: 'Kind of Blue',
    author: 'Miles Davis',
    year: 1959,
  },
  { img: 'Capture.PNG', title: 'To Pimp a Butterfly', author: 'Kendrick Lamar', year: 2015 },
  { img: 'Beatles_-_Abbey_Road.jpg', title: 'Abbey Road', author: 'The Beatles', year: 1969 },
  { img: 'Radioheadkida.png', title: 'Kid A', author: 'Radiohead', year: 2000 },
]
</script>

<template>
  <div class="grid grid-cols-6 gap-2">
    <AlbumItem
      v-for="album in fakeAlbums"
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
