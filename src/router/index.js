import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/HomePage'
import Ranking from '../pages/RankingPage'
import User from '../pages/UserPage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Ranking
    },
    {
      path: '/users/:id',
      name: 'User',
      component: User
    }
  ]
})
