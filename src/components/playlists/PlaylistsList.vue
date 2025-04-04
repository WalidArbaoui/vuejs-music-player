<script setup lang="ts">
import type { Playlist } from '@/models/playlist.type'

const props = defineProps<{ playlists: Playlist[] }>()
</script>

<template>
  <ul>
    <li v-for="playlist in playlists">
      <p>{{ playlist.name }}</p>
    </li>
  </ul>
</template>
