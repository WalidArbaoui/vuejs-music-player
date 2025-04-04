import type { TrackType } from '@/models/track.type'
import { ref } from 'vue'

export function useTrackFetch() {
  const tracks = ref<TrackType[]>([])
  const error = ref<string | null>(null)
  const loading = ref<boolean>(false)

  const fetchTracks = async (onlyFav = false) => {
    try {
      const response = await fetch(`http://localhost:3000/tracks${onlyFav ? '?isFav=true' : ''}`)
      if (!response.ok) {
        throw new Error(`Failed to fetch tracks: ${response.statusText}`)
      }
      const data = await response.json()
      tracks.value = data || []
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  const fetchTracksByAlbum = async (albumId: number) => {
    try {
      const response = await fetch(
        `http://localhost:3000/tracks${albumId ? `?albumId=${albumId}` : ''}`,
      )
      if (!response.ok) {
        throw new Error(`Failed to fetch tracks: ${response.statusText}`)
      }
      const data = await response.json()
      tracks.value = data || []
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // const fetchTracksByPlaylist = async (playlist: number) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3000/tracks${album ? `?playlists_like=${playlist}` : ''}`,
  //     )
  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch tracks: ${response.statusText}`)
  //     }
  //     const data = await response.json()
  //     tracks.value = data || []
  //   } catch (err: any) {
  //     error.value = err.message
  //   } finally {
  //     loading.value = false
  //   }
  // }

  const updateTrackFav = async (trackId: number, isFav: boolean = false) => {
    try {
      const response = await fetch(`http://localhost:3000/tracks/${trackId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFav: !isFav }),
      })
      if (!response.ok) {
        throw new Error(`Failed to fetch tracks: ${response.statusText}`)
      }
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return { tracks, error, loading, fetchTracks, fetchTracksByAlbum, updateTrackFav }
}
