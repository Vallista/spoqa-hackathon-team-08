import Vue from 'vue'
import Vuex from 'vuex'

import commons from './modules/commons'
import ranks from './modules/ranks'
import todos from './modules/todos'
import users from './modules/users'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    commons,
    ranks,
    todos,
    users
  }
})

export default store
