import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

const IndexView = () => import(/* webpackChunkName: "index" */ '../views/Index/Index.vue')
const RankView = () => import(/* webpackChunkName: "rank" */ '../views/Rank/Index.vue')

const UserView = () => import(/* webpackChunkName: "user" */ '../views/User/Index.vue')
const SelfView = () => import(/* webpackChunkName: "user" */ '../views/User/Self.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/demo',
    name: 'demo',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/rank',
    name: 'rank',
    component: RankView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    children: [
      {
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'self',
        component: SelfView,
      },
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
