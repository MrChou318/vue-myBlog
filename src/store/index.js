import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // state 类似 data
    scrollHeight: 0
  },
  getters: {
    // getters 类似 computed
    // 在这里面写个方法
  },
  mutations: {
    // mutations 类似methods
    // 写方法对数据做出更改(同步操作)
    setScrollHeight (state, val) {
      state.scrollHeight = val
    }
  },
  actions: {
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
    setScrollHeight (context, obj) {
      context.commit('setScrollHeight', obj)
    }
  }
})
