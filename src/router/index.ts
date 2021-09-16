import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import SHome from "@/views/SHome.vue";
import LinkBoard from "@/views/LinkBoard.vue";
import TViewer from "@/views/TViewer.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SHome',
    name: 'SHome',
    component: SHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/linkBoard',
    name: 'LinkBoard',
    component: LinkBoard,
    props: (route) =>({
      linkUrl: route.query.linkUrl
    })
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: TViewer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
