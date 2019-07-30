import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import style from './style'
const store = new Vuex.Store({
  modules: {
    style: style
  }
})

export default store