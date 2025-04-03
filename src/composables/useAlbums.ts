import { ref } from 'vue'
import { type AlbumType } from '../models/album.type'

export function useAlbumFetch() {
  const albums = ref<AlbumType[]>([])
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)

  const fetchAlbums = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/albums')
      if (!response.ok) {
        throw new Error(`Failed to fetch mangas: ${response.statusText}`)
      }
      const data = await response.json()
      albums.value = data || []
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { albums, error, loading, fetchAlbums }
}
