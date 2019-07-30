/**
 * 全局组件样式store
 */
export default {
  state: {
    isCollapse: false
  },
  mutations: {
    toggleCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    toggleCollapse(context) {
      context.commit('toggleCollapse')
    }
  }
}