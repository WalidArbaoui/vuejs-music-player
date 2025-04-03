<script setup lang="ts">
import { useTrackFetch } from '@/composables/useTracks'
import { useMusicPlayerStore } from '@/stores/player'
import { secondsSeparator } from '@/utils/Formater'
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'

const musicPlayerStore = useMusicPlayerStore()
const { currentTrack, isPlaying, duration, style, currentTime } = storeToRefs(musicPlayerStore)

const onSeek = (event: any) => {
  const seekTime = parseFloat(event.target.value)
  musicPlayerStore.seekTo(seekTime)
}

const togglePlayback = () => {
  if (isPlaying.value) {
    musicPlayerStore.pauseTrack() // Pause the track
  } else {
    if (currentTrack.value) {
      musicPlayerStore.playTrack(currentTrack.value) // Resume the current track
    }
  }
}

const { updateTrackFav } = useTrackFetch()

const updateFav = () => {
  if (currentTrack !== null) {
    updateTrackFav(currentTrack.value!.id, currentTrack.value!.isFav)
    currentTrack.value!.isFav = !currentTrack.value!.isFav
  }
}
</script>

<template>
  <div v-if="currentTrack" class="sticky flex gap-4 bottom-0 bg-gray-lighter p-4 backdrop-blur-2xl">
    <div>
      <img
        :src="`./src/assets/images/music/${currentTrack.img}`"
        :alt="currentTrack.title"
        class="aspect-square rounded w-24"
      />
    </div>
    <div class="flex flex-col w-full gap-4">
      <div class="flex justify-between">
        <div class="flex gap-2">
          <button class="cursor-pointer" @click.stop="updateFav">
            <Icon
              icon="mdi:heart"
              width="28"
              height="28"
              v-if="!currentTrack?.isFav"
              color="transparent"
              stroke="white"
            />
            <Icon
              icon="mdi:heart"
              width="28"
              height="28"
              v-if="currentTrack?.isFav"
              class="text-main"
            />
          </button>
          <RouterLink to="">
            <button class="cursor-pointer">
              <Icon icon="solar:playlist-minimalistic-2-broken" width="28" height="28" />
            </button>
          </RouterLink>
        </div>
        <div class="flex gap-6">
          <button class="cursor-pointer" @click="musicPlayerStore.playPreviousTrack()">
            <Icon icon="fluent:previous-32-filled" width="32" height="32" />
          </button>

          <button class="cursor-pointer" v-if="!isPlaying" @click="togglePlayback">
            <Icon icon="mingcute:play-fill" width="24" height="24" />
          </button>

          <button class="cursor-pointer" v-if="isPlaying" @click="togglePlayback">
            <Icon icon="solar:pause-bold" width="24" height="24" />
          </button>

          <button class="cursor-pointer" @click="musicPlayerStore.playNextTrack()">
            <Icon icon="fluent:next-32-filled" width="32" height="32" />
          </button>
        </div>
        <div class="flex gap-4">
          <button
            class="cursor-pointer"
            @click="
              style !== 'shuffle'
                ? musicPlayerStore.updateStyle('shuffle')
                : musicPlayerStore.updateStyle('')
            "
          >
            <Icon
              icon="lets-icons:sort-random-light"
              width="28"
              height="28"
              :class="style === 'shuffle' ? 'text-main' : ''"
            />
          </button>

          <button
            class="cursor-pointer"
            @click="
              style !== 'repeatAll'
                ? musicPlayerStore.updateStyle('repeatAll')
                : musicPlayerStore.updateStyle('')
            "
          >
            <Icon
              icon="ph:repeat-fill"
              width="28"
              height="28"
              :class="style === 'repeatAll' ? 'text-main' : ''"
            />
          </button>

          <button
            class="cursor-pointer"
            @click="
              style !== 'repeat'
                ? musicPlayerStore.updateStyle('repeat')
                : musicPlayerStore.updateStyle('')
            "
          >
            <Icon
              icon="ph:repeat-once-fill"
              width="28"
              height="28"
              :class="style === 'repeat' ? 'text-main' : ''"
            />
          </button>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <span>{{ secondsSeparator(currentTime) }}</span>
        <input
          type="range"
          :value="currentTime"
          :max="duration"
          @input="onSeek"
          class="w-full accent-main"
        />
        <span>
          {{ secondsSeparator(duration) }}
        </span>
      </div>
    </div>
  </div>
</template>
