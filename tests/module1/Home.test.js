import { useMusicPlayerStore } from '@/stores/player'
import { useTrackFetch } from '@/composables/useTracks'
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

// Mock implementations for composables and store
vi.mock('@/stores/player', () => ({
  useMusicPlayerStore: vi.fn(() => ({
    addTracksToPlaylist: vi.fn(),
  })),
}))

vi.mock('@/composables/useTracks', () => ({
  useTrackFetch: vi.fn(() => ({
    tracks: [
      { id: 1, title: 'Track 1' },
      { id: 2, title: 'Track 2' },
    ],
    error: null,
    loading: false,
    fetchTracks: vi.fn(),
  })),
}))

describe('HomeView.vue', () => {
  it('renders the component and child components correctly', async () => {
    // Dynamic import to allow the test to run even if file doesn't exist yet
    let HomeView
    try {
      HomeView = (await import('@/views/HomeView.vue')).default
    } catch (e) {
      expect.fail('HomeView.vue component not found. Create this component first.')
    }

    // Debugging: Check if the mock is applied correctly
    console.log(useTrackFetch())

    const wrapper = mount(HomeView)

    // Check if the component renders
    expect(wrapper.exists()).toBe(true)

    // Check if child components are rendered
    expect(wrapper.findComponent({ name: 'AlbumHome' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'MusicList' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'Player' }).exists()).toBe(true)

    // Check if the "All Tracks" heading is present
    expect(wrapper.text()).toContain('All Tracks')

    // Check if tracks are displayed in MusicList
    const musicList = wrapper.findComponent({ name: 'MusicList' })
    expect(musicList.props('tracks')).toEqual([
      { id: 1, title: 'Track 1' },
      { id: 2, title: 'Track 2' },
    ])
  })

  it('calls fetchTracks on mount and updates the playlist in the store', async () => {
    // Dynamic import to allow the test to run even if file doesn't exist yet
    let HomeView
    try {
      HomeView = (await import('@/views/HomeView.vue')).default
    } catch (e) {
      expect.fail('HomeView.vue component not found. Create this component first.')
    }

    const mockMusicPlayerStore = useMusicPlayerStore()
    const mockUseTrackFetch = useTrackFetch()

    console.log(mockUseTrackFetch) // Debugging: Ensure the mock is applied correctly

    const wrapper = mount(HomeView)

    // Ensure fetchTracks was called
    expect(mockUseTrackFetch.fetchTracks).toHaveBeenCalled()

    // Ensure tracks were added to the playlist in the store
    expect(mockMusicPlayerStore.addTracksToPlaylist).toHaveBeenCalledWith([
      { id: 1, title: 'Track 1' },
      { id: 2, title: 'Track 2' },
    ])
  })

  it('handles errors gracefully', async () => {
    // Override the mocked useTrackFetch to simulate an error
    vi.mocked(useTrackFetch).mockReturnValueOnce({
      tracks: [],
      error: 'Failed to fetch tracks',
      loading: false,
      fetchTracks: vi.fn(),
    })

    // Dynamic import to allow the test to run even if file doesn't exist yet
    let HomeView
    try {
      HomeView = (await import('@/views/HomeView.vue')).default
    } catch (e) {
      expect.fail('HomeView.vue component not found. Create this component first.')
    }

    const wrapper = mount(HomeView)

    // Ensure the error state is handled (optional: you can check for specific UI elements here)
    expect(wrapper.text()).not.toContain('All Tracks') // Adjust based on your error handling logic
  })
})
