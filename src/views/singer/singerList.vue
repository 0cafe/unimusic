<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="!showEdit">
			<div class="header">
				<div class="title">歌曲列表</div>
				<lin-search @query="onQueryChange" placeholder="请输入歌曲或者歌手关键字" />
			</div>

			<!-- 表格 -->
			<lin-table :tableColumn="tableColumn" :tableData="tableData" :operate="operate" @handleEdit="handleEdit"
			 @handleDelete="handleDelete" @row-click="rowClick" v-loading="loading">
			</lin-table>


			<!-- 分页 -->
			<div class="pagination">
				<el-pagination @current-change="handleCurrentChange" :background="true" :page-size="pageCount" :current-page="currentPage"
				 layout="prev, pager, next, jumper" :total="total_nums"></el-pagination>
			</div>
		</div>
		<SingerEdit :editID="editID" @editClose="editClose" v-if="showEdit"></SingerEdit>
	</div>
</template>

<script>
	import LinSearch from '@/components/base/search/lin-search'
	import Singer from '@/models/singer'
	import LinTable from '@/components/base/table/lin-table'
	import SingerEdit from './singerEdit.vue'
	export default {
		components: {
			LinTable,
			LinSearch,
			SingerEdit
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
				tableColumn: [{
						prop: 'id',
						label: 'id'
					},
					{
						prop: 'name',
						label: '歌手'
					},
					{
						prop: 'create_time',
						label: '创建时间'
					},
					{
						prop: 'update_time',
						label: '更新时间'
					},
				],
			}
		},
		methods: {
			async getsinger(page, count) {
				this.loading = true
				let params = {
					page,
					count,
					word: this.searchKeyword
				}
				try {
					const singers = await Singer.getSingers(params)
					this.tableData = singers.data
					this.currentPage = singers.current_page
					this.total_nums = singers.total
					this.loading = false
				} catch (error) {
					if (error.error_code === 10020) {
						this.tableData = []
						this.loading = false
					}
				}
			},
			handleEdit(val) {
				this.editID = val.row.id
				this.showEdit = true
			},
			handleDelete(val) {
				this.$confirm('此操作将永久删除该歌曲, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const res = await Singer.delectSinger(val.row.id)
					if (res.error_code === 0) {
						this.getsinger(this.currentPage, this.pageCount)
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
				this.getsinger(this.currentPage, this.pageCount)
			},
			// 切换分页
			async handleCurrentChange(val) {
				this.currentPage = val
				this.loading = true
				this.getsinger(this.currentPage, this.pageCount)
				this.loading = false
			},
			// 搜索
			onQueryChange(query) {
				this.searchKeyword = query.trim()
				if (!query) {
					this.searchKeyword = ''
					this.getsinger(this.currentPage, this.pageCount)
					return
				}
				this.loading = true
				setTimeout(() => {
					this.loading = false
					this.getsinger(this.currentPage, this.pageCount)
				}, 1000)
			},
			// :formatter 字段转换
			statusFormat(row, column) {

			}
		},
		async created() {
			await this.getsinger(this.currentPage, this.pageCount)
			this.operate = [{
					name: '编辑',
					func: 'handleEdit',
					type: 'primary'
				},
				{
					name: '删除',
					func: 'handleDelete',
					type: 'danger',
					auth:'删除歌单'
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
