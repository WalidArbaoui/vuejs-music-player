<script setup lang="ts">
import AlbumList from '@/components/albums/AlbumList.vue'
import MusicList from '@/components/music/MusicList.vue'
import Player from '@/components/Player.vue'
import { useAlbumFetch } from '@/composables/useAlbums'
import { useTrackFetch } from '@/composables/useTracks'
import { useAlbumsStore } from '@/stores/albums'
import { useMusicPlayerStore } from '@/stores/player'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const albumsStore = useAlbumsStore()
const { currentAlbum } = storeToRefs(albumsStore)

const musicPlayerStore = useMusicPlayerStore()

const { albums, fetchAlbums } = useAlbumFetch()
const { tracks, fetchTracksByAlbum } = useTrackFetch()

albumsStore.$subscribe(
  (state) => {
    fetchTracksByAlbum(state.events.newValue)
    musicPlayerStore.addTracksToPlaylist(tracks.value)
  },
  { flush: 'sync' },
)

onMounted(() => {
  fetchAlbums()
  if (currentAlbum.value) {
    fetchTracksByAlbum(currentAlbum.value)
    musicPlayerStore.addTracksToPlaylist(tracks.value)
  }
})
</script>

<template>
  <div class="grid grid-cols-[3fr_1fr] grow">
    <div class="p-4">
      <MusicList :tracks="tracks" />
    </div>
    <div class="bg-gray-dark p-4 h-full rounded-tl-4xl">
      <AlbumList :albums="albums" />
    </div>
  </div>
  <Player />
</template>
