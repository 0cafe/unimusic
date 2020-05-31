<template>
	<view class="content"> 
		<song-list v-if="page==='songList'" :listID="listID" @close="close"></song-list>
		<searchCmp v-if="page==='search'" @back="close"></searchCmp>
		<template v-if="page==='index'">
			<Header :current="swiperCurrent" @changeView="changeView"  @search="search"></Header>
			<!-- tab选项卡实现 -->
			<swiper class="main-swiper" :indicator-dots="false" :autoplay="false" :current="swiperCurrent" @change="changeCurrent">
				<swiper-item>
					<scroll-view scroll-y="true" style="height: 100%;">
						<Mine @checkPage="checkPage"></Mine>
					</scroll-view>
				</swiper-item>
				<swiper-item>
					<scroll-view scroll-y="true" style="height: 100%;">
						<Find @changeSong="change" @checkPage="checkPage"></Find>
					</scroll-view>
				</swiper-item>
			</swiper>
		</template>

		<!-- 底部播放器 -->
		<view class="bottom" v-if="inPlay.play_url">
			<view class="bottom-left">
				<image :class="paused?'':'rotation'" :src="inPlay.img" @click="lyric"></image>
				<view class="aideo-info" @click="lyric">
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
					<text v-if="paused==false" class="text-black cuIcon-stop" @click="pause"></text>
					<text v-if="paused" class="text-black cuIcon-playfill" @click="play"></text>
				</view>
				<view class="btn-info">
					<text class="text-black cuIcon-list"></text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import Header from '../../components/Header/index.vue';
	import Find from '../../components/Find/index.vue';
	import Mine from '../../components/Mine/index.vue';
	import myHeader from '../../components/Header/index.vue'
	import songList from '../../view/songList/songList.vue'
	import searchCmp from '../../view/searchCmp.vue'
	import {
		mapGetters,
		mapMutations,
	} from 'vuex'
	export default {
		components: {
			Header,
			Find,
			Mine,
			songList,
			searchCmp
		},
		data() {
			return {
				swiperCurrent: 1,
				haveStorage: true,
				page: 'index',
				listID: '' //歌单id
			}
		},
		computed: {
			...mapGetters({
				current_song_no: 'current_song_no',
				inPlay: 'inPlay',
				paused: 'paused',
				play_url: 'play_url'
			}),
		},
		watch: {
    //          paused(nval,oval){
				//  console.log('is' + nval)
			 // }
		},
		onLoad() {

		},
		onReady() {
			//初次渲染完成
		},
		onShow() {},
		onBackPress() {
			this.close()
		},
		methods: {
			close() {
				this.page = 'index'
			},
			checkPage(e) {
				if (e !== 'index') {
					this.page = 'songList'
					this.listID = e
				}
			},
			search(e) {
				this.page = 'search'
			},
			changeCurrent(e) {
				this.swiperCurrent = e.detail.current;
			},
			changeView(e) {
				this.swiperCurrent = e;
			},
			change() {								
				console.log(this.$store.getters.paused)
			},
			...mapMutations([
				'play', //将 `this.play()` 映射为 `this.$store.commit('play')`
				'pause'
			]),
			lyric() {
				uni.navigateTo({
					animationType: 'pop-in', //跳转动画  默认值为 pop-in,  可以的值 pop-in、pop-out、none、auto 等。。。
					animationDuration: 200, //设置窗口显示/关闭动画的持续时间，单位为 ms
					url: '/pages/lyric/lyric?id=' + this.inPlay.id
				});
			},
		},
		mounted() {

		}
	}
</script>

<style scoped>
	@import url("./index.css");
	@import url("./bottom.css");
</style>
