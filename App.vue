<script>
	import Vue from 'vue'
	export default {
		// 全局变量 H5、App 小程序都支持
		//赋值：getApp().globalData.text = 'test'
		//取值：console.log(getApp().globalData.text) // 'test'
		globalData: {
			text: 'text',
			interval: '',
			songList: '',
			current_song_no: '',
			play_mode: 'list_loop',
			inPlay: ''
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif		
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";

	/* @media screen and (min-width:900px) {
	page {
		height: 1px;
		width: 1px;
	}
}
 */
    @media screen and(max-width:900px) {
    	body,.uni-body,page {
    		width: 375px !important;
    		height: 667px !important;
    		background-color: black;
    	}
    }
	page {
		width: 100%;
		height: 100%;
		background-color: #F6F6F6;
	}

	.content {
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		color: #000000;
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	page::-webkit-scrollbar {
		display: none;
		width: 0px;
		height: 0px;
		/* Chrome Safari */
	}
</style>
