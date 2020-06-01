<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-06-01 15:53:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Song.php
 */


namespace app\api\controller\v1;

use app\api\model\Song as songModel;
use app\api\model\SongList;
use think\facade\Request;

class Song
{
    public function getSong($id = '')
    {
        $result =  (new songModel())->where('id', $id)->find()->hidden(['create_time', 'update_time']);
        return $result;
    }

    /**
     * @auth('创建歌曲','歌曲管理')
     */
    public function create()
    {
        $params = Request::post();
        songModel::create($params);
        return writeJson(201, '', '新建成功');
    }

    /**
     * @auth('更新歌曲','歌曲管理')
     */
    public function update()
    {
        $params = Request::put();
        songModel::update($params);
        return writeJson(201, '', '更新成功');
    }

    /**
     * @auth('删除歌曲','歌曲管理')
     */
    public function delete($id = '')
    {
        songModel::destroy($id);
        return writeJson(201, '', '删除成功');
    }


    /**
     * 按歌单ID获取歌曲
     */
    public function getSongList($id = '')
    {
        $songList = SongList::get($id);
        $ids = json_decode($songList['songs']);
        $songs = songModel::all($ids);
        return $songs;
    }


    public function search()
    {
        $params = Request::get();
        $result = songModel::pageSearch($params);
        $result->toArray();
        return $result;
    }
}
