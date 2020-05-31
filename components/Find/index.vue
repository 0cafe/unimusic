<template name="Find">
	<view class="find">
		<!-- swiper -->
		<swiper class="find-swiper" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" circular="true">
			<swiper-item v-for="(item, index) in swpierList" :key="index">
				<image :src="item.img" mode="" @tap="goPlay"></image>
			</swiper-item>
		</swiper>
		<!-- category -->
		<view class="find-category">
			<view class="type" @click="goTo(1)">
				<view class="type-icon">
					<text class="text-white cuIcon-font"></text>
				</view>
				<view class="type-name">
					每日推荐
				</view>
			</view>
			<view class="type" @click="goTo(2)">
				<view class="type-icon">
					<text class="text-white cuIcon-radioboxfill"></text>
				</view>
				<view class="type-name">
					下架音乐
				</view>
			</view>
			<view class="type" @click="goTo(3)">
				<view class="type-icon">
					<text class="text-white cuIcon-rank"></text>
				</view>
				<view class="type-name">
				    嘻哈音乐
				</view>
			</view>
			<view class="type" >
				<view class="type-icon">
					<text class="text-white cuIcon-musicfill"></text>
				</view>
				<view class="type-name">
					待开发
				</view>
			</view>
			<view class="type">
				<view class="type-icon">
					<text class="text-white cuIcon-servicefill"></text>
				</view>
				<view class="type-name">
					待开发
				</view>
			</view>
		</view>
		<!-- more choise -->
		<view class="find-recommend">
			推荐歌曲
		</view>
		<view class="song-list">
			<block v-for="(item,index) in recommends">
				<view class="song" @click="play(item,index)">
					<image :src="item.img"></image>
					<view class="song-item">
						<text class="name">{{item.song}}</text>
						<text class="desc">{{item.singer}}</text>
					</view>
					<image class="more" src="../../static/images/more.png"></image>
				</view>
			</block>
		</view>
		<view class="last">
			没有啦&nbsp;~
		</view>
	</view>
</template>

<script>
	import {get} from '../../utils/http.js'
	export default {
		name: "Find",
		props: {},
		data() {
			return {
				recommends:[],
				swpierList: []
			}
		},
		methods: {
			async getSongList(id){
				await get('/song/list/'+id).then(res=>{
					this.recommends = res
				})
			},
			async getSwiper(){
				await get('/banner').then(res=>{
					this.swpierList = res
				})
			},
			goPlay() {
				uni.navigateTo({
					url: '../../pages/play/play'
				})
			},
			play(item,i) {
			   // this.$player._data = item
			   // this.$player._data.paused = false
			   this.$player.src = item.play_url	
			   this.$store.commit('play')
			   uni.setStorageSync('last_play',item)
			   this.$store.commit('setInPlay',item)
			   this.$store.commit('set_current_song_no',i)
			   this.$store.commit('SET_SONGLIST',this.recommends)
			},
			goTo(page){
				// uni.navigateTo({
				// 	url:`/pages/${page}/${page}`
				// })
				this.$emit('checkPage',page)
			}
		},
		async created() {
            this.getSwiper()
			this.getSongList(1)   //推荐歌单 id是1
		}
	}
</script>

<style scoped>
	@import url("./index.css");

	.song-list {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.song {
		padding: 20upx 20upx 20upx 40upx;
		width: 100%;
		display: flex;
		align-items: center;
	}
	
	.song:active{
		background-color: #F6F6F6;
	}

	.song-item {
		height: 100upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 20upx;
	}

	.song image {
		border-radius: 5%;
		width: 100upx;
		height: 100upx;
	}

	.name {
		font-size: 32upx;
		width: 450upx;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		cursor: pointer;
	}

	.desc {
		font-size: 16upx;
		color: #808080;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 450upx;
		cursor: pointer;
	}

	.more {
		height: 60upx !important;
		width: 60upx !important;
		margin-left: 60upx;
	}
</style>
