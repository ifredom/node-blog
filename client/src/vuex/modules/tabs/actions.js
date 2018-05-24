import * as types from './mutation-type.js';
export const setActiveTab = ({commit}, activeIndex) => {
  commit(types.SETACTIVETAB, activeIndex)
}
