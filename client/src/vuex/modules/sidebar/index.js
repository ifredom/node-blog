/**
 * 物料设置全局变量管理
 */


const state = {
  sidebarState: true
}
// getters
const getters = {
  getSidebarState: function (state) {
    return state.sidebarState
  }
}
// mutations
const mutations = {
  setActiveSidebar(state, data) {
    state.sidebarState = data
  }
}
// actions
const actions = {}

export default {
  state,
  getters,
  actions,
  mutations
}