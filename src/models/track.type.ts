import type { Playlist } from './playlist.type'

export interface TrackType {
  id: number
  img: string
  title: string
  artist: string
  length: number
  album: string
  trackUrl: string
  isFav: boolean
  playlists: Playlist[]
}
