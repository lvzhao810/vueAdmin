import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tagsList: [{name:'首页',path:'/index'}],//菜单动态标签
    activeTag:{name:'首页',path:'/index'},//tags激活
  },
  mutations: {
    getTagsList(state, data) {
      state.tagsList.push(data);       
    },
    getActiveTag(state, data) {
      state.activeTag = data;       
    }
  },
  actions: {
  },
  modules: {
  }
})
