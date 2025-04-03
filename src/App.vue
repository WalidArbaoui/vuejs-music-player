<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import Header from './components/Header.vue'
</script>

<template>
  <SideBar />
  <Header />
  <main class="bg-gray-light relative flex flex-col">
    <RouterView />
  </main>
</template>
