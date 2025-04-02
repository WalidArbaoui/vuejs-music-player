<script setup lang="ts">
import AlbumHome from './albums/AlbumHome.vue'
import MusicItem from './music/MusicItem.vue'
import MusicList from './music/MusicList.vue'
import Player from './Player.vue'
</script>

<template>
  <div class="p-4">
    <AlbumHome />
    <div class="mt-4">
      <h3 class="text-gray-400">Last Played</h3>
      <MusicList />
    </div>
  </div>
  <Player />
</template>
