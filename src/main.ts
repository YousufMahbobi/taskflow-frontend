import { createApp } from 'vue'

import App from '@/App.vue'
import { useAuthStore } from '@/modules/auth/store/auth.store'
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'


async function bootstrap() {

  // Create vue app
  const app = createApp(App)

  // Register plugins
  registerPlugins(app)

  // Initialize auth store
  const authStore = useAuthStore()
  await authStore.initialize()

  // Mount vue app
  app.mount('#app')
}

bootstrap()




