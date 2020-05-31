class Player {
	constructor(args) {
		this.audio = uni.createInnerAudioContext()
	}

	changeSong(src) {
		this.audio.src = src
	}
}

export function get(){
	return uni.getStorageInfoSync('inPlay')
}