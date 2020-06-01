<template>
	<div class="container">
		<div class="title">
			<span>添加歌曲</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
		</div>
		<el-divider></el-divider>
		<!-- <el-divider></el-divider> -->
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" label-width="100px" @submit.native.prevent v-loading="loading">
						<el-form-item label="歌曲" prop="song">
							<el-input size="medium" v-model="form.song" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌曲id(必填)" prop="singer">
							<el-input size="medium" v-model="form.song_id" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌手" prop="singer">
							<el-input size="medium" v-model="form.singer" placeholder="请填写"></el-input>
						</el-form-item>
						<el-form-item label="歌词" prop="lyric">
							<el-input  type="textarea" :autosize="{ minRows: 4 }" placeholder="填写lyric格式歌词" v-model="form.lyric">
							</el-input>
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
	import Lyric from '@/models/lyric.js'
	export default {
		data() {
			return {
				form: {},
				loading: false,
			}
		},
		props: {
			editID: Number
		},
		methods: {
			// 提交表单
			async submitForm(formName) {
				this.loading = true
				if (!this.form.lyric || !this.form.singer || !this.form.song) {
					this.loading = false
					return this.$message.error('请完整填写')
				}
				const res = await Lyric.editLyric(this.form)
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
			async getLyric(id) {
				const lyric = await Lyric.getLyric(id);
				console.log(lyric)
				this.form = lyric
			},
			handleChange(e) {
				console.log(e)
			}
		},

		async mounted() {
            this.getLyric(this.editID)
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
