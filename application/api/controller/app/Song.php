<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-23 16:22:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Song.php
 */


namespace app\api\controller\app;
use app\api\model\Song as songModel;
use app\api\model\SongList;
use think\facade\Request;

class Song
{
    public function getSong()
    {
        
    }

    /**
     * 按歌单ID获取歌曲
     */
    public function getSongList($id='')
    {
        $songList = SongList::get($id);
        $ids = json_decode($songList['songs']);
        $songs = songModel::all($ids);
        return $songs;
    }

    /**
     * 查询歌曲
     */
    public function search()
    {
        // $params = [
        //     'page' => 0,
        //     'count' =>15,
        //     'word' => '周杰伦'
        // ];
        $params = Request::get();
        $result = songModel::pageSearch($params);
        $result->toArray();
        return $result;
    }

    
}
