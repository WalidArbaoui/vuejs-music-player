import { defineStore } from 'pinia'

export const useAlbumsStore = defineStore('albumsStore', {
  state: () => ({
    currentAlbum: 0 as number,
  }),
  actions: {
    updateCurrentAlbum(albumId: number) {
      this.currentAlbum = albumId
    },
  },
})
