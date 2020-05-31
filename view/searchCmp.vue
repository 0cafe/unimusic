<template>
	<view class="content">
		<view class="head">
			<text class="icon cuIcon-back_android" @click="back"></text>
			<view>
				<input type="text" @confirm="search"  @input="inPuting" v-model="word" placeholder="输入歌曲关键字" />
			</view>
			<text class="icon cuIcon-search" @click="search"></text>
		</view>
		<view class="histroy">
			<view>
				<text>历史记录</text>
				<text class="icon text-gray cuIcon-delete" @click="remove"></text>
			</view>
			<scroll-view scroll-x="true">
				<block v-for="(item,i) in history">
					<text class="cu-tag round" @click="tag(item)">{{item}}</text>
				</block>
			</scroll-view>
		</view>

		<view class="list">
			<view class="hh" v-if="total>0">单曲</view>
			<view class="none" v-if="!total">没有搜索到相关歌曲</view>
			<scroll-view scroll-y="true" class="songList" @scrolltolower="loadMore">
				<block v-for="(item,index) in list">
					<view class="song" @click="play(item,index)">
						<view class="song-item">
							<text class="name">{{item.song}}</text>
							<text class="desc">{{item.singer}}</text>
						</view>
						<image class="more" src="/static/images/more.png"></image>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		get
	} from '../utils/http.js'
	export default {
		data() {
			return {
				list: [],
				word: '',
				history: '',
				currentPage: 0,
				total: '',
				loading: false
			}
		},
		computed: {

		},
		watch: {
			word(n, o) {
				return this.list = []
			}
		},
		methods: {
			//  触发类
			back() {
				this.$emit('back')
			},
			play(item, i) {
				this.$player.src = item.play_url
				this.$store.commit('play')
				uni.setStorageSync('last_play',item)
				this.$store.commit('setInPlay',item)
				this.$store.commit('set_current_song_no',i)
				this.$store.commit('SET_SONGLIST',this.recommends)
			},
			inPuting(e){
				this.list = []
				this.currentPage = 0
			},
			// ---------组件独立功能-----------
			async search() {
				this.saveSearch()
				await this.getSongs()			
			},
			async getSongs() {
				this.loading = true
				uni.showLoading()
				let params = {
					'count': 10,
					'page': this.currentPage + 1,
					'word': this.word
				}
				await get('/song/search', params).then(res => {
					this.currentPage = res.current_page
					this.total = res.total
					this.list = this.list.concat(res.data)
					console.log(this.list)
					this.loading = false
					uni.hideLoading()
				})
			},
			tag(word) {
				this.inPuting()
				this.word = word
				this.search()
			},
			saveSearch() {
				let history = uni.getStorageSync('search')
				if (!history) {
					if (this.word) {
						history = [this.word]
						uni.setStorageSync('search', history)
					}
				} else {
					if (!this.word) return
					let arr = history.filter((item, i) => {
						return item == this.word
					})
					if (arr.length >= 1) {
						return
					}
					history.push(this.word)
					uni.setStorageSync('search', history)
				}
				this.history = history
			},
			remove() {
				uni.setStorageSync('search', [])
				this.history = ''
			},
			loadMore() {
				if (this.loading) {
					return
				}
				if (this.total == this.list.length) {
					return
				}
				this.getSongs()
			}
			// -----------组件独立功能end------------
		},
		created() {
			this.history = uni.getStorageSync('search')
		}
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100%;
		width: 100%;
	}

	.head {
		padding-top: 50rpx;
		height: 150rpx;
		// border: 1rpx solid;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20rpx 0 20rpx;

		text {
			font-size: 80rpx;
			font-weight: 300;
		}

		.cuIcon-search {
			font-size: 50rpx;
		}

		view {
			width: 100% !important;

			input {
				margin-left: 25rpx;
				margin-right: 25rpx;
				height: 70rpx;
				border-bottom: 1rpx solid #999;
			}
		}
	}

	.histroy {
		height: 200rpx;
		// border: 1rpx solid;

		view {
			display: flex;
			justify-content: space-between;
			font-size: 40rpx;
			padding: 20rpx;
		}

		scroll-view {
			height: 100rpx;
			width: 100vw;
			white-space: nowrap; // 大坑！！！！！
			padding-left: 15rpx;
			padding-right: 15rpx;

			text {
				display: inline !important;
				line-height: 100rpx;
				font-size: 32rpx;
				padding-top: 12rpx;
				padding-bottom: 12rpx;
				margin: 0 20rpx;
				background-color: #F6F6F6;
			}
		}
	}

	.hh {
		font-size: 40rpx;
		padding-left: 60rpx;
		height: 100rpx;
		line-height: 100rpx;
	}

	.list {
		// border: 1rpx solid;
		background: #FFFFFF;
		width: 100%;
		margin-bottom: 90rpx;
	}

	.none {
		margin-top: 100rpx;
		text-align: center;
	}

	.songList {
		width: 100vw;
		height: 800rpx !important;
	}

	.song {
		display: inline-block !important;
		padding: 10rpx 20rpx 10rpx 40rpx;
		width: 100%;
		display: flex !important;
		justify-content: space-between;
		align-items: center;
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
		width: 50rpx;
		height: 50rpx;
	}

	.name {
		font-size: 32rpx;
	}

	.desc {
		color: #999;
	}
</style>
