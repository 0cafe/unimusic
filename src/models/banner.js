/* eslint-disable class-methods-use-this */
import { post, get, put, _delete } from '@/lin/plugins/axios'

// 我们通过 class 这样的语法糖使模型这个概念更加具象化，其优点：耦合性低、可维护性。
class Banner {

  async addBanner(info) {
    const res = await post('v1/banner', info, { handleError: true })
    return res
  }

  async getBanner(id) {
    const res = await get(`v1/banner/${id}`)
    return res
  }

  async editBanner(info) {
    const res = await put(`v1/banner`, info)
    return res
  }

  async delectBanner(id) {
    const res = await _delete(`v1/banner/${id}`)
    return res
  }

  /**
   * 分页关键字查询
   * @param {count,word,page} 
   * */
  async getBanners(params) {
    const res = await get('v1/banner',params)
    return res
  }
}

export default new Banner()
