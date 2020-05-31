<template>
	<view class="content">
		<view class="head">
			<text class="icon cuIcon-back_android" @click="back"></text>
			<view>
				<text class="name">{{playData.song}}</text>
				<text class="singer">{{playData.singer}}</text>
			</view>
		</view>


		<view class="main">
			<view class="cd" :class="paused ? '' : 'rotation' " @click="toggle" v-if="!lyricPanel">
				<image :src="playData.img"></image>
			</view>

			<scroll-view class="lyric" :scrollTop="scrollTop" scroll-y="true" v-if="lyricPanel" ref="lyricList" @scroll="scroll"
			 @click="toggle">
				<view v-if="isLyric">
					<template v-for="(line,index) in currentLyric.lines">
						<p ref="lyricLine" :class="currentLineNum === index ? 'currentLyric' :''">{{line.txt}}</p>
					</template>
				</view>
				<p v-if="!isLyric">暂无歌词</p>
			</scroll-view>
		</view>


		<view class="foot">
			<view class="tool">
				<image @click="like" :src="liked?'../../static/images/liked.png':'../../static/images/like.png'"></image>
				<image src="../../static/images/download.png"></image>
				<image src="../../static/images/comment.png"></image>
			</view>
			<view class="bar">
				<text>{{format_current}}</text>
				<slider class="slider" min="0" :max="duration" :value="currentTime" activeColor="#b6b6b6" backgroundColor="#dedede"
				 block-size="12" @change="changeProgress" />
				<text>{{format_duration}}</text>
			</view>
			<view class="play-bar">
				<view class="">
					<text @click="checkMode" class="text-white" :class="play_mode=='single_loop'?'cuIcon-repeal':'cuIcon-order' "></text>
				</view>
				<view class="" @click="checkSong('pre')">
					<text class="text-white cuIcon-backwardfill"></text>
				</view>
				<view class="play-menu" @click="playOrPause">
					<text class="text-white cuIcon-playfill" :class="!paused?'cuIcon-stop':'cuIcon-playfill'"></text>
				</view>
				<view class="" @click="checkSong">
					<text class="text-white cuIcon-play_forward_fill"></text>
				</view>
				<view class="">
					<text class="text-white cuIcon-list"></text>
				</view>
			</view>
		</view>


		<image class="bg" :src="playData.img"></image>
	</view>
</template>

