import { createRouter, createWebHistory } from 'vue-router'
import { asyncRouter } from './asyncRouter'
import Login from '@/views/login/login.vue'
import Page404 from '@/components/pageError/404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...asyncRouter,
    {
      path: '/login',
      name: 'login',
      meta: {title: '登录'},
      component: Login
    },
    {
      path: '/404',
      name: '404',
      meta: {title: '404'},
      component: Page404
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404'
    }
  ]
})

export default router
