import { createRouter, createWebHistory } from 'vue-router'
import defaultHome from '../views/defaultHome.vue'
import defaultAbout from '../views/defaultAbout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: defaultHome,
  },
  {
    path: '/about',
    name: 'defaultAbout',
    component: defaultAbout,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
