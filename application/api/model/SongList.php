<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:33:04
 * @LastEditTime: 2020-05-30 15:23:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\model\Song.php
 */ 


namespace app\api\model;


class SongList extends BaseModel
{
    // protected $type = [
    //     'songs' => 'json',
    // ];

    public function getImgAttr($value, $data)
    {
        $furl = $value;
        if ($data['from'] == 1) {
            $furl = config('url.prefix') . $value;
        }
        return $furl;
    }

    // public function getSongsAttr($value,$data)
    // {
    //     return json_encode($value);
    // }


     /**
     * 分页搜索
     */
    public static function pageSearch($params)
    {
        $query[0] = ['name', 'like', '%' . $params['word'] . '%'];  //查询多字段 使用 | 隔开
        $orderList = self::where($query);
        $pagingData = $orderList
            ->order('sort inc')
            ->paginate($params['count'], false, ['page' => $params['page']]);    //第二个参数是开启简洁模式,不返回总记录数
        return $pagingData;
    }
}