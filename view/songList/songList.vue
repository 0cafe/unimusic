<template>
	<view class="content">
		<view class="top" ref="top">
			<view class="nav">
				<text class="icon cuIcon-back_android" @click="back"></text>
				<text>歌单</text>
				<text class="icon cuIcon-more"></text>
			</view>
			<view class="main">
				<image :src="info.img"></image>
				<view>
					<view style="font-size: 32rpx;">{{info.name}}</view>
					<view>简介：{{info.desc}}</view>
				</view>
			</view>
			<image class="bg" :src="info.img"></image>
		</view>

		<view class="songList">
			<block v-for="(item,index) in list">
				<view class="song" @click="play(item,index)">
					<image :src="item.img"></image>
					<view class="song-item">
						<text class="name">{{item.song}}</text>
						<text class="desc">{{item.singer}}</text>
					</view>
					<image class="more" src="../../static/images/more.png"></image>
				</view>
			</block>
			<view class="blank" v-if="empty">暂无喜欢的歌曲，快去添加吧！</view>
		</view>
	</view>
</template>

<script>
	import {
		get
	} from '../../utils/http.js'
	export default {
		props: ['listID'],
		data() {
			return {
				list: [],
				info: '',
				empty:'',
			}
		},
		methods: {
			async getSongList(id) {
				await get('/songlist/' + id).then(res => {
					this.info = res
				})
			},
			async getSongs(id) {
				await get('/song/list/' + id).then(res => {
					this.list = res
				})
			},
			getLikeList() {
				let list = uni.getStorageSync('like_songList')
				if(!list[0]){
					this.empty = true
                    return
				}
				this.list = list.reverse()
			},
			getRecentList(){
				let list = uni.getStorageSync('recent_list')
				this.list = list.reverse()
			},
			play(item, i) {
				this.$player.src = item.play_url
				this.$store.commit('play')
				uni.setStorageSync('last_play',item)
				this.$store.commit('setInPlay',item)
				this.$store.commit('set_current_song_no',i)
				this.$store.commit('SET_SONGLIST',this.list)
			},
			//关闭当前组件
			back() {
				this.$emit('close')
			}
		},
		async created() {
			uni.showLoading()
			if (this.listID == 'like') {
				this.getLikeList()
				this.info = {
					name: '我喜欢的音乐',
					desc: 'like',
					img: this.empty?'/static/images/music.jpg' : this.list[0].img
				}
				return
			}
			await this.getSongList(this.listID)
			await this.getSongs(this.listID)			
		},
		 mounted() {
			 uni.hideLoading()
			// this.$refs.top.$el.style.backgroundImage = '../../static/images/swiper3.jpg'
		},
		onBackPress(){
			this.back()
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// height: 100vh;
		width: 100vw; 
		display: flex;
		flex-direction: column;
	}

	.top {
		padding-top: 30rpx;
		z-index: 1;
		// height: 30%;
		// border: 1rpx solid;
	}

	.bg {
		position: absolute;
		top: 0;
		height: 300rpx;
		width: 100%;
		z-index: -1;
		-webkit-filter: blur(100rpx);
		filter: blur(50rpx);
		transform: scale(1.0);
		opacity: 1;
	}

	.nav {
		position: relative;
		top: 0;
		height: 80rpx;
		display: flex;
		font-size: 32rpx;
		color: #FFFFFF;
		align-items: center;
		justify-content: space-between;
	}

	.cuIcon-back_android {
		font-size: 60rpx !important;
	}

	.main {
		margin-top: 10rpx;
		display: flex;
		padding: 20rpx;

		image {
			width: 200rpx;
			height: 200rpx;
		}

		view {
			margin-left: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-around;

			view {
				font-size: 28rpx;
				width: 450rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				line-clamp: 2;
				-webkit-box-orient: vertical;
				color: #FFFFFF;
				opacity: 0.9;
			}
		}
	}


	.songList {
		width: 100%;
		margin-bottom: 90rpx !important;
		display: flex;
		flex-direction: column;
	}

	.song {
		padding: 20rpx 20rpx 20rpx 40rpx;
		width: 100%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
	}

	.song:active {
		background-color: #F6F6F6;
	}

	.song-item {
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 20rpx;
	}

	.song image {
		border-radius: 5%;
		width: 100rpx;
		height: 100rpx;
	}

	.name {
		font-size: 32rpx;
		width: 450rpx;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		cursor: pointer;
	}

	.desc {
		font-size: 16rpx;
		color: #808080;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 450rpx;
		cursor: pointer;
	}

	.more {
		height: 60rpx !important;
		width: 60rpx !important;
		margin-left: 60rpx;
	}
	
	.blank{
		text-align: center;
	}
</style>
