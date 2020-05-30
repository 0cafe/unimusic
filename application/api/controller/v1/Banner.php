<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-29 16:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Banner.php
 */


namespace app\api\controller\v1;

use app\api\model\Banner as bannerModel;
use think\facade\Request;

class Banner
{
    public function getBanner($id = '')
    {
        $result =  (new bannerModel())->where('id', $id)->find()->hidden(['create_time', 'update_time']);
        return $result;
    }

    public function create()
    {
        $params = Request::post();
        bannerModel::create($params);
        return writeJson(201, '', '新建成功');
    }

    public function update()
    {
        $params = Request::put();
        bannerModel::update($params);
        return writeJson(201, '', '更新成功');
    }

    public function delete($id = '')
    {
        bannerModel::destroy($id);
        return writeJson(201, '', '删除成功');
    }

    public function search()
    {
        $params = Request::get();
        $result = bannerModel::pageSearch($params);
        $result->toArray();
        return $result;
    }
}