<script setup lang="ts">
import MusicItem from './MusicItem.vue'
import type { TrackType } from '@/models/track.type'

defineProps<{ tracks: TrackType[] }>()
</script>

<template>
  <tbody class="block w-full h-full py-2">
    <MusicItem v-for="track in tracks" :track="track" />
  </tbody>
</template>
