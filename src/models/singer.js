/* eslint-disable class-methods-use-this */
import { post, get, put, _delete } from '@/lin/plugins/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Singer {

  async addSinger(info) {
    const res = await post('v1/singer', info, { handleError: true })
    return res
  }

  async getSinger(id) {
    const res = await get(`v1/singer/${id}`)
    return res
  }

  async editSinger(info) {
    const res = await put(`v1/singer`, info)
    return res
  }

  async delectSinger(id) {
    const res = await _delete(`v1/singer/${id}`)
    return res
  }

  /**
   * 分页关键字查询
   * @param {count,word,page} 
   * */
  async getSingers(params) {
    const res = await get('v1/singer',params)
    return res
  }
  
  async getSingerInList(id){
	  const res = await get('v1/singer/list/'+id)
	  return res
  }
}

export default new Singer()
