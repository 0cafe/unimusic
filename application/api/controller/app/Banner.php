<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-21 15:39:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Song.php
 */


namespace app\api\controller\app;

use app\api\model\Banner as BannerModel;

class Banner
{
    public function getBanners()
    {
        $result = BannerModel::all();
        return $result;
    }
}
