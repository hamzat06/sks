import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../pages/Home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default router