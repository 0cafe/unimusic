<template name="Mine">
	<view class="mine">
		<!-- user info -->
		<view class="mine-user">
			<view class="user-info">
				<view class="user-ico">
					<image src="/static/user.jpg"></image>
				</view>
			</view>
			<view class="user-login">
				测试账号
			</view>
		</view>
		<!-- user category -->
		<!-- 		<view class="user-category">
			<view class="cate-class" v-for="(item, index) in cateList" :key="index">
				<text class="cate-icon text-black" :class="'cuIcon-'+ item.icon"></text>
				<view class="cate-name">
					{{item.title}}
				</view>
			</view>
		</view> -->
		<!-- my new -->
		<view class="user-new-title">
			<view class="new-title">
				我的音乐
			</view>
			<text class="new-title-icon text-black cuIcon-right"></text>
		</view>
		<view class="mine-new-card">
			<view class="new-card like" ref="like" @click="goTo('like')">
				<text class="new-card-icon text-red cuIcon-likefill"></text>
				<view class="new-msg">
					我喜欢的音乐
				</view>
			</view>
			<view class="new-card fm">
				<text class="new-card-icon text-white cuIcon-service"></text>
				<view class="new-msg">
					待开发
				</view>
				<view class="new-bott">
					uncultivated
				</view>
			</view>
			<view class="new-card dianyin">
				<text class="new-card-icon cuIcon-wefill"></text>
				<view class="new-msg">
					待开发
				</view>
				<view class="new-bott">
					uncultivated
				</view>
			</view>
		</view>
		<!-- 最近播放 -->
		<!-- 		<view class="user-new-title">
			<view class="new-title">
				最近播放
			</view>
			<text class="new-title-icon text-black cuIcon-right"></text>
		</view>
		<view class="res-play">
			<image src="http://p2.music.126.net/JRNj03dPHidbM4jQ-HFK0A==/18826937604631903.jpg?param=200y200" mode=""></image>
			<view class="res-title">
				<view class="res-name">
					全部已播歌曲
				</view>
				<view class="res-num">
					3首
				</view>
			</view>
		</view> -->
		<!-- 创建歌单 -->
		<!-- 		<view class="user-new-title">
			<view class="new-title">
				创建歌单 0
			</view>
			<view class="new-coll">
				收藏歌单 0
			</view>
			<text class="new-title-icon text-black cuIcon-moreandroid"></text>
		</view>
		<view class="mine-create">
			<view class="create">
				+ &nbsp;&nbsp;&nbsp;导入外部歌单
			</view>
		</view> -->
		<!-- 推荐歌单 -->
		<view class="user-new-title">
			<view class="new-title">
				推荐歌单
			</view>
		</view>
		<!-- 推荐列表 -->
		<view class="mine-recommend">
			<view class="recommend" v-for="(item, index) in recommList" :key="index" @click="goTo(item.id)">
				<image :src="item.img" mode=""></image>
				<view class="recommend-title">
					<view class="title-name">
						{{item.name}}
					</view>
					<view class="title-msg">
						{{item.desc}}
					</view>
				</view>
			</view>
		</view>
		<!-- last -->
		<view class="last">
			到底啦&nbsp;~
		</view>
	</view>
</template>

<script>
	import {
		get
	} from '../../utils/http.js'
	export default {
		name: "Mine",
		props: {},
		data() {
			return {
				// cateList:[{	
				// 		'id': 0,
				// 		'title': '本地音乐',
				// 		'icon': 'musicfill'
				// 	},{	
				// 		'id': 1,
				// 		'title': '下载管理',
				// 		'icon': 'pulldown'
				// 	},{	
				// 		'id': 2,
				// 		'title': '我的电台',
				// 		'icon': 'service'
				// 	},{	
				// 		'id': 3,
				// 		'title': '我的收藏',
				// 		'icon': 'favor'
				// 	},{	
				// 		'id': 4,
				// 		'title': '关注新歌',
				// 		'icon': 'radioboxfill'
				// 	}
				// ],
				recommList: []
			}
		},
		methods: {
			goPlay() {
				uni.navigateTo({
					url: '../../pages/play/play'
				})
			},
			goTo(page) {
				this.$emit('checkPage', page)
			},
			// goList(id) {
			// 	this.$emit('checkPage', id)
			// },
			getList() {
				let params = {
					word: '',
					count: 6,
					page: 1
				}
				get('/songlist', params).then(res => {
					this.recommList = res.data
				})
			}
		},
		mounted() {
			this.getList()
			let like = uni.getStorageSync('like_songList')
			like = like.pop() // pop删除并返回数组最后一个元素
			this.$refs.like.$el.style.backgroundImage = `url(${like.img})`
			// this.$refs.like.$el.style.backgroundSize = '100%'
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
