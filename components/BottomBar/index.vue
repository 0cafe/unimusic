<template name="BottomBar">
	<view class="bottom">
		<view class="bottom-left">
			<image :class="paused?'':'rotation'" :src="inPlay.img" @click="lyric"></image>
			<view class="aideo-info" @tap="goPlay">
				<view class="audio-name">
					{{inPlay.song}}
				</view>
				<view class="audio-singer">
					{{inPlay.singer}}
				</view>
			</view>
		</view>
		<view class="bottom-right">
			<view class="btn-player">
				<text v-if="inPlay.paused==false" class="text-black cuIcon-stop" @click="pause"></text>
				<text v-if="inPlay.paused" class="text-black cuIcon-playfill" @click="play"></text>
			</view>
			<view class="btn-info">
				<text class="text-black cuIcon-list"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "BottomBar",
		props: ['inPlay'],
		data() {
			return {
				paused: '',
			}
		},
		computed: {
			// paused(){
			// 	let p = this.$player.paused
			// 	return p
			// }
			// inPlay(){
			// 	return this.$player._data
			// }
		},
		methods: {
			play() {
				if (!this.$player.src) {
					this.$player.src = this.inPlay.play_url
				}
				this.$player.play()
				this.$emit('play')
			},
			pause() {
				this.$player.pause()
				this.$emit('pause')
			},
			lyric() {
				uni.navigateTo({
					url: '/pages/lyric/lyric?id=' + this.inPlay.id
				});
			},

		},
		created() {
			this.paused = this.$player.paused
		}
	}
</script>

<style scoped>
	@import url("./index.css");

	image {
		border-radius: 50%;
	}

	.rotation {
		-webkit-transform: rotate(360deg);
		animation: rotation 12s linear infinite;
		-moz-animation: rotation 12s linear infinite;
		-webkit-animation: rotation 12s linear infinite;
		-o-animation: rotation 12s linear infinite;
	}
</style>
