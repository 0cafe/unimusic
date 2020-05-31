import * as types from './mutation-types' //es6的语法，可以在使用mutation-types里面导出的内容时候直接用mutation-types.点出来
import vm from '../main.js'
const mutations = {
	[types.SET_INPLAY](state, inplay) {     //ES6写法 这样写 等价于ES5写法 mutations[types.SET_INPLAY] 相当于给mutations属性赋值
		state.inPlay = inplay               // mutations.types.SET_INPLAY : function(state,inplay){}
	},
	[types.SET_PAUSED](state, paused) {
		state.paused = inplay
	},
	[types.SET_SONGLIST](state, songList) {
		state.songList = songList
	},
	play(state,paused=''){
		vm.$player.play()
		// state.paused = vm.$player.paused
		state.paused = false
	},
	pause(state,paused=''){
		vm.$player.pause()
		// state.paused = vm.$player.paused
		state.paused = true
	},
	setInPlay(state,data){
		state.inPlay = data
	},
	set_current_song_no(state,i){
		state.current_song_no = i
	},
	set_play_mode(state,mode){
		state.play_mode = mode
	}
}

export default mutations
