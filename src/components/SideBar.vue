<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="bg-gray-dark row-span-2 p-2">
    <h3 class="text-sm text-gray-400 mb-2">Menu</h3>
    <nav>
      <ul class="flex flex-col gap-1 w-full">
        <li class="">
          <RouterLink to="/" class="flex gap-4 rounded-md p-2" active-class="bg-main">
            <Icon icon="material-symbols-light:home-rounded" width="24" height="24" />
            Home
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/favorites" class="flex rounded-md gap-4 p-2" active-class="bg-main">
            <Icon icon="mdi:heart" width="24" height="24" />
            Favorites
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/albums" class="flex rounded-md gap-4 p-2" active-class="bg-main">
            <Icon icon="iconoir:album-open" width="24" height="24" />
            Albums
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/" class="flex gap-4 rounded-md p-2">
            <Icon icon="solar:playlist-bold-duotone" width="24" height="24" />
            playlists
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
