<script setup lang="ts">
import { useTrackFetch } from '@/composables/useTracks'
import type { TrackType } from '@/models/track.type'
import { useMusicPlayerStore } from '@/stores/player'
import { secondsSeparator } from '@/utils/Formater'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { toRef } from 'vue'

const props = defineProps<{
  track: TrackType
}>()

const trackRef = toRef(props, 'track')

const musicPlayerStore = useMusicPlayerStore()
const { currentTrack } = storeToRefs(musicPlayerStore)

const { updateTrackFav } = useTrackFetch()

const updateFav = () => {
  updateTrackFav(trackRef.value.id, trackRef.value.isFav)
  trackRef.value.isFav = !trackRef.value.isFav
}

// Actions
const playTrack = (track: TrackType) => musicPlayerStore.playTrack(track)
</script>

<template>
  <tr
    :class="`grid grid-cols-[auto_3fr_1fr_1fr_auto_auto] w-full items-center gap-4 p-2 rounded-lg ${currentTrack?.id === track?.id ? 'bg-gray-lighter' : ''}`"
    @click="playTrack(track)"
    class="cursor-pointer"
  >
    <td>
      <img
        :src="`./src/assets/images/music/${track?.img}`"
        :alt="track?.title"
        class="aspect-square rounded w-16"
      />
    </td>
    <td>
      <h2 class="text-lg">{{ track?.title }}</h2>
      <span class="text-gray-400">{{ track?.author }}</span>
    </td>
    <td>
      <span class="text-gray-400">
        {{ track?.album }}
      </span>
    </td>
    <td class="flex gap-1 items-center">
      <Icon icon="weui:time-outlined" width="18" height="18" />
      {{ secondsSeparator(track.length) }}
    </td>
    <td>
      <button type="button" class="cursor-pointer" @click.stop="updateFav">
        <Icon
          icon="mdi:heart"
          width="32"
          height="32"
          v-if="!trackRef?.isFav"
          color="transparent"
          stroke="white"
        />
        <Icon icon="mdi:heart" width="32" height="32" v-if="trackRef?.isFav" class="text-main" />
      </button>
    </td>
    <td>
      <RouterLink to="">
        <Icon icon="solar:playlist-minimalistic-2-broken" width="32" height="32" />
      </RouterLink>
    </td>
  </tr>
</template>
