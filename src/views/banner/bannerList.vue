<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="!showEdit">
			<div class="header">
				<div class="title">歌单列表</div>
				<lin-search @query="onQueryChange" placeholder="请输入歌曲或者歌手关键字" />
			</div>

			<!-- 表格 -->
			<el-table :data="tableData" border class="etable">

				<!-- 要使当页显示分页后的对应数据，其下标应为(当前页-1)*每页数据数 到 当前页*每页数据数。使用slice方法进行取用  -->
				    <el-table-column prop="id" label="ID" width="50"></el-table-column>
				    <el-table-column prop="title" label="轮播标题" width="150"></el-table-column>
				<el-table-column label="图片" width="150">
					<template scope="scope">
						    <div class="pic"><img :src="scope.row.img" :alt="scope.row.img" /></div>
					</template>
				</el-table-column>
				    <el-table-column prop="sort" label="排序(可不填)" width="100"></el-table-column>
				<el-table-column prop="create_time" label="创建时间" width="200"></el-table-column>
				<el-table-column prop="update_time" label="更新时间" width="200"></el-table-column>

				<el-table-column label="操作">
					<template scope="scope">
						<el-button type="primary" @click="handleEdit(scope.row.id)">详情</el-button>
						<el-button type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>


			<!-- 分页 -->
			<div class="pagination">
				<el-pagination @current-change="handleCurrentChange" :background="true" :page-size="pageCount" :current-page="currentPage"
				 layout="prev, pager, next, jumper" :total="total_nums"></el-pagination>
			</div>
		</div>
		<BannerEdit :editID="editID" @editClose="editClose" v-if="showEdit"></BannerEdit>
	</div>
	</div>
</template>

<script>
	import LinSearch from '@/components/base/search/lin-search'
	import Banner from '@/models/banner'
	import LinTable from '@/components/base/table/lin-table'
	import BannerEdit from './bannerEdit.vue'
	export default {
		components: {
			LinTable,
			LinSearch,
			BannerEdit
		},
		data() {
			return {
				currentPage: 1, // 默认获取第一页的数据
				pageCount: 10, // 每页10条数据
				total_nums: 0, // 分组内的用户总数
				searchKeyword: '', //搜索关键词
				tableData: [],
				operate: [],
				showEdit: false,
				editID: 1,
			}
		},
		methods: {
			async getbanner(page, count) {
				this.loading = true
				let params = {
					page,
					count,
					word: this.searchKeyword
				}
				try {
					const banners = await Banner.getBanners(params)
					this.tableData = banners.data
					this.currentPage = banners.current_page
					this.total_nums = banners.total
					this.loading = false
				} catch (error) {
					if (error.error_code === 10020) {
						this.tableData = []
						this.loading = false
					}
				}
			},
			handleEdit(id) {
				this.editID = id
				this.showEdit = true
			},
			handleDelete(id) {
				this.$confirm('此操作将永久删除该歌曲, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const res = await Banner.delectBanner(id)
					if (res.error_code === 0) {
						this.getbanner(this.currentPage, this.pageCount)
						this.$message({
							type: 'success',
							message: `${res.msg}`
						})
					}
				})
			},
			rowClick() {},
			editClose() {
				this.showEdit = false
				this.getbanner(this.currentPage, this.pageCount)
			},
			// 切换分页
			async handleCurrentChange(val) {
				this.currentPage = val
				this.loading = true
				this.getbanner(this.currentPage, this.pageCount)
				this.loading = false
			},
			// 搜索
			onQueryChange(query) {
				this.searchKeyword = query.trim()
				if (!query) {
					this.searchKeyword = ''
					this.getbanner(this.currentPage, this.pageCount)
					return
				}
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.getbanner(this.currentPage, this.pageCount)
				}, 1000)
			},
			// :formatter 字段转换
			statusFormat(row, column) {

			}
		},
		async created() {
			await this.getbanner(this.currentPage, this.pageCount)
			this.operate = [{
					name: '编辑',
					func: 'handleEdit',
					type: 'primary'
				},
				{
					name: '删除',
					func: 'handleDelete',
					type: 'danger'
				}
			]
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 30px;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				height: 59px;
				line-height: 59px;
				color: $parent-title-color;
				font-size: 16px;
				font-weight: 500;
			}
		}

		.pagination {
			display: flex;
			justify-content: flex-end;
			margin: 20px;
		}
	}
</style>
