// vuex的计算属性 更新state
import vm from '../main.js'

export const songList = state => state.songList

export const paused = state => state.paused

export const play_url = state => state.play_url

export const inPlay = state => state.inPlay

export const current_song_no = state => state.current_song_no

export const play_mode = state => state.play_mode


