import { defineStore } from 'pinia'

export const useMusicPlayerStore = defineStore('musicPlayer', {
  state: () => ({
    audio: null as HTMLAudioElement | null,
    currentTrack: null,
    isPlaying: false,
    playlist: [],
    duration: 0,
    currentTime: 0,
  }),
  actions: {
    initializeAudio() {
      if (!this.audio) {
        this.audio = new Audio()
        this.audio.addEventListener('ended', this.playNextTrack)
      }
    },

    playTrack(track) {
      this.initializeAudio()

      if (this.currentTrack?.id === track.id && this.isPlaying) {
        this.pauseTrack()
        return
      }

      this.currentTrack = track
      this.audio.src = track.trackUrl
      this.currentTime = this.audio?.currentTime
      this.audio.play()
      this.isPlaying = true
    },

    metaLoad() {
      this.duration = this.audio?.duration
    },

    pauseTrack() {
      if (this.audio) {
        this.audio.pause()
        this.isPlaying = false
      }
    },

    playNextTrack() {
      const currentIndex = this.playlist.findIndex((track) => track.id === this.currentTrack?.id)
      const nextIndex = (currentIndex + 1) % this.playlist.length
      const nextTrack = this.playlist[nextIndex]
      this.playTrack(nextTrack)
    },

    addTracksToPlaylist(tracks) {
      this.playlist = [...this.playlist, ...tracks]
    },
  },
})
