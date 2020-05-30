<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:16:51
 * @LastEditTime: 2020-05-21 17:28:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\model\Book.php
 */ 

namespace app\api\model;


use think\model\concern\SoftDelete;

class Book extends BaseModel
{
    use SoftDelete;
    protected $autoWriteTimestamp = 'datetime';

}