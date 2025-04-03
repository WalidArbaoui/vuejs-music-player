import type { TrackType } from '@/models/track.type'
import { defineStore } from 'pinia'

export const useMusicPlayerStore = defineStore('musicPlayer', {
  state: () => ({
    audio: null as HTMLAudioElement | null,
    currentTrack: null as TrackType | null,
    isPlaying: false as boolean,
    playlist: [] as TrackType[],
    style: '' as string,
    duration: 0,
    currentTime: 0,
  }),
  actions: {
    initializeAudio(): void {
      if (!this.audio) {
        this.audio = new Audio()

        this.audio.addEventListener('timeupdate', this.updateCurrentTime)
        this.audio.addEventListener('loadedmetadata', this.updateDuration)
        this.audio.addEventListener('ended', () => {
          switch (this.style) {
            case 'shuffle':
              break

            case 'repeat':
              this.audio!.currentTime = 0
              this.audio!.play()
              break

            case 'repeatAll':
              this.playNextTrack(true)
              break

            default:
              this.playNextTrack()
              break
          }
        })
      }
    },

    updateCurrentTime(): void {
      if (this.audio) {
        this.currentTime = this.audio.currentTime
      }
    },

    updateDuration(): void {
      if (this.audio) {
        this.duration = this.audio.duration || 0
      }
    },

    updateStyle(style: string): void {
      this.style = style
    },

    seekTo(time: number): void {
      if (this.audio) {
        this.audio.currentTime = time
        this.currentTime = time
      }
    },

    playTrack(track: TrackType): void {
      this.initializeAudio()

      if (this.currentTrack?.id === track.id) {
        if (this.isPlaying) {
          this.pauseTrack()
        } else {
          this.audio!.play().then(() => {
            this.isPlaying = true
          })
        }
        return
      }

      this.currentTrack = track
      this.audio!.src = track.trackUrl
      this.currentTime = this.audio!.currentTime
      this.audio!.play().then(() => {
        this.isPlaying = true
      })
    },

    pauseTrack(): void {
      if (this.audio) {
        this.audio.pause()
        this.isPlaying = false
      }
    },

    playNextTrack(repeat: boolean = false): void {
      const currentIndex = this.playlist.findIndex((track) => track?.id === this.currentTrack?.id)
      const nextIndex = (currentIndex + 1) % this.playlist.length
      console.log(nextIndex)
      console.log(repeat)
      if (nextIndex === 0 && !repeat) {
        this.pauseTrack()
        return
      }
      const nextTrack = this.playlist[nextIndex]
      this.playTrack(nextTrack)
    },

    playPreviousTrack(): void {
      const currentIndex = this.playlist.findIndex((track) => track?.id === this.currentTrack?.id)
      const prevIndex = (currentIndex - 1) % this.playlist.length
      const prevTrack = this.playlist[prevIndex]
      this.playTrack(prevTrack)
    },

    addTracksToPlaylist(tracks: TrackType[]): void {
      this.playlist = [...tracks]
    },
  },
})
