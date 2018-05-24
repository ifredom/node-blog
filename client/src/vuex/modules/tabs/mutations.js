import * as types from './mutation-type.js';

const mutations = {
 // 添加tabs
 [types.ADDTABS] (state, data) {
  let flag = false
  for (let option of state.options) {
    if (option.name === data.name && option.to === data.to) {
      flag = true
    }
  }
  if (!flag) {
    state.options.push(data)
  }
},
// 删除tabs
[types.DELETETABS] (state, to) {
  let index = 0
  for (let option of state.options) {
    if (option.to === to) {
      break
    }
    index++
  }
  state.options.splice(index, 1)
},
// 设置当前激活的tab
[types.SETACTIVETAB] (state, index) {
  state.activeIndex = index
},
// 删除所有tabs
[types.REMOVEALLTABS] (state) {
  state.options = []
}
}
export default mutations
