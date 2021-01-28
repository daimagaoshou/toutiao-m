import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('../views/login/')
  },

  {
    path: '/',
    component: () => import('../views/layout/'),
    children:[
      {
        path:'/home',
        component:()=>import('../views/layout/home/')
      },
      {
        path:'/qd',
        component:()=>import('../views/layout/qd/')
      },
      {
        path:'/video',
        component:()=>import('../views/layout/video/')
      },
      {
        path:'/my',
        component:()=>import('../views/layout/my/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
