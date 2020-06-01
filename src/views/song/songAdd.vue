<template>
	<div class="container">
		<div class="title">
			<span>添加歌曲</span>
		</div>
		<el-divider></el-divider>
		<!-- <el-divider></el-divider> -->
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" label-width="200px" @submit.native.prevent v-loading="loading">
						<el-form-item label="歌曲" prop="song">
							<el-input size="medium" v-model="form.song" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌手" prop="singer">
							<el-input size="medium" v-model="form.singer" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌手id" prop="singer_id">
							<el-input size="medium" v-model="form.singer_id" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="来源(0:网络;1:本地)" prop="from">
							<el-switch v-model="form.from" active-text="本地" inactive-text="网络" active-value="1" inactive-value="0">
							</el-switch>
						</el-form-item>
						<el-form-item label="播放地址(网络)" prop="play_url" >
							<el-input size="medium" type="textarea" :autosize="{ minRows: 4, maxRows: 8 }" v-model="form.play_url"
							 placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="播放地址" prop="mv_url">
							<el-upload class="upload-demo" :action="uploadUrl" :limit="1" :on-success="upload">
								<el-button size="small" type="primary">点击上传</el-button>
							</el-upload>
						</el-form-item>
						<!-- <el-form-item label="播放地址(本地)" prop="play_url">
							<el-input size="medium" v-model="form.play_url" placeholder="请填写"></el-input>
						</el-form-item> -->
						<el-form-item label="mv播放地址" prop="mv_url">
							<el-input size="medium" type="textarea" :autosize="{ minRows: 4, maxRows: 8 }" placeholder="没有可不填" v-model="form.mv_url">
							</el-input>
						</el-form-item>

						<el-form-item label="歌词id" prop="lyric_id">
							<el-input size="medium" v-model="form.lyric_id" placeholder="没有可不填"></el-input>
						</el-form-item>
						<el-form-item label="歌曲封面(网络)">
							<el-input size="medium" v-model="form.img" placeholder="上传图片则不填"></el-input>
							<!-- <el-button @click="getValue('uploadEle')" type="primary">上传</el-button> -->
						</el-form-item>
						<el-form-item label="歌曲封面">
							<upload-imgs ref="uploadEle" :value="initData" :multiple="true" :max-num="1" :auto-upload="true" />
							<!-- <el-button @click="getValue('uploadEle')" type="primary">上传</el-button> -->
						</el-form-item>


						<el-form-item class="submit">
							<el-button type="primary" @click="submitForm('form')" v-auth="{auth:'创建歌单', type: 'disabled'}" >提 交</el-button>
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
	import Song from '@/models/song.js'
	export default {
		data() {
			return {
				form: {},
				initData: [],
				loading: false,
				fileList: '',
				uploadUrl: 'http://muscafe/index.php/cms/file'
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
				if (!this.form.img || !this.form.song || !this.form.singer || !this.form.play_url) {
					this.loading = false
					return this.$message.error('请完整填写')
				}
				const res = await Song.addSong(this.form)
				if (res.error_code === 0) {
					this.$message.success(`${res.msg}`)
					this.resetForm(formName)
					this.doClear()
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
			// 获取分类
			async getCategorys() {
				const category = await categoryModel.getCategorys()
				this.category = category
			},
			// 获取商品信息
			async getSong(id) {
				const song = await Song.getSong(id);
				console.log(song)
				this.form = song
			},
			// 主图上传
			async getValue() {
				if (this.form.img) {
					return
				}
				let a = await this.$refs['uploadEle'].getValue()
				console.log(a)
				let url = a[0].src
				this.form.img = url
			},

			// 上传音乐文件成功时
			upload(res, file, filelist) {
				this.form.play_url = res[0].path
			},

			// 清空上传组件
			doClear() {
				this.$refs['uploadEle'].clear()
			},
			handleChange(e) {
				console.log(e)
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
</style>
