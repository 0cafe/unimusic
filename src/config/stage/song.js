const songRouter = {
  route: null,
  name: null,
  title: '歌曲管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-headset',
  filePath: 'views/song/', // 文件路径
  order: 1,
  inNav: true,
  children: [
    {
      title: '添加歌曲',
      type: 'view',
      name: 'songAdd',
      route: '/song/add',
      filePath: 'views/song/songAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '歌曲列表',
      type: 'view',
      name: 'songAdd',
      route: '/song/list',
      filePath: 'views/song/songList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default songRouter
