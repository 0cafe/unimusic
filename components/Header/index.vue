<template name="Header">
	<view>
		<view class="status-bar"></view>
		<view class="header">
			<view class="header-menu-icon">
				<text class="text-black cuIcon-sort"></text>
			</view>
			<view class="header-menu">
				<view :class="current==0?'selected':''" @click="childChangeView(0)">
					我的
				</view>
				<view :class="current==1?'selected':''" @click="childChangeView(1)">
					发现
				</view>
			</view>
			<view class="header-search-icon">
				<text class="text-black cuIcon-search" @click="goSearch"></text>
			</view>
		</view>		
	</view>
</template>

<script>
	export default {
		name: "Header",
		props:{
			current:{
				type: Number,
				default: 1
			}
		},
		data() {
			return{
				
			}
		},
		methods:{
			childChangeView(id){
				this.$emit('changeView', id);
			},
			goSearch(){
				// uni.navigateTo({
				// 	url:'/pages/search/search'
				// })
				 this.$emit('search', true);
			}
		}
	}
</script>

<style>
	@import url("./index.css");
</style>
