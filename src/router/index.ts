import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteView from '@/views/FavoriteView.vue'
import AlbumsView from '@/views/AlbumsView.vue'
import PlaylistsView from '@/views/PlaylistsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoriteView,
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView,
    },
    {
      path: '/playlists',
      name: 'playlists',
      component: PlaylistsView,
    },
  ],
})

export default router
