-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-05-30 16:53:54
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `muscafe`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `from` tinyint(1) NOT NULL DEFAULT '1',
  `sort` int(10) DEFAULT NULL COMMENT '排序',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `title`, `img`, `from`, `sort`, `create_time`, `update_time`) VALUES
(3, 'dsadas的', '20200530/c78616f447b04c94cf2e3ab967a8d8c4.jpg', 1, NULL, 1590809954, 1590826382),
(2, 'd', '20200530/1a2243868a6d5cf0fbdfee2d56dba540.jpg', 1, 1, 1590742611, 1590826389);

-- --------------------------------------------------------

--
-- 表的结构 `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(30) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `image` varchar(50) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `lin_auth`
--

CREATE TABLE `lin_auth` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `auth` varchar(60) NOT NULL,
  `module` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `lin_event`
--

CREATE TABLE `lin_event` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `message_events` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `lin_file`
--

CREATE TABLE `lin_file` (
  `id` int(11) NOT NULL,
  `path` varchar(500) NOT NULL COMMENT '路径',
  `type` int(6) NOT NULL COMMENT '1 local，其他表示其他地方',
  `name` varchar(100) NOT NULL COMMENT '名称',
  `extension` varchar(50) NOT NULL COMMENT '后缀',
  `size` int(11) NOT NULL COMMENT '大小',
  `md5` varchar(40) NOT NULL COMMENT '图片md5值，防止上传重复图片',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `delete_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lin_file`
--

INSERT INTO `lin_file` (`id`, `path`, `type`, `name`, `extension`, `size`, `md5`, `create_time`, `update_time`, `delete_time`) VALUES
(1, '20200525/5c326860158bf564b0c411e21b353a66.jpg', 1, '5c326860158bf564b0c411e21b353a66.jpg', '.jpg', 61151, '77dc1fbee99b6dad67f6d21d5d8573e0', '2020-05-25 16:57:33', '2020-05-25 16:57:33', NULL),
(2, '20200525/d7e2ae8c8f9058f92d7cdc1f7cad256d.png', 1, 'd7e2ae8c8f9058f92d7cdc1f7cad256d.png', '.png', 3639, '243b9501170ec2dbb208454d38b8d4b4', '2020-05-25 16:59:26', '2020-05-25 16:59:26', NULL),
(3, '20200528/e89f1933cf143acac988abdefdcafcce.mp3', 1, 'e89f1933cf143acac988abdefdcafcce.mp3', '.mp3', 1353864, '6b4aa1a789d372fac3530f3b2112ac74', '2020-05-28 11:35:17', '2020-05-28 11:35:17', NULL),
(4, '20200528/ba9b6afe99e27a86ec7773626c409faa.jpg', 1, 'ba9b6afe99e27a86ec7773626c409faa.jpg', '.jpg', 49157, 'acfaab7c1a4ff5a0e50da96d6aee7a43', '2020-05-28 11:42:08', '2020-05-28 11:42:08', NULL),
(5, '20200528/2c904f061ea81402c76217366580b0d8.txt', 1, '2c904f061ea81402c76217366580b0d8.txt', '.txt', 159, '632b234618f1ddb73259f452d03cf99b', '2020-05-28 15:43:30', '2020-05-28 15:43:30', NULL),
(6, '20200528/72ba09e96c69a9827cf9e7692902abaa.jpg', 1, '72ba09e96c69a9827cf9e7692902abaa.jpg', '.jpg', 69832, '97b114459f7bb3a68f68a71cc826b3b2', '2020-05-28 15:55:24', '2020-05-28 15:55:24', NULL),
(7, '20200528/366d7e40ddd91cd9975236f451f87402.txt', 1, '366d7e40ddd91cd9975236f451f87402.txt', '.txt', 107, 'ddb87d46c9f82c4325b74e2c9d72393c', '2020-05-28 15:55:42', '2020-05-28 15:55:42', NULL),
(8, '20200528/7f2c0024f193239adee8b88fc27418ce.mp3', 1, '7f2c0024f193239adee8b88fc27418ce.mp3', '.mp3', 1430004, '2059445f9d8c46eb37d1910548591172', '2020-05-28 15:59:31', '2020-05-28 15:59:31', NULL),
(9, '20200528/1cc73e08b938748fd366862bac55b8f5.jpg', 1, '1cc73e08b938748fd366862bac55b8f5.jpg', '.jpg', 10631, 'e04fdba327d04cb90eeea86e5fed01bf', '2020-05-28 15:59:45', '2020-05-28 15:59:45', NULL),
(10, '20200529/9e1f64b60f4286e90ad10547bd4382ea.jpg', 1, '9e1f64b60f4286e90ad10547bd4382ea.jpg', '.jpg', 101041, '2c3f48c69b694b328ba6bac7093bdb32', '2020-05-29 11:00:04', '2020-05-29 11:00:04', NULL),
(11, '20200529/9d6dd9a80cd5260970f719491c2ec96d.jpg', 1, '9d6dd9a80cd5260970f719491c2ec96d.jpg', '.jpg', 88844, '2c822afff94f682aa211c7165de34dce', '2020-05-29 15:32:37', '2020-05-29 15:32:37', NULL),
(12, '20200529/f380940407445a6709e41a89f3238ad3.jpg', 1, 'f380940407445a6709e41a89f3238ad3.jpg', '.jpg', 181523, '2ff5081f15779bf0b4d31cf927320b70', '2020-05-29 15:51:21', '2020-05-29 15:51:21', NULL),
(13, '20200529/808e5ec7a926f335c068632cd805ab29.jpg', 1, '808e5ec7a926f335c068632cd805ab29.jpg', '.jpg', 25120, '458e593111475caec2e93f8af76d5e74', '2020-05-29 16:20:00', '2020-05-29 16:20:00', NULL),
(14, '20200530/20395d04c41fc80f37bb26f51325e637.jpg', 1, '20395d04c41fc80f37bb26f51325e637.jpg', '.jpg', 77701, 'eea36c82d2b6f14e340b02f64ad08723', '2020-05-30 11:57:14', '2020-05-30 11:57:14', NULL),
(15, '20200530/716a7c0cc7fcb4ac5b153cac92ee5ccf.jpg', 1, '716a7c0cc7fcb4ac5b153cac92ee5ccf.jpg', '.jpg', 16387, '51a3aa6ff1b9ce718c998e1c58dcca97', '2020-05-30 11:58:23', '2020-05-30 11:58:23', NULL),
(16, '20200530/d2e01f1c323e09001c844c97291a965c.png', 1, 'd2e01f1c323e09001c844c97291a965c.png', '.png', 72933, 'c1898ee5891a108555b8e873b52eb8b9', '2020-05-30 14:42:15', '2020-05-30 14:42:15', NULL),
(17, '20200530/59d12636d247a5bb5907b05fcd06faba.jpg', 1, '59d12636d247a5bb5907b05fcd06faba.jpg', '.jpg', 76236, '27429d49b5ab62db1f198ff86ac4ad20', '2020-05-30 14:49:02', '2020-05-30 14:49:02', NULL),
(18, '20200530/3bfd5ce54d116a042b10ddd221f0754c.png', 1, '3bfd5ce54d116a042b10ddd221f0754c.png', '.png', 39333, 'e43d3a0bd27ab24cc32aed760d8117f4', '2020-05-30 14:52:24', '2020-05-30 14:52:24', NULL),
(19, '20200530/b7303ceb5f1944a7c8d77836c4910a97.png', 1, 'b7303ceb5f1944a7c8d77836c4910a97.png', '.png', 62509, 'bed95288a66632246a70d83c45561920', '2020-05-30 15:22:23', '2020-05-30 15:22:23', NULL),
(20, '20200530/b2de95242dc1f99cd707d5eb35cd4e27.mp3', 1, 'b2de95242dc1f99cd707d5eb35cd4e27.mp3', '.mp3', 1120404, '1c7aad8e32ce807f09580fc13ef7a984', '2020-05-30 15:27:03', '2020-05-30 15:27:03', NULL),
(21, '20200530/3934cf0aab49fb7a33da948f80e16256.jpg', 1, '3934cf0aab49fb7a33da948f80e16256.jpg', '.jpg', 28982, '26012c123a4f5832b928a2472fd43c87', '2020-05-30 15:27:07', '2020-05-30 15:27:07', NULL),
(22, '20200530/c78616f447b04c94cf2e3ab967a8d8c4.jpg', 1, 'c78616f447b04c94cf2e3ab967a8d8c4.jpg', '.jpg', 29083, 'dba02b73898ac3a9807ef2e6734380e5', '2020-05-30 15:55:44', '2020-05-30 15:55:44', NULL),
(23, '20200530/1a2243868a6d5cf0fbdfee2d56dba540.jpg', 1, '1a2243868a6d5cf0fbdfee2d56dba540.jpg', '.jpg', 32072, 'c991b947e6b789f83fe187e6564f0329', '2020-05-30 16:13:09', '2020-05-30 16:13:09', NULL),
(24, '20200530/cfb80877ac785e859c31f9b4776dfc16.jpg', 1, 'cfb80877ac785e859c31f9b4776dfc16.jpg', '.jpg', 285696, 'fbf66fe3f236b21ce224a3e26c78253b', '2020-05-30 16:17:15', '2020-05-30 16:17:15', NULL),
(25, '20200530/12e67e0c1b4511fc9e81d871c00637bc.jpg', 1, '12e67e0c1b4511fc9e81d871c00637bc.jpg', '.jpg', 26342, 'c3644062d2bfdb34b4cd8d50fc628d19', '2020-05-30 16:17:25', '2020-05-30 16:17:25', NULL),
(26, '20200530/dca2bfbb031f2cd1879fcdc548dc5e08.jpg', 1, 'dca2bfbb031f2cd1879fcdc548dc5e08.jpg', '.jpg', 25281, 'f0987248d36ec5c3e3ae400426da3d0f', '2020-05-30 16:24:44', '2020-05-30 16:24:44', NULL),
(27, '20200530/716e3dbf1cc91ef3ec0286ae1295afb2.mp3', 1, '716e3dbf1cc91ef3ec0286ae1295afb2.mp3', '.mp3', 4007937, 'ceba3638b8190ffb3bbfbf40d6bfd599', '2020-05-30 16:31:29', '2020-05-30 16:31:29', NULL),
(28, '20200530/3bc85d41e1e1c94391d6afba87278185.mp3', 1, '3bc85d41e1e1c94391d6afba87278185.mp3', '.mp3', 2798770, 'c6d8425cf83b683256acf980ba19ff4a', '2020-05-30 16:39:39', '2020-05-30 16:39:39', NULL),
(29, '20200530/601da6fa79c30b61f7c68e94d80fc57c.png', 1, '601da6fa79c30b61f7c68e94d80fc57c.png', '.png', 89544, '75422aab3c9dd9e3c560ef5724a3f30f', '2020-05-30 16:39:44', '2020-05-30 16:39:44', NULL),
(30, '20200530/243582d81950d67080541813c2697f15.mp3', 1, '243582d81950d67080541813c2697f15.mp3', '.mp3', 1159824, 'f4addd1b8ebc191f2436fe547381284f', '2020-05-30 16:44:10', '2020-05-30 16:44:10', NULL),
(31, '20200530/515da9a7658e46989775f84ae9b98213.jpg', 1, '515da9a7658e46989775f84ae9b98213.jpg', '.jpg', 94252, 'dde7ec2fc5ab731dbb8e88cc2af66061', '2020-05-30 16:44:16', '2020-05-30 16:44:16', NULL),
(32, '20200530/8bf48434a26e317e031f0b7c40a01bee.mp3', 1, '8bf48434a26e317e031f0b7c40a01bee.mp3', '.mp3', 1053264, '293794b9c79755ec462f3650d83e2bb5', '2020-05-30 16:47:15', '2020-05-30 16:47:15', NULL),
(33, '20200530/c4d232daebab228bccaabd75a53857a2.jpg', 1, 'c4d232daebab228bccaabd75a53857a2.jpg', '.jpg', 43953, 'b1201bfda57a2db77cf1da22fcd18e8d', '2020-05-30 16:47:20', '2020-05-30 16:47:20', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `lin_group`
--

CREATE TABLE `lin_group` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `info` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `lin_log`
--

CREATE TABLE `lin_log` (
  `id` int(11) NOT NULL,
  `message` varchar(450) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `status_code` int(11) NOT NULL,
  `method` varchar(20) NOT NULL,
  `path` varchar(50) NOT NULL,
  `authority` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lin_log`
