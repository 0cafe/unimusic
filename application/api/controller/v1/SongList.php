<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-29 11:20:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\SongList.php
 */


namespace app\api\controller\v1;

use think\facade\Request;
use app\api\model\SongList as SongListModel;

class SongList
{
    public function getSongList($id = '')
    {
        $result =  (new SongListModel())->where('id', $id)->find()->hidden(['create_time', 'update_time']);
        return $result;
    } 

    public function create()
    {
        $params = Request::post();
        SongListModel::create($params);
        return writeJson(201, '', '新建成功');
    }

    public function update()
    {
        $params = Request::put();
        SongListModel::update($params);
        return writeJson(201, '', '更新成功');
    }

    public function delete($id = '')
    {
        SongListModel::destroy($id);
        return writeJson(201, '', '删除成功');
    }


    public function search()
    {
        $params = Request::get();
        $result = SongListModel::pageSearch($params);
        $result->toArray();
        return $result;
    }
}