<script>
	import {
		get
	} from '../../utils/http.js'
	import Lyric from 'lyric-parser'
	import {
		mapGetters
	} from 'vuex'
	import {
		pushLikeList
	} from '../../utils/like.js'
	export default {
		name: 'lyric',
		data() {
			return {
				isLyric: '', //判断有无歌词
				currentTime: '',
				timer: '',
				duration: '',
				show: '',
				lyricPanel: false,
				currentLyric: null, // 设置一个歌词维护属性
				currentLineNum: 0,
				playingLyric: '',
				scrollTop: 0,
				liked:false    // 是否喜欢
			}
		},
		computed: {
			format_current() {
				var m = Math.floor((this.currentTime / 60 % 60)) < 10 ? '0' + Math.floor((this.currentTime / 60 % 60)) : Math.floor(
					(this.currentTime / 60 % 60));
				var s = Math.floor((this.currentTime % 60)) < 10 ? '0' + Math.floor((this.currentTime % 60)) : Math.floor((this.currentTime %
					60));
				return m + ":" + s;
			},
			format_duration() {
				var m = Math.floor((this.duration / 60 % 60)) < 10 ? '0' + Math.floor((this.duration / 60 % 60)) : Math.floor((this
					.duration / 60 % 60));
				var s = Math.floor((this.duration % 60)) < 10 ? '0' + Math.floor((this.duration % 60)) : Math.floor((this.duration %
					60));
				return m + ":" + s;
			},
			...mapGetters({
				current_song_no: 'current_song_no',
				playData: 'inPlay',
				paused: 'paused',
				songList: "songList",
				play_mode:'play_mode'
				// play_url:'play_url'
			})
		},
		watch: {
			playData(newSong, oldSong) { //切歌 赋值可以放在监听属性里
				console.log('check')
			}
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			playOrPause() {
				if (this.paused) {
					this.$store.commit('play')
					this.playing()
					this.lyricPlay()
				} else {
					this.$store.commit('pause')
					this.lyricPause()
					clearInterval(getApp().globalData.interval)
				}
			},
			//切换播放模式
			checkMode(){
				if(this.play_mode == 'single_loop'){
					this.$store.commit('set_play_mode','list_loop')
					uni.showToast({
						title:'列表循环播放模式'
					})
				}else{
					this.$store.commit('set_play_mode','single_loop')
					uni.showToast({
						title:'单曲循环播放模式'
					})
				}
			},
			//切歌
			checkSong(preOrNext = 'next') {
				// 获取歌单，当前歌曲所在歌单的序号
				//  如果当前歌单长度等于1，继续播放这首
				//  this.$player.src = '', glo.inPlay = '',
				clearInterval(getApp().globalData.interval)
				let songList = this.songList
				let i = this.current_song_no
				if (!songList || songList.length <= 1) { //没有列表，或列表只有一首歌
					this.$player.currentTime = 0
					this.init()
					return
				}
				if (preOrNext == 'pre') { //前一首
					if (i == 0) { //是否为第一首，如果是第一首则切换到列表的最后一首
						let index = songList.length - 1
						this.$store.commit('set_current_song_no', index)
						this.$store.commit('setInPlay', songList[index])
						this.$player.src = songList[index].play_url
						this.init()
						return
					}
					let item = songList[i - 1]
					i = i - 1
					this.$player.src = item.play_url
					this.$store.commit('set_current_song_no', i)
					this.$store.commit('setInPlay', item)
					this.init()
					return
				} else { //下一首
					if (i >= songList.length - 1) { // 列表的最后一首，则下一首是第一首
						this.$store.commit('set_current_song_no', 0)
						this.$store.commit('setInPlay', songList[0])
						this.$player.src = songList[0].play_url
						this.init()
						return
					}
					let item = songList[i + 1]
					this.$player.src = item.play_url
					this.$store.commit('set_current_song_no', i + 1)
					this.$store.commit('setInPlay', item)
					this.init()
				}
			},
			playing() {
				// 需要定义一个变量接收定时器的返回值，才能清除
				getApp().globalData.interval = setInterval(() => {
					this.currentTime = this.$player.currentTime
				}, 1000)
			},
			changeProgress(e) {
				this.$player.currentTime = e.detail.value
				this.currentTime = e.detail.value
				if (this.currentLyric) {
					this.currentLyric.seek(this.currentTime * 1000)
				}
			},
			//加入喜欢歌单
			like() {
				let result = pushLikeList(this.playData)
				if (result) {
					uni.showToast({
						title:'已添加到我喜欢的音乐'
					})
					this.liked = true
				} else {
					uni.showToast({
						title:'取消喜欢成功'
					})
					this.liked = false
				}
			},

			//切换歌词面板
			toggle() {
				this.lyricPanel = !this.lyricPanel
				if (!this.lyricPanel) {
					console.log('cd面板')
					if (this.currentLyric) {
						this.currentLyric.stop()
						this.currentLyric = null
						this.playingLyric = ''
						this.currentLineNum = 0
					}
					return
				}
				if (this.lyricPanel) {
					if (!this.playData.lyric_id) {
						return this.isLyric = false
					}
					this.isLyric = true
					console.log('显示歌词')
					//歌词数据
					this.currentLyric = []
					this.timer = setTimeout(() => {
						this.getLyric()
					}, 100)
				}
			},

			async getLyric() {
				let id = this.playData.id
				let lyric = uni.getStorageSync('lyric').lyric || '';
				if (!lyric || uni.getStorageSync('lyric').song_id !== id) { //缓存中无歌词 或者 不匹配歌曲时才发送请求
					await get('/lyric/' + id).then(res => {
						lyric = res.lyric
						uni.setStorageSync('lyric', res)
					})
				}
				this.currentLyric = new Lyric(lyric, this.handleLyric)
				if (!this.paused) {
					this.currentLyric.play() // 首次播放用play 暂停后续播用togglePlay
					this.currentLyric.seek(this.currentTime * 1000)
				}
			},

			// lyric回调函数
			handleLyric({
				txt,
				lineNum
			}) { //这里会传入一个对象 {txt:'',lineNum:''}
				console.log(txt)
				this.currentLineNum = lineNum
				this.scrollTop = lineNum * 30 // 每行歌词高度 * 当前的行数  当前解决方案 可能不太准确 
				this.playingLyric = txt
			},

			//scroll 滚动
			scroll(e) {
				// console.log(e.detail.scrollTop)
			},



			// 切歌时执行
			init() {
				//  这里使用延时，否则初始化时 player的时长和时间属性未赋值
				if (this.currentLyric) {
					this.currentLyric.stop()
					this.currentLyric = null
					this.playingLyric = ''
					this.currentLineNum = 0
				}
				clearTimeout(this.timer)
				this.$store.commit('play')
				setTimeout(() => {
					this.lyricPanel = false
					// this.currentLyric = null
					this.duration = this.$player.duration
					// this.currentTime = this.$player.currentTime
					this.$player.play()
					this.playing()
				}, 100)
			},
			//onShow时， 歌曲自然结束时触发的
			initTime() {
				clearInterval(getApp().globalData.interval)
				this.lyricPanel = false //播放结束后 切换到CD 清除歌词
				if (this.currentLyric) {
					this.currentLyric.stop()
					this.currentLyric = null
					this.playingLyric = ''
					this.currentLineNum = 0
				}
				clearTimeout(this.timer)
				// this.currentLyric = null
				setTimeout(() => {
					this.duration = this.$player.duration
					this.currentTime = this.$player.currentTime
					if (!this.paused) {
						this.playing()
					}
				}, 200)
			},

			//播放 歌词面板
			lyricPlay() {
				if (this.currentLyric && !this.paused) {
					this.currentLyric.togglePlay()
					this.currentLyric.seek(this.currentTime * 1000) // 坑： 时间跳转放到play后面
					console.log(this.currentTime * 1000)
				}
			},
			//暂停 歌词面板
			lyricPause() {
				if (this.currentLyric) {
					console.log('stop')
					this.currentLyric.togglePlay()
				}
			}
		},

		// 生命周期
		onLoad(e) {
			let like = uni.getStorageSync('like_songList')
			let liked = like.filter((item,i)=>{
				return item.id == this.playData.id
			})
			if(liked.length > 0){
				this.liked = true
			}
		},
		onShow() { //这里要放在onShow里 因为是app 切出去再回来就会触发
			this.initTime()
		},
		onHide() {
			clearInterval(getApp().globalData.interval)

		},
		onBackPress() {
			clearInterval(getApp().globalData.interval)
			if (this.currentLyric) {
				this.currentLyric.stop()
			}
		},
		created() {
			
		},
		mounted() {
			window._init = this.initTime
		}
	}
