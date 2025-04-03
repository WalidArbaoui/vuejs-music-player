<script setup lang="ts">
import MusicList from '@/components/music/MusicList.vue'
import Player from '@/components/Player.vue'
import { useTrackFetch } from '@/composables/useTracks'
import { useMusicPlayerStore } from '@/stores/player'
import { onMounted } from 'vue'

const musicPlayerStore = useMusicPlayerStore()
const { tracks, error, loading, fetchTracks } = useTrackFetch()

onMounted(async () => {
  await fetchTracks(true)
  musicPlayerStore.addTracksToPlaylist(tracks.value)
})
</script>

<template>
  <div class="h-full flex flex-col justify-between">
    <div class="p-4">
      <MusicList :tracks="tracks" />
    </div>
    <Player />
  </div>
</template>
