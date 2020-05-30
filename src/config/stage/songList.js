const songListRouter = {
  route: null,
  name: null,
  title: '歌单管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-s-fold',
  filePath: 'views/songList/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加歌单',
      type: 'view',
      name: 'songListAdd',
      route: '/songList/add',
      filePath: 'views/songList/songListAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '歌单列表',
      type: 'view',
      name: 'songListAdd',
      route: '/songList/list',
      filePath: 'views/songList/songList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default songListRouter
