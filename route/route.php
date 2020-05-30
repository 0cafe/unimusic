<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:16:51
 * @LastEditTime: 2020-05-30 11:47:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\route\route.php
 */
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

use think\facade\Route;

Route::group('', function () {
    Route::group('cms', function () {
        // 账户相关接口分组
        Route::group('user', function () {
            // 登陆接口
            Route::post('login', 'api/cms.User/login');
            // 刷新令牌
            Route::get('refresh', 'api/cms.User/refresh');
            // 查询自己拥有的权限
            Route::get('auths', 'api/cms.User/getAllowedApis');
            // 注册一个用户
            Route::post('register', 'api/cms.User/register');
            // 更新头像
            Route::put('avatar', 'api/cms.User/setAvatar');
            // 查询自己信息
            Route::get('information', 'api/cms.User/getInformation');
            // 用户更新信息
            Route::put('', 'api/cms.User/update');
            // 修改自己密码
            Route::put('change_password', 'api/cms.User/changePassword');
        });
        // 管理类接口
        Route::group('admin', function () {
            // 查询所有权限组
            Route::get('group/all', 'api/cms.Admin/getGroupAll');
            // 查询一个权限组及其权限
            Route::get('group/:id', 'api/cms.Admin/getGroup');
            // 删除一个权限组
            Route::delete('group/:id', 'api/cms.Admin/deleteGroup');
            // 更新一个权限组
            Route::put('group/:id', 'api/cms.Admin/updateGroup');
            // 新建权限组
            Route::post('group', 'api/cms.Admin/createGroup');
            // 查询所有可分配的权限
            Route::get('authority', 'api/cms.Admin/authority');
            // 删除多个权限
            Route::post('remove', 'api/cms.Admin/removeAuths');
            // 添加多个权限
            Route::post('/dispatch/patch', 'api/cms.Admin/dispatchAuths');
            // 查询所有用户
            Route::get('users', 'api/cms.Admin/getAdminUsers');
            // 修改用户密码
            Route::put('password/:uid', 'api/cms.Admin/changeUserPassword');
            // 删除用户
            Route::delete(':uid', 'api/cms.Admin/deleteUser');
            // 更新用户信息
            Route::put(':uid', 'api/cms.Admin/updateUser');
        });
        // 日志类接口
        Route::group('log', function () {
            Route::get('', 'api/cms.Log/getLogs');
            Route::get('users', 'api/cms.Log/getUsers');
            Route::get('search', 'api/cms.Log/getUserLogs');
        });
        //上传文件类接口
        Route::post('file', 'api/cms.File/postFile');
    });
    Route::group('v1', function () {
        Route::group('book', function () {
            // 查询所有图书
            Route::get('', 'api/v1.Book/getBooks');
            // 新建图书
            Route::post('', 'api/v1.Book/create');
            // 查询指定bid的图书
            Route::get(':bid', 'api/v1.Book/getBook');
            // 搜索图书
            // 更新图书
            Route::put(':bid', 'api/v1.Book/update');
            // 删除图书
            Route::delete(':bid', 'api/v1.Book/delete');
        });
        Route::group('song', function () {
            Route::get('', 'api/v1.Song/search');
            Route::post('', 'api/v1.Song/create');
            Route::get(':id', 'api/v1.Song/getSong');
            Route::get('list/:id', 'api/v1.Song/getSongList');
            Route::put('', 'api/v1.Song/update');
            Route::delete(':id', 'api/v1.Song/delete');
        });
        Route::group('lyric', function () {
            Route::get('', 'api/v1.Lyric/search');
            Route::get(':id', 'api/v1.Lyric/getLyric');
            Route::post('', 'api/v1.Lyric/create');
            Route::put('', 'api/v1.Lyric/update');
            Route::delete(':id', 'api/v1.Lyric/delete'); 
        });
        Route::group('songlist', function () {
            Route::get(':id', 'api/v1.SongList/getSongList');
            Route::get('', 'api/v1.SongList/search');
            Route::post('', 'api/v1.SongList/create');
            Route::put('', 'api/v1.SongList/update');
            Route::delete(':id', 'api/v1.SongList/delete');
        });
        Route::group('singer', function () {
            Route::get(':id', 'api/v1.Singer/getSinger');
            Route::get('', 'api/v1.Singer/search');
            Route::post('', 'api/v1.Singer/create');
            Route::put('', 'api/v1.Singer/update');
            Route::delete(':id', 'api/v1.Singer/delete');
        });
        Route::group('banner', function () {
            Route::get(':id', 'api/v1.Banner/getBanner');
            Route::get('', 'api/v1.Banner/search');
            Route::post('', 'api/v1.Banner/create');
            Route::put('', 'api/v1.Banner/update');
            Route::delete(':id', 'api/v1.Banner/delete');
        });
    });
})->middleware(['Auth', 'ReflexValidate'])->allowCrossDomain();



Route::group('app', function () {
    //获取歌单内的歌曲
    Route::group('song', function () {
        Route::get('list/:id', 'api/app.Song/getSongList');
        Route::get('search', 'api/app.Song/search');
    });
    Route::group('lyric', function () {
        Route::get(':id', 'api/app.Lyric/getLyric');
    });
    //获取歌单信息
    Route::group('songlist', function () {
        Route::get('','api/app.SongList/search');
        Route::get(':id', 'api/app.SongList/getSongList');
    });
    Route::group('banner', function () {
        Route::get('', 'api/app.Banner/getBanners');
    });
})->allowCrossDomain();
