<script setup lang="ts">
import type { AlbumType } from '@/models/album.type'
import AlbumItemFull from './AlbumItemFull.vue'

defineProps<{ albums: AlbumType[] }>()
</script>

<template>
  <ul>
    <li v-for="album in albums">
      <AlbumItemFull
        :img="album.img"
        :author="album.author"
        :year="album.year"
        :title="album.title"
      />
    </li>
  </ul>
</template>
