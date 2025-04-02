<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <header class="bg-gray-light flex justify-between p-2">
    <h1 class="text-lg font-semibold">Title</h1>
    <div class="flex items-center gap-1">
      <Icon icon="material-symbols:search" width="24" height="24" />
      <input type="text" placeholder="Search..." />
    </div>
  </header>
</template>
