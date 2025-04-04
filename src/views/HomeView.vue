<script setup lang="ts">
import { useMusicPlayerStore } from '@/stores/player'
import { useTrackFetch } from '@/composables/useTracks'
import { onMounted } from 'vue'
import AlbumGrid from '@/components/albums/AlbumGrid.vue'
import MusicList from '@/components/music/MusicList.vue'
import Player from '@/components/Player.vue'

const musicPlayerStore = useMusicPlayerStore()
const { tracks, error, loading, fetchTracks } = useTrackFetch()
onMounted(async () => {
  await fetchTracks()
  musicPlayerStore.addTracksToPlaylist(tracks.value)
})
</script>

<template>
  <div class="p-4">
    <AlbumGrid />
    <div class="mt-4">
      <h3 class="text-gray-400">All Tracks</h3>
      <MusicList :tracks="tracks" />
    </div>
  </div>
  <Player />
</template>
