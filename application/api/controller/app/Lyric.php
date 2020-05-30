<?php
/*
 * @Author: your name
 * @Date: 2020-05-20 11:21:30
 * @LastEditTime: 2020-05-20 15:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \muscafe\application\api\controller\app\Song.php
 */


namespace app\api\controller\app;

use app\api\model\Lyric as lyricModel;

class Lyric
{
    /**
     * 按歌区ID获取歌词
     */
    public function getLyric($id = '')
    {
        $lyric = lyricModel::where('song_id',$id)->find();
        return $lyric;
    }

    /**
     * 按歌单ID获取歌单
     */
    public function getSongList($id = '')
    {

    }
}
