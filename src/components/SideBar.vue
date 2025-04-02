<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="bg-gray-dark row-span-2 p-2">
    <h3 class="text-sm text-gray-400 mb-2">Menu</h3>
    <nav>
      <ul class="flex flex-col gap-1">
        <li class="bg-main rounded-md">
          <RouterLink to="/" class="flex gap-4 p-2">
            <Icon
              icon="material-symbols-light:home-rounded"
              class="text-white"
              width="24"
              height="24"
            />
            Home
          </RouterLink>
        </li>
        <li class="rounded-md">
          <RouterLink to="/" class="flex gap-4 p-2">
            <Icon icon="mdi:heart" width="24" height="24" />
            Favorites
          </RouterLink>
        </li>
        <li class="rounded-md">
          <RouterLink to="/" class="flex gap-4 p-2">
            <Icon icon="iconoir:album-open" width="24" height="24" />
            Albums
          </RouterLink>
        </li>
        <li class="rounded-md">
          <RouterLink to="/" class="flex gap-4 p-2">
            <Icon icon="solar:playlist-bold-duotone" width="24" height="24" />
            playlists
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
