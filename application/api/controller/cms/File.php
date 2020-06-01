<?php
/*
* Created by DevilKing
* Date: 2019- 06-08
*Time: 16:26
*/

namespace app\api\controller\cms;

use think\facade\Request;
use app\lib\file\LocalUploader;
use app\lib\exception\file\FileException;

/**
 * Class File
 * @package app\api\controller\cms
 */
class File
{
    /**
     * @auth('上传图片','文件管理')
     * @return mixed
     * @throws FileException
     * @throws \LinCmsTp\exception\FileException
     */
    public function postFile()
    {
        try {
            $request = Request::file();
        } catch (\Exception $e) {
            throw new FileException([
                'msg' => '字段中含有非法字符',
            ]);
        }
        $file = (new LocalUploader($request))->upload();
        return $file;
    }
}
