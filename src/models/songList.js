/* eslint-disable class-methods-use-this */
import { post, get, put, _delete } from '@/lin/plugins/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class SongList {

  async addSongList(info) {
    const res = await post('v1/songlist', info, { handleError: true })
    return res
  }

  async getSongList(id) {
    const res = await get(`v1/songlist/${id}`)
    return res
  }

  async editSongList(info) {
    const res = await put(`v1/songlist`, info)
    return res
  }

  async delectSongList(id) {
    const res = await _delete(`v1/songlist/${id}`)
    return res
  }

  /**
   * 分页关键字查询
   * @param {count,word,page} 
   * */
  async getSongLists(params) {
    const res = await get('v1/songlist',params)
    return res
  }
}

export default new SongList()
