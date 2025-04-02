<script setup lang="ts">
import { useMusicPlayerStore } from '@/stores/player'
import MusicItem from './MusicItem.vue'
import { storeToRefs } from 'pinia'

const musicPlayerStore = useMusicPlayerStore()
const activeMusic = {
  img: 'Radioheadokcomputer.png',
  title: 'OK Computer',
  author: 'Radiohead',
  length: 89,
  album: 'Kid A',
  trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
}

const fakeMusic = [
  {
    id: 1,
    img: 'Radioheadokcomputer.png',
    title: 'OK Computer',
    author: 'Radiohead',
    length: 89,
    album: 'Kid A',
    trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    img: 'Radioheadokcomputer.png',
    title: 'OK Computer',
    author: 'Radiohead',
    length: 89,
    album: 'Kid A',
    trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 3,
    img: 'Radioheadokcomputer.png',
    title: 'OK Computer',
    author: 'Radiohead',
    length: 89,
    album: 'Kid A',
    trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 4,
    img: 'Radioheadokcomputer.png',
    title: 'OK Computer',
    author: 'Radiohead',
    length: 89,
    album: 'Kid A',
    trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 5,
    img: 'Radioheadokcomputer.png',
    title: 'OK Computer',
    author: 'Radiohead',
    length: 89,
    album: 'Kid A',
    trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 6,
    img: 'Radioheadokcomputer.png',
    title: 'OK Computer',
    author: 'Radiohead',
    length: 89,
    album: 'Kid A',
    trackUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
]

musicPlayerStore.addTracksToPlaylist(fakeMusic)
</script>

<template>
  <tbody class="block w-full h-full py-2">
    <MusicItem :track="activeMusic" :is-active="true" />
    <MusicItem v-for="track in fakeMusic" :track="track" />
  </tbody>
</template>
