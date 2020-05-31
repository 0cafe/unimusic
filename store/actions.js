//相应视图—>修改State”拆分成两部分，视图触发Action，Action再触发Mutation。
//Mutation：专注于修改State，理论上是修改State的唯一途径。 
//Action：业务代码、异步请求。

import * as types from './mutation-types'

// store.dispatch('toggle',true) 来调用
export const toggle = function ({commit, state}, paused) {   // 解构参数,等同于 context.commit = commit ,context.state  = state
  commit(types.SET_PAUSED, paused)
}
