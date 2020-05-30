<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:16:51
 * @LastEditTime: 2020-05-30 16:31:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\config\file.php
 */ 

return [
    "host" => 'http://muscafe/',
    "store_dir" => 'uploads',       # 文件的存储路径
    "single_limit" => 1024 * 1024 * 10, # 单个文件的大小限制，默认2M
    "total_limit"=> 1024 * 1024 * 20, # 所有文件的大小限制，默认20M
    "nums" => 10,                      # 文件数量限制，默认10
    "include" => [],                   # 文件后缀名的排除项，默认排除[]，即允许所有类型的文件上传
    "exclude" => []                   # 文件后缀名的包括项
];
