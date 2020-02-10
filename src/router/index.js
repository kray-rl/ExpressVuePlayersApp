import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Players from '../views/Players.vue'
import Top from '../views/Top.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      props: true
    },
    {
      path: '/full',
      name: 'Full',
      component: Players,
      props: true
    }
  ]
})

export default router
