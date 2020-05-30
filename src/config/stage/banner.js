const bannerRouter = {
  route: null,
  name: null,
  title: '轮播图管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-picture-outline',
  filePath: 'views/banner/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '添加轮播图',
      type: 'view',
      name: 'bannerAdd',
      route: '/banner/add',
      filePath: 'views/banner/bannerAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '轮播图列表',
      type: 'view',
      name: 'bannerAdd',
      route: '/banner/list',
      filePath: 'views/banner/bannerList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default bannerRouter
