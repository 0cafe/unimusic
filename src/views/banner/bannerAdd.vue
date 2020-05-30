<template>
	<div class="container">
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" label-width="200px" @submit.native.prevent v-loading="loading">
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="排序" prop="sort">
							<el-input size="medium" v-model="form.sort" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌单封面">
							<upload-imgs ref="uploadEle" :value="initData" :multiple="true" :max-num="1" :auto-upload="true" />
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
	import Banner from '@/models/banner.js'
	export default {
		data() {
			return {
				form: {},
				initData: [],
				loading: false,
				fileList: '',
				uploadUrl: 'http://muscafe/index.php/cms/file',
				addSong: false
			}
		},
		props: {
			editID: Number
		},
		components: {
			uploadImgs,
		},
		methods: {
			// 提交表单
			async submitForm(formName) {
				this.loading = true
				await this.getValue()
				console.log(this.form)
				if (!this.form.img) {
					this.loading = false
					return this.$message.error('请完整填写')
				}
				const res = await Banner.addBanner(this.form)
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
			close() {
				this.addSong = false
			},
			// 获取商品信息
			async getBanner(id) {
				const banner = await Banner.getBanner(id);
				console.log(banner)
				this.form = banner
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
			// 清空上传组件
			doClear() {
				this.$refs['uploadEle'].clear()
			},
			// 添加歌曲相关
			goSong() {
				this.addSong = true
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
