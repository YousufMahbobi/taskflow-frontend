export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },

  // Protected routes
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
        name: 'dashboard',
        meta: { requiresAuth: true },
      },
    ],
  },

  // Guest-only routes
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/login.vue'),
        meta: { guestOnly: true },
      },
    ],
  },

  // Catch-all route for 404 Not Found
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/[...error].vue'),
  },

]
