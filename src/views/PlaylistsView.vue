<script setup lang="ts">
import MusicList from '@/components/music/MusicList.vue'
import Player from '@/components/Player.vue'
const tracks = []
</script>

<template>
  <div class="grid grid-cols-[3fr_1fr] grow">
    <div class="p-4">
      <MusicList :tracks="tracks" />
    </div>
    <div class="bg-gray-dark p-4 h-full rounded-tl-4xl">
      <!-- Playlists list -->
    </div>
  </div>
  <Player />
</template>
