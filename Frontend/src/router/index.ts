import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainLayout from 'layouts/MainLayout.vue';
import LoginLayout from 'layouts/LoginLayout.vue';  // Import the new layout
import LoginPage from 'pages/LoginPage.vue';
import HomePage from 'pages/HomePage.vue';
import ChecklistsPage from 'pages/ChecklistsPage.vue';
import store from 'src/store';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'checklists', component: ChecklistsPage, meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: LoginLayout,  // Use the LoginLayout
    children: [
      { path: '', component: LoginPage }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  console.log('Navigating to:', to.path);
  try {
    const isAuthenticated = store.getters['auth/isAuthenticated'];
    console.log('IsAuthenticated:', isAuthenticated);
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } catch (error) {
    console.error('Error accessing store getters:', error);
    next('/login'); // Fallback in case of error
  }
});

export default router;
