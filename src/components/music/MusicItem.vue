<script setup lang="ts">
import { useMusicPlayerStore } from '@/stores/player'
import { secondsSeparator } from '@/utils/Formater'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'

const props = defineProps({
  track: Object,
  isActive: Boolean,
})

const [seconds, minutes, hours] = secondsSeparator(props.track.length)

const musicPlayerStore = useMusicPlayerStore()
const { currentTrack, isPlaying, duration, playlist, currentTime } = storeToRefs(musicPlayerStore)

// Actions
const playTrack = (track) => musicPlayerStore.playTrack(track)
const togglePlayback = () =>
  isPlaying.value ? musicPlayerStore.pauseTrack() : musicPlayerStore.playTrack(currentTrack.value)
const playNextTrack = () => musicPlayerStore.playNextTrack()
</script>

<template>
  <tr
    :class="`grid grid-cols-[auto_3fr_1fr_1fr_auto_auto] w-full items-center gap-4 p-2 rounded-lg ${isActive ? 'bg-gray-lighter' : ''}`"
    @click="playTrack(track)"
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
      {{ hours > 0 ? `${hours < 10 ? '0' : ''}${hours}:` : '' }}
      {{ minutes < 10 ? '0' + minutes : minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}
    </td>
    <td>
      <button class="cursor-pointer">
        <Icon icon="mdi:heart" width="32" height="32" color="transparent" stroke="white" />
      </button>
    </td>
    <td>
      <RouterLink to="">
        <Icon icon="solar:playlist-minimalistic-2-broken" width="32" height="32" />
      </RouterLink>
    </td>
  </tr>
</template>
