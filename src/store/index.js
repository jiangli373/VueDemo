/**
 * Created by li.jiang on 2016/10/13.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import  actions from './actions'
import   mutations from './mutations'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations,
  actions,
  getters: {

  }
})
