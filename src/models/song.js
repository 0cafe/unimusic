/* eslint-disable class-methods-use-this */
import { post, get, put, _delete } from '@/lin/plugins/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Song {

  async addSong(info) {
    const res = await post('v1/song', info, { handleError: true })
    return res
  }

  async getSong(id) {
    const res = await get(`v1/song/${id}`)
    return res
  }

  async editSong(info) {
    const res = await put(`v1/song`, info)
    return res
  }

  async delectSong(id) {
    const res = await _delete(`v1/song/${id}`)
    return res
  }

  /**
   * 分页关键字查询
   * @param {count,word,page} 
   * */
  async getSongs(params) {
    const res = await get('v1/song',params)
    return res
  }
  
  async getSongInList(id){
	  const res = await get('v1/song/list/'+id)
	  return res
  }
}

export default new Song()
