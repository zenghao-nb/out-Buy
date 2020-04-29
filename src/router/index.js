import Vue from 'vue'
import VueRouter from 'vue-router'
 HEAD
import Home from '../views/Home.vue'
import zh from "./zh/zhRouter"

// import Home from '../views/Home.vue' mxm-branch

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
 
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
    {
      path: '/my',
      name: 'My',
      component: () => import(/* webpackChunkName: "about" */ '../views/My.vue')
    },




  ,{

    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mxm/Order.vue')
  },{
 
    path: '/his',
    name: ' History',
    component: () => import(/* webpackChunkName: "about" */ '../components/History/His.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
