const singerRouter = {
  route: null,
  name: null,
  title: '歌手管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-mic',
  filePath: 'views/singer/', // 文件路径
  order: 5,
  inNav: true,
  children: [
    {
      title: '添加歌手',
      type: 'view',
      name: 'singerAdd',
      route: '/singer/add',
      filePath: 'views/singer/singerAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '歌手列表',
      type: 'view',
      name: 'singerAdd',
      route: '/singer/list',
      filePath: 'views/singer/singerList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default singerRouter
