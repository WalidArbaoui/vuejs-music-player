import { defineStore } from 'pinia'

export const useAlbumsStore = defineStore('albumsStore', {
  state: () => ({
    currentAlbum: null as string | null,
  }),
  actions: {
    updateCurrentAlbum(album: string) {
      this.currentAlbum = album
    },
  },
})
