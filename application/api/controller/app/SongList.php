<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-30 11:46:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Song.php
 */


namespace app\api\controller\app;

use app\api\model\SongList as SongListModel;
use think\facade\Request;

class SongList
{
    public function getSong()
    {
    }
    /**
     * 获取歌单
     */
    public function search()
    {
        $params = Request::get();
        $result = SongListModel::pageSearch($params);
        $result->toArray();
        return $result;
    }

    /**
     * 按歌单ID获取歌单
     */
    public function getSongList($id = '')
    {
        $result =  SongListModel::get($id);
        return $result;
    }
}
