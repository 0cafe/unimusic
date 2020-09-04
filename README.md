# unimusic

#### 介绍
码云gitee链接: https://gitee.com/cafe0/unimusic ，后续在码云更新。
为了学习uni-app开发的一款音乐app。
有许多地方尚未完善，尚未上线APP，现只提供h5访问。

1.客户端：由于只写了移动端的样式，推荐用手机浏览器访问，PC端访问请F12打开调试工具修改页面大小。

链接：http://music.0cafe.top

2.后台管理系统：只提供访客权限账号，guest 123456。

链接：http://muscms.0cafe.top


#### 说明
使用uniApp实现的前端，服务端使用ThinkPHP框架，并且在林间有风团队的lin-cms开源项目的基础上进行管理系统的开发。

分成三个分支：
1.master：客户端代码
2.api: 服务端代码
3.cms: 后台管理系统代码

#### 安装教程
客户端：
1.  clong或者直接下载压缩包。
2.  在根目录  `npm i` 安装依赖。
3.  需要安装HbuilderX的scss/sass编译插件，安装完后使用HbuilderX运行。

后台搭建：
1. 在服务端代码根目录 
 `composer i` 安装依赖
2.修改config文件夹下的database.php进行数据库配置。
3.修改config文件夹下url.php，配置域名和图片上传目录。

cms搭建：
1. 在根目录`npm i`,有报错看cms分支的readme。
2. 运行：`npm run serve`。
3. 打包：`npm run build`。

#### 总结
会在闲暇时间继续更新

