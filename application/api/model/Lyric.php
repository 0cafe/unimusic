<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:33:04
 * @LastEditTime: 2020-05-28 16:25:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\model\Song.php
 */


namespace app\api\model;


class Lyric extends BaseModel
{
    /**
     * 关联
     */
    public function song()
    {
        return $this->hasOne('Song');
    }

    /**
     * 分页搜索获取
     */
    public static function pageSearch($params)
    {
        $query[0] = ['song|singer', 'like', '%' . $params['word'] . '%'];  //查询多字段 使用 | 隔开
        // $query[1] = ['id','=',1]; 额外条件 
        // 应用条件查询
        $orderList = self::where($query);
        $pagingData = $orderList
            ->order('create_time desc')
            ->paginate($params['count'], false, ['page' => $params['page']]);    //第二个参数是开启简洁模式,不返回总记录数
        return $pagingData;
    }
}
