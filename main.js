import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import store from './store/index.js'


Vue.config.productionTip = false
Vue.prototype.$store = store

Vue.prototype.$player = uni.createInnerAudioContext()
Vue.prototype.$player._data = {
	id: '',
	song: '',
	singer: '',
	img: ''
}
// 全局变量
var globalData = App.globalData
var storeData = store.state
var last_play = uni.getStorageSync('last_play')
var like_songList = uni.getStorageSync('like_songList')
if (!like_songList) {
	uni.setStorageSync('like_songList', [])
}
// globalData.inPlay = uni.getStorageSync('last_play')      //每次打开 显示最后播放的一首歌,
// Vue.prototype.$player.src = globalData.inPlay.play_url || ''
Vue.prototype.$player.src = last_play.play_url || ''

storeData.inPlay = last_play
// 歌曲自然播放完成后
Vue.prototype.$player.onEnded((res) => {
	clearInterval(globalData.interval)
	if (storeData.play_mode == 'single_loop') {
		Vue.prototype.$player.play()
		window._init()
		return
	}
	if (storeData.songList.length >= 1) { // 判断当前播放列表有无歌曲
		if (storeData.current_song_no + 1 == storeData.songList.length) { //播放列表序号+1 首,超出列表歌曲数量从第一首开始播放
			storeData.current_song_no = 0
			console.log(storeData.songList)
			storeData.inPlay = storeData.songList[0]
			Vue.prototype.$player.src = storeData.songList[0].play_url
		} else {
			storeData.current_song_no++
			let i = storeData.current_song_no
			storeData.inPlay = storeData.songList[i]
			Vue.prototype.$player.src = storeData.songList[i].play_url
		}
		Vue.prototype.$player.play()
	} else {
		Vue.prototype.$player.play()
	}
	window._init()
})

// 音乐播放时触发事件
Vue.prototype.$player.onPlay(() => {
	uni.setStorageSync('last_play', storeData.inPlay)
})



App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()

export default app