--

INSERT INTO `lin_log` (`id`, `message`, `time`, `update_time`, `user_id`, `user_name`, `status_code`, `method`, `path`, `authority`) VALUES
(1, 'super登陆成功获取了令牌', '2020-05-21 09:27:13', NULL, 1, 'super', 200, 'POST', 'cms/user/login', ''),
(2, 'super登陆成功获取了令牌', '2020-05-25 07:37:56', NULL, 1, 'super', 200, 'POST', 'cms/user/login', ''),
(3, 'super登陆成功获取了令牌', '2020-05-28 03:22:58', NULL, 1, 'super', 200, 'POST', 'cms/user/login', ''),
(4, 'super登陆成功获取了令牌', '2020-05-29 02:13:44', NULL, 1, 'super', 200, 'POST', 'cms/user/login', '');

-- --------------------------------------------------------

--
-- 表的结构 `lin_poem`
--

CREATE TABLE `lin_poem` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(50) NOT NULL,
  `dynasty` varchar(50) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `lin_user`
--

CREATE TABLE `lin_user` (
  `id` int(11) NOT NULL,
  `nickname` varchar(24) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `admin` int(6) NOT NULL DEFAULT '1' COMMENT '是否为超级管理员 ; 1 -> 普通用户 | 2 -> 超级管理员',
  `active` int(6) NOT NULL DEFAULT '1',
  `group_id` int(11) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL DEFAULT NULL,
  `delete_time` timestamp NULL DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `username` varchar(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `lin_user`
--

INSERT INTO `lin_user` (`id`, `nickname`, `password`, `email`, `admin`, `active`, `group_id`, `create_time`, `update_time`, `delete_time`, `avatar`, `username`) VALUES
(1, NULL, 'e10adc3949ba59abbe56e057f20f883e', '123456@qq.com', 2, 1, NULL, '2020-05-20 03:20:34', '2020-05-20 03:20:34', NULL, NULL, 'super');

-- --------------------------------------------------------

--
-- 表的结构 `lyric`
--

CREATE TABLE `lyric` (
  `id` int(11) NOT NULL,
  `lyric` text COLLATE utf8_unicode_ci NOT NULL,
  `song_id` int(11) DEFAULT NULL COMMENT '歌曲id',
  `song` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `singer` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `lyric`
--

INSERT INTO `lyric` (`id`, `lyric`, `song_id`, `song`, `singer`, `create_time`, `update_time`) VALUES
(1, '[ti:一路向北]\r\n↵[ar:周杰伦]\r\n↵[00:36.04]后视镜里的世界\r\n↵[00:43.08]越来越远的道别\r\n↵[00:47.61]你转身向背\r\n↵[00:50.63]侧脸还是很美\r\n↵[00:54.19]我用眼光去追\r\n↵[00:57.82]竟听见你的泪\r\n↵[01:04.52]在车窗外面排徊\r\n↵[01:11.56]是我错失的机会\r\n↵[01:16.21]你站的方位\r\n↵[01:18.71]跟我中间隔着泪\r\n↵[01:22.35]街景一直在后退\r\n↵[01:26.03]你的崩溃在窗外零碎\r\n↵[01:30.31]我一路向北\r\n↵[01:32.94]离开有你的季节\r\n↵[01:37.50]你说你好累\r\n↵[01:40.19]已无法再爱上谁\r\n↵[01:44.48]风在山路吹\r\n↵[01:47.00]过往的画面\r\n↵[01:49.39]全都是我不对\r\n↵[01:52.39]细数惭愧 我伤你几回\r\n↵[01:56.52]☆痴人说梦☆\r\n↵[02:03.52]无与伦比→为杰沉沦\r\n↵[02:19.25]后视镜里的世界\r\n↵[02:26.36]越来越远的道别\r\n↵[02:30.86]你转身向背\r\n↵[02:33.92]侧脸还是很美\r\n↵[02:37.45]我用眼光去追\r\n↵[02:41.06]竟听见你的泪\r\n↵[02:47.66]在车窗外面排徊\r\n↵[02:54.76]是我错失的机会\r\n↵[02:59.71]你站的方位\r\n↵[03:02.02]跟我中间隔着泪\r\n↵[03:05.52]街景一直在后退\r\n↵[03:09.16]你的崩溃在窗外零碎\r\n↵[03:13.61]我一路向北\r\n↵[03:16.22]离开有你的季节\r\n↵[03:20.82]你说你好累\r\n↵[03:23.36]已无法再爱上谁\r\n↵[03:27.78]风在山路吹\r\n↵[03:30.49]过往的画面\r\n↵[03:32.89]全都是我不对\r\n↵[03:35.69]细数惭愧 我伤你几回\r\n↵[03:42.04]我一路向北\r\n↵[03:44.73]离开有你的季节\r\n↵[03:49.18]方向盘周围\r\n↵[03:51.96]回转着我的后悔\r\n↵[03:56.80]我加速超越\r\n↵[03:59.01]却甩不掉紧紧跟随的伤悲\r\n↵[04:04.42]细数惭愧 我伤你几回\r\n↵[04:11.60]停止狼狈 就让错纯粹\r\n↵\r\n↵', 2, '一路向北', '周杰伦', NULL, NULL),
(2, '[00:01.00]歌曲名 龙卷风\r\n↵[00:02.00]歌手名 周杰伦\r\n↵[00:03.00]作词：徐若瑄\r\n↵[00:04.00]作曲：周杰伦\r\n↵[00:12.65]编曲：钟兴民\r\n↵[00:13.70]制作人：周杰伦\r\n↵[00:27.67]爱像一阵风吹完它就走\r\n↵[00:34.21]这样的节奏谁都无可奈何\r\n↵[00:40.99]没有你以后我灵魂失控\r\n↵[00:47.58]黑云在降落我被它拖着走\r\n↵[00:54.21]静静悄悄默默离开\r\n↵[00:57.35]陷入了危险边缘Baby \r\n↵[01:01.20]我的世界已狂风暴雨wu \r\n↵[01:07.58]爱情来的太快就像龙卷风\r\n↵[01:10.87]离不开暴风圈来不及逃\r\n↵[01:13.82]我不能再想我不能再想\r\n↵[01:17.06]我不我不我不能\r\n↵[01:20.85]爱情走的太快就像龙卷风\r\n↵[01:24.29]不能承受我已无处可躲\r\n↵[01:27.29]我不要再想我不要再想\r\n↵[01:30.48]我不我不我不要再想你\r\n↵[01:34.57]不知不觉你已经离开我\r\n↵[01:37.61]不知不觉我跟了这节奏\r\n↵[01:40.96]后知后觉又过了一个秋\r\n↵[01:44.35]后知后觉我该好好生活\r\n↵[01:47.49]静静悄悄默默离开\r\n↵[01:50.58]陷入了危险边缘Baby \r\n↵[01:54.57]我的世界已狂风暴雨wu \r\n↵[02:00.91]爱情来的太快就像龙卷风\r\n↵[02:04.20]离不开暴风圈来不及逃\r\n↵[02:07.20]我不能再想我不能再想\r\n↵[02:10.39]我不我不我不能\r\n↵[02:14.18]爱情走的太快就像龙卷风\r\n↵[02:17.57]不能承受我已无处可躲\r\n↵[02:20.52]我不要再想我不要再想\r\n↵[02:23.86]我不我不我不要再想你\r\n↵[02:54.34]爱情来的太快就像龙卷风\r\n↵[02:57.68]离不开暴风圈来不及逃\r\n↵[03:00.52]我不能再想我不能再想\r\n↵[03:03.82]我不我不我不能\r\n↵[03:07.56]爱情走的太快就像龙卷风\r\n↵[03:10.90]不能承受我已无处可躲\r\n↵[03:13.84]我不要再想我不要再想\r\n↵[03:17.14]我不我不我不要再想你\r\n↵[03:20.88]不知不觉你已经离开我\r\n↵[03:24.27]不知不觉我跟了这节奏\r\n↵[03:27.61]后知后觉又过了一个秋\r\n↵[03:30.96]后知后觉我该好好生活\r\n↵[03:34.35]不知不觉你已经离开我\r\n↵[03:37.59]不知不觉我跟了这节奏\r\n↵[03:40.93]后知后觉又过了一个秋\r\n↵[03:44.23]后知后觉我该好好生活\r\n↵[03:47.57]不知不觉你已经离开我\r\n↵[03:51.01]不知不觉我跟了这节奏\r\n↵[03:54.50]后知后觉后知后觉\r\n↵', 1, '龙卷风', '周杰伦', NULL, 1590656228),
(3, '[00:00.00]歌曲名 反方向的钟 歌手名 周杰伦\r\n↵[00:05.00]作词：方文山\r\n↵[00:10.00]作曲：周杰伦\r\n↵[00:45.28]迷迷蒙蒙你给的梦\r\n↵[00:47.67]出现裂缝隐隐作痛\r\n↵[00:50.18]怎么沟通你都没空\r\n↵[00:52.72]说我不懂说了没用\r\n↵[00:55.30]他的笑容有何不同\r\n↵[00:57.78]在你心中我不再受宠\r\n↵[01:00.46]我的天空是雨是风还是彩虹\r\n↵[01:04.20]你在操纵\r\n↵[01:05.57]恨自己真的没用情绪激动\r\n↵[01:11.21]一颗心到现在还在抽痛\r\n↵[01:16.07]还为分手前那句抱歉在感动\r\n↵[01:26.14]穿梭时间的画面的钟\r\n↵[01:31.14]从反方向开始移动\r\n↵[01:36.29]回到当初爱你的时空\r\n↵[01:41.19]停格内容不忠\r\n↵[01:46.44]所有回忆对着我进攻\r\n↵[01:51.33]我的伤口被你拆封\r\n↵[01:56.58]誓言太沉重泪被纵容\r\n↵[02:01.52]脸上汹涌失控\r\n↵[02:16.79]城市霓虹不安跳动\r\n↵[02:18.02]染红夜空过去种种\r\n↵[02:19.62]像一场梦不敢去碰\r\n↵[02:21.14]一想就痛心碎内容\r\n↵[02:22.50]每一秒钟都有不同\r\n↵[02:23.85]你不懂连一句珍重\r\n↵[02:25.13]也有苦衷也不想送\r\n↵[02:26.61]寒风中废墟烟囱\r\n↵[02:27.76]停止转动一切落空\r\n↵[02:29.11]在人海中盲目跟从\r\n↵[02:30.47]别人的梦全面放纵\r\n↵[02:31.86]恨没有用疗伤止痛\r\n↵[02:33.24]不在感动没有梦\r\n↵[02:34.42]痛不知轻重\r\n↵[02:35.30]泪水鲜红全面放纵\r\n↵[02:47.69]恨自己真的没用情绪激动\r\n↵[02:52.73]一颗心到现在还在抽痛\r\n↵[02:57.65]还为分手前那句抱歉在感动\r\n↵[03:07.65]穿梭时间的画面的钟\r\n↵[03:12.63]从反方向开始移动\r\n↵[03:17.78]回到当初爱你的时空\r\n↵[03:22.76]停格内容不忠\r\n↵[03:27.92]所有回忆对着我进攻\r\n↵[03:32.90]我的伤口被你拆封\r\n↵[03:38.10]誓言太沉重泪被纵容\r\n↵[03:43.01]脸上汹涌失控\r\n↵[03:48.21]穿梭时间的画面的钟\r\n↵[03:53.09]从反方向开始移动\r\n↵[03:58.26]回到当初爱你的时空\r\n↵[04:03.30]停格内容不忠\r\n↵[04:08.56]所有回忆对着我进攻\r\n↵', 3, '反方向的钟', '周杰伦', NULL, 1590656279),
(4, '[00:00.10]歌曲名 出现又离开(Live)\r\n↵[00:00.20]歌手名 梁博\r\n↵[00:00.30]作词：梁博\r\n↵[00:00.40]作曲：梁博\r\n↵[00:22.90]OP：北京少城时代文化发展有限公司\r\n↵[00:36.55]我和你本应该\r\n↵[00:40.30]各自好各自坏\r\n↵[00:44.70]各自生活的自在\r\n↵[00:48.70]毫无关联的存在\r\n↵[00:52.40]直到你出现在\r\n↵[00:56.40]我眼中躲不开\r\n↵[01:00.80]我也占领你的心海\r\n↵[01:04.95]充实着你的空白\r\n↵[01:10.75]为何出现在彼此的生活又离开\r\n↵[01:18.70]只留下在心里深深浅浅的表白\r\n↵[01:26.70]谁也没有想过再更改\r\n↵[01:30.55]谁也没有想过再想回来\r\n↵[01:35.00]哦我不明白\r\n↵[01:58.50]我和你不应该\r\n↵[02:02.40]制造感觉表达爱\r\n↵[02:06.55]试探未知和未来\r\n↵[02:10.75]相信那胡言一派\r\n↵[02:14.30]当天空暗下来\r\n↵[02:18.50]当周围又安静起来\r\n↵[02:22.60]当我突然梦里醒来\r\n↵[02:26.35]就等着太阳出来\r\n↵[02:32.80]为何出现在彼此的生活又离开\r\n↵[02:40.70]只留下在心里深深浅浅的表白\r\n↵[02:48.55]谁也没有想过再更改\r\n↵[02:52.60]谁也没有想过再想回来\r\n↵[02:57.00]哦我不明白\r\n↵[03:04.80]我们紧紧相拥\r\n↵[03:08.25]头也不抬\r\n↵[03:12.65]因为不想告别\r\n↵[03:16.15]就悄然离开\r\n↵[03:20.75]不用认真的说\r\n↵[03:23.80]多舍不得你\r\n↵[03:28.00]每一个未来\r\n↵[03:31.95]都有人在\r\n↵[03:40.00]每一个未来\r\n↵[03:44.20]都有人在\r\n↵[03:47.85]那你无需感慨\r\n↵[03:52.05]我别徘徊\r\n↵[03:56.10]因为谁也没有想过再更改\r\n↵[04:00.55]谁也没有想过再想回来\r\n↵', 4, '出现又离开', '梁博', NULL, 1590656285),
(5, ' [00:00.00]歌曲名 开不了口 歌手名 周杰伦\n↵[00:00.00]作词：徐若瑄\n↵[00:00.00]作曲：周杰伦\n↵[00:28.10]才离开没多久就开始\n↵[00:31.45]担心今天的你过得好不好\n↵[00:34.91]整个画面是你\n↵[00:37.48]想你想的睡不着\n↵[00:41.96]嘴嘟嘟那可爱的模样\n↵[00:45.01]还有在你身上香香的味道\n↵[00:48.63]我的快乐是你\n↵[00:50.98]想你想的都会笑\n↵[00:55.09]没有你在我有多难熬\n↵[00:58.86]没有你在我有多难熬多烦恼\n↵[01:01.84]没有你烦我有多烦恼\n↵[01:05.62]没有你烦我有多烦恼多难熬\n↵[01:08.76]穿过云层\n↵[01:10.50]我试着努力向你奔跑\n↵[01:15.13]爱才送到\n↵[01:16.46]你却已在别人怀抱\n↵[01:22.02]就是开不了口\n↵[01:24.23]让她知道\n↵[01:27.67]我一定会呵护着你\n↵[01:31.07]也逗你笑\n↵[01:34.91]你对我有多重要\n↵[01:37.93]我后悔没让你知道\n↵[01:41.79]安静的听你撒娇\n↵[01:44.77]看你睡着一直到老\n↵[01:49.05]就是开不了口让她知道\n↵[01:55.14]就是那么简单几句我办不到\n↵[02:02.32]整颗心悬在半空\n↵[02:05.35]我只能够远远看着\n↵[02:09.24]这些我都做得到\n↵[02:12.19]但那个人已经不是我\n↵[02:44.76]没有你在我有多难熬\n↵[02:48.46]没有你在我有多难熬多烦恼\n↵[02:51.64]没有你烦我有多烦恼\n↵[02:55.32]没有你烦我有多烦恼多难熬\n↵[02:58.46]穿过云层我试着努力向你奔跑\n↵[03:04.80]爱才送到你却已在别人怀抱\n↵[03:11.78]就是开不了口让她知道\n↵[03:17.33]我一定会呵护着你也逗你笑\n↵[03:24.65]你对我有多重要\n↵[03:27.58]我后悔没让你知道\n↵[03:31.42]安静的听你撒娇\n↵[03:34.38]看你睡着一直到老\n↵[03:38.61]就是开不了口让她知道\n↵[03:44.79]就是那么简单几句我办不到\n↵[03:52.00]整颗心悬在半空\n↵[03:54.99]我只能够远远看着\n↵[03:58.86]这些我都做得到\n↵[04:01.81]但那个人已经不是我\n↵[04:10.80]yeah yi yeah \n↵  \n↵', 37, '开不了口', '周杰伦', 1590655710, 1590723993),
(7, ' [00:00.01]歌曲名 Red\n↵[00:00.02]歌手名 Taylor Swift\n↵[00:00.03]作词：Taylor Swift\n↵[00:00.04]作曲：Taylor Swift\n↵[00:06.68]Loving him is like driving a new Maserati \n↵[00:10.27]Down a dead-end street \n↵[00:15.71]Faster than the wind passionate as sin \n↵[00:18.65]Ending so suddenly \n↵[00:22.05]Loving him is like trying to change your mind \n↵[00:25.04]Once you\'re already flying through the free fall \n↵[00:30.73]Like the colors in autumn so bright \n↵[00:33.62]Just before they lose it all \n↵[00:37.86]Losing him was blue like I\'d never known \n↵[00:41.70]Missing him was dark grey all alone \n↵[00:45.39]Forgetting him was like \n↵[00:46.94]Trying to know somebody you never met \n↵[00:53.07]But loving him was red \n↵[01:00.81]Loving him was red \n↵[01:08.14]Touching him was like realizing all you ever wanted \n↵[01:11.88]Was right there in front of you \n↵[01:15.52]Memorizing him was as easy as knowing \n↵[01:18.57]All the words to your old favorite song \n↵[01:23.31]Fighting with him was like trying to solve a crossword \n↵[01:26.60]And realizing there\'s no right answer \n↵[01:30.99]Regretting him was like wishing you never found out \n↵[01:34.93]That love could be that strong \n↵[01:39.42]Losing him was blue like I\'d never known \n↵[01:43.11]Missing him was dark grey all alone \n↵[01:46.80]Forgetting him was like \n↵[01:48.40]Trying to know somebody you never met \n↵[01:54.54]But loving him was red \n↵[01:58.38]Oh red \n↵[02:02.32]Burning red \n↵[02:08.90]Remembering him comes in flashbacks and echoes \n↵[02:13.94]Tell myself it\'s time now gotta let go \n↵[02:17.68]But moving on from him is impossible \n↵[02:20.53]When I still see it all in my head \n↵[02:25.22]In burning red \n↵[02:33.08]Loving him was red \n↵[02:40.22]Oh losing him was blue like I\'d never known \n↵[02:44.56]Missing him was dark grey all alone \n↵[02:48.30]Forgetting him was like \n↵[02:49.84]Trying to know somebody you never met \n↵[02:55.93]\'Cause loving him was red \n↵[02:58.48]Yeah yeah red \n↵[03:03.66]We\'re burning red \n↵[03:11.84]And that\'s why he\'s spinning \'round in my head \n↵[03:16.38]Comes back to me burning red \n↵[03:21.72]Yeah yeah \n↵[03:26.76]His love was like driving a new Maserati \n↵[03:30.10]Down a dead-end street \n↵', 41, 'Red', 'Taylor Swift', 1590824205, 1590824205),
(8, '[00:00.38]《天空之城》\n[01:33.78]词 曲：李志\n[01:36.88]编 曲：李志和乐队\n[01:38.91]和 声：郑影\n[01:40.69]木 吉 他：李庭匡\n[01:41.68]电 吉 他：王春\n[01:44.09]贝 斯：张雯\n[01:45.53]键 盘：胡欣\n[01:47.21]特邀鼓手：张蔚\n[01:50.11]\n[00:02.51]飞机飞过天空，\n[00:06.32]天空之城\n[00:09.97]落雨下的黄昏的我们\n[00:17.17]此刻我在异乡的夜里\n[00:25.03]感觉着你忽明忽暗\n[00:29.42]\n[00:32.15]我想回到过去，\n[00:36.13]沉默着欢喜\n[00:39.69]天空之城在哭泣越来越明亮的你\n[00:47.23]爱情不过是生活的屁\n[00:54.58]折磨着我也折磨着你\n[00:58.24]\n[02:28.73]\n[01:59.30]\n[01:00.20]港岛妹妹，\n[02:32.39]\n[02:02.81]\n[01:03.80]你献给我的西班牙馅饼\n[02:36.17]\n[02:06.65]\n[01:07.49]甜蜜地融化了我，\n[02:39.42]\n[02:09.92]\n[01:10.85]天空之城在哭泣\n[02:43.49]\n[02:14.05]\n[01:14.93]港岛妹妹，\n[02:47.17]\n[02:17.63]\n[01:18.56]我们曾拥有的甜蜜的爱情\n[02:50.92]\n[02:21.41]\n[01:22.41]疯狂地撕裂了我，\n[02:54.08]\n[02:24.76]\n[01:25.64]天空之城在哭泣\n[02:56.88]\n[02:26.85]\n[01:28.49]\n[03:03.59]有人路过那里，\n[03:07.48]回来告诉我\n[03:11.27]天空之城在哭泣无法呼吸的你\n[03:18.53]此刻我在异乡的夜里\n[03:25.96]想念着你越来越远\n[03:31.15]', 42, '天空之城', '李志', 1590827553, 1590827639);

-- --------------------------------------------------------

--
-- 表的结构 `migrations`
--

CREATE TABLE `migrations` (
  `version` bigint(20) NOT NULL,
  `migration_name` varchar(100) DEFAULT NULL,
  `start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `breakpoint` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `migrations`
--

INSERT INTO `migrations` (`version`, `migration_name`, `start_time`, `end_time`, `breakpoint`) VALUES
(20190427113042, 'User', '2020-05-20 03:20:23', '2020-05-20 03:20:23', 0),
(20190427125215, 'Book', '2020-05-20 03:20:23', '2020-05-20 03:20:23', 0),
(20190427125655, 'LinAuth', '2020-05-20 03:20:23', '2020-05-20 03:20:23', 0),
(20190427125839, 'LinEvent', '2020-05-20 03:20:23', '2020-05-20 03:20:24', 0),
(20190427125956, 'LinGroup', '2020-05-20 03:20:24', '2020-05-20 03:20:24', 0),
(20190427130203, 'LinLog', '2020-05-20 03:20:24', '2020-05-20 03:20:24', 0),
(20190427130637, 'LinPoem', '2020-05-20 03:20:24', '2020-05-20 03:20:24', 0),
(20190604062013, 'LinFile', '2020-05-20 03:20:24', '2020-05-20 03:20:24', 0),
(20190604065133, 'AddAvatar', '2020-05-20 03:20:24', '2020-05-20 03:20:25', 0),
(20191020072944, 'AddUsernameField', '2020-05-20 03:20:25', '2020-05-20 03:20:26', 0);

-- --------------------------------------------------------

--
-- 表的结构 `singer`
--

CREATE TABLE `singer` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img` text COLLATE utf8_unicode_ci,
  `from` tinyint(1) NOT NULL DEFAULT '1',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `singer`
--

INSERT INTO `singer` (`id`, `name`, `img`, `from`, `create_time`, `update_time`) VALUES
(1, '周杰伦', '20200529/9d6dd9a80cd5260970f719491c2ec96d.jpg', 1, 1590741131, 1590741131),
(2, 'Travis Scott', '20200529/808e5ec7a926f335c068632cd805ab29.jpg', 1, 1590740401, 1590740401);

-- --------------------------------------------------------

--
-- 表的结构 `song`
--

CREATE TABLE `song` (
  `id` int(11) NOT NULL,
  `song` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `singer` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `play_url` text COLLATE utf8_unicode_ci NOT NULL,
  `singer_id` int(11) DEFAULT NULL,
  `mv_url` text COLLATE utf8_unicode_ci,
  `lyric_id` int(11) DEFAULT NULL,
  `from` tinyint(1) NOT NULL COMMENT '0:CDN；1:本地',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `song`
--

INSERT INTO `song` (`id`, `song`, `singer`, `img`, `play_url`, `singer_id`, `mv_url`, `lyric_id`, `from`, `create_time`, `update_time`) VALUES
(1, '龙卷风', '周杰伦', 'http://cdnmusic.migu.cn/picture/2019/1031/0255/ASe46147f50d6d4606b31aa1218a662041.jpg', 'http://tyst.migu.cn/public/product4th/product36/2019/09/1117/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/60054701896.mp3?k=34fee6837fd4b7fc&t=1588909873918&channelid=00&msisdn=f3d099f834654301bd8cc875f434472c&CI=600547018962600902000006889474&F=000009', 1, NULL, 1, 0, NULL, NULL),
(2, '一路向北', '周杰伦', 'http://cdnmusic.migu.cn/picture/2019/1125/1028/ASe2de34dab7c04adc8cd48025339c46c5.jpg', 'http://tyst.migu.cn/public/product11/2018/06/21/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/%E4%B8%80%E8%B7%AF%E5%90%91%E5%8C%97-%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3?k=053d8817a94cf5e9&t=1588837323153&channelid=00&msisdn=f49de81f10f648f89b9ccf748b799648&CI=600547019582600902000006889222&F=000009', 1, NULL, 2, 0, NULL, NULL),
(3, '反方向的钟', '周杰伦', 'http://cdnmusic.migu.cn/picture/2019/1031/0255/ASe46147f50d6d4606b31aa1218a662041.jpg', 'http://tyst.migu.cn/public/ringmaker01/n17/2017/07/2009%E5%B9%B406%E6%9C%8826%E6%97%A5%E5%8D%9A%E5%B0%94%E6%99%AE%E6%96%AF/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/%E5%8F%8D%E6%96%B9%E5%90%91%E7%9A%84%E9%92%9F-%E5%91%A8%E6%9D%B0%E4%BC%A6.mp3?k=230f484a927db01c&t=1589189083471&channelid=00&msisdn=a77bf34905b4430e9b9efeb6b161a02d&CI=600547018972600902000006889470&F=000009', 1, NULL, 3, 0, NULL, NULL),
(4, '出现又离开', '梁博', 'http://cdnmusic.migu.cn/picture/2019/1216/1000/ASefb79e4e224f43239db2091a7c68f01f.jpg', 'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_68279255&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3', 2, NULL, 4, 0, NULL, NULL),
(5, 'HIGHEST IN THE ROOM', 'Travis Scott', '//cdnmusic.migu.cn/picture/2019/1230/1128/ASdd057659b92442f2a4a5043feb691314.jpg', 'http://tyst.migu.cn/public/product5th/product35/2019/10/0822/2019%E5%B9%B410%E6%9C%8804%E6%97%A513%E7%82%B946%E5%88%86%E7%B4%A7%E6%80%A5%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5SONY1%E9%A6%96123237/%E6%AD%8C%E6%9B%B2%E4%B8%8B%E8%BD%BD/MP3_40_16_Stero/6005971JKTU.mp3?k=940981de880c7984&t=1589965426390&channelid=00&msisdn=4929c294a13d47c59161b99a3f7e43a7&CI=6005971JKTU2600913000006808330&F=000009', 5, NULL, NULL, 0, NULL, NULL),
(37, '开不了口', '周杰伦', '20200528/1cc73e08b938748fd366862bac55b8f5.jpg', '20200528/7f2c0024f193239adee8b88fc27418ce.mp3', NULL, NULL, 5, 1, 1590652786, 1590723811),
(36, '晴天', '周杰伦', '20200528/ba9b6afe99e27a86ec7773626c409faa.jpg', '20200528/e89f1933cf143acac988abdefdcafcce.mp3', NULL, NULL, 0, 1, 1590637709, 1590828678),
(45, 'Last Christmas', 'Taylor Swift', '20200530/c4d232daebab228bccaabd75a53857a2.jpg', '20200530/8bf48434a26e317e031f0b7c40a01bee.mp3', NULL, NULL, NULL, 1, 1590828440, 1590828440),
(43, 'A Rainy Morning ~Main Title~', '柏大輔', '20200530/601da6fa79c30b61f7c68e94d80fc57c.png', '20200530/3bc85d41e1e1c94391d6afba87278185.mp3', NULL, NULL, NULL, 1, 1590827986, 1590827986),
(44, 'style', 'Taylor Swift', '20200530/515da9a7658e46989775f84ae9b98213.jpg', '20200530/243582d81950d67080541813c2697f15.mp3', NULL, NULL, NULL, 1, 1590828259, 1590828259),
(41, 'Red', 'Taylor Swift', '20200530/3934cf0aab49fb7a33da948f80e16256.jpg', '20200530/b2de95242dc1f99cd707d5eb35cd4e27.mp3', NULL, NULL, 7, 1, 1590823628, 1590824286),
(42, '天空之城', '李志', '20200530/dca2bfbb031f2cd1879fcdc548dc5e08.jpg', '20200530/716e3dbf1cc91ef3ec0286ae1295afb2.mp3', NULL, NULL, 0, 1, 1590827494, 1590827773);

-- --------------------------------------------------------

--
-- 表的结构 `song_list`
--

CREATE TABLE `song_list` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `desc` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '简介',
  `songs` text COLLATE utf8_unicode_ci COMMENT '歌曲id的json集合',
  `img` text COLLATE utf8_unicode_ci,
  `sort` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  `from` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0网络1本地',
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `song_list`
--

INSERT INTO `song_list` (`id`, `name`, `desc`, `songs`, `img`, `sort`, `from`, `create_time`, `update_time`) VALUES
(1, '推荐', '每日推荐', '[1,2,3,4,37]', '20200530/cfb80877ac785e859c31f9b4776dfc16.jpg', 7, 1, NULL, 1590826636),
(2, '下架音乐', '收集的一些音乐平台下架的音乐', '[4]', '20200530/d2e01f1c323e09001c844c97291a965c.png', 0, 1, NULL, 1590821265),
(3, 'HipHop Music', '喜欢的一些国内外HipHop音乐', '[5]', '//cdnmusic.migu.cn/picture/2020/0415/1721/ASe83d92cede0b841fdaff7536d8352f15.jpg', 0, 0, NULL, NULL),
(8, '周杰伦专题', '我的青春回来了', '[1,2,3,36,37]', '20200529/9d6dd9a80cd5260970f719491c2ec96d.jpg', 0, 1, 1590737586, 1590828506),
(10, 'Taylor Swift专题', 'Some of Taylor\'s songs', '[41,44,45]', '20200530/12e67e0c1b4511fc9e81d871c00637bc.jpg', 0, 1, 1590811222, 1590828453),
(11, '安静||纯音乐', '一杯咖啡，一段音乐，一个下午', '[43]', '20200530/3bfd5ce54d116a042b10ddd221f0754c.png', 0, 1, 1590821547, 1590828015),
(12, '民谣精选|值得收藏的民谣歌单', '准备好烟和耳机，静下心来聆听', '[42]', '20200530/b7303ceb5f1944a7c8d77836c4910a97.png', 0, 1, 1590823350, 1590827582);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `create_time` int(11) NOT NULL,
  `last_login_time` int(11) NOT NULL,
  `last_login_ip` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转储表的索引
--

--
-- 表的索引 `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `lin_auth`
--
ALTER TABLE `lin_auth`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `lin_event`
--
ALTER TABLE `lin_event`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `lin_file`
--
ALTER TABLE `lin_file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `md5` (`md5`);

--
-- 表的索引 `lin_group`
--
ALTER TABLE `lin_group`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `lin_log`
--
ALTER TABLE `lin_log`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `lin_poem`
--
ALTER TABLE `lin_poem`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `lin_user`
--
ALTER TABLE `lin_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nickname` (`nickname`,`email`),
  ADD KEY `username` (`username`);

--
-- 表的索引 `lyric`
--
ALTER TABLE `lyric`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`version`);

--
-- 表的索引 `singer`
--
ALTER TABLE `singer`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `song`
--
ALTER TABLE `song`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `song_list`
--
ALTER TABLE `song_list`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用表AUTO_INCREMENT `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `lin_auth`
--
ALTER TABLE `lin_auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `lin_event`
--
ALTER TABLE `lin_event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `lin_file`
--
ALTER TABLE `lin_file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- 使用表AUTO_INCREMENT `lin_group`
--
ALTER TABLE `lin_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `lin_log`
--
ALTER TABLE `lin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用表AUTO_INCREMENT `lin_poem`
--
ALTER TABLE `lin_poem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `lin_user`
--
ALTER TABLE `lin_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `lyric`
--
ALTER TABLE `lyric`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `singer`
--
ALTER TABLE `singer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `song`
--
ALTER TABLE `song`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- 使用表AUTO_INCREMENT `song_list`
--
ALTER TABLE `song_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
