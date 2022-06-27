import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/spinner',
    name: 'spinner',
    component: () => import(/* webpackChunkName: "spinner" */ '../src/components/Spinner.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
