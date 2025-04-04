<script setup lang="ts">
import type { AlbumType } from '@/models/album.type'
import AlbumItemFull from './AlbumItemFull.vue'

defineProps<{ albums: AlbumType[] }>()
</script>

<template>
  <ul>
    <li v-for="album in albums">
      <AlbumItemFull
        :id="album.id"
        :img="album.img"
        :artist="album.artist"
        :year="album.year"
        :title="album.title"
      />
    </li>
  </ul>
</template>
