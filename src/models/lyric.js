/* eslint-disable class-methods-use-this */
import { post, get, put, _delete } from '@/lin/plugins/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Lyric {

  async addLyric(info) {
    const res = await post('v1/lyric', info, { handleError: true })
    return res
  }

  async getLyric(id) {
    const res = await get(`v1/lyric/${id}`)
    return res
  }

  async editLyric(info) {
    const res = await put(`v1/lyric`, info)
    return res
  }

  async delectLyric(id) {
    const res = await _delete(`v1/lyric/${id}`)
    return res
  }

  /**
   * 分页关键字查询
   * @param {count,word,page} 
   * */
  async getLyrics(params) {
    const res = await get('v1/lyric',params)
    return res
  }
}

export default new Lyric()
