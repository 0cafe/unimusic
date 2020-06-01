<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-06-01 15:51:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Lyric.php
 */


namespace app\api\controller\v1;

use app\api\model\LyricList;
use think\facade\Request;
use app\api\model\Lyric as LyricModel;

class Lyric
{
    public function getLyric($id = '')
    {
        $result =  (new LyricModel())->where('id', $id)->find()->hidden(['create_time', 'update_time']);
        return $result;
    }

    /**
     * @auth('创建歌词','歌词管理')
     */
    public function create()
    {
        $params = Request::post();
        LyricModel::create($params);
        return writeJson(201, '', '新建成功');
    }

    /**
     * @auth('更新歌词','歌词管理')
     */
    public function update()
    {
        $params = Request::put();
        LyricModel::update($params);
        return writeJson(201, '', '更新成功');
    }
    
    /**
     * @auth('删除歌词','歌词管理')
     */
    public function delete($id = '')
    {
        LyricModel::destroy($id);
        return writeJson(201, '', '删除成功');
    }


    public function getLyricList($id = '')
    {
        $songList = LyricList::get($id);
        $ids = json_decode($songList['songs']);
        $songs = LyricModel::all($ids);
        return $songs;
    }


    public function search()
    {
        $params = Request::get();
        $result = LyricModel::pageSearch($params);
        $result->toArray();
        return $result;
    }
}
