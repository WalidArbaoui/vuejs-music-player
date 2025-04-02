<script setup lang="ts">
import { Icon } from '@iconify/vue'

const activeMusic = {
  img: 'Radioheadokcomputer.png',
  title: 'OK Computer',
  author: 'Radiohead',
  length: 89,
  album: 'Kid A',
  isActive: true,
}
</script>

<template>
  <div class="sticky flex gap-4 bottom-0 bg-gray-lighter p-4 backdrop-blur-2xl">
    <div>
      <img
        :src="`./src/assets/images/music/${activeMusic.img}`"
        :alt="activeMusic.title"
        class="aspect-square rounded w-24"
      />
    </div>
    <div class="flex flex-col w-full gap-4">
      <div class="flex justify-between">
        <div class="flex gap-2">
          <button class="cursor-pointer">
            <Icon icon="mdi:heart" width="28" height="28" color="transparent" stroke="white" />
          </button>
          <RouterLink to="">
            <button class="cursor-pointer">
              <Icon icon="solar:playlist-minimalistic-2-broken" width="28" height="28" />
            </button>
          </RouterLink>
        </div>
        <div class="flex gap-6">
          <button class="cursor-pointer">
            <Icon icon="fluent:previous-32-filled" width="32" height="32" />
          </button>

          <button class="cursor-pointer">
            <Icon icon="mingcute:play-fill" width="24" height="24" />
          </button>

          <button class="cursor-pointer">
            <Icon icon="solar:pause-bold" width="24" height="24" />
          </button>

          <button class="cursor-pointer">
            <Icon icon="fluent:next-32-filled" width="32" height="32" />
          </button>
        </div>
        <div class="flex gap-2">
          <button class="cursor-pointer">
            <Icon icon="lets-icons:sort-random-light" width="28" height="28" />
          </button>

          <button class="cursor-pointer">
            <Icon icon="ph:repeat-fill" width="28" height="28" />
          </button>

          <button class="cursor-pointer">
            <Icon icon="ph:repeat-once-fill" width="28" height="28" />
          </button>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <span>00:35</span>
        <input type="range" value="0" class="w-full accent-main" />
        <span>01:25</span>
      </div>
    </div>
  </div>
</template>
