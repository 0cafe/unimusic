<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-29 16:14:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Singer.php
 */


namespace app\api\controller\v1;

use app\api\model\Singer as singerModel;
use app\api\model\SingerList;
use think\facade\Request;

class Singer
{

    public function getSinger($id = '')
    {
        $result =  (new singerModel())->where('id', $id)->find()->hidden(['create_time', 'update_time']);
        return $result;
    }

    public function create()
    {
        $params = Request::post();
        singerModel::create($params);
        return writeJson(201, '', '新建成功');
    }

    public function update()
    {
        $params = Request::put();
        singerModel::update($params);
        return writeJson(201, '', '更新成功');
    }

    public function delete($id = '')
    {
        singerModel::destroy($id);
        return writeJson(201, '', '删除成功');
    }

    public function search()
    {
        $params = Request::get();
        $result = singerModel::pageSearch($params);
        $result->toArray();
        return $result;
    }
}