</script>

<style scoped lang="scss">
	.content {
		z-index: 1;
		background-color: #555555;
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		height: 100%;
	}

	.bg {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		z-index: -1;
		-webkit-filter: blur(100rpx);
		filter: blur(100rpx);
		transform: scale(1.0);
		opacity: 0.8;
	}

	.head {
		display: flex;
		align-items: center;
		padding-left: 20rpx;
		width: 100%;
		height: 10%;
		view {
			margin-left: 25rpx;
			display: flex;
			flex-direction: column;
		}
	}

	.name {
		color: #FFFFFF;
		font-size: 32rpx;
	}

	.singer {
		color: #FFFFFF;
		font-size: 16rpx;
		opacity: 0.8;
	}

	.icon {
		opacity: 0.9;
		color: #FFFFFF;
		font-size: 70rpx;
	}

	.main {
		width: 100%;
		height: 60%;
		// border: 1rpx solid;
		display: flex;
		justify-content: center;
        align-items: center;
		.cd {
			// margin-top: 100rpx;
			border-radius: 50%;
			height: 600rpx;
			width: 600rpx;
			background: url(../../static/images/videodisc.png) no-repeat;
			background-size: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			image {
				height: 400rpx;
				width: 400rpx;
				border-radius: 50%;
			}
		}

	}

	.foot {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		// border: 1rpx solid;
		// padding: 0 70rpx;
		font-size: 30px;
		position: absolute;
		bottom: 0rpx;
		opacity: 0.9;
		height: 30%;
	}

	.tool {
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 0 40rpx 20rpx 40rpx;

		image {
			cursor: pointer;
			height: 60rpx;
			width: 60rpx;
		}
	}

	.bar {
		display: flex;
		justify-content: center;
		width: 100%;
		align-items: center;

		slider {
			width: 60%;
		}

		text {
			font-size: 16rpx;
			color: #FFFFFF;
			opacity: 0.8;
		}
	}


	.play-bar {
		width: 100%;
		padding: 0 70rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.play-menu {
		width: 100rpx;
		height: 100rpx;
		border: 5rpx solid #FFFFFF;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}


	//旋转
	.rotation {
		-webkit-transform: rotate(360deg);
		animation: rotation 12s linear infinite;
		-moz-animation: rotation 12s linear infinite;
		-webkit-animation: rotation 12s linear infinite;
		-o-animation: rotation 12s linear infinite;
	}

	@-webkit-keyframes rotation {
		from {
			-webkit-transform: rotate(0deg);
		}

		to {
			-webkit-transform: rotate(360deg);
		}
	}

	//lyric
	.lyric {
		padding: 50rpx;
		width: 100%;
		height:100%;

		p {
			text-align: center;
			overflow: hidden;
			font-size: 16px;
			color: #FFFFFF;
			opacity: 0.7;
			line-height: 30px;
		}
	}

	.currentLyric {
		opacity: 1 !important;
	}
</style>
