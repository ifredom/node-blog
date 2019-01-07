import Vue from 'vue'
import Vuex from 'vuex'
import tabs from './modules/tabs'
import sidebar from './modules/sidebar'

Vue.use(Vuex)

/**
 * Vuex全局状态管理
 */
const store = new Vuex.Store({
  // 模块
  modules: {
    tabs,
    sidebar
  }
})
export default store
