const lyricRouter = {
  route: null,
  name: null,
  title: '歌词管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-document',
  filePath: 'views/lyric/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加歌词',
      type: 'view',
      name: 'lyricAdd',
      route: '/lyric/add',
      filePath: 'views/lyric/lyricAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '歌词列表',
      type: 'view',
      name: 'lyricList',
      route: '/lyric/list',
      filePath: 'views/lyric/lyricList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default lyricRouter
