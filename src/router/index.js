import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import PupView from '../views/PupView.vue'
import InterestView from '../views/InterestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Start'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Om Oss | Pudelklubben'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: {
        title: 'Nyheter | Pudelklubben'
      }
    }
    ,
    {
      path: '/puppies',
      name: 'puppies',
      component: PupView,
      meta: {
        title: 'Valpar | Pudelklubben'
      }
    }
    ,
    {
      path: '/interest',
      name: 'interest',
      component: InterestView,
      meta: {
        title: 'Intresse | Pudelklubben'
      }
    }
  ]
})

// Dynamiska titles
router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'Default Title'
})

export default router
