/**
 * Created by zhengguorong on 16/6/23.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  options: [],
  activeIndex: ''
}

export default{
  state,
  actions,
  getters,
  mutations
}
