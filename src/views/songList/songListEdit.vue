<template>
	<div class="container">
		<div class="title">
			<span>编辑歌单</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
		</div>
		<el-divider></el-divider>
		<!-- <el-divider></el-divider> -->
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" label-width="200px" @submit.native.prevent v-loading="loading">
						<el-form-item label="歌单名" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="介绍" prop="desc">
							<el-input size="medium" v-model="form.desc" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="来源(0:网络;1:本地)" prop="from">
							<el-switch v-model="form.from" active-text="本地" inactive-text="网络" active-value="1" inactive-value="0">
							</el-switch>
						</el-form-item>
						<el-form-item label="歌单封面(网络)" prop="img">
							<el-input size="medium" type="textarea" :autosize="{ minRows: 4, maxRows: 8 }" v-model="form.img" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌单封面">
							<upload-imgs ref="uploadEle" :value="initData" :multiple="true" :max-num="1" :auto-upload="true" />
							<!-- <el-button @click="getValue('uploadEle')" type="primary">上传</el-button> -->
						</el-form-item>
						
						<el-form-item label="排序(数字,可放空)">
							<el-input size="medium" v-model="form.sort" placeholder="排列顺序(数字,可不填)"></el-input>
						</el-form-item>

						<el-form-item label="歌单歌曲">						
							<el-input size="medium" v-model="form.songs" placeholder="按照这样的格式填写歌曲ID[1,2,3]"></el-input>
							<template v-for="(item,i) in songs">
								<div class="song">
									<div>id:{{item.id}}</div>
									<div>歌名:{{item.song}}</div>
									<div>歌手:{{item.singer}}</div>
								</div>
							</template>
						</el-form-item>

						<el-form-item class="submit">
							<el-button type="primary" @click="submitForm('form')">提 交</el-button>
							<el-button @click="resetForm('form')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import uploadImgs from '@/components/base/upload-imgs'
	import SongList from '@/models/songList.js'
	import Song from '@/models/song.js'
	import {
		src
	} from '@/utils/tool.js'
	export default {
		data() {
			return {
				form: {},
				initData: [],
				loading: false,
				fileList: '',
				uploadUrl: 'http://muscafe/index.php/cms/file',
				addSong: false,
				songs: []
			}
		},
		props: {
			editID: Number
		},
		components: {
			uploadImgs
		},
		methods: {
			// 提交表单
			async submitForm(formName) {
				this.loading = true
				await this.getValue()
				console.log(this.form)
				if (!this.form.img || !this.form.name || this.form.from < 0) {
					this.loading = false
					return this.$message.error('请完整填写')
				}
				const res = await SongList.editSongList(this.form)
				if (res.error_code === 0) {
					this.$message.success(`${res.msg}`)
					this.back()		
				} else {
					this.$message.error(res.data.msg)
				}
				this.loading = false
			},
			// 重置表单
			resetForm(formName) {
				this.$refs[formName].resetFields()
			},
			// 返回
			back() {
				this.$emit('editClose')
			},
			// 获取商品信息
			async getSongList(id) {
				const songList = await SongList.getSongList(id);
				console.log(songList)
				this.form = songList
			},
			// 主图上传
			async getValue() {
				if (this.form.from == 0) {
					return
				}
				let a = await this.$refs['uploadEle'].getValue()
				let url = a[0].src
				if(!url){
					return
				}
				this.form.img = url
			},
			// 清空上传组件
			doClear() {
				this.$refs['uploadEle'].clear()
			},
			// 添加歌曲相关
			async getSongs(id) {
				this.songs = await Song.getSongInList(id)
			},
			initUpload(url) {
				this.initData = [{
					id: '',
					src: '',
					display: url,
					img_id: '',
				}]
			}
		},
		async created() {
			await this.getSongList(this.editID)
			await this.getSongs(this.editID)
			this.initUpload(this.form.img)
			if (this.form.from == 1) {
				this.form.img = src(this.form.img)
				console.log(this.form)
			}
		},
		async mounted() {

		}
	}
</script>
<style lang="scss" scoped>
	.el-divider--horizontal {
		margin: 0;
	}

	.container {
		.title {
			height: 59px;
			line-height: 59px;
			color: $parent-title-color;
			font-size: 16px;
			font-weight: 500;
			text-indent: 40px;

			.back {
				float: right;
				margin-right: 40px;
				cursor: pointer;
			}
		}

		.wrap {
			padding: 20px;
		}

		.submit {
			float: left;
		}
	}

	.song {
		display: flex;
	}

	.song>div {
		margin-left: 15px;
	}
</style>
