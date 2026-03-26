import { useAuthStore } from '@/modules/auth/store/auth.store'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default function (app: App) {
  app.use(router)
}

router.beforeEach(async(to, from, next) => {
  const auth = useAuthStore()

  if(! auth.initialized){
    await auth.initialize()
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ name: 'login' })
  }

  if (to.meta.guestOnly && auth.isAuthenticated) {
    return next({ name: 'dashboard' })
  }

  next()
})

export { router }
